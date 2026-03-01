/* ========================================
   Guía de Capacitación - App JavaScript
   ======================================== */

// ========================================
// Training Data - All 7 Steps (Removed Step 1)
// ========================================

const trainingSteps = [
    {
        id: 1,
        title: "Encontrar IPs",
        description: "Localizar las direcciones IP del cliente mediante diferentes opciones disponibles.",
        botGreeting: "¡Bienvenido a la Guía de Capacitación! 👋\n\nSoy tu asistente y te guiaré paso a paso en el proceso de revisión de enlaces de clientes.\n\nEmpecemos con el primer paso: Encontrar las IPs del cliente.\n\nTienes 3 opciones para encontrar las IPs. ¿Cuál prefieres explorar primero?",
        instructions: [
            "<strong>Opción A: Crear ticket</strong><br>Click en 'Crear ticket' para poder encontrar las IPs",
            "<strong>Opción B: Datos Operativos</strong><br>Click en 'Datos operativos' para MU y Core<br>→ Verificar que aparezcan los campos de Radio y Router<br>→ Ingresar a los campos<br>→ Click en 'Configuración de red' y obtener IP",
            "<strong>Opción C: Validar Equipo Instalado</strong><br>Click en 'Equipo instalado' para RU y RT<br>→ Click en Radio o Router<br>→ Click en 'Configuración de red' y obtener IP",
            "<strong>⚠️ Importante:</strong> Al encontrar las IPs, Abrir CORE usando WinBox"
        ],
        checklist: [
            "He seleccionado una opción para buscar IPs",
            "Encontré la IP del equipo",
            "Abrí Core usando WinBox"
        ]
    },
    {
        id: 2,
        title: "Configuración y Validación en Core",
        description: "Configurar la conexión al Core y validar la cola del cliente.",
        botGreeting: "Perfecto, estás en el Core. Ahora vamos a configurar y validar la conexión.\n\n¿Ya tienes WinBox abierto con el Core conectado?",
        instructions: [
            "Agregar la IP del cliente en el campo 'Connect To'",
            "Usar la extensión <span class='ip-address'>:44100</span> para la conexión",
            "Ingresar las credenciales correspondientes (usuario y password)",
            "Ya adentro del Core, abrir el menú <strong>Queues</strong>",
            "Buscar al cliente en la lista",
            "Abrir la interfaz correspondiente en las queues del cliente"
        ],
        checklist: [
            "Agregué la IP con la extensión :44100",
            "Ingresé las credenciales correctamente",
            "Encontré al cliente en Queues",
            "Abrí la interfaz del cliente"
        ]
    },
    {
        id: 3,
        title: "Validación de Tráfico en Queues",
        description: "Revisar los parámetros de tráfico del cliente en las queues.",
        botGreeting: "Muy bien, ahora vamos a validar el tráfico del cliente.\n\n¿Puedes ver la interfaz del cliente en las queues?",
        instructions: [
            "Revisar los valores de <strong>Max</strong> y <strong>Min</strong> de Mbps configurados",
            "En la pestaña <strong>General</strong>, verificar el campo <strong>Target Upload</strong>",
            "En la pestaña <strong>Traffic</strong>, revisar el tráfico actual",
            "Verificar que los valores coincidan con lo contratado por el cliente"
        ],
        checklist: [
            "Revisé los valores de Max y Min Mbps",
            "Verifiqué el Target Upload en la pestaña General",
            "Revisé el tráfico en la pestaña Traffic",
            "Los valores coinciden con lo contratado"
        ]
    },
    {
        id: 4,
        title: "Pruebas de ping desde Tools",
        description: "Realizar pruebas de conectividad hacia los equipos MU, RU y RT.",
        botGreeting: "Excelente trabajo. Ahora vamos a hacer pruebas de ping.\n\n¿Tienes las IPs de MU, RU y RT a mano?",
        instructions: [
            "Ir a la pestaña <strong>Tools</strong> en el Core",
            "Entrar a <strong>Ping</strong> y abrir 3 pestañas",
            "En cada pestaña, agregar la IP correspondiente:",
            "   → IP de <strong>MU</strong> (Unit de cliente)",
            "   → IP de <strong>RU</strong> (Radio Unit)",
            "   → IP de <strong>RT</strong> (Router Terminal)",
            "Ejecutar las pruebas de ping para cada equipo"
        ],
        checklist: [
            "Abrí la pestaña Tools > Ping",
            "Agregué la IP de MU y ejecuté ping",
            "Agregué la IP de RU y ejecuté ping",
            "Agregué la IP de RT y ejecuté ping",
            "Todos los pings fueron exitosos"
        ]
    },
    {
        id: 5,
        title: "Validación de Antenas",
        description: "Verificar el estado y configuración de las antenas en la web de gestión.",
        botGreeting: "Las pruebas de ping están listas. Ahora vamos a validar las antenas.\n\n¿Tienes acceso a la web de gestión de antenas?",
        instructions: [
            "Abrir la interfaz de antenas en la web",
            "Ingresar las credenciales correspondientes",
            "Validar los siguientes parámetros:",
            "   → <strong>dBMs</strong>: Potencia de señal (debe estar en rangos óptimos)",
            "   → <strong>Antenas actualizadas</strong>: Verificar versión de firmware",
            "   → <strong>PHY</strong>: Verificar configuración física",
            "   → <strong>Negociación en 1G</strong>: Confirmar velocidad de enlace",
            "   → <strong>Link Uptime</strong>: Tiempo de conexión activo",
            "   → <strong>Link Availability</strong>: Disponibilidad del enlace"
        ],
        checklist: [
            "Accedí a la web de antenas",
            "Verifiqué los dBMs (señal)",
            "Confirmé que las antenas están actualizadas",
            "Verifiqué el PHY correcto",
            "Confirmé negociación en 1G",
            "Revisé Link Uptime",
            "Revisé Link Availability"
        ]
    },
    {
        id: 6,
        title: "Ingresar al Router (RT)",
        description: "Configurar y validar la conexión al router del cliente.",
        botGreeting: "Excelente. Ahora vamos a configurar y validar el Router (RT).\n\n¿Tienes la IP del router del cliente?",
        instructions: [
            "Agregar la IP del router en 'Connect To' de WinBox",
            "Usar la extensión <span class='ip-address'>:63202</span> para la conexión",
            "Ingresar las credenciales de <span class='credential'>cast</span>",
            "Dentro del router, abrir <strong>Interfaces</strong>",
            "Revisar <strong>Address List</strong> y <strong>ARP List</strong>",
            "Ir a <strong>Tools → Traceroute</strong> y hacer traceroute hacia <span class='ip-address'>8.8.8.8</span> (DNS de Google)",
            "Validar que haya salida a internet"
        ],
        checklist: [
            "Agregué la IP del router con extensión :63202",
            "Ingresé las credenciales de cast",
            "Revisé Address List",
            "Revisé ARP List",
            "Hice traceroute a 8.8.8.8",
            "Hay salida a internet"
        ]
    },
    {
        id: 7,
        title: "Pruebas de Velocidad",
        description: "Realizar pruebas de velocidad para validar el ancho de banda.",
        botGreeting: "¡Casi terminamos! Última étape: las pruebas de velocidad.\n\n¿Estás listo para hacer las pruebas?",
        instructions: [
            "Volver al Core",
            "Ir a <strong>Tools → Bandwidth Test</strong>",
            "Realizar las pruebas de velocidad:",
            "   → Ingresar la IP del router en el campo 'Test to'",
            "   → Seleccionar protocolo <strong>TCP</strong>",
            "   → Seleccionar dirección: <strong>Upload</strong> (subida)",
            "   → Seleccionar dirección: <strong>Download</strong> (bajada)",
            "   → Agregar credenciales (usuario y password)",
            "Ejecutar las pruebas y verificar que coincidan con lo contratado"
        ],
        checklist: [
            "Accedí a Tools > Bandwidth Test en Core",
            "Realicé prueba de Upload",
            "Realicé prueba de Download",
            "Las velocidades coinciden con lo contratado"
        ]
    }
];

