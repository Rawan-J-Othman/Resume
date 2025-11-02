# 🚀 Deployment Guide for Rawan's Resume Website

This guide will help you deploy the resume website to **github.com/Rawan-J-Othman/resume** and make it live at **rawan-j-othman.github.io/resume**.

## 📋 Prerequisites

Before you begin, make sure you have:
- A GitHub account (Rawan-J-Othman)
- Git installed on your computer
- Your professional profile photo (500x500px recommended)
- A PDF version of your resume

## 🛠️ Step-by-Step Deployment

### Step 1: Prepare Your Files

1. **Add Your Profile Photo**
   - Take or select a professional headshot
   - Resize it to at least 500x500px (square format)
   - Save it as `profile.jpg` in the `rawan-resume` folder
   - If you don't add one, the website will display your initials "RO" instead

2. **Add Your Resume PDF**
   - Create a PDF version of your resume
   - Name it `Rawan_Othman_Resume.pdf`
   - Place it in the `rawan-resume` folder
   - This enables the "Download Resume" button

### Step 2: Push to GitHub

Open your terminal/command prompt and navigate to the project folder:

```bash
cd C:\Users\ADMIN\OneDrive\Desktop\rawan-resume
```

Initialize Git and push to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional resume website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Rawan-J-Othman/resume.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: **https://github.com/Rawan-J-Othman/resume**
2. Click on **Settings** (top navigation)
3. Scroll down and click on **Pages** (left sidebar)
4. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub will automatically deploy your site
- This usually takes 1-3 minutes
- You'll see a message: "Your site is published at https://rawan-j-othman.github.io/resume/"

### Step 5: Verify Deployment

Visit **https://rawan-j-othman.github.io/resume/** to see your live website!

## 🔄 Making Updates

Whenever you want to update your website:

```bash
# Navigate to your project folder
cd C:\Users\ADMIN\OneDrive\Desktop\rawan-resume

# Make your changes to the files (edit HTML, CSS, or add new images)

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update work experience and certifications"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically redeploy your site within 1-3 minutes.

## ✅ Post-Deployment Checklist

After deployment, verify that:
- [ ] Your profile photo displays correctly
- [ ] Download Resume button works (links to PDF)
- [ ] All contact information is correct
- [ ] Charts are rendering properly
- [ ] Website is responsive on mobile devices
- [ ] All links work correctly
- [ ] Content is up-to-date

## 🌐 Custom Domain (Optional)

If you want to use a custom domain (e.g., **rawanothman.com**):

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file named `CNAME`
3. Add your custom domain to the file: `rawanothman.com`
4. Configure DNS settings at your domain registrar:
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153

   Type: A Record
   Host: @
   Value: 185.199.109.153

   Type: A Record
   Host: @
   Value: 185.199.110.153

   Type: A Record
   Host: @
   Value: 185.199.111.153
   ```
5. Wait 24-48 hours for DNS propagation

## 🔒 HTTPS

GitHub Pages automatically provides free HTTPS for your site. After deployment:
1. Go to Settings > Pages
2. Scroll to "Enforce HTTPS"
3. Check the box (it may take a few minutes to become available)

## 📱 Sharing Your Resume

Once live, share your resume using:
- **Full URL**: https://rawan-j-othman.github.io/resume/
- **QR Code**: Generate a QR code linking to your site
- **LinkedIn**: Add to your LinkedIn profile
- **Email Signature**: Include the link in your email signature
- **Business Cards**: Print the URL on business cards

## 🐛 Troubleshooting

### Site Not Loading
- Wait 3-5 minutes after initial deployment
- Check that GitHub Pages is enabled in Settings > Pages
- Ensure the branch is set to `main` and folder is `/ (root)`

### Profile Image Not Showing
- Verify the image is named exactly `profile.jpg`
- Check the file is in the root directory (not in a subfolder)
- Clear your browser cache

### Download Resume Button Not Working
- Ensure the PDF is named exactly `Rawan_Othman_Resume.pdf`
- Verify the file is in the root directory
- Check the file was committed and pushed to GitHub

### Charts Not Displaying
- Check browser console for JavaScript errors (F12 > Console)
- Ensure Chart.js CDN is loading (check internet connection)
- Try clearing browser cache

## 📞 Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify all files are correctly named and in the right location
3. Check the repository's Actions tab for deployment status
4. Review browser console for error messages

## 🎉 You're Live!

Congratulations! Your professional resume website is now live and accessible to potential employers, clients, and collaborators worldwide.

**Your Live Site**: https://rawan-j-othman.github.io/resume/

---

**Need Help?** Contact: othmanrawan21@gmail.com