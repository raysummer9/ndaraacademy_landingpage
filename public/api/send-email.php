<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

$name = trim($input['name']);
$email = trim($input['email']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$admin_email = 'admin@ndaraacademy.com';
$from_email = 'noreply@ndaraacademy.com';
$from_name = 'Ndara Academy';

try {
    // Send admin notification email
    $admin_subject = 'New Newsletter Subscription';
    $admin_message = "
    New newsletter subscription request:
    
    Name: $name
    Email: $email
    Date: " . date('Y-m-d H:i:s') . "
    
    This is an automated notification from your website.
    ";
    
    $admin_headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $from_email,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    $admin_sent = mail($admin_email, $admin_subject, $admin_message, implode("\r\n", $admin_headers));
    
    // Send confirmation email to subscriber
    $subscriber_subject = 'Welcome to The Modern Creative Newsletter!';
    $subscriber_message = "
    Hi $name,
    
    Thank you for subscribing to The Modern Creative Newsletter!
    
    We're excited to have you join our community of creators and learners. You'll receive updates on:
    • New courses and workshops
    • Design and tech insights
    • Community events
    • Learning tips and resources
    
    Follow us on LinkedIn for even more insights and updates!
    
    Best regards,
    The Ndara Academy Team
    
    ---
    This email was sent to $email
    To unsubscribe, please contact us.
    ";
    
    $subscriber_headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $admin_email,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    $subscriber_sent = mail($email, $subscriber_subject, $subscriber_message, implode("\r\n", $subscriber_headers));
    
    if ($admin_sent && $subscriber_sent) {
        echo json_encode([
            'success' => true,
            'message' => 'Subscription successful! Check your email for confirmation.'
        ]);
    } else {
        throw new Exception('Failed to send one or more emails');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email: ' . $e->getMessage()
    ]);
}
?>