// Bot messages for different states
const botMessages = {
    welcome: "¡Bienvenido a la Guía de Capacitación! 👋\n\nSoy tu asistente y te guiaré paso a paso en el proceso de revisión de enlaces de clientes.\n\nEmpecemos con el primer paso: Encontrar las IPs.",
    stepComplete: "¡Perfecto! ✅ Has completado este paso.\n\nAvancemos al siguiente paso.",
    allComplete: "🎉 ¡Felicidades! Has completado todos los pasos de la guía de capacitación.\n\nAhora estás listo para revisar enlaces de clientes por ti mismo.",
    cantAdvance: "Espera un momento ⏳\n\nNecesitas completar todas las subtareas antes de avanzar al siguiente paso.",
    notReady: "No puedes avanzar todavía ❌\n\nPor favor, completa las subtareas de este paso primero.",
    modeChanged: "Has cambiado al modo de navegación libre. Ahora puedes explorar los pasos sin seguir un orden específico.",
    wizardMode: "Has activado el modo guía. Deberás completar cada paso antes de avanzar al siguiente.",
    resetConfirm: "Tu progreso ha sido reiniciado. ¡Puedes comenzar de nuevo cuando estés listo!"
};

// ========================================
// App State
// ========================================

const APP_VERSION = '1.0.0';

