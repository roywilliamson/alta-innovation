# 📝 Section Draft Control Guide

## Overview

You can now control which sections of your website are published (visible to visitors) using the standard FrontMatter CMS draft functionality. This allows you to:

- ✅ **Hide sections while editing** - Work on content without it appearing on the live site
- ✅ **Stage content for review** - Prepare sections before making them public
- ✅ **Temporarily disable sections** - Remove sections without deleting content
- ✅ **Control site structure** - Show only the sections you want visitors to see

## How to Use

### 1. Open Front Matter CMS
1. Open VS Code in your project
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Front Matter: Open dashboard"
4. Click on **Content** in the sidebar

### 2. Edit Section Visibility
1. **Select any content section** (hero.md, expertise.md, clients.md, etc.)
2. **Look for the "Draft" checkbox** in the form
3. **Uncheck the box** ✅ to show the section on your website (not a draft)
4. **Check the box** ❌ to hide the section from your website (mark as draft)
5. **Save your changes**

### 3. Preview Changes
1. **Start your development server**: `npm run dev`
2. **Visit**: `http://localhost:4321/`
3. **Verify** that hidden sections don't appear
4. **Check** that published sections are visible

### 4. Publish to Live Site
1. **Stage your changes** in Source Control
2. **Commit with a message** like "Update section visibility"
3. **Sync/Push** to publish to your live website

## Section Status Reference

| Section | File | Current Status | Description |
|---------|------|----------------|-------------|
| Navigation | `navigation.md` | ✅ Published (`draft: false`) | Site header and menu |
| Hero | `hero.md` | ✅ Published (`draft: false`) | Main banner section |
| Expertise | `expertise.md` | ✅ Published (`draft: false`) | Services and skills |
| Clients | `clients.md` | ✅ Published (`draft: false`) | Testimonials and background |
| Insights | `insights.md` | ❌ Draft (`draft: true`) | Research papers (currently being edited) |
| Contact | `contact.md` | ✅ Published (`draft: false`) | Contact information |

## Use Cases

### 🚧 **Working on New Content**
- Set `draft: true` while writing/editing
- Content won't appear on live site until you're ready
- Switch to `draft: false` when content is approved

### 🔄 **Seasonal Content**
- Hide/show sections based on current campaigns
- Temporarily disable outdated sections
- Reactivate sections when needed

### 🎯 **A/B Testing**
- Test different section combinations
- Show/hide sections to see impact on user engagement
- Easy to switch between versions

### 📝 **Content Review Process**
- Content creators set `draft: true`
- Reviewers can preview on development server
- Set `draft: false` only after approval

## Technical Details

- **Default behavior**: All sections are published by default (`draft: false` or field not set)
- **FrontMatter standard**: Uses the built-in draft functionality
- **Development vs. Production**: Draft sections won't appear in either environment
- **Performance**: Draft sections are not rendered, improving page load times

## Troubleshooting

### Section Still Showing After Marking as Draft
1. **Check the file** - Ensure `draft: true` is saved in the .md file
2. **Restart dev server** - Stop (`Ctrl+C`) and restart (`npm run dev`)
3. **Clear browser cache** - Hard refresh (`Ctrl+Shift+R`)

### Section Not Showing After Publishing (Removing Draft Status)
1. **Verify checkbox is unchecked** - Should show `draft: false` in file
2. **Check for errors** - Look at terminal for any error messages
3. **Restart development server** - Sometimes needed for changes to take effect

---

**🎉 You now have complete control over which sections appear on your website!**

This feature gives you the flexibility to manage your content publication workflow while maintaining a professional appearance for your visitors.
