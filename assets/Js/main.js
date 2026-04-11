        /* // 1. Init AOS */
        AOS.init({ duration: 800, once: true, offset: 100 });

        // 2. Set Year
        document.getElementById('year').textContent = new Date().getFullYear();
        document.getElementById('yearFooter').textContent = new Date().getFullYear();

        // 3. Typing Effect (Updated Roles)
        const roles = ["Developer", "Fotografer Papua", "Edukasi Coding", "Videography", "Belajar Bersama SaCode"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const delayBetween = 2000;
        const typingElement = document.getElementById('typing-text');

        function typeRole() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeRole, delayBetween);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
            } else {
                setTimeout(typeRole, isDeleting ? deleteSpeed : typeSpeed);
            }
        }
        document.addEventListener('DOMContentLoaded', typeRole);

        // 4. Sidebar Toggle
        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }
        function closeMobileMenu() {
            if (window.innerWidth <= 992) {
                document.getElementById('sidebar').classList.remove('active');
            }
        }