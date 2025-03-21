// Define constant theme (Midnight Blue)
const THEME = {
    name: 'Midnight Blue', 
    bgPrimary: '#0a0a13', 
    bgCard: 'rgba(17, 24, 39, 0.8)', 
    textPrimary: '#ffffff', 
    textSecondary: '#9ca3af', 
    accentColor: '#3b82f6'
};

// Store particles configuration globally
const particlesConfig = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#3b82f6" // Default blue, will be updated with theme accent
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6", // Default blue, will be updated with theme accent
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - initializing...");
    
    // Initialize with fixed midnight theme
    applyMidnightTheme();
    
    // Initialize particles
    initParticles();
    
    // Initialize UI components
    setupSmoothScrolling();
    setupMobileNavigation();
    setupProjectModal();
    setupTypingAnimation();
    setupScrollToTopButton();
    setupCommandMenu();
    setupContactFormValidation();
    
    // Initialize animations
    setTimeout(() => {
        initSlideUpAnimations();
        setupSectionTextAnimations();
    }, 500);
    
    // Handle visibility change to pause animations when tab is not visible
    handleVisibilityChange();
    
    // Set up all other UI elements 
    setupCommandButton();
    setupCardInteractions();
    setupParallaxEffect();
    setupKeyboardShortcuts();
    
    // Finally, add particles
    createParticles();
    
    // Add animation to project cards for staggered effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index + 1)}s`;
        card.style.animation = 'slideUp 0.8s ease-out forwards';
        card.style.opacity = '0';
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 25px -5px var(--glow-color)';
            
            // Animate the icon inside the card header
            const icon = this.querySelector('.project-header i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.backgroundColor = 'var(--accent-color)';
                icon.style.color = 'white';
            }
            
            // Animate the header text
            const headerText = this.querySelector('.project-header h3');
            if (headerText) {
                headerText.style.transform = 'translateX(5px)';
                headerText.style.color = '#60a5fa';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px -15px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 var(--glass-highlight)';
            
            // Reset the icon animation
            const icon = this.querySelector('.project-header i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                icon.style.color = 'var(--accent-color)';
            }
            
            // Reset the header text
            const headerText = this.querySelector('.project-header h3');
            if (headerText) {
                headerText.style.transform = 'translateX(0)';
                headerText.style.color = 'var(--text-primary)';
            }
        });
    });

    // Enhanced Command button functionality
    const commandButton = document.querySelector('.command-button');
    let menuOpen = false;
    
    if (commandButton) {
        // Create a dropdown menu for the command button
        const commandMenu = document.createElement('div');
        commandMenu.className = 'command-menu';
        commandMenu.innerHTML = `
            <div class="command-item" data-action="about">Jump to About</div>
            <div class="command-item" data-action="projects">Jump to Projects</div>
            <div class="command-item" data-action="contact">Contact Me</div>
        `;
        commandMenu.style.position = 'absolute';
        commandMenu.style.backgroundColor = 'var(--bg-card)';
        commandMenu.style.backdropFilter = 'blur(10px)';
        commandMenu.style.borderRadius = '0.8rem';
        commandMenu.style.padding = '0.8rem';
        commandMenu.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
        commandMenu.style.border = '1px solid var(--card-border)';
        commandMenu.style.zIndex = '10';
        commandMenu.style.opacity = '0';
        commandMenu.style.transform = 'translateY(10px)';
        commandMenu.style.visibility = 'hidden';
        commandMenu.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        commandMenu.style.width = '100%';
        commandMenu.style.top = '100%';
        commandMenu.style.marginTop = '10px';
        
        // Style the menu items
        const menuItems = commandMenu.querySelectorAll('.command-item');
        menuItems.forEach(item => {
            item.style.padding = '0.8rem 1rem';
            item.style.margin = '0.3rem 0';
            item.style.borderRadius = '0.5rem';
            item.style.cursor = 'pointer';
            item.style.transition = 'all 0.2s ease';
            item.style.color = 'var(--text-secondary)';
            
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                this.style.color = 'var(--accent-color)';
                this.style.transform = 'translateX(5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--text-secondary)';
                this.style.transform = 'translateX(0)';
            });
            
            item.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                
                if (action === 'about') {
                    scrollToSection('.about-section');
                } else if (action === 'projects') {
                    scrollToSection('.projects-section');
                } else if (action === 'contact') {
                    alert('Contact form would open here!');
                }
                
                // Close menu after action
                toggleCommandMenu(false);
            });
        });
        
        // Add the menu to the command button container
        commandButton.style.position = 'relative';
        commandButton.appendChild(commandMenu);
        
        // Toggle function for the menu
        function toggleCommandMenu(show) {
            if (show) {
                commandMenu.style.opacity = '1';
                commandMenu.style.transform = 'translateY(0)';
                commandMenu.style.visibility = 'visible';
                commandButton.classList.add('active');
                menuOpen = true;
            } else {
                commandMenu.style.opacity = '0';
                commandMenu.style.transform = 'translateY(10px)';
                commandMenu.style.visibility = 'hidden';
                commandButton.classList.remove('active');
                menuOpen = false;
            }
        }
        
        // Toggle the menu when clicking the button
        commandButton.addEventListener('click', function(e) {
            // Prevent the click from reaching the document
            e.stopPropagation();
            toggleCommandMenu(!menuOpen);
        });
        
        // Close the menu when clicking outside
        document.addEventListener('click', function() {
            if (menuOpen) {
                toggleCommandMenu(false);
            }
        });
    }

    // Scroll to section function
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                
                if (target) {
                    // Add highlight effect to the target section
                    target.style.transition = 'box-shadow 0.3s ease';
                    target.style.boxShadow = '0 0 0 2px var(--accent-color)';
                    
                    // Remove the highlight after a delay
                    setTimeout(() => {
                        target.style.boxShadow = '';
                    }, 1500);
                    
                    // Scroll to the section
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Enhanced profile image animation
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            // Apply a more complex animation
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 0 30px 0px var(--glow-color)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.1), 0 15px 20px -10px rgba(0, 0, 0, 0.3)';
            }, 500);
        });
    }

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.profile-card, .social-links, .command-button, .about-section, .projects-section, .project-card');
    
    function checkReveal() {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);
            
            if (isVisible && !el.classList.contains('revealed')) {
                el.classList.add('revealed');
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for reveal elements
    revealElements.forEach(el => {
        if (!el.style.opacity) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
    
    // Check elements on load
    checkReveal();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkReveal);
    
    // Animate the text in the about section
    const aboutText = document.querySelector('.about-content p');
    if (aboutText) {
        const text = aboutText.textContent;
        const words = text.split(' ');
        
        // Add spans to highlight certain keywords
        const keywords = ['HTML', 'CSS', 'JavaScript', 'React', 'responsive', 'user-friendly', 'developer'];
        const newText = words.map(word => {
            for (const keyword of keywords) {
                if (word.includes(keyword)) {
                    return word.replace(keyword, `<span>${keyword}</span>`);
                }
            }
            return word;
        }).join(' ');
        
        aboutText.innerHTML = newText;
    }
    
    // Role switching animation
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        // Add glow effect on hover
        titleElement.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px var(--glow-color)';
        });
        
        titleElement.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
        
        // Make sure roles have the correct initial state
        const softwareRole = titleElement.querySelector('.role.software');
        const frontendRole = titleElement.querySelector('.role.frontend');
        
        if (softwareRole && frontendRole) {
            // Ensure the frontend role is positioned correctly
            frontendRole.style.width = softwareRole.offsetWidth + 'px';
            
            // Update on window resize
            window.addEventListener('resize', function() {
                frontendRole.style.width = softwareRole.offsetWidth + 'px';
            });
        }
    }
    
    // Add particle background effect
    createParticles();
    
    // Ensure underline colors are correctly applied
    fixUnderlineColors(THEME.accentColor);
});

