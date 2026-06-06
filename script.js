document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
        const closeIcon = mobileMenuToggle.querySelector('.close-icon');

        const toggleMenu = () => {
            navMenu.classList.toggle('open');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        };

        mobileMenuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });
    }

    /* ==========================================================================
       SCROLL INTERACTIONS (STICKY NAV, PROGRESS BAR)
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        
        // 1. Scroll Progress Bar
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollProgress && docHeight > 0) {
            const scrolledPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = `${scrolledPercent}%`;
        }

        // 2. Sticky Navbar Styling
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Update footer current year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       DYNAMIC CONTENT RENDERING FROM DATA.JS
       ========================================================================== */
    if (typeof LAB_DATA === 'undefined') {
        console.error('LAB_DATA is not defined. Make sure data.js is loaded before script.js.');
        return;
    }

    // 1. Home Page Rendering (index.html)
    const homeHeroSubtitle = document.getElementById('home-hero-subtitle');
    if (homeHeroSubtitle) {
        // Populate Hero Text
        homeHeroSubtitle.textContent = LAB_DATA.home.subtitle;
        document.getElementById('home-hero-title').innerHTML = LAB_DATA.home.title.replace('Seungho Yu\'s Research Group', '<span class="highlight">Seungho Yu\'s Research Group</span>');
        document.getElementById('home-hero-desc').textContent = LAB_DATA.home.description;
        document.getElementById('home-overview-text').textContent = LAB_DATA.home.overview;
    }

    // 2. People Page Rendering (people.html)
    const piName = document.getElementById('pi-name');
    if (piName && LAB_DATA.pi) {
        // PI Sidebar
        piName.textContent = LAB_DATA.pi.name;
        document.getElementById('pi-sub').textContent = LAB_DATA.pi.title;
        document.getElementById('pi-email-link').setAttribute('href', `mailto:${LAB_DATA.pi.email}`);
        document.getElementById('pi-scholar-link').setAttribute('href', LAB_DATA.pi.googleScholar);
        document.getElementById('pi-orcid-link').setAttribute('href', LAB_DATA.pi.orcid);

        // PI Biography Details
        document.getElementById('pi-bio-name').textContent = LAB_DATA.pi.name.split(' (')[0]; // Seungho Yu
        document.getElementById('pi-affiliation').innerHTML = LAB_DATA.pi.affiliation;
        document.getElementById('pi-address').textContent = LAB_DATA.pi.address;
        document.getElementById('pi-tel').textContent = LAB_DATA.pi.tel;
        document.getElementById('pi-email-text').textContent = LAB_DATA.pi.email;

        // PI Avatar Photo
        const piAvatar = document.getElementById('pi-avatar-container');
        if (piAvatar && LAB_DATA.pi.photo) {
            piAvatar.innerHTML = `
                <img src="${LAB_DATA.pi.photo}" alt="${LAB_DATA.pi.name}" class="avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width:100%; height:100%; object-fit:cover; border-radius:var(--border-radius-md);">
                <i data-lucide="user" style="display:none; width:80px; height:80px; color:var(--color-primary);"></i>
            `;
        }

        // PI Education
        const piEduList = document.getElementById('pi-education');
        piEduList.innerHTML = '';
        LAB_DATA.pi.education.forEach(item => {
            const li = document.createElement('li');
            li.className = 'pi-list-item';
            li.innerHTML = item;
            piEduList.appendChild(li);
        });

        // PI Experiences
        const piExpList = document.getElementById('pi-experience');
        piExpList.innerHTML = '';
        LAB_DATA.pi.experience.forEach(item => {
            const li = document.createElement('li');
            li.className = 'pi-list-item';
            li.innerHTML = item;
            piExpList.appendChild(li);
        });

        // Members list (Postdocs & Students)
        const postdocsGrid = document.getElementById('postdocs-list');
        const studentsGrid = document.getElementById('students-list');
        
        if (postdocsGrid) postdocsGrid.innerHTML = '';
        if (studentsGrid) studentsGrid.innerHTML = '';

        LAB_DATA.members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            
            const emailMarkup = member.email.includes('@') 
                ? `<a href="mailto:${member.email}" class="member-email"><i data-lucide="mail"></i> ${member.email}</a>`
                : `<span class="member-email"><i data-lucide="user"></i> ${member.email}</span>`;

            const avatarMarkup = member.photo 
                ? `<img src="${member.photo}" alt="${member.name}" class="member-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width:100%; height:100%; object-fit:cover; border-radius:var(--border-radius-md);">
                   <i data-lucide="user" style="display:none; width:56px; height:56px; color:var(--text-muted);"></i>`
                : `<i data-lucide="user" style="width:56px; height:56px; color:var(--text-muted);"></i>`;

            card.innerHTML = `
                <div class="member-avatar" style="overflow:hidden; display:flex; align-items:center; justify-content:center;">${avatarMarkup}</div>
                <h4 class="member-name">${member.name}</h4>
                <div class="member-role">${member.role === 'postdoc' ? 'Postdoc Researcher' : 'Graduate Student'}</div>
                <p class="member-program">${member.program}</p>
                <p class="member-interest">${member.interest}</p>
                ${emailMarkup}
            `;

            if (member.role === 'postdoc' && postdocsGrid) {
                postdocsGrid.appendChild(card);
            } else if (member.role === 'student' && studentsGrid) {
                studentsGrid.appendChild(card);
            }
        });

        // Graduate Alumni
        const alumniList = document.getElementById('alumni-list');
        if (alumniList && LAB_DATA.alumni) {
            alumniList.innerHTML = '';
            LAB_DATA.alumni.forEach(al => {
                const card = document.createElement('div');
                card.className = 'alumni-card';
                
                const photoMarkup = al.photo 
                    ? `<img src="${al.photo}" alt="${al.name}" class="alumni-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width:100%; height:100%; object-fit:cover; border-radius:var(--border-radius-md);">
                       <i data-lucide="graduation-cap" style="display:none; width:48px; height:48px; color:var(--color-primary);"></i>`
                    : `<i data-lucide="graduation-cap" style="width:48px; height:48px; color:var(--color-primary);"></i>`;

                card.innerHTML = `
                    <div class="alumni-icon-box">${photoMarkup}</div>
                    <div class="alumni-info">
                        <h4>${al.name}</h4>
                        <p class="alumni-desc">${al.degree}</p>
                        <p class="alumni-desc">Research: ${al.interest}</p>
                        <p class="alumni-dest">Current: ${al.current}</p>
                    </div>
                `;
                alumniList.appendChild(card);
            });
        }

        // Internship Alumni
        const internsList = document.getElementById('interns-list');
        if (internsList && LAB_DATA.interns) {
            internsList.innerHTML = '';
            LAB_DATA.interns.forEach(intern => {
                const div = document.createElement('div');
                div.className = 'intern-item';
                div.innerHTML = `<strong>${intern.name}</strong> - Undergraduate intern, ${intern.duration}, ${intern.school}`;
                internsList.appendChild(div);
            });
        }
    }

    // 3. Research Page Rendering (research.html)
    const researchContainer = document.getElementById('research-areas-container');
    if (researchContainer && LAB_DATA.research) {
        researchContainer.innerHTML = '';
        LAB_DATA.research.forEach(area => {
            const row = document.createElement('div');
            row.className = 'research-area';
            
            const imageMarkup = area.image
                ? `<img src="${area.image}" alt="${area.title}" class="research-img" onerror="this.style.display='none'; this.closest('.research-image-wrapper').classList.remove('has-image'); this.closest('.research-image-wrapper').style.padding='20px'; this.nextElementSibling.style.display='block'; this.nextElementSibling.nextElementSibling.style.display='block';" style="width:100%; height:auto; object-fit:contain; border-radius:var(--border-radius-sm);">
                   <i data-lucide="image" style="display:none; width:48px; height:48px; color:var(--text-muted);"></i>
                   <span style="display:none; font-size:0.85rem; font-weight:500;">[ Research Image Placeholder ]</span>`
                : `<i data-lucide="image"></i>
                   <span>[ Research Image Placeholder ]</span>`;

            row.innerHTML = `
                <div class="research-card-layout">
                    <div class="research-image-wrapper ${area.image ? 'has-image' : ''}" style="overflow:hidden; padding: ${area.image ? '0' : '20px'}; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        ${imageMarkup}
                    </div>
                    <div class="research-info">
                        <h3>${area.title}</h3>
                        <p>${area.p1}</p>
                        <p style="margin-top: 12px;">${area.p2}</p>
                    </div>
                </div>
            `;
            researchContainer.appendChild(row);
        });
    }

    // 4. Publications Page Rendering (publications.html)
    const publicationsContainer = document.getElementById('publications-list-container');
    if (publicationsContainer && LAB_DATA.publications) {
        publicationsContainer.innerHTML = '';
        
        LAB_DATA.publications.forEach(group => {
            const yearSection = document.createElement('div');
            yearSection.className = 'publication-year-group';
            yearSection.setAttribute('data-year', group.year);
            
            let listMarkup = '';
            group.papers.forEach(paper => {
                const imgMarkup = paper.image
                    ? `<img src="${paper.image}" alt="TOC Graphic" class="pub-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:100%; height:100%; object-fit:cover;">
                       <div class="pub-img-placeholder" style="display:none;">
                           <i data-lucide="image"></i>
                           <span>TOC Graphic</span>
                       </div>`
                    : `<div class="pub-img-placeholder" style="display:flex;">
                           <i data-lucide="image"></i>
                           <span>TOC Graphic</span>
                       </div>`;

                listMarkup += `
                    <div class="pub-item">
                        <div class="pub-info">
                            <h4 class="pub-title">${paper.title}</h4>
                            <p class="pub-authors">${paper.authors}</p>
                            <p class="pub-journal">${paper.journal}</p>
                        </div>
                        <div class="pub-image-wrapper">
                            ${imgMarkup}
                        </div>
                    </div>
                `;
            });

            yearSection.innerHTML = `
                <h3>${group.year} (${group.papers.length})</h3>
                <div class="pub-list">${listMarkup}</div>
            `;
            publicationsContainer.appendChild(yearSection);
        });

        // Render Year Filter Buttons dynamically with counts
        const filterButtonsContainer = document.querySelector('.year-filter-buttons');
        if (filterButtonsContainer) {
            let totalPapers = 0;
            LAB_DATA.publications.forEach(group => {
                totalPapers += group.papers.length;
            });

            let buttonsHtml = `<button class="year-btn active" data-year="all">All (${totalPapers})</button>`;
            LAB_DATA.publications.forEach(group => {
                buttonsHtml += `<button class="year-btn" data-year="${group.year}">${group.year} (${group.papers.length})</button>`;
            });
            filterButtonsContainer.innerHTML = buttonsHtml;
        }

        // Re-query dynamically created elements for search/filter system
        const pubSearchInput = document.getElementById('pub-search');
        const yearButtons = document.querySelectorAll('.year-btn');
        const pubItems = document.querySelectorAll('.pub-item');
        const yearGroups = document.querySelectorAll('.publication-year-group');
        const noResultsMsg = document.getElementById('pub-no-results');

        let activeFilterYear = 'all';
        let searchQuery = '';

        const updatePublicationsVisibility = () => {
            let totalVisible = 0;

            yearGroups.forEach(group => {
                const groupYear = group.getAttribute('data-year');
                const itemsInGroup = group.querySelectorAll('.pub-item');
                let visibleInGroup = 0;

                itemsInGroup.forEach(item => {
                    const titleText = item.querySelector('.pub-title').textContent.toLowerCase();
                    const authorsText = item.querySelector('.pub-authors').textContent.toLowerCase();
                    const journalText = item.querySelector('.pub-journal').textContent.toLowerCase();
                    
                    const matchesSearch = titleText.includes(searchQuery) || 
                                          authorsText.includes(searchQuery) || 
                                          journalText.includes(searchQuery);
                    
                    const matchesYear = activeFilterYear === 'all' || activeFilterYear === groupYear;

                    if (matchesSearch && matchesYear) {
                        item.classList.remove('hidden');
                        visibleInGroup++;
                        totalVisible++;
                    } else {
                        item.classList.add('hidden');
                    }
                });

                if (visibleInGroup > 0) {
                    group.classList.remove('hidden');
                } else {
                    group.classList.add('hidden');
                }
            });

            if (noResultsMsg) {
                if (totalVisible === 0) {
                    noResultsMsg.classList.remove('hidden');
                } else {
                    noResultsMsg.classList.add('hidden');
                }
            }
        };

        if (pubSearchInput) {
            pubSearchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                updatePublicationsVisibility();
            });
        }

        yearButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                yearButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilterYear = btn.getAttribute('data-year');
                updatePublicationsVisibility();
            });
        });
    }

    // 5. News Page Rendering (news.html)
    const newsTimeline = document.getElementById('news-timeline-container');
    if (newsTimeline && LAB_DATA.news) {
        newsTimeline.innerHTML = '';
        LAB_DATA.news.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'news-timeline-item';
            timelineItem.innerHTML = `
                <div class="news-timeline-dot"></div>
                <span class="news-timeline-date">${item.date}</span>
                <div class="news-timeline-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            newsTimeline.appendChild(timelineItem);
        });
    }

    // 6. Photos Page Rendering (photos.html)
    const photosGrid = document.getElementById('photos-grid-container');
    if (photosGrid && LAB_DATA.photos) {
        photosGrid.innerHTML = '';
        LAB_DATA.photos.forEach(event => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const photo1Markup = event.photo1
                ? `<img src="${event.photo1}" alt="Photo 1" class="event-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width:100%; height:100%; object-fit:cover;">
                   <i data-lucide="camera" style="display:none; width:20px; height:20px; color:var(--text-muted);"></i>`
                : `<i data-lucide="camera" style="width:20px; height:20px; color:var(--text-muted);"></i>`;

            const photo2Markup = event.photo2
                ? `<img src="${event.photo2}" alt="Photo 2" class="event-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width:100%; height:100%; object-fit:cover;">
                   <i data-lucide="camera" style="display:none; width:20px; height:20px; color:var(--text-muted);"></i>`
                : `<i data-lucide="camera" style="width:20px; height:20px; color:var(--text-muted);"></i>`;

            card.innerHTML = `
                <div class="project-images-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; height: 180px; padding: 8px 8px 0 8px;">
                    <div class="project-image-box" style="background-color: var(--bg-tertiary); display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius: var(--border-radius-sm); border: 1px dashed var(--border-color);">
                        ${photo1Markup}
                    </div>
                    <div class="project-image-box" style="background-color: var(--bg-tertiary); display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius: var(--border-radius-sm); border: 1px dashed var(--border-color);">
                        ${photo2Markup}
                    </div>
                </div>
                <div class="project-info">
                    <span class="project-category">${event.date}</span>
                    <h3 class="project-title">${event.title}</h3>
                </div>
            `;
            photosGrid.appendChild(card);
        });
    }

    // 7. Opening Page Rendering (opening.html)
    const openingGrid = document.getElementById('opening-main-container');
    if (openingGrid && LAB_DATA.opening) {
        // Populate Recruitment Info Cards
        const card1 = document.getElementById('opening-card-summary');
        card1.innerHTML = `
            <h3>${LAB_DATA.opening.title}</h3>
            <p style="margin-bottom: 16px; font-size: 1rem; color: var(--text-secondary);">${LAB_DATA.opening.intro}</p>
            <ul class="pi-list" style="margin-top: 16px;">
                ${LAB_DATA.opening.details.map(d => `<li class="pi-list-item"><strong>${d.label}</strong>: ${d.value}</li>`).join('')}
            </ul>
        `;

        const card2 = document.getElementById('opening-card-research');
        card2.innerHTML = `
            <h3>${LAB_DATA.opening.researchTitle}</h3>
            <p style="margin-bottom: 12px; font-weight:600; color:var(--text-primary);">${LAB_DATA.opening.researchSubtitle}</p>
            <ul class="pi-list">
                ${LAB_DATA.opening.researchItems.map(item => `<li class="pi-list-item" style="margin-bottom: 10px;">${item}</li>`).join('')}
            </ul>
        `;

        const card3 = document.getElementById('opening-card-admission');
        card3.innerHTML = `
            <h3>${LAB_DATA.opening.admissionTitle}</h3>
            <div class="opening-list-num">
                ${LAB_DATA.opening.admissions.map(adm => `
                    <div class="opening-step">
                        <div class="step-number">${adm.num}</div>
                        <div class="step-details">
                            <h4>${adm.name}</h4>
                            <p>${adm.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Populate Contact Sidebar Box
        const contactBox = document.getElementById('opening-sidebar-contact');
        contactBox.innerHTML = `
            <h4><i data-lucide="phone"></i> ${LAB_DATA.opening.contactTitle}</h4>
            <div class="contact-info-list">
                <div class="contact-info-item">
                    <i data-lucide="user"></i>
                    <p><strong>${LAB_DATA.opening.contactName}</strong><br>${LAB_DATA.opening.contactRole}</p>
                </div>
                <div class="contact-info-item">
                    <i data-lucide="mail"></i>
                    <p>E-mail: <a href="mailto:${LAB_DATA.opening.contactEmail}">${LAB_DATA.opening.contactEmail}</a></p>
                </div>
                <div class="contact-info-item">
                    <i data-lucide="phone"></i>
                    <p>Tel: ${LAB_DATA.opening.contactTel}</p>
                </div>
            </div>
        `;
    }

    // Re-create icons for dynamically loaded elements
    lucide.createIcons();

    /* ==========================================================================
       CONTACT FORM VALIDATION & SIMULATION (OPENING.HTML ONLY)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const contactName = document.getElementById('contact-name');
        const contactEmail = document.getElementById('contact-email');
        const contactType = document.getElementById('contact-type');
        const contactMessage = document.getElementById('contact-message');
        const successModal = document.getElementById('success-modal');
        const modalCloseBtn = document.getElementById('modal-close-btn');

        const setError = (element, hasError) => {
            const parent = element.closest('.form-group');
            if (parent) {
                if (hasError) {
                    parent.classList.add('has-error');
                } else {
                    parent.classList.remove('has-error');
                }
            }
        };

        const isValidEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        };

        if (contactName) contactName.addEventListener('input', () => setError(contactName, contactName.value.trim() === ''));
        if (contactEmail) contactEmail.addEventListener('input', () => setError(contactEmail, !isValidEmail(contactEmail.value.trim())));
        if (contactMessage) contactMessage.addEventListener('input', () => setError(contactMessage, contactMessage.value.trim() === ''));

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNameEmpty = contactName.value.trim() === '';
            const isEmailInvalid = !isValidEmail(contactEmail.value.trim());
            const isMessageEmpty = contactMessage.value.trim() === '';

            setError(contactName, isNameEmpty);
            setError(contactEmail, isEmailInvalid);
            setError(contactMessage, isMessageEmpty);

            if (!isNameEmpty && !isEmailInvalid && !isMessageEmpty) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <i data-lucide="loader" class="animate-spin" style="width: 16px; height:16px; display:inline-block; vertical-align:middle; margin-left:5px;"></i>';
                lucide.createIcons();

                setTimeout(() => {
                    if (successModal) {
                        successModal.classList.remove('hidden');
                    }
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    lucide.createIcons();
                }, 1200);
            }
        });

        if (modalCloseBtn && successModal) {
            modalCloseBtn.addEventListener('click', () => {
                successModal.classList.add('hidden');
            });
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    successModal.classList.add('hidden');
                }
            });
        }
    }
});
