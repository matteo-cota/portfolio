const translations = {
    it: {
        pageTitle: "Matteo Cota - Portfolio Sviluppatore Web",
        metaKeywords: "Matteo Cota, Sviluppatore Web, Portfolio, Front End, Back End, Laravel, Vue.js, PHP, Javascript, Italia",
        metaDescription: "Portfolio di Matteo Cota, Sviluppatore Web specializzato in Front End e Back End. Scopri i miei progetti, competenze e contattami per collaborazioni.",
        spinnerLoading: "Caricamento...",
        nav: {
            about: "Chi sono",
            skills: "Competenze",
            projects: "Progetti",
            contact: "Contatti",
            toggle: "Attiva/disattiva navigazione",
            toggleTheme: "Cambia Tema"
        },
        hero: {
            iAm: "// Sono",
            name: "Matteo Cota",
            typedText: "Sviluppatore Full Stack Web, Sviluppatore Front End, Sviluppatore Back End",
            description: "Trasformo idee in codice, creando esperienze web coinvolgenti e funzionali.",
            downloadCv: "Download CV",
            contactMe: "Contattami"
        },
        about: {
            years: "Anno",
            yearsSuffix: "di esperienza nello sviluppo web",
            fullstack: "full-stack",
            description1: "Sono un web developer con una solida base nello sviluppo front-end e back-end. Mi appassiona creare soluzioni digitali",
            strongText: "performanti, intuitive e visivamente curate",
            description2: "La mia curiosità mi spinge a rimanere costantemente aggiornato sulle ultime tecnologie e best practice del settore, per trasformare idee complesse in progetti web di successo.",
            listItem1: "Siti web responsive e moderni",
            listItem2: "Applicazioni web robuste e scalabili",
            listItem3: "Attenzione ai dettagli e alla User Experience",
            viewProjectsBtn: "I Miei Progetti",
            completedProjectsCounter: "Progetti Completati con Successo",
            quote: '"Dalla landing page all\'applicazione complessa, ogni progetto è un\'opportunità per creare valore digitale."'
        },
        skills: {
            sectionTitle: "Competenze & Formazione",
            sectionSubtitle: "Ecco le tecnologie con cui lavoro e il mio percorso formativo.",
            technicalSkills: "Competenze Tecniche",
            htmlLevel: "98%",
            cssLevel: "95%",
            jsLevel: "92%",
            vueLevel: "88%",
            phpLevel: "90%",
            laravelLevel: "95%",
            otherSkills: "Altre competenze: Git, MySQL, Bootstrap, REST API, Problem Solving.",
            educationTitle: "Formazione",
            booleanExpTitle: "Full Stack Web Developer",
            booleanExpDate: "06/2024 - 12/2024 | Boolean",
            booleanExpDesc: "Corso intensivo focalizzato su tecnologie front-end (HTML, CSS, JS, Vue.js) e back-end (PHP, Laravel, MySQL).",
            googleDigitalTitle: "Concetti di base del Marketing Digitale",
            googleDigitalDate: "10/2022 | Google Digital Training",
            googleDigitalDesc: "Certificazione sulle basi del marketing online, SEO, SEM e social media marketing.",
            googleGrowTitle: "Crescere in Digitale",
            googleGrowDate: "01/2016 | Google & Unioncamere",
            googleGrowDesc: "Progetto formativo sulle competenze digitali per l'inserimento nel mondo del lavoro."
        },
        projects: {
            sectionTitle: "I Miei Progetti",
            filterAll: "Tutti",
            filterWeb: "Siti Web",
            filterApps: "Applicazioni",
            boolandoTitle: "Boolando",
            boolandoDesc: "Replica E-commerce (HTML/CSS)",
            boolandoDetail: "Vedi Dettaglio Boolando",
            boolandoVisit: "Visita il sito (link mancante)",
            boolandoCode: "Vedi Codice (link mancante)",
            boolflixTitle: "Boolflix",
            boolflixDesc: "App Catalogo Film/Serie TV (Vue.js, API)",
            boolflixDetail: "Vedi Dettaglio Boolflix",
            boolflixVisit: "Visita l'app (link mancante)",
            boolflixCode: "Vedi Codice (link mancante)",
            dcComicsTitle: "DC Comics",
            dcComicsDesc: "Sito Vetrina (Laravel)",
            dcComicsDetail: "Vedi Dettaglio DC Comics",
            dcComicsVisit: "Visita il sito (link mancante)",
            dcComicsCode: "Vedi Codice (link mancante)",
            boolbnbTitle: "BoolBnB",
            boolbnbDesc: "Piattaforma Affitti (Full Stack - Team Project)",
            boolbnbDetail: "Vedi Dettaglio BoolBnB",
            boolbnbVisit: "Visita il sito (link mancante)",
            boolbnbCode: "Vedi Codice (link mancante)",
            boolzappTitle: "Boolzapp",
            boolzappDesc: "Replica Interfaccia Chat (Vue.js)",
            boolzappDetail: "Vedi Dettaglio Boolzapp",
            boolzappVisit: "Visita l'app (link mancante)",
            boolzappCode: "Vedi Codice (link mancante)",
            spotifyTitle: "Spotify Web",
            spotifyDesc: "Replica Interfaccia Player (HTML/CSS)",
            spotifyDetail: "Vedi Dettaglio Spotify",
            spotifyVisit: "Visita il sito (link mancante)",
            spotifyCode: "Vedi Codice (link mancante)",
            viewCaseStudy: "Dettagli",
            viewDetailDefault: "Vedi Dettaglio Immagine",
            boolandoTitle: "Boolando - Replica E-commerce", // Titolo più descrittivo
            boolandoDesc: "Layout E-commerce (HTML/CSS)", // Descrizione breve
            boolandoLongDesc: "Questo progetto formativo si è concentrato sulla creazione di un layout web complesso basato sul design di un noto sito di e-commerce di moda, utilizzando esclusivamente HTML e CSS. L'obiettivo principale era padroneggiare il posizionamento degli elementi (incluse card prodotto con effetti hover), la gestione degli spazi e la creazione di una struttura semanticamente corretta e il più possibile fedele al modello originale. Particolare attenzione è stata data all'implementazione di dettagli CSS come badge di sconto e cuori per i preferiti.",
            boolandoChallenges: "La sfida maggiore è stata ottenere un layout responsive e preciso su diverse dimensioni di schermo senza l'ausilio di framework CSS o JavaScript, affidandosi unicamente alle tecniche CSS native come Flexbox e regole @media.",

            // --- Boolflix ---
            boolflixTitle: "Boolflix - Catalogo Film & Serie TV",
            boolflixDesc: "App Catalogo Media (Vue.js, API)",
            boolflixLongDesc: "Boolflix è un'applicazione web single-page costruita con Vue.js (utilizzando Vite per lo sviluppo) che permette agli utenti di cercare film e serie TV interrogando l'API pubblica di TheMovieDB. I risultati vengono mostrati dinamicamente in una griglia di card, ognuna contenente la locandina, il titolo originale e tradotto, la lingua (con relativa bandiera) e una valutazione media convertita in un sistema a 5 stelle. L'applicazione gestisce lo stato della ricerca e dei risultati in modo reattivo.",
            boolflixChallenges: "Gestire le chiamate API asincrone in modo pulito con Axios e aggiornare l'interfaccia in base alla risposta è stata una sfida chiave. Altrettanto interessante è stato implementare la logica per mappare le sigle delle lingue alle icone delle bandiere e trasformare il voto decimale dell'API in un valore intero da 1 a 5 per la visualizzazione a stelle.",

            // --- DC Comics ---
            dcComicsTitle: "DC Comics - Gestione Catalogo",
            dcComicsDesc: "Sito Vetrina con CRUD (Laravel)",
            dcComicsLongDesc: "Questo progetto rappresenta un'applicazione web back-end realizzata con il framework PHP Laravel. Lo scopo era creare un sistema per visualizzare e gestire un catalogo di fumetti DC Comics. Sono state implementate le funzionalità CRUD (Create, Read, Update, Delete) complete per i fumetti, utilizzando il pattern MVC di Laravel, il sistema di routing, le migrazioni del database con Eloquent ORM e il templating engine Blade per le viste. È stata utilizzata anche SCSS, compilata tramite Vite, per lo styling.",
            dcComicsChallenges: "Comprendere e applicare correttamente il flusso MVC di Laravel, gestire le richieste HTTP e le validazioni dei form lato server, e configurare correttamente le relazioni nel database tramite Eloquent sono state le principali aree di apprendimento.",

            // --- BoolBnB ---
            boolbnbTitle: "BoolBnB - Piattaforma Affitti",
            boolbnbDesc: "App Full-Stack Affitti (Vue/Laravel)",
            boolbnbLongDesc: "BoolBnB è una piattaforma web completa, sviluppata in team, che replica le funzionalità base di Airbnb. Il front-end, costruito con Vue.js e gestito tramite Vite, permette agli utenti di cercare appartamenti (anche tramite mappa interattiva usando le API TomTom), visualizzarne i dettagli, inviare messaggi ai proprietari e sponsorizzare i propri annunci tramite pagamenti gestiti con l'API Braintree. Il back-end, sviluppato in Laravel, gestisce l'autenticazione, le API REST per tutte le operazioni CRUD sugli appartamenti e i messaggi, le statistiche di visualizzazione e l'interazione con le API esterne.",
            boolbnbChallenges: "La sfida principale è stata l'integrazione efficace tra front-end e back-end tramite API REST, la gestione dell'autenticazione sicura e l'implementazione di API di terze parti complesse come TomTom (per mappe e geocoding) e Braintree (per i pagamenti). Il lavoro di squadra, utilizzando Git per la collaborazione, è stato fondamentale per coordinare lo sviluppo delle diverse funzionalità.",

            // --- Boolzapp ---
            boolzappTitle: "Boolzapp - Replica Interfaccia Chat",
            boolzappDesc: "Web App Chat UI (Vue.js)",
            boolzappLongDesc: "Questo progetto consiste nella replica fedele dell'interfaccia utente web di WhatsApp utilizzando Vue.js. L'obiettivo era concentrarsi sulla creazione di componenti riutilizzabili e sulla gestione dello stato dell'interfaccia in modo dinamico. L'applicazione permette di visualizzare una lista di contatti, selezionare una chat, visualizzare i messaggi (con date e orari formattati tramite Luxon.js), inviare nuovi messaggi (con una risposta automatica simulata dopo un breve ritardo) e filtrare i contatti tramite una barra di ricerca.",
            boolzappChallenges: "Replicare pixel-perfect un'interfaccia complessa come quella di WhatsApp, gestire la reattività dell'UI (aggiornamento dinamico delle chat e dei messaggi), e implementare logiche come la ricerca live e le risposte automatiche simulate sono state le sfide principali.",

            // --- Spotify Web ---
            spotifyTitle: "Spotify Web - Replica UI Player",
            spotifyDesc: "Layout Web Player (HTML/CSS)",
            spotifyLongDesc: "Questo esercizio di front-end si è focalizzato sulla riproduzione del layout dell'interfaccia web player di Spotify, usando solo HTML e CSS. È stata posta grande enfasi sulla creazione di una struttura semanticamente corretta e sull'utilizzo avanzato di Flexbox per gestire i complessi allineamenti dei vari componenti (sidebar, area principale, barra del player). Il layout è stato reso completamente responsive, adattandosi a diverse dimensioni di schermo, dai desktop ai dispositivi mobili.",
            spotifyChallenges: "La sfida principale è stata ottenere un layout così articolato e responsive utilizzando solo CSS, in particolare gestendo la barra del player fissa in basso e assicurando che tutti gli elementi si ridimensionassero e riposizionassero correttamente su schermi più piccoli.",

            // --- Altre Chiavi Esistenti ---
            viewCaseStudy: "Dettagli",
            viewDetailDefault: "Vedi Dettaglio Immagine",
            // ...
        
        },

        projectModal: {
            // ... (chiavi modal esistenti) ...
            challengesTitle: "Sfide & Soluzioni", // Assicurati sia presente
       },
        contact: {
             sectionTitle: "Mettiamoci in Contatto",
             sectionSubtitle: "Hai un progetto in mente o vuoi discutere una collaborazione? <br> Non esitare a scrivermi!",
             emailTitle: "Email",
             emailDesc: "Scrivimi direttamente per richieste o proposte.",
             socialTitle: "Seguimi",
             socialDesc: "Rimani aggiornato sui miei lavori e connessioni.",
             formName: "Il tuo Nome",
             formEmail: "La tua Email",
             formSubject: "Oggetto",
             formMessage: "Messaggio",
             formSend: "Invia Messaggio"
        },
        footer: {
            profileDesc: "Web Developer appassionato con sede in Italia. <br>Pronto a trasformare la tua visione digitale in realtà.",
            rights: "Tutti i diritti riservati.",
            quickLinks: "Link Rapidi",
            projects: "Progetti",
            connect: "Connettiti",
            followMe: "Seguimi sui social network:",
            emailLabel: "Email:"
        },
        
    },
    en: {
        pageTitle: "Matteo Cota - Web Developer Portfolio",
        metaKeywords: "Matteo Cota, Web Developer, Portfolio, Front End, Back End, Laravel, Vue.js, PHP, Javascript, Italy",
        metaDescription: "Portfolio of Matteo Cota, a Web Developer specializing in Front End and Back End. Discover my projects, skills, and contact me for collaborations.",
        spinnerLoading: "Loading...",
        nav: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            toggle: "Toggle navigation",
            toggleTheme: "Toggle Theme"
        },
        hero: {
            iAm: "// I Am",
            name: "Matteo Cota",
            typedText: "Web Developer Full Stack, Front End Developer, Back End Developer",
            description: "I transform ideas into code, creating engaging and functional web experiences.",
            downloadCv: "Download CV",
            contactMe: "Contact Me"
        },
         about: {
            years: "Year",
            yearsSuffix: "of experience in web development",
            fullstack: "full-stack",
            description1: "I am a web developer with a solid foundation in front-end and back-end development. I am passionate about creating digital solutions that are",
            strongText: "performant, intuitive, and visually appealing",
            description2: "My curiosity drives me to constantly stay updated on the latest technologies and industry best practices, to turn complex ideas into successful web projects.",
            listItem1: "Responsive and modern websites",
            listItem2: "Robust and scalable web applications",
            listItem3: "Attention to detail and User Experience",
            viewProjectsBtn: "My Projects",
            completedProjectsCounter: "Successfully Completed Projects",
            quote: '"From landing pages to complex applications, every project is an opportunity to create digital value."'
        },
        skills: {
            sectionTitle: "Skills & Education",
            sectionSubtitle: "Here are the technologies I work with and my educational background.",
            technicalSkills: "Technical Skills",
            htmlLevel: "98%",
            cssLevel: "95%",
            jsLevel: "92%",
            vueLevel: "88%",
            phpLevel: "90%",
            laravelLevel: "95%",
            otherSkills: "Other skills: Git, MySQL, Bootstrap, REST API, Problem Solving.",
            educationTitle: "Education",
            booleanExpTitle: "Full Stack Web Developer",
            booleanExpDate: "06/2024 - 12/2024 | Boolean",
            booleanExpDesc: "Intensive course focused on front-end (HTML, CSS, JS, Vue.js) and back-end (PHP, Laravel, MySQL) technologies.",
            googleDigitalTitle: "Fundamentals of Digital Marketing",
            googleDigitalDate: "10/2022 | Google Digital Training",
            googleDigitalDesc: "Certification on the basics of online marketing, SEO, SEM, and social media marketing.",
            googleGrowTitle: "Grow Digital (Crescere in Digitale)",
            googleGrowDate: "01/2016 | Google & Unioncamere",
            googleGrowDesc: "Training project on digital skills for entering the job market."
        },
        projects: {
            sectionTitle: "My Projects",
            filterAll: "All",
            filterWeb: "Websites",
            filterApps: "Applications",
            boolandoTitle: "Boolando",
            boolandoDesc: "E-commerce Replica (HTML/CSS)",
            boolandoDetail: "View Boolando Detail",
            boolandoVisit: "Visit site (link missing)",
            boolandoCode: "View Code (link missing)",
            boolflixTitle: "Boolflix",
            boolflixDesc: "Movie/TV Show Catalog App (Vue.js, API)",
            boolflixDetail: "View Boolflix Detail",
            boolflixVisit: "Visit app (link missing)",
            boolflixCode: "View Code (link missing)",
            dcComicsTitle: "DC Comics",
            dcComicsDesc: "Showcase Site (Laravel)",
            dcComicsDetail: "View DC Comics Detail",
            dcComicsVisit: "Visit site (link missing)",
            dcComicsCode: "View Code (link missing)",
            boolbnbTitle: "BoolBnB",
            boolbnbDesc: "Rental Platform (Full Stack - Team Project)",
            boolbnbDetail: "View BoolBnB Detail",
            boolbnbVisit: "Visit site (link missing)",
            boolbnbCode: "View Code (link missing)",
            boolzappTitle: "Boolzapp",
            boolzappDesc: "Chat Interface Replica (Vue.js)",
            boolzappDetail: "View Boolzapp Detail",
            boolzappVisit: "Visit app (link missing)",
            boolzappCode: "View Code (link missing)",
            spotifyTitle: "Spotify Web",
            spotifyDesc: "Player Interface Replica (HTML/CSS)",
            spotifyDetail: "View Spotify Detail",
            spotifyVisit: "Visit site (link missing)",
            spotifyCode: "View Code (link missing)",
            viewCaseStudy: "Details",
            viewDetailDefault: "View Image Detail", 
             // --- Boolando ---
             boolandoTitle: "Boolando - E-commerce Replica",
             boolandoDesc: "E-commerce Layout (HTML/CSS)",
             boolandoLongDesc: "This training project focused on creating a complex web layout based on the design of a well-known fashion e-commerce site, using only HTML and CSS. The main goal was to master element positioning (including product cards with hover effects), space management, and creating a semantically correct structure as faithful as possible to the original model. Particular attention was paid to implementing CSS details such as discount badges and favorite hearts.",
             boolandoChallenges: "The biggest challenge was achieving a responsive and precise layout across different screen sizes without the help of CSS frameworks or JavaScript, relying solely on native CSS techniques like Flexbox and @media rules.",
 
             // --- Boolflix ---
             boolflixTitle: "Boolflix - Movie & TV Show Catalog",
             boolflixDesc: "Media Catalog App (Vue.js, API)",
             boolflixLongDesc: "Boolflix is a single-page web application built with Vue.js (using Vite for development) that allows users to search for movies and TV shows by querying TheMovieDB public API. Results are dynamically displayed in a card grid, each containing the poster, original and translated title, language (with corresponding flag), and an average rating converted to a 5-star system. The application reactively manages the search state and results.",
             boolflixChallenges: "Cleanly managing asynchronous API calls with Axios and updating the interface based on the response was a key challenge. Implementing the logic to map language codes to flag icons and transforming the API's decimal rating into an integer value from 1 to 5 for the star display was also interesting.",
 
             // --- DC Comics ---
             dcComicsTitle: "DC Comics - Catalog Management",
             dcComicsDesc: "Showcase Site with CRUD (Laravel)",
             dcComicsLongDesc: "This project is a back-end web application built with the PHP framework Laravel. The purpose was to create a system for displaying and managing a catalog of DC Comics. Full CRUD (Create, Read, Update, Delete) functionalities for comics were implemented using Laravel's MVC pattern, routing system, database migrations with Eloquent ORM, and the Blade templating engine for views. SCSS, compiled via Vite, was also used for styling.",
             dcComicsChallenges: "Understanding and correctly applying Laravel's MVC flow, handling HTTP requests and server-side form validations, and properly configuring database relationships through Eloquent were the main learning areas.",
 
             // --- BoolBnB ---
             boolbnbTitle: "BoolBnB - Rental Platform",
             boolbnbDesc: "Full-Stack Rental App (Vue/Laravel)",
             boolbnbLongDesc: "BoolBnB is a complete web platform, developed as a team, replicating the basic functionalities of Airbnb. The front-end, built with Vue.js and managed via Vite, allows users to search for apartments (also via an interactive map using TomTom APIs), view their details, send messages to owners, and sponsor their listings through payments managed with the Braintree API. The back-end, developed in Laravel, handles authentication, REST APIs for all CRUD operations on apartments and messages, view statistics, and interaction with external APIs.",
             boolbnbChallenges: "The main challenge was the effective integration between front-end and back-end via REST APIs, secure authentication management, and the implementation of complex third-party APIs like TomTom (for maps and geocoding) and Braintree (for payments). Teamwork, using Git for collaboration, was crucial for coordinating the development of different features.",
 
             // --- Boolzapp ---
             boolzappTitle: "Boolzapp - Chat Interface Replica",
             boolzappDesc: "Chat UI Web App (Vue.js)",
             boolzappLongDesc: "This project consists of faithfully replicating the WhatsApp web user interface using Vue.js. The focus was on creating reusable components and managing the interface state dynamically. The application allows viewing a contact list, selecting a chat, viewing messages (with dates and times formatted using Luxon.js), sending new messages (with a simulated automatic reply after a short delay), and filtering contacts via a search bar.",
             boolzappChallenges: "Pixel-perfect replication of a complex interface like WhatsApp, managing UI reactivity (dynamic updating of chats and messages), and implementing logic such as live search and simulated automatic replies were the main challenges.",
 
             // --- Spotify Web ---
             spotifyTitle: "Spotify Web - Player UI Replica",
             spotifyDesc: "Web Player Layout (HTML/CSS)",
             spotifyLongDesc: "This front-end exercise focused on reproducing the layout of the Spotify web player interface using only HTML and CSS. Great emphasis was placed on creating a semantically correct structure and advanced use of Flexbox to manage the complex alignments of various components (sidebar, main area, player bar). The layout was made fully responsive, adapting to different screen sizes, from desktops to mobile devices.",
             spotifyChallenges: "The main challenge was achieving such an articulated and responsive layout using only CSS, particularly managing the fixed player bar at the bottom and ensuring all elements resized and repositioned correctly on smaller screens.",
 
             // --- Other Existing Keys ---
             viewCaseStudy: "Details",
             viewDetailDefault: "View Image Detail",
             // ...
         },
        
         projectModal: {
            // ... (existing modal keys) ...
            challengesTitle: "Challenges & Solutions", // Ensure it's present
        },
         contact: {
             sectionTitle: "Let's Get In Touch",
             sectionSubtitle: "Have a project in mind or want to discuss a collaboration? <br> Feel free to write me!",
             emailTitle: "Email",
             emailDesc: "Write me directly for requests or proposals.",
             socialTitle: "Follow Me",
             socialDesc: "Stay updated on my work and connections.",
             formName: "Your Name",
             formEmail: "Your Email",
             formSubject: "Subject",
             formMessage: "Message",
             formSend: "Send Message"
        },
        footer: {
            profileDesc: "Passionate Web Developer based in Italy. <br>Ready to turn your digital vision into reality.",
            rights: "All rights reserved.",
            quickLinks: "Quick Links",
            projects: "Projects",
            connect: "Connect",
            followMe: "Follow me on social networks:",
            emailLabel: "Email:"
        },
    }
};

