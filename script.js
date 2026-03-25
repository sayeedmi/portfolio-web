// Blog posts based on his actual story
const blogPosts = [
    {
        title: "From a Small Village to a Russian Scholarship: Lessons in Resilience",
        date: "January 2025",
        full: "Growing up in rural Bangladesh, I never imagined I'd be studying abroad on a fully funded Russian Government Scholarship. The journey was filled with late nights studying under candlelight, fierce competition (14,000 applicants for 120 seats), and the constant drive to prove that geography doesn't determine destiny. This essay reflects on the power of perseverance, the support of mentors, and how my humble beginnings shaped my vision for using technology to uplift others."
    },
    {
        title: "Why I Love Linux: Freedom, Community, and Giving Back",
        date: "December 2024",
        full: "For five years, Linux has been more than an operating system—it's been a philosophy. I started using it because my old computer couldn't run Windows, but I stayed because of the open‑source ethos. Now I help others in my community install Linux for free, solving their computer problems and teaching them digital literacy. I'm currently preparing to contribute to the Linux kernel. This post explores why open source is a tool for social equity."
    },
    {
        title: "Volunteering Near Rohingya Camps: What I Learned About Humanity",
        date: "September 2024",
        full: "Living close to the Rohingya camps in Bangladesh, I witnessed displacement, resilience, and the urgent need for compassion. Through both NGO‑led efforts and personal initiatives, I helped provide basic necessities and spent time with families who had lost everything. This experience taught me that true impact comes from showing up, listening, and using whatever skills you have to ease suffering."
    },
    {
        title: "The Joy of Tutoring: How Two Students Went from Bottom to Top",
        date: "July 2024",
        full: "When I started tutoring two young students, one was ranked 44th in her class and the other 30th. A year later, they had climbed to 1st and 3rd respectively. It wasn't about drilling them with facts—it was about building their confidence, teaching them how to learn, and sharing moral values. This experience solidified my belief that education is the most powerful equalizer."
    }
];

// Render blog cards
function renderBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogPosts.forEach((post, idx) => {
        const card = document.createElement('div');
        card.className = 'card blog-card';
        card.innerHTML = `
            <div class="card-icon"><i class="fas fa-pen-fancy"></i></div>
            <h3>${post.title}</h3>
            <div class="date">${post.date}</div>
            <p>${post.full.substring(0, 120)}...</p>
            <button class="read-more" data-idx="${idx}">Read full essay <i class="fas fa-arrow-right"></i></button>
        `;
        blogGrid.appendChild(card);
    });

    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = btn.getAttribute('data-idx');
            if (idx !== null && blogPosts[idx]) {
                const post = blogPosts[idx];
                document.getElementById('modalTitle').innerText = post.title;
                document.getElementById('modalDate').innerText = post.date;
                document.getElementById('modalBody').innerHTML = `<p style="white-space: pre-line;">${post.full}</p>`;
                document.getElementById('blogModal').style.display = 'flex';
            }
        });
    });
}

// Modal close
function setupModal() {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// Active nav highlight
function highlightNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Contact form handler
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! I’ll get back to you soon.');
            form.reset();
        });
    }
}

// CV placeholder
function setupCV() {
    const cvBtn = document.getElementById('downloadCV');
    const cvLink = document.getElementById('cvLink');
    const fakeDownload = (e) => {
        e.preventDefault();
        alert('This would download a PDF version of my full CV. For a real version, please contact me directly.');
    };
    if (cvBtn) cvBtn.addEventListener('click', fakeDownload);
    if (cvLink) cvLink.addEventListener('click', fakeDownload);
}

// Smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlog();
    setupModal();
    highlightNav();
    setupMobileMenu();
    setupContactForm();
    setupCV();
    setupSmoothScroll();
});