// Create the particle background effect
function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = duration + 's';
        
        // Add to document
        document.body.appendChild(particle);
    }
}

// Setup command button functionality
function setupCommandButton() {
    const commandButton = document.querySelector('.command-button');
    const commandMenu = document.createElement('div');
    commandMenu.className = 'command-menu';
    commandMenu.style.display = 'none';
    
    // Create command menu options - only include these three options
    const options = [
        { name: 'Adjust Particle Density', icon: 'fa-sliders', action: 'adjustParticles' },
        { name: 'Download Resume', icon: 'fa-download', action: 'downloadResume' },
        { name: 'Copy Email', icon: 'fa-envelope', action: 'copyEmail' }
    ];
    
    // Generate menu items
    options.forEach(option => {
        const item = document.createElement('div');
        item.className = 'command-item';
        item.innerHTML = `<i class="fas ${option.icon}"></i><span>${option.name}</span>`;
        item.setAttribute('data-action', option.action);
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            handleCommandAction(option.action);
            commandMenu.style.display = 'none';
            commandButton.classList.remove('active');
        });
        
        commandMenu.appendChild(item);
    });
    
    // Add menu to the DOM
    document.querySelector('.profile-section').appendChild(commandMenu);
    
    // Toggle command menu on button click
    if (commandButton) {
        commandButton.addEventListener('click', function() {
            const isVisible = commandMenu.style.display === 'block';
            commandMenu.style.display = isVisible ? 'none' : 'block';
            this.classList.toggle('active', !isVisible);
            
            if (!isVisible) {
                // Add animation when opening
                commandMenu.style.opacity = '0';
                commandMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    commandMenu.style.opacity = '1';
                    commandMenu.style.transform = 'translateY(0)';
                }, 50);
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!commandButton.contains(e.target) && !commandMenu.contains(e.target)) {
                commandMenu.style.display = 'none';
                commandButton.classList.remove('active');
            }
        });
    }
}