const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = theme => localStorage.setItem('theme', theme);
const getStoredLang = () => localStorage.getItem('lang') || 'it';
const setStoredLang = lang => localStorage.setItem('lang', lang);

const applyTheme = (theme) => {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    const toggleIcon = toggleButton ? toggleButton.querySelector('i') : null;

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.setAttribute('data-bs-theme', 'dark');
        if (toggleIcon) toggleIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-mode');
        body.setAttribute('data-bs-theme', 'light');
        if (toggleIcon) toggleIcon.className = 'fas fa-moon';
    }
};

let currentTypedInstance = null;

const updateTexts = (lang) => {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(el => {
        const key = el.dataset.translateKey;
        const translation = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), translations[lang]);

        if (translation !== null && translation !== undefined) {
            if (el.hasAttribute('data-translate-title')) {
                 el.setAttribute('title', translation);
            } else if (el.hasAttribute('data-translate-aria-label')) {
                 el.setAttribute('aria-label', translation);
            } else if (el.hasAttribute('data-translate-placeholder')) {
                el.setAttribute('placeholder', translation);
            } else if (el.tagName === 'META') {
                 if (el.name === 'keywords') el.setAttribute('content', translation);
                 if (el.name === 'description') el.setAttribute('content', translation);
            } else if (el.tagName === 'TITLE') {
                 document.title = translation;
            } else if (el.classList.contains('typed-text')) {
                el.textContent = translation;
            }
            else {
                el.innerHTML = translation;
            }
        } else {
            console.warn(`Missing translation for key: ${key} in language: ${lang}`);
        }
    });

    const langDisplay = document.getElementById('currentLangDisplay');
    if (langDisplay) {
        langDisplay.textContent = lang.toUpperCase();
    }

    const typedOutput = document.querySelector('.typed-text-output');
    const typedStringsContainer = document.querySelector('.typed-text');

    if (typedOutput && typedStringsContainer) {
        if (currentTypedInstance) {
            currentTypedInstance.destroy();
        }
        const newStrings = typedStringsContainer.textContent.split(',').map(s => s.trim());

         currentTypedInstance = new Typed('.typed-text-output', {
             strings: newStrings.length > 0 && newStrings[0] !== "" ? newStrings : [' '],
             typeSpeed: 80,
             backSpeed: 40,
             backDelay: 1500,
             smartBackspace: false,
             loop: true,
             showCursor: true,
             cursorChar: '|',
         });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = getStoredTheme();
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(currentTheme);

    const currentLang = getStoredLang();
    updateTexts(currentLang);

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            setStoredTheme(newTheme);
        });
    }

     // 9. Gestione Apertura Modal DETTAGLI SPECIFICI Progetti
     const projectDetailModalEl = document.getElementById('projectDetailModal');
     if (projectDetailModalEl) {
         // Seleziona gli elementi specifici del NUOVO modal
         const modalDetailTitleEl = document.getElementById('modalDetailTitle');
         const modalDetailImageEl = document.getElementById('modalDetailImage');
         const modalDetailDescriptionEl = document.getElementById('modalDetailDescription');
         const modalDetailTechEl = document.getElementById('modalDetailTech');
         const modalDetailChallengesContainer = document.getElementById('modalDetailChallenges');
         const modalDetailChallengesTextEl = document.getElementById('modalDetailChallengesText');
         const modalDetailLinkLiveEl = document.getElementById('modalDetailLinkLive');
         const modalDetailLinkRepoEl = document.getElementById('modalDetailLinkRepo');
         const modalDialogLabel = document.getElementById('projectDetailModalLabel'); // Titolo header modal
 
         projectDetailModalEl.addEventListener('show.bs.modal', function (event) {
             const button = event.relatedTarget; // Bottone INFO che ha triggerato il modal
             const lang = getStoredLang();
 
             // Funzione helper per traduzioni (assicurati sia definita prima)
             const getTranslation = (key) => key ? key.split('.').reduce((obj, i) => (obj ? obj[i] : null), translations[lang]) || key : '';
 
             // Estrai i dati dal bottone
             const titleKey = button.getAttribute('data-project-title-key');
             const imgSrc = button.getAttribute('data-project-img');
             const descriptionKey = button.getAttribute('data-project-desc-key');
             const challengesKey = button.getAttribute('data-project-challenges-key');
             const techString = button.getAttribute('data-project-tech');
             const liveUrl = button.getAttribute('data-project-live-url');
             const repoUrl = button.getAttribute('data-project-repo-url');
 
             // Popola il Modal
             const titleText = getTranslation(titleKey);
             modalDetailTitleEl.textContent = titleText;
             modalDialogLabel.textContent = titleText; // Aggiorna anche titolo header modal
             modalDetailImageEl.src = imgSrc;
             modalDetailImageEl.alt = `Screenshot ${titleText}`;
             modalDetailDescriptionEl.innerHTML = getTranslation(descriptionKey);
 
             // Popola tecnologie
             modalDetailTechEl.innerHTML = ''; // Pulisci
             if (techString) {
                 techString.split(',').forEach(tech => {
                     if (tech.trim()) {
                         const span = document.createElement('span');
                         // Applica stile simile ai tag delle skill
                         span.className = 'skill-tag skill-tag-modal me-1 mb-1';
                         span.textContent = tech.trim();
                         modalDetailTechEl.appendChild(span);
                     }
                 });
             }
 
             // Popola Sfide (se presenti)
              const challengesText = challengesKey ? getTranslation(challengesKey) : '';
              if (challengesText) {
                  modalDetailChallengesTextEl.innerHTML = challengesText;
                  modalDetailChallengesContainer.style.display = 'block';
              } else {
                  modalDetailChallengesContainer.style.display = 'none';
              }
 
             // Gestisci link
             if (liveUrl && liveUrl !== '#') {
                 modalDetailLinkLiveEl.href = liveUrl;
                 modalDetailLinkLiveEl.style.display = 'inline-block';
             } else {
                 modalDetailLinkLiveEl.style.display = 'none';
             }
 
             if (repoUrl && repoUrl !== '#') {
                 modalDetailLinkRepoEl.href = repoUrl;
                 modalDetailLinkRepoEl.style.display = 'inline-block';
             } else {
                 modalDetailLinkRepoEl.style.display = 'none';
             }
         });
     }

    const langSwitches = document.querySelectorAll('.lang-switch');
    langSwitches.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            if (newLang !== getStoredLang()) {
                setStoredLang(newLang);
                updateTexts(newLang);
                const dropdownToggle = document.getElementById('languageDropdown');
                const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownToggle);
                if (dropdownInstance) {
                     dropdownInstance.hide();
                }
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', () => {
    // ... (codice esistente per tema e lingua) ...

    // 5. Inizializza Animazioni di Scroll Personalizzate
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('[data-animate]');
        if (typeof Waypoint === 'function') { // Controlla se Waypoints è caricato
            animatedElements.forEach(el => {
                new Waypoint({
                    element: el,
                    handler: function(direction) {
                        if (direction === 'down' || direction === 'up') { // Attiva sia scendendo che salendo (opzionale)
                           el.classList.add('is-visible');
                           this.destroy(); // Importante: Distrugge il waypoint dopo l'attivazione per evitare ri-animazioni
                        }
                    },
                    offset: '85%' // Attiva quando l'85% dell'elemento è visibile (puoi regolare)
                });
            });
        } else {
            console.warn('Waypoints library not found. Scroll animations disabled.');
            // Fallback: Rendi subito visibili gli elementi se Waypoints non c'è
            animatedElements.forEach(el => el.classList.add('is-visible'));
        }
    };
    initScrollAnimations(); // Chiama la funzione


    // Qui inizia il resto del tuo codice JS originale dentro la IIFE
   
});




