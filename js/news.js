 <script>
            window.addEventListener('load', () => {
                /* --- Logique Menu Hamburger --- */
                const hamburgerButton = document.getElementById('hamburger-button');
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburgerIcon = document.getElementById('hamburger-icon');
                const menuLinks = document.querySelectorAll('#mobile-menu a');

                const toggleMenu = () => {
                    mobileMenu.classList.toggle('translate-x-full');
                    if (hamburgerIcon.classList.contains('fa-bars')) {
                        hamburgerIcon.classList.remove('fa-bars');
                        hamburgerIcon.classList.add('fa-xmark');
                    } else {
                        hamburgerIcon.classList.remove('fa-xmark');
                        hamburgerIcon.classList.add('fa-bars');
                    }
                    document.body.classList.toggle('overflow-hidden');
                };

                hamburgerButton.addEventListener('click', toggleMenu);
                menuLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        if (!mobileMenu.classList.contains('translate-x-full')) {
                            toggleMenu();
                        }
                    });
                });

                const finalText = "HELLO WORLD !";
                const chars = "!#?%&$@*+-/<>[]{}";
                const title = document.getElementById("hack-title");

                function scramble() {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        const displayed = title.innerText
                            .split("")
                            .map((char, i) => {
                                if (i < iterations) return finalText[i];
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join("");

                        title.innerText = displayed;

                        if (iterations >= finalText.length) {
                            clearInterval(interval);

                            /* Attendre 3 secondes puis disparition */
                            setTimeout(() => {
                                title.style.setProperty('opacity', '0', 'important');
                            }, 3000);
                        }

                        iterations += 0.25;
                    }, 60);
                }

                // Séquence de lancement
                // A. Attendre 2 secondes après chargement
                setTimeout(() => {
                    // B. Lancer l'animation CSS (typing)
                    title.classList.add('start-typing');
                    
                    // C. Lancer le Scramble après la fin du typewriter (1.5s + marge = 1.6s)
                    setTimeout(scramble, 1600);
                }, 2000);

            });
        </script>