// Handle command actions
function handleCommandAction(action) {
    switch(action) {
        case 'adjustParticles':
            adjustParticleDensity();
            break;
        case 'downloadResume':
            // Placeholder for resume download
            alert('Resume download would start here (link to your actual resume)');
            break;
        case 'copyEmail':
            // Copy your email to clipboard
            navigator.clipboard.writeText('your.email@example.com')
                .then(() => {
                    showToast('Email copied to clipboard!');
                })
                .catch(err => {
                    showToast('Failed to copy email');
                });
            break;
        // No other actions should be processed
    }
}

// Adjust particle density
function adjustParticleDensity() {
    // Create a dialog for particle density adjustment
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Adjust Particle Density</h3>
            <input type="range" min="0" max="100" value="40" class="slider" id="particleSlider">
            <div class="density-labels">
                <span>None</span>
                <span>Dense</span>
            </div>
            <button class="apply-button">Apply</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(dialog);
    
    // Show with animation
    setTimeout(() => {
        dialog.style.opacity = '1';
    }, 50);
    
    // Handle slider changes
    const slider = dialog.querySelector('#particleSlider');
    
    // Apply button
    const applyButton = dialog.querySelector('.apply-button');
    applyButton.addEventListener('click', function() {
        // Remove all existing particles
        document.querySelectorAll('.particle').forEach(p => p.remove());
        
        // Create new particles based on slider value
        const particleCount = parseInt(slider.value);
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.left = Math.random() * 100 + 'vw';
            
            // Random size
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = duration + 's';
            
            // Random parallax intensity
            const intensity = Math.random() * 0.5 + 0.1;
            particle.setAttribute('data-intensity', intensity);
            
            // Add to document
            document.body.appendChild(particle);
        }
        
        // Close dialog
        dialog.style.opacity = '0';
        setTimeout(() => {
            dialog.remove();
        }, 300);
        
        showToast('Particle density updated!');
    });
    
    // Close dialog when clicking outside
    dialog.addEventListener('click', function(e) {
        if (e.target === dialog) {
            dialog.style.opacity = '0';
            setTimeout(() => {
                dialog.remove();
            }, 300);
        }
    });
}

// Show toast notification
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        
        // Remove from DOM after animation
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Update scrollbar colors with current accent color
function updateScrollbarColors() {
    const currentAccentColor = THEME.accentColor;
    const gradientColor = adjustColor(currentAccentColor, 20); // Slightly lighter color for gradient
    
    let scrollbarStyle = document.getElementById('scrollbar-styles');
    if (!scrollbarStyle) {
        scrollbarStyle = document.createElement('style');
        scrollbarStyle.id = 'scrollbar-styles';
        document.head.appendChild(scrollbarStyle);
    }
    
    scrollbarStyle.innerHTML = `
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, ${currentAccentColor}, ${gradientColor});
            border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, ${adjustColor(currentAccentColor, -10)}, ${currentAccentColor});
        }
    `;
}

