# Plan de Cambios - Guía de Capacitación

## Información Recopilada

### Estructura Actual:
- **Header**: Contiene `header-top` (logo, título, theme toggle, mode toggle), `header-bottom` (pasos mini + botón reiniciar grande), y `progress-container` (barra de progreso + texto)
- **Sidebar**: Contiene `sidebar-header` ("Pasos del Proceso") y `steps-nav` (los 7 pasos)
- **Mobile Nav**: Botones "Menú" y "Contenido" en la parte inferior
- **Mobile Menu Panel**: Solo muestra contenido del paso 1

### Archivos a Modificar:
1. **index.html** - Estructura HTML
2. **styles.css** - Estilos CSS
3. **app.js** - Lógica JavaScript

---

## Plan Detallado

### 1. Quitar botón de reiniciar grande y texto de pasos del progreso (Header)

**index.html:**
- Eliminar `header-bottom` completo (contiene `.header-steps` y `.btn-reset`)
- Eliminar `progress-container` completo

**styles.css:**
- Eliminar estilos de `.header-bottom`
- Eliminar estilos de `.progress-container`
- Eliminar estilos relacionados

### 2. Agregar pequeño botón de reiniciar en Sidebar (parte superior derecha)

**index.html:**
- Modificar `.sidebar-header` para incluir el botón de reiniciar pequeño junto al título

**styles.css:**
- Agregar estilos para el botón de reiniciar pequeño en el sidebar
- Position: absolute en la esquina superior derecha del sidebar

### 3. Mejorar el Mobile Menu Panel

**index.html:**
- Modificar `mobile-menu-header` para mostrar "Pasos del Proceso" 
- Modificar `mobile-menu-content` para mostrar todos los 7 pasos (no solo paso 1)
- Los pasos deben ser navegables

**styles.css:**
- Ajustar estilos del mobile menu para mostrar la lista de pasos
- Asegurar que el footer sea visible cuando el menú está abierto en tablet/cel

**app.js:**
- Modificar `loadMobileMenuContent()` para renderizar todos los pasos
- Agregar función para navegar entre pasos desde el menú móvil

### 4. Asegurar visibilidad del Footer en tablet/móvil

**styles.css:**
- Verificar que el footer tenga z-index apropiado cuando el menú móvil está abierto
- Asegurar que el mobile menu panel no cubra el footer

---

## Archivos Dependientes a Editar

1. **index.html** - Estructura HTML
2. **styles.css** - Estilos CSS  
3. **app.js** - Lógica JavaScript

---

## Pasos de Implementación

1. Editar index.html para eliminar header-bottom y progress-container
2. Editar index.html para agregar botón reiniciar en sidebar-header
3. Editar index.html para mejorar mobile-menu-panel
4. Editar styles.css para nuevos estilos
5. Editar app.js para renderizar pasos en mobile menu
6. Probar en diferentes tamaños de pantalla

---

## Preguntas de Confirmación

¿Estás de acuerdo con este plan? ¿Hay algo que deba ajustar antes de proceder con la implementación?

