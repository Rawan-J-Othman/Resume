// ========================================
// Chart.js Configurations - Beautiful & Colorful
// ========================================

// Vibrant color palette for beautiful charts
const chartColors = {
    coral: '#FF6B6B',
    teal: '#4ECDC4',
    purple: '#9B59B6',
    orange: '#F39C12',
    pink: '#E91E63',
    blue: '#3498DB',
    green: '#2ECC71',
    yellow: '#F1C40F',
    indigo: '#6C5CE7',
    mint: '#00D2B8'
};

// Global Chart.js defaults
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif";

// ========================================
// Chart 1: Nutrition Counseling Focus - Doughnut Chart
// ========================================
const nutritionCtx = document.getElementById('nutritionChart');
if (nutritionCtx) {
    new Chart(nutritionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Weight Management', 'Sports Nutrition', 'Clinical Nutrition', 'Wellness Coaching', 'Meal Planning', 'Health Education'],
            datasets: [{
                data: [30, 20, 20, 15, 10, 5],
                backgroundColor: [
                    chartColors.coral,
                    chartColors.teal,
                    chartColors.purple,
                    chartColors.orange,
                    chartColors.pink,
                    chartColors.blue
                ],
                borderColor: '#1a1a2e',
                borderWidth: 3,
                hoverOffset: 15,
                hoverBorderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 25,
                    bottom: 25,
                    left: 20,
                    right: 20
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 12,
                        font: {
                            size: 11,
                            weight: '500'
                        },
                        color: '#ffffff',
                        boxWidth: 12,
                        boxHeight: 12,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 15,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeInOutCubic'
            }
        }
    });
}

// ========================================
// Chart 2: Client Health Goals - Bar Chart with Gradient
// ========================================
const clientGoalsCtx = document.getElementById('clientGoalsChart');
if (clientGoalsCtx) {
    new Chart(clientGoalsCtx, {
        type: 'bar',
        data: {
            labels: ['Weight Loss', 'Muscle Gain', 'Disease Mgmt', 'Energy Boost', 'General Health'],
            datasets: [{
                label: 'Client Distribution (%)',
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                    chartColors.blue,
                    chartColors.green,
                    chartColors.orange,
                    chartColors.pink,
                    chartColors.purple
                ],
                borderColor: [
                    chartColors.blue,
                    chartColors.green,
                    chartColors.orange,
                    chartColors.pink,
                    chartColors.purple
                ],
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: [
                    chartColors.teal,
                    chartColors.mint,
                    chartColors.yellow,
                    chartColors.coral,
                    chartColors.indigo
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 15,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Clients: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#ffffff',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            }
        }
    });
}

// ========================================
// Chart 3: Service Distribution - Pie Chart
// ========================================
const servicesCtx = document.getElementById('servicesChart');
if (servicesCtx) {
    new Chart(servicesCtx, {
        type: 'pie',
        data: {
            labels: ['Nutrition Counseling', 'Personal Training', 'Meal Planning', 'Education', 'Healthcare Support'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    chartColors.indigo,
                    chartColors.mint,
                    chartColors.yellow,
                    chartColors.coral,
                    chartColors.pink
                ],
                borderColor: '#1a1a2e',
                borderWidth: 3,
                hoverOffset: 15,
                hoverBorderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 11,
                            weight: '500'
                        },
                        color: '#ffffff',
                        boxWidth: 15,
                        boxHeight: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 15,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeInOutCubic'
            }
        }
    });
}

// ========================================
// Chart 4: Skills Proficiency - Vertical Bar Chart
// ========================================
const skillsCtx = document.getElementById('skillsChart');
if (skillsCtx) {
    new Chart(skillsCtx, {
        type: 'bar',
        data: {
            labels: [
                'Nutritional Analysis',
                'Client Counseling',
                'Meal Planning',
                'Fitness Training',
                'Patient Education',
                'Cultural Competency'
            ],
            datasets: [{
                label: 'Proficiency Level (%)',
                data: [95, 90, 95, 85, 88, 92],
                backgroundColor: [
                    chartColors.coral,
                    chartColors.teal,
                    chartColors.purple,
                    chartColors.orange,
                    chartColors.pink,
                    chartColors.indigo
                ],
                borderColor: [
                    chartColors.coral,
                    chartColors.teal,
                    chartColors.purple,
                    chartColors.orange,
                    chartColors.pink,
                    chartColors.indigo
                ],
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: [
                    chartColors.pink,
                    chartColors.coral,
                    chartColors.indigo,
                    chartColors.yellow,
                    chartColors.mint,
                    chartColors.purple
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 50,
                    left: 20,
                    right: 20
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    padding: 15,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Proficiency: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#ffffff',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff',
                        font: {
                            size: 11
                        },
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            }
        }
    });
}

// ========================================
// Smooth Scrolling for Internal Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Intersection Observer for Fade-in Animation
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ========================================
// Dynamic Year in Footer (if needed)
// ========================================
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// ========================================
// Stats Counter Animation
// ========================================
const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const numberMatch = text.match(/\d+/);

            if (numberMatch) {
                const targetNumber = parseInt(numberMatch[0]);
                const suffix = text.replace(numberMatch[0], '');
                statNumber.textContent = '0' + suffix;
                animateValue(statNumber, 0, targetNumber, 1500, suffix);
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Console Message
// ========================================
console.log('%c👋 Welcome to Rawan J. Othman\'s Professional Resume!',
    'color: #4ECDC4; font-size: 16px; font-weight: bold;');
console.log('%cCertified Nutritionist | Personal Trainer | Wellness Coach',
    'color: #FF6B6B; font-size: 12px;');
console.log('%cInterested in collaborating? Email: othmanrawan21@gmail.com',
    'color: #b3b3b3; font-size: 11px;');
