# 📧 Resend Contact Form Setup Guide

This guide will help you complete the setup of the Resend-powered contact form for the ALTA Innovation website.

## 🚀 What's Been Implemented

### ✅ **Components Created:**
- **Contact Modal** (`src/components/ContactModal.astro`) - Professional modal contact form
- **Contact Form** (`src/components/ContactForm.astro`) - Inline contact form with validation
- **API Route** (`src/pages/api/contact.ts`) - Server-side email handling with Resend
- **Updated Contact Section** - Modal integration and improved user experience
- **Updated Hero Section** - Schedule Consultation button triggers modal

### ✅ **Features Included:**
- **Modal Contact Form** - Professional overlay interface instead of mailto links
- **Form Validation** - Client-side and server-side validation
- **Professional Email Templates** - Branded HTML emails with all form data
- **Loading States** - Visual feedback during form submission
- **Success/Error Messages** - Clear user feedback within modal
- **Responsive Design** - Works on all devices and screen sizes
- **Consultation Type Selection** - Dropdown for different service types
- **Privacy Consent** - Required checkbox for GDPR compliance
- **Keyboard Navigation** - Escape key to close, focus management
- **Accessibility Features** - Proper ARIA labels and focus handling

## 🔧 **Setup Steps Required**

### **1. Get Resend API Key**
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Navigate to **API Keys** in your dashboard
4. Click **Create API Key**
5. Give it a name like "ALTA Innovation Contact Form"
6. Copy the generated API key (starts with `re_`)

### **2. Configure Environment Variables**
1. Open the `.env` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### **3. Set Up Domain (Recommended)**
For production use, you should verify a domain:

1. In your Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `alta-innovation.com`)
4. Follow the DNS verification steps
5. Update the API route (`src/pages/api/contact.ts`) line 32:
   ```typescript
   from: 'ALTA Innovation Contact <noreply@alta-innovation.com>',
   ```

**Note:** Without a verified domain, emails will be sent from `onboarding@resend.dev` which may look less professional.

### **4. Test the Form**
1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (roy@alta-innovation.com) for the message
5. Verify the form shows success/error messages correctly

## 🎯 **Modal Interface**

### **Trigger Buttons:**
The modal contact form is triggered by:
- **"Send Email" button** in the Contact section
- **"Schedule Consultation" button** in the Hero section

### **Modal Features:**
- **Full-screen overlay** with backdrop blur effect
- **Responsive design** that works on all screen sizes
- **Smooth animations** for opening and closing
- **Keyboard navigation** - Press Escape to close
- **Click outside to close** - Click backdrop to dismiss
- **Focus management** - Auto-focus on first field when opened
- **Body scroll prevention** - Prevents background scrolling
- **Auto-close on success** - Closes automatically after successful submission

### **User Experience:**
- **Professional appearance** - No more relying on user's email client
- **Consistent branding** - Matches site design and colors
- **Form validation** - Immediate feedback on errors
- **Loading states** - Visual feedback during submission
- **Success messaging** - Clear confirmation of message sent

## 📋 **Form Fields**

The contact form includes:
- **Name*** (required)
- **Email*** (required) 
- **Company/Organization** (optional)
- **Consultation Type** (dropdown with service options)
- **Subject** (optional)
- **Message*** (required)
- **Privacy Consent*** (required checkbox)

## 🎨 **Email Template Features**

The email template includes:
- **Professional branding** with ALTA Innovation colors
- **Structured layout** with clear sections
- **All form data** formatted nicely
- **Timestamp** of submission
- **Reply-to** set to the sender's email for easy responses

## 🔒 **Security & Privacy**

### **Built-in Security:**
- **Server-side validation** of all inputs
- **Email format validation** 
- **Required field validation**
- **Environment variable protection** (API key not exposed)
- **CORS protection** (API only accepts POST requests)

### **Privacy Compliance:**
- **Explicit consent** checkbox required
- **Clear data usage** statement
- **No data storage** (emails sent directly, not stored in database)

## 🚀 **Deployment Considerations**

### **Environment Variables:**
Make sure to set the `RESEND_API_KEY` environment variable in your deployment platform:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables  
- **Railway:** Variables tab in your project
- **Other platforms:** Check their documentation for environment variable setup

### **Domain Configuration:**
For production, update the `from` email address in `src/pages/api/contact.ts` to use your verified domain.

## 📊 **Monitoring & Analytics**

Resend provides:
- **Email delivery tracking**
- **Bounce/complaint monitoring** 
- **Delivery analytics**
- **Webhook support** for advanced integrations

Access these features in your Resend dashboard.

## 🛠️ **Customization Options**

### **Form Fields:**
You can easily add/remove fields by modifying:
- `src/components/ContactForm.astro` (form HTML)
- `src/pages/api/contact.ts` (server processing)

### **Email Template:**
Customize the email template in `src/pages/api/contact.ts` around line 40-80.

### **Styling:**
The form uses Tailwind CSS classes and can be customized by modifying the classes in `ContactForm.astro`.

## 🎯 **Next Steps**

1. **Complete the setup** following steps 1-4 above
2. **Test thoroughly** in development
3. **Deploy to production** with environment variables configured
4. **Monitor email delivery** through Resend dashboard
5. **Consider adding** webhook integration for advanced features

## 📞 **Support**

- **Resend Documentation:** [https://resend.com/docs](https://resend.com/docs)
- **Resend Support:** Available through their dashboard
- **Form Issues:** Check browser console and server logs for debugging

The contact form is now ready to help convert website visitors into potential clients! 🎉
