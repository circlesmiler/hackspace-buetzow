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
    // Get CSS custom properties from the root element
    const rootStyles = getComputedStyle(document.documentElement);
    const bgWhite = rootStyles.getPropertyValue('--background-white').trim();

    if (window.scrollY > 100) {
        header.style.background = `${bgWhite}f8`; // Add higher opacity (f8 = 97%)
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = `${bgWhite}f2`; // Add standard opacity (f2 = 95%)
        header.style.backdropFilter = 'blur(10px)';
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

// Load upcoming dates from CSV file
async function loadUpcomingDates() {
    const upcomingDatesContainer = document.querySelector('.upcoming-dates');

    // Check if container exists
    if (!upcomingDatesContainer) {
        console.warn('upcoming-dates container not found');
        return;
    }

    try {
        const response = await fetch('dates.csv');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        console.log('CSV loaded successfully:', csvText);

        // Parse CSV (skip header line)
        const lines = csvText.trim().split('\n').slice(1);
        const dates = lines.map(line => {
            const [date, time, description] = line.split(',');
            return { date: date.trim(), time: time.trim(), description: description.trim() };
        });

        // Filter future dates and take first 3
        const currentDate = new Date();
        const futureDates = dates.filter(dateObj => {
            const [day, month, year] = dateObj.date.split('.');
            const eventDate = new Date(year, month - 1, day);
            return eventDate >= currentDate;
        }).slice(0, 3);

        console.log('Future dates found:', futureDates);

        // Update the HTML
        if (futureDates.length > 0) {
            upcomingDatesContainer.innerHTML = futureDates.map(dateObj => `
                <div class="upcoming-date">
                    <strong>${formatDate(dateObj.date)}</strong>
                    <span>${dateObj.time} Uhr</span>
                </div>
            `).join('');
        } else {
            // No future dates found, show message
            upcomingDatesContainer.innerHTML = `
                <div class="upcoming-date" style="text-align: center; opacity: 0.8;">
                    <strong>📅 Keine kommenden Termine</strong>
                    <span>Bitte dates.csv aktualisieren</span>
                </div>
            `;
        }

    } catch (error) {
        console.warn('Could not load dates.csv:', error);
        showDateError();
    }
}

function formatDate(dateString) {
    const [day, month, year] = dateString.split('.');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function showDateError() {
    const upcomingDatesContainer = document.querySelector('.upcoming-dates');
    console.log('Showing date loading error message...');

    if (!upcomingDatesContainer) {
        console.error('upcoming-dates container not found');
        return;
    }

    upcomingDatesContainer.innerHTML = `
        <div class="upcoming-date" style="text-align: center; opacity: 0.8;">
            <strong>⚠️ Termine konnten nicht geladen werden</strong>
            <span>Bitte dates.csv überprüfen</span>
        </div>
    `;

    console.log('Date error message displayed');
}

// Embedded dates as backup (update these when CSV changes)
const embeddedDates = [
    { date: '30.10.2025', time: '19:00', description: 'Monatliches Treffen' },
    { date: '27.11.2025', time: '19:00', description: 'Monatliches Treffen' },
    { date: '18.12.2025', time: '19:00', description: 'Jahresabschluss-Treffen' },
    { date: '29.01.2026', time: '19:00', description: 'Neujahrs-Treffen' },
    { date: '26.02.2026', time: '19:00', description: 'Monatliches Treffen' }
];

// Load dates with embedded backup
function loadUpcomingDatesWithBackup() {
    const upcomingDatesContainer = document.querySelector('.upcoming-dates');

    if (!upcomingDatesContainer) {
        console.warn('upcoming-dates container not found');
        return;
    }

    // First try to load from CSV
    loadUpcomingDates().catch(() => {
        // If CSV fails, use embedded dates
        console.log('Using embedded dates as backup');

        const currentDate = new Date();
        const futureDates = embeddedDates.filter(dateObj => {
            const [day, month, year] = dateObj.date.split('.');
            const eventDate = new Date(year, month - 1, day);
            return eventDate >= currentDate;
        }).slice(0, 3);

        if (futureDates.length > 0) {
            upcomingDatesContainer.innerHTML = futureDates.map(dateObj => `
                <div class="upcoming-date">
                    <strong>${formatDate(dateObj.date)}</strong>
                    <span>${dateObj.time} Uhr</span>
                </div>
            `).join('');
        } else {
            // No future dates in embedded data
            upcomingDatesContainer.innerHTML = `
                <div class="upcoming-date" style="text-align: center; opacity: 0.8;">
                    <strong>📅 Keine kommenden Termine</strong>
                    <span>Bitte dates.csv aktualisieren</span>
                </div>
            `;
        }
    });
}

// Initialize dates when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadUpcomingDatesWithBackup();
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