// Function to apply the Midnight Blue theme
function applyMidnightTheme() {
    // Create a style element for midnight theme
    let themeStyle = document.getElementById('theme-styles');
    if (!themeStyle) {
        themeStyle = document.createElement('style');
        themeStyle.id = 'theme-styles';
        document.head.appendChild(themeStyle);
    }
    
    // Apply the theme
    themeStyle.innerHTML = `
        :root {
            --bg-primary: ${THEME.bgPrimary};
            --bg-secondary: ${adjustColor(THEME.bgPrimary, 5)};
            --bg-card: ${THEME.bgCard};
            --text-primary: ${THEME.textPrimary};
            --text-secondary: ${THEME.textSecondary};
            --card-border: rgba(31, 41, 55, 0.5);
            --glass-highlight: rgba(255, 255, 255, 0.05);
            --accent-color: ${THEME.accentColor};
            --accent-color-transparent: ${THEME.accentColor}55;
            --accent-color-hover: ${adjustColor(THEME.accentColor, -10)};
            --accent-glow: 0 0 10px ${THEME.accentColor}aa, 0 0 20px ${THEME.accentColor}77, 0 0 30px ${THEME.accentColor}44;
            --glow-color: ${THEME.accentColor}77;
            --scrollbar-thumb: ${THEME.accentColor};
            --scrollbar-thumb-hover: ${adjustColor(THEME.accentColor, -15)};
        }
        
        /* Ensure these elements have the right color */
        .name { color: ${THEME.accentColor}; }
        .section-title { color: ${THEME.accentColor}; }
    `;
    
    // Update scrollbar colors
    updateScrollbarColors();
    
    // Fix underline colors directly
    fixUnderlineColors(THEME.accentColor);
}

// Function to fix underline colors using CSS custom properties approach
function fixUnderlineColors(color) {
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.setProperty('--underline-color', color);
    });
    
    // Create a style element just for underlines
    let underlineStyle = document.getElementById('underline-styles');
    if (!underlineStyle) {
        underlineStyle = document.createElement('style');
        underlineStyle.id = 'underline-styles';
        document.head.appendChild(underlineStyle);
    }
    
    // Set the color directly with !important
    underlineStyle.innerHTML = `
        /* Force underline colors */
        .section-title::after {
            background-color: ${color} !important;
            background: ${color} !important;
        }
        #about-title::after {
            background-color: ${color} !important;
            background: ${color} !important;
        }
        #skills-title::after {
            background-color: ${color} !important;
            background: ${color} !important;
        }
        #projects-title::after {
            background-color: ${color} !important;
            background: ${color} !important;
        }
        #education-title::after {
            background-color: ${color} !important;
            background: ${color} !important;
        }
    `;
}

// Adjust color brightness (helper function)
function adjustColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
        0x1000000 + 
        (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + 
        (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + 
        (B < 255 ? (B < 0 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

// Setup card interactions
function setupCardInteractions() {
    // Add 3D tilt effect to profile card
    const profileCard = document.querySelector('.profile-card');
    
    if (profileCard) {
        profileCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation values
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 20;
            const rotateY = (x - centerX) / 20;
            
            // Apply the effect
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Highlight effect
            const intensity = 1 - Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) / Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
            this.style.boxShadow = `0 15px 35px -15px rgba(0, 0, 0, 0.4),
                                   inset 0 1px 0 0 var(--glass-highlight),
                                   0 0 ${30 * intensity}px ${intensity * 5}px var(--glow-color)`;
        });
        
        profileCard.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
            this.style.boxShadow = '0 10px 30px -15px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 var(--glass-highlight)';
        });
    }
}

// Setup parallax effect
function setupParallaxEffect() {
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        particles.forEach(particle => {
            // Random parallax intensity for each particle
            const intensity = parseFloat(particle.getAttribute('data-intensity') || Math.random() * 0.5 + 0.1);
            particle.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
        });
    });
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for command menu
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.command-button').click();
        }
    });
}