const appState = {
    currentStep: 1,
    totalSteps: trainingSteps.length,
    isWizardMode: true,
    completedSteps: [],
    checklistState: {}
};

// ========================================
// DOM Elements
// ========================================

const elements = {
    // Header
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    modeSwitch: document.getElementById('modeSwitch'),
    themeToggle: document.getElementById('themeToggle'),
    stepsMini: document.getElementById('stepsMini'),
    
    // Sidebar
    stepsNav: document.getElementById('stepsNav'),
    resetBtn: document.getElementById('resetBtn'),
    resetBtnSmall: document.getElementById('resetBtnSmall'),
    
    // Content
    stepContent: document.getElementById('stepContent'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    
    // Mobile
    mobileNav: document.getElementById('mobileNav'),
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileContentBtn: document.getElementById('mobileContentBtn'),
    mobileMenuPanel: document.getElementById('mobileMenuPanel'),
    mobileMenuSteps: document.getElementById('mobileMenuSteps'),
    mobileMenuClose: document.getElementById('mobileMenuClose'),
    mobileHamburger: document.getElementById('mobileHamburger'),
    
    // Modal
    completionModal: document.getElementById('completionModal'),
    completionCloseBtn: document.getElementById('completionCloseBtn')
};

// ========================================
// Initialization
// ========================================

function init() {
    checkVersion();
    loadState();
    renderSidebar();
    renderMiniSteps();
    renderContent();
    updateProgress();
    bindEvents();
    loadMobileMenuContent();
}

// ========================================
// Version Check & Cache Management
// ========================================

function checkVersion() {
    const savedVersion = localStorage.getItem('guia_capacitacion_version');
    if (savedVersion !== APP_VERSION) {
        // Version changed - clear old state
        localStorage.removeItem('guia_capacitacion_state');
        localStorage.setItem('guia_capacitacion_version', APP_VERSION);
        console.log('Versión actualizada a:', APP_VERSION);
    }
}

// ========================================
// State Management (localStorage)
// ========================================

function loadState() {
    // Progress always resets on refresh as requested
    // Only load theme preference and mode setting, not progress
    try {
        const saved = localStorage.getItem('guia_capacitacion_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Only load mode setting, not progress
            appState.isWizardMode = parsed.isWizardMode !== false;
            
            // Update mode switch
            if (elements.modeSwitch) {
                elements.modeSwitch.checked = !appState.isWizardMode;
            }
        }
    } catch (e) {
        console.warn('Could not load state:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem('guia_capacitacion_state', JSON.stringify({
            currentStep: appState.currentStep,
            completedSteps: appState.completedSteps,
            checklistState: appState.checklistState,
            isWizardMode: appState.isWizardMode
        }));
    } catch (e) {
        console.warn('Could not save state:', e);
    }
}

function resetProgress() {
    appState.currentStep = 1;
    appState.completedSteps = [];
    appState.checklistState = {};
    saveState();
    renderSidebar();
    renderMiniSteps();
    renderContent();
    updateProgress();
    loadMobileMenuContent();
    alert('Tu progreso ha sido reiniciado. ¡Puedes comenzar de nuevo cuando estés listo!');
}

// ========================================
// Rendering Functions
// ========================================

