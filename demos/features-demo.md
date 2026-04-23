# Demo de Funcionalidades

¡Bienvenido a este repositorio! Probablemente te estés preguntando qué es y cómo funciona. Trabajaremos con este repositorio durante toda la capacitación, ¡así que es importante descubrir qué está haciendo ahora!

Comencemos aprendiendo los diferentes modos.

## Lo que Aprenderás
Al finalizar este demo, podrás:
- [ ] Comprender las funcionalidades principales de GitHub Copilot
- [ ] Saber cómo usar participantes de chat y comandos slash
- [ ] Poder generar código con asistencia de IA
- [ ] Saber cómo revisar y hacer commit de código generado por IA

**Tiempo Estimado:** 15-20 minutos

## 🚀 Comenzando

Más información sobre la instalación se puede encontrar en el archivo [README](../README.md). Para un inicio rápido, usa los siguientes pasos:

1. **Abre el repositorio en tu IDE** (ej., VS Code)
2. **Crear nueva rama:** `git checkout -b USUARIO-ejercicios-copilot`
3. **Instalar paquetes**: Ejecuta `npm install` en la terminal
4. **Iniciar el servidor de desarrollo**: Ejecuta `npm run dev`
5. **Abrir el proyecto en tu navegador**: Ve a [http://localhost:3000](http://localhost:3000) para una vista previa en vivo

Continúa con el demo siguiendo los pasos a continuación.

## 🎯 Paso 1: Descubrir Funcionalidades Disponibles

Modo: Ask (Preguntar)

**Objetivo:** Aprender qué puede hacer GitHub Copilot por ti en modo Ask.

**Acción:** Escribe el siguiente comando en el chat de Copilot:
Prompt
```markdown
/help
```

**Resultado Esperado:** Verás una lista de comandos y funcionalidades disponibles.

---

## 📚 Paso 2: Aprender Sobre el Proyecto

### 2.1 Obtener Resumen del Proyecto
**Prompt:**
```markdown
@workspace Dame un resumen del proyecto y una descripción general de los archivos más importantes.
```

**Acción de Seguimiento:**
- Selecciona la primera página en "Most Impactful Files" (Archivos Más Importantes)
- Resalta la primera sección

### 2.2 Explicar Código Seleccionado
**Prompt:**
```markdown
@workspace /explain
```

**Qué hace esto:** Copilot explicará en detalle la sección de código resaltada.

### 2.3 Obtener Sugerencias de Mejoras
**Prompt:**
```markdown
Dime sobre las mejoras que se pueden hacer en este repo.
```

**💡 Consejo:** ¡Copilot puede ayudar no solo con el aprendizaje sino también con planificación e ideas!

## 💻 Paso 3: Generar Código con Completado de Código de Copilot

### Instrucciones para Completado de Código
1. **Navega al archivo:** Abre [`src/app/layout.tsx`](src/app/layout.tsx)
2. **Encuentra la ubicación:** Ve a la línea 52 `{/* REPLACE THIS COMMENT */}`
3. **Elimina el comentario de la línea 52:** y reemplázalo con el siguiente comentario:

```tsx
{/* Crear un footer para esta sección. Debe contener el logo e información de copyright. */}
```

5. **Espera la sugerencia:** Copilot sugerirá código automáticamente
6. **Acepta la sugerencia:** Presiona `Tab` para aceptar o `Esc` para descartar
7. **Verifica tus cambios:** Guarda el archivo y actualiza [http://localhost:3000](http://localhost:3000) para ver tu nuevo footer

## 📝 Paso 4: Revisar y Hacer Commit de tus Cambios

### Opción A: Revisión con IA (Funcionalidad Premium)
Si tienes acceso premium:

1. **Selecciona el código generado:** Resalta el código del footer que fue creado
2. **Abre el menú de Copilot:** Click derecho → Selecciona "Copilot"
3. **Obtén revisión:** Elige "Review and Comment" (Revisar y Comentar)
4. **Procesa el feedback:** Revisa las sugerencias y acepta/descarta según sea necesario

### Opción B: Revisión Manual (Alternativa Gratuita)
Si no tienes acceso premium:

1. **Lee el código:** Revisa lo que fue generado
2. **Verifica funcionalidad:** ¿Coincide con los requisitos?
3. **Verifica el estilo:** ¿Sigue los estándares de codificación del proyecto?

### Hacer Commit de tus Cambios
1. **Abre Control de Código:** Haz click en el ícono de Source Control en la barra lateral izquierda
2. **Genera mensaje de commit:** Pasa el mouse sobre la caja de mensaje de commit → Click en "Generate Commit Message with Copilot" (Generar Mensaje de Commit con Copilot)
3. **Revisa y edita:** Modifica el mensaje generado si es necesario
4. **Commit:** Haz click en "Commit" y luego "Sync Changes" para enviar

**🎉 Indicador de éxito:** ¡Deberías ver tus cambios en el historial de git!

## ✅ Lista de Verificación de Completitud

Marca cada ítem al completarlo:

- [ ] Usé el comando `/help` exitosamente
- [ ] Obtuve resumen del proyecto con `@workspace`
- [ ] Expliqué código con `@workspace /explain`
- [ ] Generé código de footer con IA
- [ ] Revisé el código generado
- [ ] Hice commit de los cambios a git

## 🚀 ¿Qué Sigue?

¡Felicidades! Has completado tu primer demo de GitHub Copilot.

👉 **[Iniciar Demo de Desarrollo de Componentes](./component-development.md)** - Construye componentes React con TypeScript usando Copilot
