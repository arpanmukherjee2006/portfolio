# Personal Portfolio Website

A clean, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern dark theme design
- Responsive layout for all devices
- Project showcase with descriptions
- Social media links
- Interactive elements with JavaScript

## How to Use

1. Clone or download this repository
2. Open `index.html` in your browser to view the portfolio
3. Customize the content in the HTML file to add your own information
4. Modify the CSS to change colors, spacing, or layout
5. Add your own JavaScript functionality as needed

## Customization

### Profile Information

Edit the HTML in the `profile-section` to update your:
- Name
- Title
- Location
- Profile picture (replace `profile.jpg` with your own image)

### Social Links

Update the social media links in the `social-links` section:
```html
<div class="social-links">
    <a href="YOUR_TWITTER_URL" class="social-icon twitter"><i class="fab fa-twitter"></i></a>
    <a href="YOUR_GITHUB_URL" class="social-icon github"><i class="fab fa-github"></i></a>
    <!-- Add more social links as needed -->
</div>
```

### Projects

Add or modify projects in the `projects-grid` section:
```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-icon-name"></i>
        <h3>Project Title</h3>
        <a href="PROJECT_URL" class="project-link"><i class="fas fa-arrow-right"></i></a>
    </div>
    <p class="project-description">
        Project description goes here...
    </p>
    <!-- Add features and tech stack -->
</div>
```

### Colors and Styling

Modify the CSS variables in the `:root` selector to change the color scheme:
```css
:root {
    --bg-primary: #your-color;
    --bg-card: #your-color;
    --text-primary: #your-color;
    --text-secondary: #your-color;
    --accent-color: #your-color;
    --card-border: #your-color;
    --hover-color: #your-color;
}
```

## License

Feel free to use and modify this template for your personal portfolio.

## Credits

- Font Awesome for icons
- Inter font family 