// MarineStream Landing Page JavaScript with i18n

// Translations
const translations = {
    en: {
        nav: {
            signin: "Sign In",
            bookDemo: "Book Demo"
        },
        hero: {
            title: "Stop routing maintenance paperwork through ",
            titleHighlight: "email chains",
            description: "MarineStream digitizes multi-party vessel operations with real-time collaboration, automated reporting, and complete audit trails.",
            subtext: "Biofouling compliance + engineering maintenance + remote video collaboration = one platform.",
            cta: "Book a Demo"
        },
        stats: {
            timeReduction: "Time Reduction",
            timeReductionDetail: "50hrs → 8hrs per cycle",
            vesselsManaged: "Vessels Managed",
            vesselsManagedDetail: "Defense & Commercial",
            complianceRate: "Compliance Rate",
            complianceRateDetail: "Zero violations, 1.5 years",
            uptime: "Uptime",
            uptimeDetail: "Mission-critical reliability"
        },
        features: {
            title: "One Platform. Complete Control.",
            subtitle: "From field work capture to automated compliance reporting—streamline your entire maintenance operation.",
            differenceTitle: "The MarineStream Difference",
            feature1: "<strong>Digital Work Capture</strong> – Maintenance teams capture inspections, repairs, and engineering jobs in real-time on tablets or mobile devices. Add photos, videos, and notes directly in the field—no more paper forms.",
            feature2: "<strong>Parallel Multi-Party Workflows</strong> – Simultaneous approvals vs sequential bottlenecks. All stakeholders review in parallel, not in sequence. 5-level permissions proven with Royal Australian Navy.",
            feature3: "<strong>Remote Video Collaboration</strong> – Stream live from underwater worksites to shore-based engineering teams. Real-time guidance during complex repairs eliminates costly site visits.",
            feature4: "<strong>Automated Compliance Reporting</strong> – Platform auto-generates BFMPs, maintenance logs, inspection reports, and audit trails. Multi-framework compliance (IMO, biosecurity, defense).",
            feature5: "<strong>Blockchain Audit Trails</strong> – Immutable, tamper-proof record of every action. Complete traceability for regulators and auditors. Always audit-ready."
        },
        tools: {
            title: "See What MarineStream Automates",
            subtitle: "Try our free tools. Experience the manual complexity, then imagine automating it across your entire fleet.",
            bfmpTitle: "BFMP Generator",
            bfmpDescription: "Create IMO-compliant Biofouling Management Plans in minutes. See what MarineStream auto-generates for 85+ vessels.",
            bfmpCta: "Launch Generator →",
            calcTitle: "Hull Fouling Calculator",
            calcDescription: "Research-backed cost calculator from University of Melbourne studies. Quantify fuel waste and emissions across your fleet.",
            calcCta: "Calculate Impact →"
        },
        proof: {
            title: "Proven Results: Royal Australian Navy Operations",
            subtitle: "1.5 years of operations across 29 naval platforms including frigates, submarines, and patrol boats",
            workOrders: "Work Orders Completed",
            hoursPerCycle: "Hours per Cycle",
            violations: "Compliance Violations",
            dataManaged: "Data Managed",
            description: "Previously: Paper forms in hazardous conditions → manual transcription → Excel analysis → Word reports → sequential email routing. Now: Real-time digital capture → parallel processing → automated reporting. Same inspection, 80% less time.",
            badge1: "Royal Australian Navy",
            badge2: "56 Commercial Vessels",
            badge3: "IMO Standards Partner",
            badge4: "Defense-Grade Security"
        },
        cta: {
            title: "Book a 15-Minute Demo",
            subtitle: "See how MarineStream transforms your maintenance operations",
            formTitle: "Schedule Your Demo",
            nameLabel: "Full Name",
            namePlaceholder: "John Smith",
            emailLabel: "Email",
            emailPlaceholder: "john@company.com",
            companyLabel: "Company",
            companyPlaceholder: "Vessel Operator Co.",
            fleetLabel: "Fleet Type",
            fleetSelectDefault: "Select...",
            fleetDefense: "Defense/Naval",
            fleetCommercial: "Commercial Maritime",
            fleetBoth: "Both",
            submitBtn: "Book Demo",
            orEmail: "Or email:"
        },
        faq: {
            title: "Common Questions",
            q1: "What types of maintenance does MarineStream handle?",
            a1: "Everything: biofouling inspections and cleaning, hull repairs, engineering work, structural assessments, equipment maintenance. If it's work done to a vessel, MarineStream digitizes it.",
            q2: "How does remote video collaboration work?",
            a2: "Field teams stream live video from underwater ROVs or surface operations to shore-based engineers. Remote experts provide real-time guidance during complex repairs—proven in RAN urgent defect situations.",
            q3: "Does it work offline?",
            a3: "Currently requires connectivity for real-time collaboration features. Offline data capture is on our roadmap for Q2 2025. Most operations occur portside or in facilities with WiFi/cellular coverage.",
            q4: "What's the blockchain used for?",
            a4: "Immutable audit trails. Every action—approvals, data changes, report generation—is timestamped and cryptographically verified. Regulators and auditors get tamper-proof compliance records.",
            q5: "How long does implementation take?",
            a5: "Typically 30-45 days from contract to first vessel live. Includes data migration, user training, and workflow configuration. We handle the heavy lifting.",
            q6: "Can we integrate with existing systems?",
            a6: "Yes. RESTful APIs with OpenAPI documentation. We've integrated with Babcock maintenance systems, biosecurity databases, and client enterprise platforms. Tell us what you use."
        },
        footer: {
            description: "Digital multi-party maintenance platform for defense and commercial maritime operations.",
            expertise: "<strong>28 years</strong> underwater sustainment expertise<br><strong>A Franmarine Company</strong>",
            platformTitle: "Platform",
            bookDemo: "Book Demo",
            signIn: "Sign In",
            companyTitle: "Company",
            contactTitle: "Contact",
            copyright: "© 2025 MarineStream | A Franmarine Company | Trusted by Royal Australian Navy and Commercial Operators Worldwide"
        }
    },
    es: {
        nav: {
            signin: "Iniciar Sesión",
            bookDemo: "Reservar Demo"
        },
        hero: {
            title: "Deje de gestionar el papeleo de mantenimiento a través de ",
            titleHighlight: "cadenas de correos",
            description: "MarineStream digitaliza las operaciones de embarcaciones multipartitas con colaboración en tiempo real, informes automatizados y registros de auditoría completos.",
            subtext: "Cumplimiento de bioincrustación + mantenimiento de ingeniería + colaboración por video remoto = una plataforma.",
            cta: "Reservar una Demo"
        },
        stats: {
            timeReduction: "Reducción de Tiempo",
            timeReductionDetail: "50hrs → 8hrs por ciclo",
            vesselsManaged: "Embarcaciones Gestionadas",
            vesselsManagedDetail: "Defensa y Comercial",
            complianceRate: "Tasa de Cumplimiento",
            complianceRateDetail: "Cero violaciones, 1.5 años",
            uptime: "Tiempo de Actividad",
            uptimeDetail: "Confiabilidad crítica"
        },
        features: {
            title: "Una Plataforma. Control Completo.",
            subtitle: "Desde la captura de trabajo de campo hasta informes de cumplimiento automatizados—optimice toda su operación de mantenimiento.",
            differenceTitle: "La Diferencia MarineStream",
            feature1: "<strong>Captura Digital de Trabajo</strong> – Los equipos de mantenimiento capturan inspecciones, reparaciones y trabajos de ingeniería en tiempo real en tabletas o dispositivos móviles. Agregue fotos, videos y notas directamente en el campo—no más formularios en papel.",
            feature2: "<strong>Flujos de Trabajo Multipartitos Paralelos</strong> – Aprobaciones simultáneas vs cuellos de botella secuenciales. Todas las partes interesadas revisan en paralelo, no en secuencia. Permisos de 5 niveles probados con la Marina Real Australiana.",
            feature3: "<strong>Colaboración por Video Remoto</strong> – Transmita en vivo desde sitios de trabajo submarinos a equipos de ingeniería en tierra. Orientación en tiempo real durante reparaciones complejas elimina visitas costosas al sitio.",
            feature4: "<strong>Informes de Cumplimiento Automatizados</strong> – La plataforma genera automáticamente BFMPs, registros de mantenimiento, informes de inspección y registros de auditoría. Cumplimiento de múltiples marcos (OMI, bioseguridad, defensa).",
            feature5: "<strong>Registros de Auditoría en Blockchain</strong> – Registro inmutable a prueba de manipulaciones de cada acción. Trazabilidad completa para reguladores y auditores. Siempre listo para auditorías."
        },
        tools: {
            title: "Vea Lo Que MarineStream Automatiza",
            subtitle: "Pruebe nuestras herramientas gratuitas. Experimente la complejidad manual, luego imagine automatizarla en toda su flota.",
            bfmpTitle: "Generador de BFMP",
            bfmpDescription: "Cree Planes de Gestión de Bioincrustación conformes a la OMI en minutos. Vea lo que MarineStream genera automáticamente para más de 85 embarcaciones.",
            bfmpCta: "Iniciar Generador →",
            calcTitle: "Calculadora de Incrustación del Casco",
            calcDescription: "Calculadora de costos respaldada por investigación de estudios de la Universidad de Melbourne. Cuantifique el desperdicio de combustible y las emisiones en toda su flota.",
            calcCta: "Calcular Impacto →"
        },
        proof: {
            title: "Resultados Comprobados: Operaciones de la Marina Real Australiana",
            subtitle: "1.5 años de operaciones en 29 plataformas navales incluyendo fragatas, submarinos y patrulleras",
            workOrders: "Órdenes de Trabajo Completadas",
            hoursPerCycle: "Horas por Ciclo",
            violations: "Violaciones de Cumplimiento",
            dataManaged: "Datos Gestionados",
            description: "Anteriormente: Formularios en papel en condiciones peligrosas → transcripción manual → análisis en Excel → informes en Word → enrutamiento secuencial por correo. Ahora: Captura digital en tiempo real → procesamiento paralelo → informes automatizados. Misma inspección, 80% menos tiempo.",
            badge1: "Marina Real Australiana",
            badge2: "56 Embarcaciones Comerciales",
            badge3: "Socio de Estándares OMI",
            badge4: "Seguridad de Grado Militar"
        },
        cta: {
            title: "Reserve una Demo de 15 Minutos",
            subtitle: "Vea cómo MarineStream transforma sus operaciones de mantenimiento",
            formTitle: "Programe Su Demo",
            nameLabel: "Nombre Completo",
            namePlaceholder: "Juan García",
            emailLabel: "Correo Electrónico",
            emailPlaceholder: "juan@empresa.com",
            companyLabel: "Empresa",
            companyPlaceholder: "Operadora de Embarcaciones S.A.",
            fleetLabel: "Tipo de Flota",
            fleetSelectDefault: "Seleccionar...",
            fleetDefense: "Defensa/Naval",
            fleetCommercial: "Marítimo Comercial",
            fleetBoth: "Ambos",
            submitBtn: "Reservar Demo",
            orEmail: "O envíe un correo:"
        },
        faq: {
            title: "Preguntas Frecuentes",
            q1: "¿Qué tipos de mantenimiento gestiona MarineStream?",
            a1: "Todo: inspecciones y limpieza de bioincrustación, reparaciones del casco, trabajos de ingeniería, evaluaciones estructurales, mantenimiento de equipos. Si es trabajo realizado en una embarcación, MarineStream lo digitaliza.",
            q2: "¿Cómo funciona la colaboración por video remoto?",
            a2: "Los equipos de campo transmiten video en vivo desde ROVs submarinos u operaciones de superficie a ingenieros en tierra. Expertos remotos proporcionan orientación en tiempo real durante reparaciones complejas—probado en situaciones de defectos urgentes de la MRA.",
            q3: "¿Funciona sin conexión?",
            a3: "Actualmente requiere conectividad para funciones de colaboración en tiempo real. La captura de datos sin conexión está en nuestra hoja de ruta para Q2 2025. La mayoría de las operaciones ocurren en el puerto o en instalaciones con cobertura WiFi/celular.",
            q4: "¿Para qué se usa el blockchain?",
            a4: "Registros de auditoría inmutables. Cada acción—aprobaciones, cambios de datos, generación de informes—tiene marca de tiempo y está verificada criptográficamente. Los reguladores y auditores obtienen registros de cumplimiento a prueba de manipulaciones.",
            q5: "¿Cuánto tiempo toma la implementación?",
            a5: "Típicamente 30-45 días desde el contrato hasta la primera embarcación en funcionamiento. Incluye migración de datos, capacitación de usuarios y configuración de flujos de trabajo. Nosotros nos encargamos del trabajo pesado.",
            q6: "¿Podemos integrar con sistemas existentes?",
            a6: "Sí. APIs RESTful con documentación OpenAPI. Nos hemos integrado con sistemas de mantenimiento de Babcock, bases de datos de bioseguridad y plataformas empresariales de clientes. Díganos qué usa."
        },
        footer: {
            description: "Plataforma de mantenimiento multipartito digital para operaciones marítimas de defensa y comerciales.",
            expertise: "<strong>28 años</strong> de experiencia en sostenimiento submarino<br><strong>Una Empresa Franmarine</strong>",
            platformTitle: "Plataforma",
            bookDemo: "Reservar Demo",
            signIn: "Iniciar Sesión",
            companyTitle: "Empresa",
            contactTitle: "Contacto",
            copyright: "© 2025 MarineStream | Una Empresa Franmarine | De confianza de la Marina Real Australiana y Operadores Comerciales en todo el Mundo"
        }
    }
};

// Current language (default to English)
let currentLang = localStorage.getItem('marinestream_lang') || 'en';

// Initialize i18n
function initI18n() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('marinestream_lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            elem.innerHTML = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            elem.placeholder = translation;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize i18n
    initI18n();
    
    // Handle smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission is now handled by FormSubmit.co
    // The form will POST directly to https://formsubmit.co/mharvey@franmarine.com.au
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.08)';
    }
});

