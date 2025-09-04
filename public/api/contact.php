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
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

$name = trim($input['name']);
$email = trim($input['email']);
$message = trim($input['message']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$admin_email = 'admin@ndaraacademy.com';
$from_email = 'noreply@ndaraacademy.com';
$from_name = 'Ndara Academy Website';

try {
    // Send contact form email to admin
    $subject = 'New Contact Form Submission - Ndara Academy';
    $email_message = "
    New contact form submission from your website:
    
    Name: $name
    Email: $email
    Message: $message
    Date: " . date('Y-m-d H:i:s') . "
    
    This is an automated notification from your website contact form.
    ";
    
    $headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    $sent = mail($admin_email, $subject, $email_message, implode("\r\n", $headers));
    
    if ($sent) {
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! We\'ll get back to you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message: ' . $e->getMessage()
    ]);
}
?>