// Initialize particles with theme colors
function initParticles() {
    try {
        // Check if particles.js exists
        if (typeof particlesJS !== 'undefined') {
            // Get the current accent color
            const accentColor = THEME.accentColor;
            
            // Update particle colors with the current accent color
            const updatedConfig = {...particlesConfig};
            updatedConfig.particles.color.value = accentColor;
            updatedConfig.particles.line_linked.color = accentColor;
            
            // Initialize particles with the accent color
            particlesJS('particles-js', updatedConfig);
            console.log("Particles initialized with accent color:", accentColor);
        } else {
            // Fall back to simple CSS particles
            createParticles();
            console.log("Using fallback CSS particles (particles.js not found)");
        }
    } catch (error) {
        console.error("Error initializing particles:", error);
        // Fall back to simple particles
        createParticles();
    }
}

// Add scroll-triggered animations
function setupScrollAnimations() {
    // Add reveal-on-scroll class to elements we want to animate
    const elementsToAnimate = [
        '.about-section', 
        '.projects-section', 
        '.education-section',
        '.project-card',
        '.education-item',
        '.skills-container'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('reveal-on-scroll');
        });
    });
    
    // Function to check if element is in viewport and animate
    function checkElementsInView() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // How many pixels should be visible before triggering
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('revealed');
                
                // If it's the skills container, also animate the skills
                if (element.classList.contains('skills-container')) {
                    const skillsGrid = element.querySelector('.skills-grid');
                    if (skillsGrid) {
                        skillsGrid.classList.add('animated');
                    }
                }
            }
        });
    }
    
    // Check elements in view on initial load
    checkElementsInView();
    
    // Check elements in view on scroll
    window.addEventListener('scroll', checkElementsInView);
}

// Enhanced particle animation
function createEnhancedParticles() {
    const container = document.querySelector('.container');
    const particleCount = 50; // Increased count for more visual effect
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Random size - more variation
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 15;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        
        // Random opacity
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        
        // Random parallax intensity
        const intensity = Math.random() * 0.7 + 0.3;
        particle.setAttribute('data-intensity', intensity);
        
        // Add to document
        document.body.appendChild(particle);
    }
}

// Enhanced hover effects for elements
function setupEnhancedHoverEffects() {
    // Profile card tilt effect
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation values
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 15; // More subtle rotation
            const rotateY = (x - centerX) / 15;
            
            // Apply the effect
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Dynamic glow effect based on cursor position
            const distanceFromCenter = Math.sqrt(
                Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );
            const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
            const intensity = 1 - (distanceFromCenter / maxDistance);
            
            this.style.boxShadow = `
                0 15px 35px -15px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 0 var(--glass-highlight),
                0 0 ${30 * intensity}px ${intensity * 8}px var(--glow-color)
            `;
            
            // Add subtle border glow
            this.style.borderColor = `rgba(59, 130, 246, ${intensity * 0.8})`;
        });
        
        profileCard.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
            this.style.boxShadow = '0 10px 30px -15px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 var(--glass-highlight)';
            this.style.borderColor = 'var(--card-border)';
        });
    }
    
    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add floating effect to icons
            const icon = this.querySelector('.project-header i');
            if (icon) {
                icon.style.animation = 'pulse 2s infinite';
                icon.style.transform = 'scale(1.2) translateY(-3px)';
                icon.style.backgroundColor = 'var(--accent-color)';
                icon.style.color = 'white';
            }
            
            // Animate the project tech badges
            const techBadges = this.querySelectorAll('.tech-badge');
            techBadges.forEach((badge, index) => {
                badge.style.transform = 'translateY(-5px)';
                badge.style.transition = 'all 0.3s ease';
                badge.style.transitionDelay = `${index * 0.05}s`;
                badge.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                badge.style.color = 'var(--accent-color)';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset icon animation
            const icon = this.querySelector('.project-header i');
            if (icon) {
                icon.style.animation = '';
                icon.style.transform = 'scale(1) translateY(0)';
                icon.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                icon.style.color = 'var(--accent-color)';
            }
            
            // Reset tech badges
            const techBadges = this.querySelectorAll('.tech-badge');
            techBadges.forEach(badge => {
                badge.style.transform = 'translateY(0)';
                badge.style.backgroundColor = 'rgba(10, 10, 19, 0.5)';
                badge.style.color = 'var(--text-secondary)';
            });
        });
    });
    
    // Text highlight animation for about section
    const aboutContent = document.querySelector('.about-content p');
    if (aboutContent) {
        // Add letter-by-letter animation when in view
        aboutContent.addEventListener('mouseenter', function() {
            this.querySelectorAll('span').forEach((span, index) => {
                span.style.transition = 'all 0.3s ease';
                span.style.transitionDelay = `${index * 0.03}s`;
                span.style.color = '#60a5fa';
                span.style.textShadow = '0 0 8px var(--glow-color)';
            });
        });
        
        aboutContent.addEventListener('mouseleave', function() {
            this.querySelectorAll('span').forEach(span => {
                span.style.color = 'var(--accent-color)';
                span.style.textShadow = 'none';
            });
        });
    }
}

