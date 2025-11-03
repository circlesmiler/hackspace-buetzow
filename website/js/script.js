// Only one .activity-item is active at a time, cycling every 2s
document.addEventListener('DOMContentLoaded', function () {
    const activityItems = document.querySelectorAll('.activity-item');
    if (activityItems.length === 0) return;
    let current = 0;
    let intervalId = null;
    let paused = false;

    function activateNext() {
        activityItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === current);
        });
        current = (current + 1) % activityItems.length;
    }

    function clearActive() {
        activityItems.forEach(item => item.classList.remove('active'));
    }

    function startInterval() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(activateNext, 2000);
    }

    function stopInterval() {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
    }

    // Pause on hover, resume on mouse leave
    activityItems.forEach((item, idx) => {
        item.addEventListener('mouseenter', () => {
            paused = true;
            stopInterval();
            clearActive();
        });
        item.addEventListener('mouseleave', () => {
            if (paused) {
                paused = false;
                current = idx; // resume from the hovered item
                activateNext();
                startInterval();
            }
        });
    });

    activateNext();
    startInterval();
});
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
    const surfacePrimary = rootStyles.getPropertyValue('--surface-primary').trim();

    if (window.scrollY > 100) {
        header.style.background = `${surfacePrimary}f8`; // Add higher opacity (f8 = 97%)
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = `${surfacePrimary}f2`; // Add standard opacity (f2 = 95%)
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

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Close mobile menu when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('.nav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('mobile-open')) {
                nav.classList.remove('mobile-open');
            }
        });
    });
});

// Update next meeting info in the main schedule card
function updateNextMeetingInfo(nextDate) {
    const dateDay = document.getElementById('next-meeting-date');
    const meetingTitle = document.getElementById('next-meeting-title');
    const meetingTime = document.getElementById('next-meeting-time');

    if (nextDate && dateDay) {
        const [day, month, year] = nextDate.date.split('.');
        const date = new Date(year, month - 1, day);

        // Update the date display
        dateDay.innerHTML = `
            <div class="date-day">${day}.${month}</div>
            <div class="date-detail">${date.toLocaleDateString('de-DE', { year: 'numeric' })}</div>
        `;

        if (meetingTitle) {
            meetingTitle.textContent = nextDate.description || 'Nächstes Treffen';
        }

        if (meetingTime) {
            meetingTime.textContent = `⏰ ${nextDate.time} Uhr`;
        }
    } else {
        // Fallback if no date available
        if (dateDay) {
            dateDay.innerHTML = `
                <div class="date-day">?</div>
                <div class="date-detail">Kein Termin</div>
            `;
        }
        if (meetingTitle) {
            meetingTitle.textContent = 'Termine in dates.csv';
        }
        if (meetingTime) {
            meetingTime.textContent = '⏰ Siehe dates.csv';
        }
    }
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
        const response = await fetch('data/dates.csv');

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

        // Filter future dates
        const currentDate = new Date();
        const futureDates = dates.filter(dateObj => {
            const [day, month, year] = dateObj.date.split('.');
            const eventDate = new Date(year, month - 1, day);
            return eventDate >= currentDate;
        });

        console.log('Future dates found:', futureDates);

        // Update next meeting info (first future date)
        if (futureDates.length > 0) {
            updateNextMeetingInfo(futureDates[0]);
        } else {
            updateNextMeetingInfo(null);
        }

        // Update upcoming dates list (show next 3)
        const upcomingList = futureDates.slice(0, 3);
        if (upcomingList.length > 0) {
            upcomingDatesContainer.innerHTML = upcomingList.map(dateObj => `
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
        updateNextMeetingInfo(null);
        showDateError();
    }
}function formatDate(dateString) {
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
    console.log('Showing no dates message...');

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

    console.log('No dates message displayed');
}

// Initialize dates when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadUpcomingDates();
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