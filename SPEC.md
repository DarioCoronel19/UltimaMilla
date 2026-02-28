# Guía de Capacitación - Especificación del Proyecto

## 1. Project Overview

**Nombre del Proyecto**: Guía de Capacitación  
**Tipo**: Aplicación Web Interactiva (SPA)  
**Funcionalidad Principal**: Aplicación de capacitación interna para nuevos trabajadores que explica el proceso de revisión de enlaces de clientes en el módulo de Última Milla. Incluye un asistente tipo "bot" que guía al usuario paso a paso, requiriendo confirmación de completitud antes de avanzar.  
**Usuarios Objetivo**: Nuevos empleados que necesitan aprender el proceso de revisión de enlaces de clientes.

---

## 2. UI/UX Specification

### Layout Structure

**Header**
- Logo/título de la aplicación alineado a la izquierda
- Indicador de modo de navegación (Guía Paso a Paso / Navegación Libre) a la derecha
- Barra de progreso global en la parte inferior del header

**Main Content Area**
- Panel izquierdo: Lista de pasos/navegación lateral (250px de ancho)
- Panel central: Contenido del paso actual (flexible)
- Panel derecho: Bot asistente interactivo (300px de ancho, colapsable en móvil)

**Footer**
- Información de la empresa
- Versión de la guía

### Responsive Breakpoints
- Desktop: > 1024px (los 3 paneles visibles)
- Tablet: 768px - 1024px (panel del bot colapsable)
- Móvil: < 768px (un panel a la vez, navegación inferior)

### Visual Design

**Color Palette**
- Primary (Verde): `#22c55e` (green-500)
- Primary Dark: `#16a34a` (green-600)
- Primary Light: `#86efac` (green-300)
- Secondary (Azul): `#3b82f6` (blue-500)
- Secondary Dark: `#2563eb` (blue-600)
- Secondary Light: `#93c5fd` (blue-300)
- Background: `#f8fafc` (slate-50)
- Surface: `#ffffff`
- Text Primary: `#1e293b` (slate-800)
- Text Secondary: `#64748b` (slate-500)
- Border: `#e2e8f0` (slate-200)
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`

**Tipografía**
- Font Family: "DM Sans" (Google Fonts) para textos, "JetBrains Mono" para código/IPs
- Heading 1: 32px, font-weight 700
- Heading 2: 24px, font-weight 600
- Heading 3: 20px, font-weight 600
- Body: 16px, font-weight 400
- Small: 14px, font-weight 400
- Caption: 12px, font-weight 500

**Spacing System**
- Base unit: 4px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

**Visual Effects**
- Box shadows: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`
- Border radius: 8px (cards), 12px (modals), 6px (buttons)
- Transiciones: 300ms ease-in-out para hover states
- Animaciones de entrada: fade-in + slide-up con stagger

### Components

**1. Step Card (Tarjeta de Paso)**
- Número de paso (círculo con color primario)
- Título del paso
- Descripción breve
- Estado: completado (checkmark verde), actual (border azul), pendiente (gris)
- Hover: elevate shadow, border color change

**2. Bot Asistente**
- Avatar del bot (icono de chatbot)
- Mensajes del bot con typing animation
- Botones de respuesta (Sí/No/Continuar)
- Indicador de "esperando confirmación"

**3. Progress Bar**
- Barra de progreso horizontal
- Porcentaje completado
- Steps completados / total

**4. Content Panel**
- Título del paso
- Instrucciones detalladas (markdown renderizado)
- Imágenes/screenshots (opcional)
- Lista de verificación de subtareas
- Botón "Marcar como completado"

**5. Navigation Toggle**
- Switch para cambiar entre modos
- Iconosindicando modo actual

---

## 3. Functionality Specification

### Core Features

**Modo Guía Paso a Paso (Wizard)**
1. El usuario comienza en el paso 1
2. El bot muestra el contenido del paso actual
3. El usuario debe marcar cada subtarea como completada
4. Solo cuando todas las subtareas están completadas, el botón "Continuar" se activa
5. El bot confirma el avance y presenta el siguiente paso
6. Se muestra progreso global en la barra superior
7. No se puede saltar pasos (debe completar en orden)

**Modo Navegación Libre**
1. El usuario puede ver todos los pasos en la barra lateral
2. Puede navegar a cualquier paso haciendo click
3. No requiere completar en orden
4. El bot still guía pero no bloquea la navegación

**Funcionalidades del Bot**
- Saludo inicial explicando qué hace la aplicación
- Explicación de cada paso antes de mostrar el contenido
- Preguntas de confirmación ("¿Completaste esta acción?")
- Feedback positivo al completar pasos
- Mensajes de ánimo si el usuario se equivoca
- Resumen al final de la capacitación

**Checklist Interactivo**
- Cada paso tiene subtareas checkeables
- Persistencia del progreso en localStorage
- Indicador visual de progreso por paso

### User Interactions

1. **Click en paso (navegación libre)**: Cambia al paso seleccionado
2. **Click en "Siguiente"**: Avanza al siguiente paso (modo wizard)
3. **Click en "Anterior"**: Retrocede al paso anterior
4. **Toggle modo**: Cambia entre wizard y navegación libre
5. **Checkbox subtareas**: Marca/desmarca subtareas
6. **Collapse/Expand panel bot**: En tablet/móvil

### Data Handling

- **localStorage**: Guardar progreso del usuario
  - `guia_capacitacion_currentStep`: número del paso actual
  - `guia_capacitacion_completedSteps`: array de pasos completados
  - `guia_capacitacion_checklist`: estado de cada checkbox

### Edge Cases

- Usuario cierra la app y vuelve: Restaurar último progreso
- Usuario intenta avanzar sin completar: Mostrar warning del bot
- Usuario quiere reiniciar: Botón de resetear progreso
- Error en localStorage: Continuar sin guardar (aviso)

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Header visible con título y switch de modo
- [ ] Progress bar mostrando porcentaje de avance
- [ ] Panel lateral con lista de 8 pasos visibles
- [ ] Contenido del paso actual renderizado correctamente
- [ ] Bot asistente visible con avatar y mensajes
- [ ] Colores aplicados según paleta (verde, azul, blanco)
- [ ] Animaciones suaves al cambiar pasos
- [ ] Diseño responsive en diferentes tamaños de pantalla

### Functional Checkpoints
- [ ] Modo wizard: No permite avanzar sin completar subtareas
- [ ] Modo navegación libre: Permite saltar entre pasos
- [ ] Bot responde correctamente a las interacciones
- [ ] Checklist funciona y marca/desmarca
- [ ] Progreso se guarda en localStorage
- [ ] Al recargar la página, se restaura el progreso
- [ ] Botón de reiniciar funciona correctamente
- [ ] Transiciones entre pasos son fluidas

### Content Checkpoints
- [ ] Los 8 pasos del proceso están correctamente incluidos
- [ ] Instrucciones claras y entendibles
- [ ] Formato consistente en todos los pasos

---

## 5. Technical Implementation

**Stack Tecnológico**
- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (DM Sans, JetBrains Mono)
- Font Awesome 6 (iconos)
- No frameworks - implementación pura para máxima compatibilidad

**Estructura de Archivos**
```
/guia-capacitacion
  ├── index.html
  ├── styles.css
  └── app.js
```

**Navegación**
- Hash-based routing (#step-1, #step-2, etc.)
- Actualización sin reload de página