(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner();

    new WOW().init();

    var MQL = 992;
    var navbar = $('.navbar.fixed-top');

    function handleNavbarScroll() {
         if ($('#navbarCollapse').hasClass('show')) {
             if (!navbar.hasClass('navbar-scrolled')) {
                  navbar.addClass('navbar-scrolled');
             }
             return;
         }

        if ($(window).scrollTop() > 100) {
             if (!navbar.hasClass('navbar-scrolled')) {
                 navbar.hide().addClass('navbar-scrolled').fadeIn('slow');
             }
        } else {
             if (navbar.hasClass('navbar-scrolled')) {
                 navbar.removeClass('navbar-scrolled');
             }
        }
    }

     if ($(window).width() >= MQL) {
         handleNavbarScroll();
         $(window).scroll(handleNavbarScroll);
     } else {
         navbar.addClass('navbar-scrolled');
     }

     $(window).resize(function() {
         if ($(window).width() >= MQL) {
            handleNavbarScroll();
            $(window).on('scroll', handleNavbarScroll);
         } else {
             navbar.addClass('navbar-scrolled');
             $(window).off('scroll', handleNavbarScroll);
         }
     });

     $('#navbarCollapse').on('show.bs.collapse', function () {
         if (!navbar.hasClass('navbar-scrolled')) {
             navbar.addClass('navbar-scrolled');
         }
     });
      $('#navbarCollapse').on('hidden.bs.collapse', function () {
          handleNavbarScroll();
      });


    $(".navbar-nav a, .footer-link[href^='#'], a.btn[href^='#']").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var offsetTop = $(hash).length ? $(hash).offset().top : 0;
            var navbarHeight = $('.navbar.fixed-top').outerHeight() || 0;

            $('html, body').animate({
                scrollTop: offsetTop - navbarHeight - 10
            }, 800, 'easeInOutExpo', function(){
               $(hash).blur();
               if ($('.navbar-toggler').is(':visible')) {
                    $('.navbar-collapse').collapse('hide');
               }
            });

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a.nav-link').addClass('active');
            }
        }
    });

     $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var navbarHeight = $('.navbar.fixed-top').outerHeight() || 0;
        var currentSection = null;

        $('section[id]').each(function() {
            // Ensure offset().top exists before accessing it
            if ($(this).length && typeof $(this).offset() !== 'undefined') {
                var sectionTop = $(this).offset().top - navbarHeight - 50;
                var sectionBottom = sectionTop + $(this).outerHeight();

                if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                    currentSection = '#' + $(this).attr('id');
                }
            }
        });

        // Check if #about exists before accessing its offset
        var aboutOffsetTop = $('#about').length && typeof $('#about').offset() !== 'undefined' ? $('#about').offset().top / 2 : 500;

        if (!currentSection && scrollDistance < aboutOffsetTop) {
            $('.navbar-nav a.active').removeClass('active');
             const homeLink = $('.navbar-nav a[href="index.html"]').first(); // Prefer index.html or the first brand link
             if (homeLink.length) {
                 homeLink.closest('.nav-item').find('.nav-link').add(homeLink).addClass('active');
             } else {
                  // Fallback if no specific home link found, activate the first nav item maybe
                  $('.navbar-nav .nav-item:first-child .nav-link').addClass('active');
             }

        } else if (currentSection) {
             $('.navbar-nav a.active').removeClass('active');
             $('.navbar-nav a[href="' + currentSection + '"]').addClass('active');
        }

    }).scroll();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow').css('display', 'inline-flex');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });


    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
        if ($videoSrc) {
           $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0&rel=0");
        }
    });
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', '');
    });


    var counterElement = $('[data-toggle="counter-up"]');
    if (counterElement.length) {
         if (!counterElement.data('counterup-initialized')) {
            counterElement.counterUp({
                delay: 10,
                time: 1500
            });
            counterElement.data('counterup-initialized', true);
         }
    }


    var skillSection = $('#skill');
    if (skillSection.length) {
        var skillsAnimated = false;
        skillSection.waypoint(function (direction) {
            if (direction === 'down' && !skillsAnimated) {
                $('.progress .progress-bar').each(function () {
                    $(this).css("width", $(this).attr("aria-valuenow") + '%');
                });
                skillsAnimated = true;
            }
        }, { offset: '80%' });

         setTimeout(function(){
             // Check if skillSection exists and has offset before accessing top
             if (!skillsAnimated && skillSection.length && typeof skillSection.offset() !== 'undefined' && skillSection.offset().top < $(window).height() * 0.8) {
                 $('.progress .progress-bar').each(function () {
                    $(this).css("width", $(this).attr("aria-valuenow") + '%');
                });
                skillsAnimated = true;
             }
         }, 500);
    }


    var portfolioContainer = $('.portfolio-container');
    if (portfolioContainer.length) {
        var portfolioIsotope;

        portfolioContainer.imagesLoaded( function() {
             portfolioIsotope = portfolioContainer.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                transitionDuration: '0.6s'
            });
        });


        $('#portfolio-flters li').on('click', function () {
            if (!$(this).hasClass('active')) {
                $("#portfolio-flters li").removeClass('active');
                $(this).addClass('active');

                if (portfolioIsotope) {
                     portfolioIsotope.isotope({ filter: $(this).data('filter') });
                }
            }
        });

           // ---> BLOCCO AGGIORNATO: AGGIORNAMENTO ATTRIBUTI PER LIGHTBOX (CON DEBUG) <---
    const lightboxLinks = document.querySelectorAll('a[data-lightbox="portfolio"]');
    console.log(`[Lightbox Debug] Trovati ${lightboxLinks.length} link lightbox.`); // DEBUG

    lightboxLinks.forEach((link, index) => {
        console.log(`[Lightbox Debug ${index}] Processo link:`, link.href); // DEBUG
        const portfolioItem = link.closest('.portfolio-item'); // Trova il contenitore del progetto

        if (portfolioItem) {
            // Trova il titolo e la descrizione associati a questo specifico link lightbox
            const titleEl = portfolioItem.querySelector('.portfolio-content h5[data-translate-key]');
            const descEl = portfolioItem.querySelector('.portfolio-content p[data-translate-key]');

            const titleKey = titleEl ? titleEl.dataset.translateKey : null;
            const descKey = descEl ? descEl.dataset.translateKey : null;
            console.log(`[Lightbox Debug ${index}] Chiavi trovate: Title='${titleKey}', Desc='${descKey}'`); // DEBUG

            // Ottieni le traduzioni correnti
            const currentLang = getStoredLang(); // Assicurati che lang sia definita qui
            const getTranslation = (key) => key ? key.split('.').reduce((obj, i) => (obj ? obj[i] : null), translations[currentLang]) : null; // Usa helper

            const titleText = getTranslation(titleKey) || ''; // Fallback a stringa vuota se non trovato
            const descText = getTranslation(descKey) || ''; // Fallback a stringa vuota
            console.log(`[Lightbox Debug ${index}] Testi tradotti: Title='${titleText}', Desc='${descText}'`); // DEBUG

            // Crea la stringa per data-title (usata da Lightbox come didascalia)
            let lightboxCaption = titleText;
            if (descText) {
                // Usa HTML semplice e valido per la didascalia
                lightboxCaption += ` <span class='lightbox-caption-desc'>(${descText.replace(/"/g, '"')})</span>`; // Escapa eventuali virgolette nella descrizione
            }

            // Verifica che lightboxCaption sia una stringa valida prima di assegnarla
            if (typeof lightboxCaption === 'string') {
                link.setAttribute('data-title', lightboxCaption.trim());
                console.log(`[Lightbox Debug ${index}] data-title impostato:`, lightboxCaption.trim()); // DEBUG
            } else {
                 link.setAttribute('data-title', 'Errore Didascalia'); // Fallback se qualcosa va storto
                 console.error(`[Lightbox Debug ${index}] Errore: lightboxCaption non è una stringa valida.`, lightboxCaption); // DEBUG
            }


            // Aggiorna anche l'attributo title standard (tooltip)
            const detailKey = link.dataset.translateTitle;
             const detailText = getTranslation(detailKey) || '';
             const defaultTooltip = getTranslation('projects.viewDetailDefault') || 'View Detail'; // Chiave per tooltip default

            if (detailText) {
                link.setAttribute('title', detailText);
            } else {
                link.setAttribute('title', titleText || defaultTooltip); // Usa titolo progetto o default
            }
             console.log(`[Lightbox Debug ${index}] title impostato:`, link.getAttribute('title')); // DEBUG

        } else {
            console.warn(`[Lightbox Debug ${index}] Contenitore .portfolio-item non trovato per il link:`, link); // DEBUG
            link.setAttribute('data-title', 'Errore: Item non trovato'); // Fallback
        }
    });
    // ---> FINE BLOCCO LIGHTBOX <---
    }

    $('#current-year').text(new Date().getFullYear());

})(jQuery);