# 📝 Website Content Management Guide

## Complete Step-by-Step Instructions for Managing Your Website Content

This guide will teach you how to update your website content using Front Matter CMS in VS Code, preview changes locally, and publish updates to your live website.

---

## 🛠️ Prerequisites

Before starting, ensure you have:
- ✅ VS Code installed with Front Matter extension
- ✅ Git installed on your computer
- ✅ Access to the website repository
- ✅ Node.js installed (version 18.20.8 or higher)

---

## 📋 Complete Workflow Overview

1. **Start Local Development Server** - See your website locally
2. **Open Front Matter CMS** - Access the content editor
3. **Make Content Changes** - Edit text, images, and data
4. **Preview Changes** - Review updates in your browser
5. **Save Changes with Git** - Create a backup of your work
6. **Publish to Live Website** - Push changes to the internet

---

## 🚀 Step 1: Starting Your Local Development Server

### 1.1 Open Your Project
1. **Open VS Code**
2. **File** → **Open Folder**
3. **Navigate to** your website project folder
4. **Select** the folder and click **"Open"**

### 1.2 Open Terminal
1. **View** → **Terminal** (or press `Ctrl+`` on Windows/Linux, `Cmd+`` on Mac)
2. A terminal window will appear at the bottom of VS Code

### 1.3 Start the Development Server
1. **Type** the following command in the terminal:
   ```bash
   export PATH="/opt/homebrew/opt/node/bin:$PATH" && npm run dev
   ```
2. **Press Enter**
3. **Wait** for the server to start (you'll see a message like "Local: http://localhost:4321/")
4. **Open your browser** and go to `http://localhost:4321/`

✅ **Success**: You should see your website running locally!

---

## 📝 Step 2: Opening Front Matter CMS

### 2.1 Access the Front Matter Dashboard
1. **Press** `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. **Type**: "Front Matter: Open dashboard"
3. **Press Enter**
4. The Front Matter dashboard will open in a new tab

### 2.2 Alternative Method
1. **Look for** the Front Matter icon in the VS Code sidebar (left side)
2. **Click** the Front Matter icon
3. **Click** "Open Dashboard"

✅ **Success**: You should see the Front Matter CMS interface with your content sections!

---

## ✏️ Step 3: Making Content Changes

### 3.1 Understanding Content Sections
Your website content is organized into these sections:
- **Hero** - Main banner with title, subtitle, and image
- **Navigation** - Menu items and brand name
- **Expertise** - Service areas and credentials
- **Clients** - Testimonials and professional background
- **Insights** - Research papers and whitepapers
- **Contact** - Contact information and engagement areas

### 3.2 Editing Content
1. **In Front Matter dashboard**, click on **"Content"** in the sidebar
2. **Select** the section you want to edit (e.g., "hero.md", "clients.md")
3. **Click** the file to open it
4. **Use the form fields** to edit:
   - **Text fields** - Type directly
   - **Rich text areas** - Use formatting toolbar
   - **Image fields** - Paste image URLs or upload files
   - **Lists** - Add/remove items with + and - buttons

### 3.3 Common Edits

#### Updating Hero Section:
- **Title**: Main headline text
- **Subtitle**: Text above the title
- **Description**: Paragraph below title
- **Image**: Professional headshot URL
- **Statistics**: Numbers and labels (e.g., "50+ Fortune 500 Clients")

#### Updating Testimonials:
- **Quote**: Customer testimonial text
- **Author**: Person's name
- **Title**: Their job title
- **Company**: Company name

#### Updating Contact Info:
- **Email**: Your contact email
- **LinkedIn**: Your LinkedIn profile URL
- **Services**: List of what you offer

---

## 👀 Step 4: Previewing Your Changes

### 4.1 Auto-Save Feature
- Front Matter **automatically saves** your changes
- No need to manually save files

### 4.2 View Changes Live
1. **Keep your browser open** to `http://localhost:4321/`
2. **Make a change** in Front Matter
3. **Switch to your browser**
4. **Refresh the page** (F5 or Ctrl+R)
5. **See your changes** immediately

### 4.3 Testing Different Sections
1. **Navigate** through your website
2. **Check** that all changes appear correctly
3. **Test** on different screen sizes (resize browser window)
4. **Verify** all links and buttons work

✅ **Success**: Your changes should be visible on the local website!

---

## 💾 Step 5: Saving Changes with Git

### 5.1 Understanding Git
Git is like a "save system" that:
- **Tracks** all changes you make
- **Creates backups** of your work
- **Allows** you to undo changes if needed
- **Syncs** your work with the live website

### 5.2 Check What Changed
1. **In VS Code**, look for the **Source Control** icon (looks like a branch)
2. **Click** the Source Control icon
3. **See** a list of files you've changed (they'll have an "M" for modified)

