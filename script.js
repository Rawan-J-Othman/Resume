// ========================================
// Chart.js Configurations
// ========================================

// Color palette matching the dark navy + lime green theme
const chartColors = {
    primary: 'hsl(100, 70%, 55%)',
    primaryLight: 'hsl(100, 70%, 65%)',
    primaryDark: 'hsl(100, 70%, 45%)',
    accent: 'hsl(100, 70%, 55%)',
    accentLight: 'hsl(100, 70%, 65%)',
    background: 'rgba(163, 230, 53, 0.1)',
    border: 'rgba(163, 230, 53, 0.3)'
};

// Global Chart.js defaults
Chart.defaults.color = '#b3b3b3';
Chart.defaults.borderColor = 'rgba(163, 230, 53, 0.1)';
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif";

// ========================================
// Chart 1: Nutrition Counseling Focus
// ========================================
const nutritionCtx = document.getElementById('nutritionChart');
if (nutritionCtx) {
    new Chart(nutritionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Weight Management', 'Sports Nutrition', 'Clinical Nutrition', 'Wellness Coaching', 'Meal Planning'],
            datasets: [{
                data: [30, 20, 20, 15, 15],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.primaryLight,
                    chartColors.accent,
                    chartColors.accentLight,
                    chartColors.primaryDark
                ],
                borderColor: '#2C3E50',
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 10,
                    right: 10
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 8,
                        font: {
                            size: 10
                        },
                        boxWidth: 10,
                        usePointStyle: true,
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    const dataset = data.datasets[0];
                                    return {
                                        text: label,
                                        fillStyle: dataset.backgroundColor[i],
                                        strokeStyle: dataset.borderColor[i],
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    },
                    maxWidth: 400,
                    fullSize: false
                },
                tooltip: {
                    backgroundColor: 'rgba(44, 62, 80, 0.95)',
                    padding: 12,
                    titleFont: {
                        size: 13,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
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
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// ========================================
// Chart 2: Client Health Goals
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
                    chartColors.primary,
                    chartColors.primaryLight,
                    chartColors.accent,
                    chartColors.accentLight,
                    chartColors.primaryDark
                ],
                borderColor: [
                    chartColors.primaryDark,
                    chartColors.primary,
                    chartColors.accent,
                    chartColors.accent,
                    chartColors.primary
                ],
                borderWidth: 2,
                borderRadius: 6,
                hoverBackgroundColor: chartColors.accentLight
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(44, 62, 80, 0.95)',
                    padding: 12,
                    titleFont: {
                        size: 13,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 12
                    },
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
                        }
                    },
                    grid: {
                        color: 'rgba(163, 230, 53, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// ========================================
// Chart 3: Service Distribution
// ========================================
const servicesCtx = document.getElementById('servicesChart');
if (servicesCtx) {
    new Chart(servicesCtx, {
        type: 'polarArea',
        data: {
            labels: ['Nutrition Counseling', 'Personal Training', 'Meal Planning', 'Education/Teaching', 'Healthcare Support'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(107, 190, 146, 0.7)',
                    'rgba(143, 209, 169, 0.7)',
                    'rgba(244, 164, 96, 0.7)',
                    'rgba(255, 183, 124, 0.7)',
                    'rgba(74, 159, 115, 0.7)'
                ],
                borderColor: [
                    chartColors.primary,
                    chartColors.primaryLight,
                    chartColors.accent,
                    chartColors.accentLight,
                    chartColors.primaryDark
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 10,
                    right: 10
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 6,
                        font: {
                            size: 9
                        },
                        boxWidth: 10,
                        usePointStyle: true
                    },
                    maxWidth: 400
                },
                tooltip: {
                    backgroundColor: 'rgba(44, 62, 80, 0.95)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: 'rgba(163, 230, 53, 0.1)'
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// ========================================
// Chart 4: Skills Proficiency
// ========================================
const skillsCtx = document.getElementById('skillsChart');
if (skillsCtx) {
    new Chart(skillsCtx, {
        type: 'radar',
        data: {
            labels: [
                'Nutritional Analysis',
                'Client Counseling',
                'Meal Planning',
                'Fitness Training',
                'Healthcare Knowledge',
                'Patient Education',
                'Cultural Competency'
            ],
            datasets: [{
                label: 'Proficiency Level',
                data: [95, 90, 95, 85, 90, 88, 92],
                backgroundColor: 'rgba(107, 190, 146, 0.2)',
                borderColor: chartColors.primary,
                borderWidth: 2,
                pointBackgroundColor: chartColors.accent,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: chartColors.accent,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30,
                    bottom: 10,
                    left: 30,
                    right: 30
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(44, 62, 80, 0.95)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        display: true,
                        callback: function(value) {
                            return value + '%';
                        },
                        backdropColor: 'transparent',
                        font: {
                            size: 9
                        },
                        color: 'hsl(220, 10%, 60%)'
                    },
                    grid: {
                        color: 'rgba(163, 230, 53, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(163, 230, 53, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 9
                        },
                        padding: 15,
                        color: 'hsl(220, 10%, 70%)'
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
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
    'color: hsl(100, 70%, 55%); font-size: 16px; font-weight: bold;');
console.log('%cCertified Nutritionist | Personal Trainer | Wellness Coach',
    'color: hsl(100, 70%, 55%); font-size: 12px;');
console.log('%cInterested in collaborating? Email: othmanrawan21@gmail.com',
    'color: #b3b3b3; font-size: 11px;');