// Particle movement with cursor
function setupParticleInteraction() {
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            // Calculate distance from mouse to particle
            const dx = mouseX - particleX;
            const dy = mouseY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only affect particles within a certain radius
            const radius = 150;
            if (distance < radius) {
                // The closer the particle, the stronger the effect
                const intensity = 1 - (distance / radius);
                const moveX = dx * intensity * 0.2;
                const moveY = dy * intensity * 0.2;
                
                // Add a subtle repel effect
                particle.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
                particle.style.transition = 'transform 0.5s ease';
                
                // Make particles glow slightly when close to cursor
                particle.style.boxShadow = `0 0 ${5 * intensity}px ${intensity * 2}px var(--accent-color)`;
                particle.style.opacity = (0.2 + intensity * 0.5).toString();
            } else {
                // Reset particles that are outside the radius
                particle.style.transform = 'translate(0, 0)';
                particle.style.boxShadow = 'none';
                particle.style.opacity = particle.getAttribute('data-opacity') || '0.3';
            }
        });
    });
}

// Initialize all the enhanced animation features
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - initializing enhanced animations...");
    
    // Initialize with fixed midnight theme
    applyMidnightTheme();
    
    // Initialize particles
    initParticles();
    
    // Add new animation features
    setupScrollAnimations();
    createEnhancedParticles();
    setupEnhancedHoverEffects();
    setupParticleInteraction();
    
    // Initialize other UI components
    setupSmoothScrolling();
    setupMobileNavigation();
    setupProjectModal();
    setupTypingAnimation();
    setupScrollToTopButton();
    setupCommandMenu();
    setupContactFormValidation();
    
    // Initialize animations
    setTimeout(() => {
        initSlideUpAnimations();
        setupSectionTextAnimations();
    }, 500);
    
    // Rest of your existing initialization code...
});

