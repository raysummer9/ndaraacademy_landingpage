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
    $email_message = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { 
                font-family: "Raleway", Arial, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                margin: 0; 
                padding: 0; 
                background-color: #f8f9fa;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #ffffff; 
                border-radius: 16px; 
                overflow: hidden; 
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header { 
                background: linear-gradient(135deg, #D7FF94 0%, #A8E6CF 100%); 
                padding: 30px; 
                text-align: center;
            }
            .logo { 
                width: 100px; 
                height: auto; 
                margin-bottom: 15px;
            }
            .header h1 { 
                color: #2c3e50; 
                font-size: 24px; 
                font-weight: 700; 
                margin: 0; 
                font-family: "Raleway", Arial, sans-serif;
            }
            .content { 
                padding: 30px; 
                background-color: #ffffff;
            }
            .notification-box { 
                background-color: #e8f5e8; 
                border-left: 4px solid #D7FF94; 
                padding: 20px; 
                border-radius: 8px; 
                margin: 20px 0;
            }
            .notification-box h3 { 
                color: #2c3e50; 
                margin-top: 0; 
                font-size: 18px;
            }
            .contact-details { 
                background-color: #f8f9fa; 
                padding: 20px; 
                border-radius: 8px; 
                margin: 20px 0;
            }
            .contact-details h3 { 
                color: #2c3e50; 
                margin-top: 0; 
                font-size: 18px;
            }
            .info-row { 
                display: flex; 
                justify-content: space-between; 
                margin-bottom: 10px; 
                padding: 8px 0; 
                border-bottom: 1px solid #e9ecef;
            }
            .info-row:last-child { 
                border-bottom: none; 
                margin-bottom: 0;
            }
            .info-label { 
                font-weight: 600; 
                color: #2c3e50;
            }
            .info-value { 
                color: #555;
            }
            .message-box { 
                background-color: #ffffff; 
                border: 2px solid #e9ecef; 
                padding: 20px; 
                border-radius: 8px; 
                margin: 20px 0;
            }
            .message-box h3 { 
                color: #2c3e50; 
                margin-top: 0; 
                font-size: 18px;
            }
            .message-content { 
                background-color: #f8f9fa; 
                padding: 15px; 
                border-radius: 6px; 
                border-left: 3px solid #D7FF94;
                font-style: italic;
                color: #555;
            }
            .action-buttons { 
                text-align: center; 
                margin: 25px 0;
            }
            .action-button { 
                display: inline-block; 
                background-color: #D7FF94; 
                color: #2c3e50; 
                padding: 12px 24px; 
                border-radius: 25px; 
                text-decoration: none; 
                font-weight: 600; 
                margin: 0 10px; 
                transition: all 0.3s ease;
            }
            .action-button:hover { 
                transform: translateY(-2px); 
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .footer { 
                background-color: #2c3e50; 
                padding: 20px; 
                text-align: center; 
                color: #ffffff;
            }
            .footer p { 
                margin: 5px 0; 
                font-size: 14px;
            }
            .footer a { 
                color: #D7FF94; 
                text-decoration: none;
            }
            .footer a:hover { 
                text-decoration: underline;
            }
            @media only screen and (max-width: 600px) {
                .container { margin: 10px; }
                .header, .content, .footer { padding: 20px; }
                .info-row { flex-direction: column; }
                .info-value { margin-top: 5px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://ndaraacademy.com/assets/Ndara-academy-logo-1.png" alt="Ndara Academy Logo" class="logo">
                <h1>New Contact Form Submission</h1>
            </div>
            
            <div class="content">
                <div class="notification-box">
                    <h3>📧 New Contact Form Alert!</h3>
                    <p>Someone has submitted a contact form on your website. This is an automated notification from your contact form system.</p>
                </div>
                
                <div class="contact-details">
                    <h3>👤 Contact Information</h3>
                    <div class="info-row">
                        <span class="info-label">Name:</span>
                        <span class="info-value">' . $name . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value">' . $email . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Submission Date:</span>
                        <span class="info-value">' . date('F j, Y \a\t g:i A') . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Time Zone:</span>
                        <span class="info-value">' . date_default_timezone_get() . '</span>
                    </div>
                </div>
                
                <div class="message-box">
                    <h3>💬 Message Content</h3>
                    <div class="message-content">' . nl2br(htmlspecialchars($message)) . '</div>
                </div>
                
                <div class="action-buttons">
                    <a href="mailto:' . $email . '" class="action-button">📧 Reply to ' . $name . '</a>
                    <a href="https://ndaraacademy.com/admin/contacts" class="action-button">📋 View All Contacts</a>
                </div>
                
                <p style="text-align: center; color: #666; font-size: 14px;">
                    <strong>Quick Actions:</strong><br>
                    • Reply directly to the sender<br>
                    • Add to your CRM system<br>
                    • Schedule a follow-up call
                </p>
            </div>
            
            <div class="footer">
                <p><strong>Ndara Academy</strong></p>
                <p>Empowering Creatives, One Skill at a Time</p>
                <p><a href="https://ndaraacademy.com">ndaraacademy.com</a></p>
                <p style="margin-top: 15px; font-size: 12px; color: #bdc3c7;">
                    This is an automated notification from your website contact form system
                </p>
            </div>
        </div>
    </body>
    </html>';
    
    $headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $email,
        'Content-Type: text/html; charset=UTF-8',
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