### 5.3 Stage Your Changes
1. **In Source Control panel**, you'll see "Changes" section
2. **Click the "+"** next to each file you want to save
3. **Or click "+"** next to "Changes" to stage all files
4. Files move to "Staged Changes" section

### 5.4 Commit Your Changes
1. **Type a message** in the text box at the top (e.g., "Updated hero section and testimonials")
2. **Click the checkmark** button (✓) or press `Ctrl+Enter`
3. **Your changes are now saved** locally

### 5.5 Good Commit Message Examples:
- "Updated contact information"
- "Added new testimonial from client"
- "Changed hero image and description"
- "Updated whitepaper download counts"

---

## 🌐 Step 6: Publishing to Live Website

### 6.1 Push Changes to Remote Repository
1. **In Source Control panel**, look for **"Sync Changes"** button
2. **Click "Sync Changes"** (or the up/down arrow icon)
3. **Wait** for the sync to complete
4. **Your changes are now live** on the internet!

### 6.2 Alternative Push Method
1. **Open Terminal** in VS Code
2. **Type**: `git push`
3. **Press Enter**
4. **Wait** for completion message

### 6.3 Verify Live Changes
1. **Visit your live website** (the public URL)
2. **Wait 2-5 minutes** for changes to appear
3. **Refresh the page** to see updates
4. **Check** that all changes are correct

---

## 🔄 Complete Workflow Summary

### Daily Content Update Process:
1. **Start development server**: `npm run dev`
2. **Open Front Matter dashboard**
3. **Make content changes**
4. **Preview in browser**: `http://localhost:4321/`
5. **Stage changes** in Source Control
6. **Commit with message**
7. **Sync/Push to live website**

---

## 🆘 Troubleshooting

### Development Server Won't Start
- **Check** that you're in the correct folder
- **Try**: `npm install` first, then `npm run dev`
- **Restart** VS Code and try again

### Changes Not Showing
- **Refresh** your browser (F5)
- **Check** that the development server is still running
- **Look** for error messages in the terminal

### Git Sync Issues
- **Check** your internet connection
- **Try** the sync button again
- **Contact** your developer if problems persist

### Front Matter Not Opening
- **Check** that the extension is installed
- **Restart** VS Code
- **Try** the command palette method (`Ctrl+Shift+P`)

---

## 📞 Getting Help

If you encounter issues:
1. **Check** this guide first
2. **Look** for error messages in VS Code
3. **Take screenshots** of any errors
4. **Contact** your developer with specific details

---

## 🎯 Best Practices

### Content Management:
- **Make small changes** and test frequently
- **Use descriptive commit messages**
- **Preview changes** before publishing
- **Keep backup** of important content

### Git Workflow:
- **Commit changes** regularly (daily or after major edits)
- **Don't** work on multiple major changes simultaneously
- **Test locally** before pushing to live site
- **Write clear commit messages** for future reference

---

## 📚 Quick Reference

### Essential Commands:
- **Start server**: `npm run dev`
- **Open Front Matter**: `Ctrl+Shift+P` → "Front Matter: Open dashboard"
- **Local website**: `http://localhost:4321/`
- **Stage all changes**: Click "+" next to "Changes"
- **Commit**: Type message + click checkmark
- **Publish**: Click "Sync Changes"

### Key Locations:
- **Content files**: `src/content/` folder
- **Images**: `public/` folder
- **Source Control**: Left sidebar in VS Code
- **Terminal**: Bottom panel in VS Code

---

**🎉 Congratulations! You now have complete control over your website content!**
