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
    $admin_subject = 'New Newsletter Subscription - Ndara Academy';
    $admin_message = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
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
            .subscriber-info { 
                background-color: #f8f9fa; 
                padding: 20px; 
                border-radius: 8px; 
                margin: 20px 0;
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
                <h1>New Newsletter Subscription</h1>
            </div>
            
            <div class="content">
                <div class="notification-box">
                    <h3>🎉 New Subscriber Alert!</h3>
                    <p>Someone has just subscribed to The Modern Creative Newsletter. This is an automated notification from your website.</p>
                </div>
                
                <div class="subscriber-info">
                    <h3 style="margin-top: 0; color: #2c3e50;">📋 Subscriber Details</h3>
                    <div class="info-row">
                        <span class="info-label">Name:</span>
                        <span class="info-value">' . $name . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email:</span>
                        <span class="info-value">' . $email . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Subscription Date:</span>
                        <span class="info-value">' . date('F j, Y \a\t g:i A') . '</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Time Zone:</span>
                        <span class="info-value">' . date_default_timezone_get() . '</span>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <a href="mailto:' . $email . '" class="action-button">📧 Send Welcome Email</a>
                    <a href="https://ndaraacademy.com/admin/subscribers" class="action-button">👥 View All Subscribers</a>
                </div>
                
                <p style="text-align: center; color: #666; font-size: 14px;">
                    <strong>Quick Actions:</strong><br>
                    • Add to your CRM system<br>
                    • Send personalized welcome message<br>
                    • Invite to upcoming events
                </p>
            </div>
            
            <div class="footer">
                <p><strong>Ndara Academy</strong></p>
                <p>Empowering Creatives, One Skill at a Time</p>
                <p><a href="https://ndaraacademy.com">ndaraacademy.com</a></p>
                <p style="margin-top: 15px; font-size: 12px; color: #bdc3c7;">
                    This is an automated notification from your website newsletter system
                </p>
            </div>
        </div>
    </body>
    </html>';
    
    $admin_headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $from_email,
        'Content-Type: text/html; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    $admin_sent = mail($admin_email, $admin_subject, $admin_message, implode("\r\n", $admin_headers));
    
    // Send confirmation email to subscriber
    $subscriber_subject = 'Welcome to The Modern Creative Newsletter!';
    $subscriber_message = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to The Modern Creative Newsletter</title>
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
                padding: 40px 30px; 
                text-align: center;
            }
            .logo { 
                width: 120px; 
                height: auto; 
                margin-bottom: 20px;
            }
            .header h1 { 
                color: #2c3e50; 
                font-size: 28px; 
                font-weight: 700; 
                margin: 0; 
                font-family: "Raleway", Arial, sans-serif;
            }
            .content { 
                padding: 40px 30px; 
                background-color: #ffffff;
            }
            .welcome-text { 
                font-size: 18px; 
                color: #2c3e50; 
                margin-bottom: 25px; 
                font-weight: 500;
            }
            .features { 
                background-color: #f8f9fa; 
                padding: 25px; 
                border-radius: 12px; 
                margin: 25px 0;
            }
            .features h3 { 
                color: #2c3e50; 
                font-size: 20px; 
                margin-bottom: 15px; 
                font-weight: 600;
            }
            .feature-item { 
                display: flex; 
                align-items: center; 
                margin-bottom: 12px; 
                color: #555;
            }
            .feature-icon { 
                color: #D7FF94; 
                margin-right: 12px; 
                font-size: 18px;
            }
            .linkedin-section { 
                background: linear-gradient(135deg, #0077b5 0%, #005885 100%); 
                padding: 25px; 
                border-radius: 12px; 
                margin: 25px 0; 
                text-align: center;
            }
            .linkedin-section h3 { 
                color: #ffffff; 
                font-size: 20px; 
                margin-bottom: 15px; 
                font-weight: 600;
            }
            .linkedin-button { 
                display: inline-flex; 
                align-items: center; 
                background-color: #ffffff; 
                color: #0077b5; 
                padding: 12px 24px; 
                border-radius: 25px; 
                text-decoration: none; 
                font-weight: 600; 
                transition: all 0.3s ease;
            }
            .linkedin-button:hover { 
                transform: translateY(-2px); 
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .linkedin-icon { 
                width: 20px; 
                height: 20px; 
                margin-right: 8px;
            }
            .footer { 
                background-color: #2c3e50; 
                padding: 30px; 
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
            .divider { 
                height: 1px; 
                background-color: #e9ecef; 
                margin: 25px 0;
            }
            @media only screen and (max-width: 600px) {
                .container { margin: 10px; }
                .header, .content, .footer { padding: 25px 20px; }
                .header h1 { font-size: 24px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://ndaraacademy.com/assets/Ndara-academy-logo-1.png" alt="Ndara Academy Logo" class="logo">
                <h1>Welcome to The Modern Creative Newsletter!</h1>
            </div>
            
            <div class="content">
                <p class="welcome-text">Hi <strong>' . $name . '</strong>,</p>
                
                <p>Thank you for subscribing to The Modern Creative Newsletter! We\'re thrilled to have you join our vibrant community of creators, designers, and tech enthusiasts.</p>
                
                <div class="features">
                    <h3>🎯 What You\'ll Receive:</h3>
                    <div class="feature-item">
                        <span class="feature-icon">✨</span>
                        <span>Exclusive insights on design trends and creative processes</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🚀</span>
                        <span>Early access to new courses and workshops</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">💡</span>
                        <span>Pro tips from industry experts and mentors</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🎨</span>
                        <span>Creative inspiration and project showcases</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🌱</span>
                        <span>Community updates and networking opportunities</span>
                    </div>
                </div>
                
                <div class="linkedin-section">
                    <h3>📱 Stay Connected on LinkedIn</h3>
                    <p style="color: #ffffff; margin-bottom: 20px;">Follow us for daily inspiration, industry insights, and exclusive content!</p>
                    <a href="https://www.linkedin.com/company/ndara-academy" class="linkedin-button" target="_blank">
                        <svg class="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Follow on LinkedIn
                    </a>
                </div>
                
                <div class="divider"></div>
                
                <p style="text-align: center; color: #666; font-size: 14px;">
                    <strong>Ready to level up your creative skills?</strong><br>
                    Our next workshop is just around the corner!
                </p>
            </div>
            
            <div class="footer">
                <p><strong>Ndara Academy</strong></p>
                <p>Empowering Creatives, One Skill at a Time</p>
                <p><a href="https://ndaraacademy.com">ndaraacademy.com</a></p>
                <p style="margin-top: 20px; font-size: 12px; color: #bdc3c7;">
                    This email was sent to ' . $email . '<br>
                    To unsubscribe, please <a href="mailto:admin@ndaraacademy.com">contact us</a>
                </p>
            </div>
        </div>
    </body>
    </html>';
    
    $subscriber_headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $admin_email,
        'Content-Type: text/html; charset=UTF-8',
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
