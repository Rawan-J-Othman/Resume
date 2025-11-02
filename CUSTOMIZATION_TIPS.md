# 🎨 Customization Tips

Quick tips for personalizing your resume website.

## 🖼️ Images

### Profile Photo
- **Location**: Root folder as `profile.jpg`
- **Recommended Size**: 500x500px (square)
- **Format**: JPG or PNG
- **Tip**: Use a professional headshot with good lighting and neutral background

### Adding More Images
If you want to add project screenshots or certifications:
```html
<img src="images/certificate.jpg" alt="Description">
```
Create an `images/` folder and organize your images there.

## 🎨 Color Scheme

Want different colors? Edit `style.css` (lines 12-21):

### Professional Blue Theme
```css
--primary-color: #3498db;
--accent-color: #e74c3c;
```

### Nature/Organic Theme
```css
--primary-color: #27ae60;
--accent-color: #f39c12;
```

### Corporate/Modern Theme
```css
--primary-color: #9b59b6;
--accent-color: #1abc9c;
```

## ✍️ Content Updates

### Update Contact Info
In `index.html`, find (around line 24):
```html
<span>📍 Suwanee, GA 30024</span>
<span>📞 404-258-2622</span>
<span>✉️ othmanrawan21@gmail.com</span>
```

### Add New Experience
Copy this template and add to the timeline section:
```html
<div class="timeline-item">
    <div class="timeline-date">MM/YYYY - MM/YYYY</div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <h4>Company Name, Location</h4>
        <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
            <li>Responsibility or achievement 3</li>
        </ul>
    </div>
</div>
```

### Add New Certification
Copy this template:
```html
<div class="cert-card">
    <div class="cert-badge">🏆</div>
    <h3>Certification Name</h3>
    <p>Issuing Organization</p>
    <p class="cert-date">Issued: Month Year</p>
</div>
```

## 📊 Customize Charts

Edit `script.js` to change chart data:

### Example: Update Skills Proficiency (line 165+)
```javascript
data: [95, 90, 95, 85, 90, 88, 92]  // Change these numbers (0-100)
```

### Add New Skill Category
In the skills section, add:
```html
<div class="skill-category">
    <h3>Your Category Name</h3>
    <div class="skill-tags">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
        <span class="tag">Skill 3</span>
    </div>
</div>
```

## 🎭 Fonts

Change the font family by editing `style.css` (line 35):

### Try Different Google Fonts
1. Visit [Google Fonts](https://fonts.google.com/)
2. Choose a font (e.g., "Poppins", "Roboto", "Montserrat")
3. Copy the import link to `index.html` (line 10)
4. Update `style.css`:
```css
font-family: 'Poppins', sans-serif;
```

## 📱 Social Media Links

Add social media icons to the header or contact section:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
    <a href="https://twitter.com/yourhandle">Twitter</a>
    <a href="https://instagram.com/yourhandle">Instagram</a>
</div>
```

## 💡 Advanced Customizations

### Add a Blog Section
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Recent Articles</h2>
        <div class="blog-grid">
            <!-- Add blog post cards here -->
        </div>
    </div>
</section>
```

### Add Testimonials
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Client Testimonials</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Quote from client..."</p>
                <h4>- Client Name</h4>
            </div>
        </div>
    </div>
</section>
```

### Add Photo Gallery
```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Gallery</h2>
        <div class="gallery-grid">
            <img src="images/photo1.jpg" alt="Description">
            <img src="images/photo2.jpg" alt="Description">
        </div>
    </div>
</section>
```

## 🔧 SEO Optimization

Update meta tags in `index.html` (around line 6):

```html
<meta name="description" content="Your custom description here">
<meta name="keywords" content="nutritionist, wellness coach, personal trainer, Rawan Othman">
<meta name="author" content="Rawan J. Othman">
<meta property="og:title" content="Rawan J. Othman - Nutritionist">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-url.com/profile.jpg">
```

## 🎬 Animation Speed

To make animations faster/slower, edit `style.css`:

```css
/* Find these values and adjust */
--transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Make 0.3s shorter/longer */
```

## 📐 Layout Adjustments

### Wider Container
In `style.css` (line 31):
```css
max-width: 1400px;  /* Default is 1200px */
```

### More/Less Padding
```css
--spacing-xl: 4rem;  /* Increase for more white space */
```

## 🎯 Performance Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com/) to compress
2. **Lazy Loading**: Add to images:
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```
3. **Minify Files**: Use online tools to minify CSS/JS for production

## 🆘 Common Issues

**Charts not showing?**
- Check internet connection (Chart.js loads from CDN)
- Open browser console (F12) for errors

**Images not loading?**
- Verify file names match exactly (case-sensitive)
- Check files are in correct directory

**Layout broken on mobile?**
- Clear browser cache
- Test in different browsers

## 📚 Resources

- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/)

---

**Remember**: After any changes, commit and push to GitHub:
```bash
git add .
git commit -m "Describe your changes"
git push
```

Happy customizing! 🎉