// Blog posts data
const blogPosts = [
    {
        title: "The Dignity Algorithm: Why AI in Healthcare Needs Ethical Scaffolding",
        date: "March 15, 2025",
        full: "Artificial intelligence promises to revolutionize diagnostics, but without deliberate ethical frameworks, we risk automating inequity. In this essay, I argue that AI systems must be transparent, auditable, and inclusive of patient narratives. Drawing from my research at Stanford on bias in radiology models, I demonstrate how small dataset imbalances can lead to 18% higher misdiagnosis rates for underrepresented groups. My proposed ‘Ethical Scaffolding’ approach includes continuous community feedback loops, regulatory sandboxes, and mandatory bias disclosures. Ultimately, we need to embed dignity by design — not as an afterthought."
    },
    {
        title: "Lessons from Gene Editing: What CRISPR Taught Me About Scientific Responsibility",
        date: "January 10, 2025",
        full: "During my internship at the Broad Institute, I witnessed both the miracle and the responsibility of gene editing. While engineering a base-editing approach for sickle cell anemia, I realized that accessibility determines impact. We must democratize breakthrough therapies, ensuring they reach marginalized communities first. This post explores how my conversations with bioethicists and patient advocates reshaped my perspective: scientific progress must be paired with global justice frameworks. I call for open-sourcing safety data and establishing international youth ethics boards."
    },
    {
        title: "Beyond the Ivy Gates: Reimagining Merit in the Age of Algorithmic Admissions",
        date: "November 22, 2024",
        full: "Standardized testing and GPAs tell only a fragment of the story. Through my work with ‘Code for Equity,’ I’ve seen brilliant first-gen students who lack test prep resources but possess immense creativity. This blog proposes a reimagined admissions framework: portfolio-based reviews, community impact statements, and removing financial barriers for application fees. Ivy League institutions should be at the forefront of holistic, equitable evaluation — measuring not just what students have achieved, but the obstacles they’ve overcome and the change they will create."
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

    // Attach event listeners to read-more buttons
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

// Modal close functionality
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

// Active nav link highlighting on scroll
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

// Contact form submission (simulate)
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! I will respond shortly. (Demo: no actual email sent)');
            form.reset();
        });
    }
}

// Download CV placeholder
function setupCV() {
    const cvBtn = document.getElementById('downloadCV');
    const cvLink = document.getElementById('cvLink');
    const fakeDownload = (e) => {
        e.preventDefault();
        alert('In a real scenario, this would download a PDF version of Elena’s full CV. For demo purposes, you can add a real file.');
    };
    if (cvBtn) cvBtn.addEventListener('click', fakeDownload);
    if (cvLink) cvLink.addEventListener('click', fakeDownload);
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    // close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderBlog();
    setupModal();
    highlightNav();
    setupMobileMenu();
    setupContactForm();
    setupCV();
    setupSmoothScroll();
});