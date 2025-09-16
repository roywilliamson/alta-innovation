# 📝 Section Publishing Control Guide

## Overview

You can now control which sections of your website are published (visible to visitors) using a simple checkbox in Front Matter CMS. This allows you to:

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
2. **Look for the "Published" checkbox** in the form
3. **Check the box** ✅ to show the section on your website
4. **Uncheck the box** ❌ to hide the section from your website
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
| Navigation | `navigation.md` | ✅ Published | Site header and menu |
| Hero | `hero.md` | ✅ Published | Main banner section |
| Expertise | `expertise.md` | ✅ Published | Services and skills |
| Clients | `clients.md` | ✅ Published | Testimonials and background |
| Insights | `insights.md` | ❌ Hidden | Research papers (currently being edited) |
| Contact | `contact.md` | ✅ Published | Contact information |

## Use Cases

### 🚧 **Working on New Content**
- Set `published: false` while writing/editing
- Content won't appear on live site until you're ready
- Switch to `published: true` when content is approved

### 🔄 **Seasonal Content**
- Hide/show sections based on current campaigns
- Temporarily disable outdated sections
- Reactivate sections when needed

### 🎯 **A/B Testing**
- Test different section combinations
- Show/hide sections to see impact on user engagement
- Easy to switch between versions

### 📝 **Content Review Process**
- Content creators set `published: false`
- Reviewers can preview on development server
- Set `published: true` only after approval

## Technical Details

- **Default behavior**: All sections are published by default (`published: true`)
- **Backward compatibility**: Existing content without the field will still show
- **Development vs. Production**: Hidden sections won't appear in either environment
- **Performance**: Hidden sections are not rendered, improving page load times

## Troubleshooting

### Section Still Showing After Unchecking
1. **Check the file** - Ensure `published: false` is saved in the .md file
2. **Restart dev server** - Stop (`Ctrl+C`) and restart (`npm run dev`)
3. **Clear browser cache** - Hard refresh (`Ctrl+Shift+R`)

### Section Not Showing After Checking
1. **Verify checkbox is checked** - Should show `published: true` in file
2. **Check for errors** - Look at terminal for any error messages
3. **Restart development server** - Sometimes needed for changes to take effect

---

**🎉 You now have complete control over which sections appear on your website!**

This feature gives you the flexibility to manage your content publication workflow while maintaining a professional appearance for your visitors.
