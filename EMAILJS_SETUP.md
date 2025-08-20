# EmailJS Setup Instructions 📧

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail as your email provider
4. Connect your **businessmypersonalbajwa@gmail.com** account
5. Follow the connection steps (you may need to enable 2FA and create an app password)
6. Note down your **SERVICE ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Portfolio Contact - {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

4. Note down your **TEMPLATE ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abc123XYZ`)

## Step 5: Update the Code
Open `src/components/ContactForm.jsx` and replace these placeholders:

```javascript
const result = await emailjs.sendForm(
  'service_abc123', // Replace with YOUR_SERVICE_ID
  'template_n2829xo', // Replace with YOUR_TEMPLATE_ID
  form.current,
  'user_abc123XYZ' // Replace with YOUR_PUBLIC_KEY
)
```

## Step 6: Test Your Form
1. Fill out the contact form on your website
2. Check your email inbox for the message
3. Verify all information is being sent correctly

## Email Template Variables
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message

## Troubleshooting
- Make sure all IDs are correctly copied
- Check that your email service is properly connected
- Verify the template variables match the form field names
- Check browser console for any error messages

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio website

Your contact form will now send emails directly to your inbox! 🚀
