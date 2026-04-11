        AOS.init({ duration: 800, once: true, offset: 100 });
        document.getElementById('year').textContent = new Date().getFullYear();
        document.getElementById('yearFooter').textContent = new Date().getFullYear();

        // Typing Effect
        // const words = ["Developer", "Fotografer Papua", "Edukasi Coding", "Videography", "Belajar Bersama SaCode"];
        let i = 0; let timer;
        function typeWriter() {
            const element = document.getElementById('typing-text');
            const word = words[i];
            let currentText = element.innerText;
            if (currentText.length < word.length) {
                element.innerText = word.substring(0, currentText.length + 1);
                timer = setTimeout(typeWriter, 100);
            } else { setTimeout(() => { eraseText(); }, 2000); }
        }
        function eraseText() {
            const element = document.getElementById('typing-text');
            let currentText = element.innerText;
            if (currentText.length > 0) {
                element.innerText = currentText.substring(0, currentText.length - 1);
                timer = setTimeout(eraseText, 50);
            } else { i = (i + 1) % words.length; typeWriter(); }
        }
        setTimeout(typeWriter, 1000);

        // Filter Logic
        function filterProjects(category) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            const items = document.querySelectorAll('.project-card');
            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hide'); item.classList.add('show');
                } else { item.classList.remove('show'); item.classList.add('hide'); }
            });
        }

        // Scroll Logic
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 200)) current = section.getAttribute('id');
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) link.classList.add('active');
            });
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });

        // Sidebar
        function toggleSidebar() { document.getElementById('sidebar').classList.toggle('active'); }
        function closeMobileMenu() { if (window.innerWidth <= 992) document.getElementById('sidebar').classList.remove('active'); }

        // Tabs
        function openTab(evt, tabName) {
            const tabContent = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContent.length; i++) tabContent[i].classList.remove("active");
            const tabBtns = document.getElementsByClassName("tab-btn");
            for (let i = 0; i < tabBtns.length; i++) tabBtns[i].classList.remove("active");
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }