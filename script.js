// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['GT Sectra', 'serif'],
                'canela': ['Canela Text', 'serif'],
            },
            colors: {
                'primary': '#1a1a1a',
                'accent': '#4A4A4A',
                'muted': '#717171',
                'cream': '#F8F7F4',
                'warm-gray': '#E8E6E1',
                'highlight': '#C7B299',
                'deep-bg': '#0F0F0F',
            },
            maxWidth: {
                'content': '800px',
            }
        }
    }
};

// Simple intersection observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 