function renderSidebar() {
    elements.stepsNav.innerHTML = trainingSteps.map(step => {
        const isActive = step.id === appState.currentStep;
        const isCompleted = appState.completedSteps.includes(step.id);
        const isLocked = appState.isWizardMode && !isCompleted && step.id > appState.currentStep;
        
        let stepClass = 'step-item';
        if (isActive) stepClass += ' active';
        if (isCompleted) stepClass += ' completed';
        
        return `
            <div class="${stepClass}" data-step="${step.id}" ${isLocked ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
                <div class="step-number">${isCompleted ? '' : step.id}</div>
                <div class="step-info">
                    <div class="step-title">${step.title}</div>
                    <div class="step-description">${step.description}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.step-item').forEach(item => {
        item.addEventListener('click', () => {
            const stepId = parseInt(item.dataset.step);
            navigateToStep(stepId);
        });
    });
}

function renderMiniSteps() {
    if (!elements.stepsMini) return;
    
    elements.stepsMini.innerHTML = trainingSteps.map(step => {
        const isActive = step.id === appState.currentStep;
        const isCompleted = appState.completedSteps.includes(step.id);
        
        let stepClass = 'step-mini';
        if (isActive) stepClass += ' active';
        if (isCompleted) stepClass += ' completed';
        
        return `<div class="${stepClass}" data-step="${step.id}"><span>${step.id}</span></div>`;
    }).join('');
    
    // Add click handlers for mini steps
    document.querySelectorAll('.step-mini').forEach(item => {
        item.addEventListener('click', () => {
            const stepId = parseInt(item.dataset.step);
            navigateToStep(stepId);
        });
    });
}

function renderContent() {
    const step = trainingSteps.find(s => s.id === appState.currentStep);
    if (!step) return;
    
    const checklistState = appState.checklistState[step.id] || new Array(step.checklist.length).fill(false);
    const allChecked = checklistState.every(c => c);
    
    elements.stepContent.innerHTML = `
        <div class="step-header">
            <span class="step-badge">
                <i class="fas fa-map-signs"></i>
                Paso ${step.id} de ${appState.totalSteps}
            </span>
            <h2 class="step-content-title">${step.title}</h2>
            <p class="step-content-description">${step.description}</p>
        </div>
        
        <div class="instructions-card">
            <h3><i class="fas fa-list-ol"></i> Instrucciones</h3>
            <ol class="instructions-list">
                ${step.instructions.map((inst, i) => `
                    <li data-step="${i + 1}">${inst}</li>
                `).join('')}
            </ol>
        </div>
        
        <div class="checklist-card">
            <h3><i class="fas fa-check-square"></i> Checklist de Completado</h3>
            <ul class="checklist">
                ${step.checklist.map((item, i) => `
                    <li class="checklist-item ${checklistState[i] ? 'checked' : ''}" data-step="${step.id}" data-index="${i}">
                        <div class="checkbox">
                            <i class="fas fa-check"></i>
                        </div>
                        <span class="checklist-text">${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    // Add checklist handlers
    document.querySelectorAll('.checklist-item').forEach(item => {
        item.addEventListener('click', () => {
            const stepId = parseInt(item.dataset.step);
            const index = parseInt(item.dataset.index);
            toggleChecklistItem(stepId, index);
        });
    });
    
    // Update buttons
    updateNavigationButtons(allChecked);
}

function updateProgress() {
    const completed = appState.completedSteps.length;
    const total = appState.totalSteps;
    const percentage = Math.round((completed / total) * 100);
    
    if (elements.progressFill) {
        elements.progressFill.style.width = `${percentage}%`;
    }
    if (elements.progressText) {
        elements.progressText.textContent = `${percentage}% - Paso ${appState.currentStep} de ${total}`;
    }
}

function updateNavigationButtons(allChecked) {
    const isFirstStep = appState.currentStep === 1;
    const isLastStep = appState.currentStep === appState.totalSteps;
    
    if (elements.prevBtn) {
        elements.prevBtn.disabled = isFirstStep;
    }
    if (elements.nextBtn) {
        elements.nextBtn.disabled = appState.isWizardMode && !allChecked;
        
        if (isLastStep) {
            elements.nextBtn.innerHTML = 'Finalizar <i class="fas fa-check"></i>';
            elements.nextBtn.classList.remove('btn-primary');
            elements.nextBtn.classList.add('btn-success');
        } else {
            elements.nextBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>';
            elements.nextBtn.classList.remove('btn-success');
            elements.nextBtn.classList.add('btn-primary');
        }
    }
}

// ========================================
// Event Handlers
// ========================================

function bindEvents() {
    // Navigation buttons
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', () => {
            if (appState.currentStep > 1) {
                navigateToStep(appState.currentStep - 1);
            }
        });
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', () => {
            const step = trainingSteps.find(s => s.id === appState.currentStep);
            if (!step) return;
            
            const checklistState = appState.checklistState[step.id] || [];
            const allChecked = checklistState.every(c => c);
            
            if (appState.isWizardMode && !allChecked) {
                alert('Necesitas completar todas las subtareas antes de avanzar al siguiente paso.');
                return;
            }
            
            if (appState.currentStep < appState.totalSteps) {
                navigateToStep(appState.currentStep + 1);
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Show completion modal
                showCompletionModal();
            }
        });
    }
    
    // Mode switch
    if (elements.modeSwitch) {
        elements.modeSwitch.addEventListener('change', () => {
            appState.isWizardMode = !elements.modeSwitch.checked;
            saveState();
            renderSidebar();
            renderMiniSteps();
            renderContent();
            alert(appState.isWizardMode ? 'Has activado el modo guía.' : 'Has cambiado al modo de navegación libre.');
        });
    }
    
    // Reset button (large - in case it exists)
    if (elements.resetBtn) {
        elements.resetBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso?')) {
                resetProgress();
            }
        });
    }
    
    // Small reset button in sidebar
    if (elements.resetBtnSmall) {
        elements.resetBtnSmall.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso?')) {
                resetProgress();
            }
        });
    }
    
    // Theme toggle (dark/light mode)
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', () => {
            toggleTheme();
        });
    }
    
    // Mobile menu buttons
    if (elements.mobileNavToggle) {
        elements.mobileNavToggle.addEventListener('click', () => {
            toggleMobileNav();
        });
    }
    
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            openMobileMenu();
        });
    }
    
    // Hamburger button in header
    if (elements.mobileHamburger) {
        elements.mobileHamburger.addEventListener('click', () => {
            openMobileMenu();
        });
    }
    
    if (elements.mobileContentBtn) {
        elements.mobileContentBtn.addEventListener('click', () => {
            closeMobileMenu();
        });
    }
    
    if (elements.mobileMenuClose) {
        elements.mobileMenuClose.addEventListener('click', () => {
            closeMobileMenu();
        });
    }
    
    // Mobile menu panel click on content
    if (elements.mobileMenuPanel) {
        elements.mobileMenuPanel.addEventListener('click', (e) => {
            if (e.target === elements.mobileMenuPanel) {
                closeMobileMenu();
            }
        });
    }
}

// ========================================
// Logic Functions
// ========================================

function navigateToStep(stepId) {
    // In wizard mode, check if can navigate
    if (appState.isWizardMode) {
        const currentChecklist = appState.checklistState[appState.currentStep] || [];
        const currentAllChecked = currentChecklist.every(c => c);
        
        // If trying to go forward and current not complete
        if (stepId > appState.currentStep && !currentAllChecked) {
            alert('No puedes avanzar todavía. Por favor, completa las subtareas de este paso primero.');
            return;
        }
        
        // If trying to skip steps
        if (stepId > appState.currentStep + 1) {
            // Check if all previous steps are complete
            for (let i = appState.currentStep; i < stepId; i++) {
                if (!appState.completedSteps.includes(i)) {
                    alert('Debes completar los pasos en orden.');
                    return;
                }
            }
        }
    }
    
    // Mark current step as completed if all checklist items checked
    const checklistState = appState.checklistState[appState.currentStep] || [];
    const allChecked = checklistState.every(c => c);
    
    if (allChecked && !appState.completedSteps.includes(appState.currentStep)) {
        appState.completedSteps.push(appState.currentStep);
    }
    
    appState.currentStep = stepId;
    saveState();
    renderSidebar();
    renderContent();
    updateProgress();
    loadMobileMenuContent();
}

function toggleChecklistItem(stepId, index) {
    if (!appState.checklistState[stepId]) {
        appState.checklistState[stepId] = new Array(trainingSteps.find(s => s.id === stepId).checklist.length).fill(false);
    }
    
    appState.checklistState[stepId][index] = !appState.checklistState[stepId][index];
    saveState();
    renderContent();
    
    const allChecked = appState.checklistState[stepId].every(c => c);
    
    if (allChecked) {
        // Step completed - show notification
        console.log('¡Paso completado!');
    }
}

// ========================================
// Theme Toggle Functions (Dark/Light Mode)
// ========================================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    // Save theme preference
    localStorage.setItem('guia_capacitacion_theme', newTheme);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('guia_capacitacion_theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// ========================================
// Completion Modal
// ========================================

function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    const completedSteps = document.getElementById('completedSteps');
    
    if (modal) {
        modal.classList.add('active');
        
        // Add event listener to close button - reset progress on finish
        const closeBtn = document.getElementById('completionCloseBtn');
        if (closeBtn) {
            // Remove old event listeners to avoid duplicates
            const newCloseBtn = closeBtn.cloneNode(true);
            closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
            elements.completionCloseBtn = newCloseBtn;
            
            newCloseBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                // Reset progress when finishing
                resetProgress();
            });
        }
        
        // Close on overlay click - also reset progress
        const overlay = modal.querySelector('.completion-overlay');
        if (overlay) {
            const newOverlay = overlay.cloneNode(true);
            overlay.parentNode.replaceChild(newOverlay, overlay);
            
            newOverlay.addEventListener('click', () => {
                modal.classList.remove('active');
                resetProgress();
            });
        }
    }
}

// ========================================
// Mobile Menu Functions
// ========================================

function openMobileMenu() {
    if (elements.mobileMenuPanel) {
        elements.mobileMenuPanel.classList.add('open');
        if (elements.mobileMenuBtn) {
            elements.mobileMenuBtn.classList.add('active');
        }
        if (elements.mobileContentBtn) {
            elements.mobileContentBtn.classList.remove('active');
        }
    }
}

function closeMobileMenu() {
    if (elements.mobileMenuPanel) {
        elements.mobileMenuPanel.classList.remove('open');
        if (elements.mobileMenuBtn) {
            elements.mobileMenuBtn.classList.remove('active');
        }
    }
}

function toggleMobileNav() {
    if (elements.mobileNav) {
        elements.mobileNav.classList.toggle('collapsed');
        if (elements.mobileNavToggle) {
            const icon = elements.mobileNavToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-up');
                icon.classList.toggle('fa-chevron-down');
            }
        }
    }
}

function loadMobileMenuContent() {
    if (!elements.mobileMenuSteps) return;
    
    // Render all 7 steps in the mobile menu
    elements.mobileMenuSteps.innerHTML = trainingSteps.map(step => {
        const isActive = step.id === appState.currentStep;
        const isCompleted = appState.completedSteps.includes(step.id);
        const isLocked = appState.isWizardMode && !isCompleted && step.id > appState.currentStep;
        
        let stepClass = 'step-item';
        if (isActive) stepClass += ' active';
        if (isCompleted) stepClass += ' completed';
        
        return `
            <div class="${stepClass}" data-step="${step.id}" ${isLocked ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
                <div class="step-number">${isCompleted ? '' : step.id}</div>
                <div class="step-info">
                    <div class="step-title">${step.title}</div>
                    <div class="step-description">${step.description}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers for mobile menu steps
    document.querySelectorAll('#mobileMenuSteps .step-item').forEach(item => {
        item.addEventListener('click', () => {
            const stepId = parseInt(item.dataset.step);
            
            // In wizard mode, check if can navigate
            if (appState.isWizardMode) {
                const currentChecklist = appState.checklistState[appState.currentStep] || [];
                const currentAllChecked = currentChecklist.every(c => c);
                
                // If trying to go forward and current not complete
                if (stepId > appState.currentStep && !currentAllChecked) {
                    alert('No puedes avanzar todavía. Por favor, completa las subtareas de este paso primero.');
                    return;
                }
                
                // If trying to skip steps
                if (stepId > appState.currentStep + 1) {
                    // Check if all previous steps are complete
                    for (let i = appState.currentStep; i < stepId; i++) {
                        if (!appState.completedSteps.includes(i)) {
                            alert('Debes completar los pasos en orden.');
                            return;
                        }
                    }
                }
            }
            
            navigateToStep(stepId);
            closeMobileMenu();
        });
    });
}

// ========================================
// Start the App
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
    init();
});

