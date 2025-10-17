// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.about-card, .activity-item, .schedule-card, .contact-info, .contact-form');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Update upcoming dates dynamically
function updateUpcomingDates() {
    const upcomingDatesContainer = document.querySelector('.upcoming-dates');
    const currentDate = new Date();
    const upcomingDates = [];

    // Calculate next 3 last Wednesdays of upcoming months
    for (let i = 0; i < 3; i++) {
        const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i + 1, 0);
        const lastWednesday = getLastWednesday(futureDate);
        upcomingDates.push(lastWednesday);
    }

    // Update the HTML
    upcomingDatesContainer.innerHTML = upcomingDates.map(date => `
        <div class="upcoming-date">
            <strong>${date.toLocaleDateString('de-DE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}</strong>
            <span>19:00 Uhr</span>
        </div>
    `).join('');
}

function getLastWednesday(date) {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const day = lastDay.getDay();
    const diff = day >= 3 ? day - 3 : day + 4;
    return new Date(lastDay.getTime() - diff * 24 * 60 * 60 * 1000);
}

// Initialize dynamic dates when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateUpcomingDates();
});

// Add some interactivity to contact methods
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.2)';
    });

    method.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
});