# PHP Email Setup Guide for Ndara Academy Website

## 🚀 **Overview**
This website now uses PHP for email functionality instead of EmailJS, providing unlimited free email sending without subscription limits.

## 📁 **Files Created**
- `public/api/send-email.php` - Newsletter subscription emails
- `public/api/contact.php` - Contact form emails

## ⚙️ **Server Requirements**
- **PHP 7.4+** with mail() function enabled
- **Web server** (Apache/Nginx) with PHP support
- **Mail server** configured (SMTP or local mail server)

## 🔧 **Setup Instructions**

### 1. **Server Configuration**
Ensure your hosting provider supports PHP and has mail functionality enabled.

### 2. **Email Configuration**
The PHP files are configured to send emails to:
- **Admin Email**: `admin@ndaraacademy.com`
- **From Email**: `noreply@ndaraacademy.com`

### 3. **File Permissions**
Ensure the PHP files have proper permissions (usually 644 or 755).

### 4. **Testing**
Test the email functionality by:
1. Subscribing to the newsletter
2. Submitting the contact form
3. Checking both admin and user emails

## 📧 **Email Templates**

### **Newsletter Subscription**
- **Admin Notification**: New subscription details
- **User Confirmation**: Welcome message with LinkedIn follow request

### **Contact Form**
- **Admin Notification**: Contact form submission details
- **Reply-To**: Set to user's email for easy response

## 🛡️ **Security Features**
- **Input validation** for all fields
- **Email format validation**
- **CORS headers** for cross-origin requests
- **Method restriction** (POST only)
- **Error handling** with proper HTTP status codes

## 🔍 **Troubleshooting**

### **Common Issues**
1. **Emails not sending**: Check server mail configuration
2. **CORS errors**: Verify server allows cross-origin requests
3. **PHP errors**: Check server error logs

### **Testing Commands**
```bash
# Test PHP mail function
php -r "echo mail('test@example.com', 'Test', 'Test message') ? 'Mail sent' : 'Mail failed';"
```

## 📱 **Frontend Integration**
The React components now use:
- `fetch('/api/send-email.php')` for newsletter
- `fetch('/api/contact.php')` for contact form

## 🎯 **Benefits**
- ✅ **Unlimited emails** - No subscription limits
- ✅ **Full control** - Customize email content
- ✅ **Cost effective** - No monthly fees
- ✅ **Reliable** - Server-side processing
- ✅ **Secure** - Input validation and sanitization

## 📞 **Support**
If you encounter issues:
1. Check server PHP configuration
2. Verify mail server settings
3. Review server error logs
4. Test with simple PHP mail() function