// Function to create futuristic cursor effects
function setupFuturisticCursor() {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    
    // Style the cursor elements
    cursorDot.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 5px;
        height: 5px;
        background-color: var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
        box-shadow: 0 0 10px var(--accent-color), 0 0 15px var(--accent-color);
    `;
    
    cursorRing.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border: 1px solid var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, transform 0.2s ease;
        opacity: 0.5;
    `;
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    // Track movement for bubble creation
    let lastX = 0;
    let lastY = 0;
    let bubbleTimer = null;
    
    // Handle mousemove to update cursor position
    document.addEventListener('mousemove', function(e) {
        const currentX = e.clientX;
        const currentY = e.clientY;
        
        // Calculate distance moved
        const distance = Math.sqrt(Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2));
        
        // Update cursor position
        cursorDot.style.left = currentX + 'px';
        cursorDot.style.top = currentY + 'px';
        
        // Slight delay for the ring to create trailing effect
        setTimeout(() => {
            cursorRing.style.left = currentX + 'px';
            cursorRing.style.top = currentY + 'px';
        }, 50);
        
        // Create bubbles on fast movement (higher threshold for less frequent bubbles)
        if (distance > 30) {
            createBubble(currentX, currentY);
            lastX = currentX;
            lastY = currentY;
        } else {
            // Update position without creating bubbles
            lastX = currentX;
            lastY = currentY;
            
            // Create occasional bubbles during slow movement (lower probability)
            clearTimeout(bubbleTimer);
            bubbleTimer = setTimeout(() => {
                if (Math.random() > 0.9) {
                    createBubble(currentX, currentY);
                }
            }, 200);
        }
    });
    
    // Create bubble effect
    function createBubble(x, y) {
        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';
        
        // Smaller size for more subtle effect
        const size = Math.random() * 8 + 3; // 3-11px range
        
        // Subtle hue variation
        const hue = Math.random() * 30 - 15; // Narrower color range for consistency
        const saturation = 75 + Math.random() * 15;
        const lightness = 55 + Math.random() * 10;
        
        // More gentle, natural movement
        const randX = (Math.random() - 0.5) * 1.2; // -0.6 to 0.6 range
        const randY = -Math.random() - 0.2; // -1.2 to -0.2 range (always upward)
        
        bubble.style.setProperty('--rand-x', randX);
        bubble.style.setProperty('--rand-y', randY);
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        
        // Semi-transparent color
        bubble.style.backgroundColor = `hsla(${hue + 210}, ${saturation}%, ${lightness}%, 0.85)`;
        
        // Shorter duration for quicker, smoother animation
        const duration = 0.8 + Math.random() * 0.7; // 0.8-1.5s
        bubble.style.animationDuration = `${duration}s`;
        
        // Very slight blur for smoother appearance
        if (Math.random() > 0.5) {
            bubble.style.filter = `blur(${Math.random() * 0.8}px)`;
        }
        
        document.body.appendChild(bubble);
        
        // Remove bubble after animation completes
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }
    
    // Create bubbles on click
    document.addEventListener('click', function(e) {
        // Create fewer bubbles on click for a more subtle effect
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createBubble(e.clientX, e.clientY);
            }, i * 30);
        }
        
        // Make cursor dot pulse
        cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
        setTimeout(() => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
    });
    
    // Scale effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .social-icon, .command-button, .skill-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorRing.style.width = '50px';
            cursorRing.style.height = '50px';
            cursorRing.style.borderColor = '#60a5fa';
            cursorRing.style.mixBlendMode = 'difference';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            
            // Create a bubble effect on hover
            createBubble(lastX, lastY);
        });
        
        el.addEventListener('mouseleave', function() {
            cursorRing.style.width = '30px';
            cursorRing.style.height = '30px';
            cursorRing.style.borderColor = 'var(--accent-color)';
            cursorRing.style.mixBlendMode = 'normal';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Click animation
    document.addEventListener('mousedown', function() {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// Function to create 3D card effect
function setup3DCardEffect() {
    const cards = document.querySelectorAll('.profile-card, .project-card, .education-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 10;
            const rotateY = (x - centerX) / 10;
            
            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Create shine effect
            const shine = card.querySelector('.card-shine') || createShineElement(card);
            
            const d = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            const opacity = 1 - d / Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
            
            shine.style.opacity = opacity;
            shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease-out';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            
            const shine = card.querySelector('.card-shine');
            if (shine) shine.style.opacity = '0';
        });
    });
    
    function createShineElement(parent) {
        const shine = document.createElement('div');
        shine.className = 'card-shine';
        shine.style.position = 'absolute';
        shine.style.top = '0';
        shine.style.left = '0';
        shine.style.width = '100%';
        shine.style.height = '100%';
        shine.style.opacity = '0';
        shine.style.transition = 'opacity 0.3s ease-out';
        shine.style.borderRadius = getComputedStyle(parent).borderRadius;
        shine.style.pointerEvents = 'none';
        shine.style.zIndex = '2';
        parent.appendChild(shine);
        return shine;
    }
}

// Create cyberpunk tech lines effect
function createTechLines() {
    const container = document.createElement('div');
    container.className = 'tech-lines-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    // Create horizontal lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'tech-line horizontal';
        line.style.cssText = `
            position: absolute;
            height: 1px;
            width: 100%;
            top: ${i * 10 + Math.random() * 5}%;
            background: linear-gradient(90deg, transparent, var(--accent-color) 50%, transparent);
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        container.appendChild(line);
    }
    
    // Create vertical lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'tech-line vertical';
        line.style.cssText = `
            position: absolute;
            width: 1px;
            height: 100%;
            left: ${i * 10 + Math.random() * 5}%;
            background: linear-gradient(transparent, var(--accent-color) 50%, transparent);
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        container.appendChild(line);
    }
    
    document.body.appendChild(container);
    
    // Animate lines
    const horizontalLines = document.querySelectorAll('.tech-line.horizontal');
    const verticalLines = document.querySelectorAll('.tech-line.vertical');
    
    function animateLines() {
        horizontalLines.forEach(line => {
            const speed = Math.random() * 5 + 2;
            line.animate([
                { transform: 'translateX(-5%)' },
                { transform: 'translateX(5%)' }
            ], {
                duration: speed * 1000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
        });
        
        verticalLines.forEach(line => {
            const speed = Math.random() * 5 + 2;
            line.animate([
                { transform: 'translateY(-5%)' },
                { transform: 'translateY(5%)' }
            ], {
                duration: speed * 1000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
        });
    }
    
    animateLines();
}

// Create digital code rain effect
function createCodeRain() {
    const canvas = document.createElement('canvas');
    canvas.className = 'code-rain';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
        opacity: 0.05;
    `;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Characters for the matrix effect
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(canvas.width / 15); // Character width
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / 15) * -1;
    }
    
    // Drawing function
    function draw() {
        // Translucent overlay to create trail effect
        ctx.fillStyle = 'rgba(10, 10, 19, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set the color and font
        ctx.fillStyle = 'var(--accent-color)';
        ctx.font = '15px monospace';
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = chars[Math.floor(Math.random() * chars.length)];
            
            // Draw character
            ctx.fillText(char, i * 15, drops[i] * 15);
            
            // Move the drop down
            drops[i]++;
            
            // Reset drop if it reaches bottom or randomly
            if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
    }
    
    // Animation loop
    function animate() {
        draw();
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Enhanced interactive particles
function enhanceParticles() {
    // Get existing particles
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        // Add data-state attribute for tracking
        particle.setAttribute('data-state', 'idle');
        
        // Add advanced interaction capabilities
        particle.style.transition = 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease';
    });
    
    // Create particle attraction to cursor
    document.addEventListener('mousemove', e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            // Calculate distance from mouse to particle
            const dx = mouseX - particleX;
            const dy = mouseY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Interaction radius
            const radius = 150;
            
            if (distance < radius) {
                // The closer the particle, the stronger the effect
                const intensity = (radius - distance) / radius;
                
                // Calculate movement direction
                const angle = Math.atan2(dy, dx);
                const moveX = Math.cos(angle) * intensity * 50;
                const moveY = Math.sin(angle) * intensity * 50;
                
                // Apply movement with some elasticity
                particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + intensity})`;
                particle.style.opacity = Math.min(1, parseFloat(particle.style.opacity || 0.3) + intensity * 0.5);
                particle.style.boxShadow = `0 0 ${10 * intensity}px ${intensity * 3}px var(--accent-color)`;
                particle.style.zIndex = '5';
                
                // Set active state
                particle.setAttribute('data-state', 'active');
            } else if (particle.getAttribute('data-state') === 'active') {
                // Return to original position
                particle.style.transform = 'translate(0, 0) scale(1)';
                particle.style.opacity = particle.getAttribute('data-original-opacity') || '0.3';
                particle.style.boxShadow = 'none';
                particle.style.zIndex = '-1';
                
                // Reset state
                particle.setAttribute('data-state', 'idle');
            }
        });
    });
    
    // Particle explosion on click
    document.addEventListener('click', e => {
        // Create explosion particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle explosion';
            particle.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background-color: var(--accent-color);
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.5};
                z-index: 100;
                pointer-events: none;
            `;
            
            document.body.appendChild(particle);
            
            // Set random direction and distance
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const duration = Math.random() * 1000 + 500;
            
            // Animate particle
            const keyframes = [
                { 
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                    opacity: 0
                }
            ];
            
            const animation = particle.animate(keyframes, {
                duration: duration,
                easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)'
            });
            
            // Remove particle when animation completes
            animation.onfinish = () => {
                particle.remove();
            };
        }
    });
}

// Add initialization of futuristic effects to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing futuristic animations...");
    
    // Initialize all the futuristic effects
    setTimeout(() => {
        setupFuturisticCursor();
        setup3DCardEffect();
        createTechLines();
        createCodeRain();
        enhanceParticles();
    }, 1000);
}); 