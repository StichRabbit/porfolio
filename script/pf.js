const sections = document.querySelectorAll('section > div');
        let prevIndex = 0;

        function showSection(index) {
            sections[prevIndex].classList.remove('visible');
            sections[index].classList.add('visible');
            prevIndex = index;
        }

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const rect = section.getBoundingClientRect();

                if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
                    showSection(i);
                    break;
                }
            }
        });

        showSection(0);