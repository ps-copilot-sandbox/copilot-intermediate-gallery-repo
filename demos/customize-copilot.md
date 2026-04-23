# Demo de Personalización de Copilot

¡Bienvenido al demo de personalización de GitHub Copilot! Aquí aprenderás cómo adaptar GitHub Copilot a tus necesidades específicas y preferencias de flujo de trabajo. Este demo cubre funcionalidades avanzadas que te ayudan a optimizar tu experiencia de codificación asistida por IA para máxima productividad.

## Lo que Aprenderás
Al finalizar este demo, podrás:
- [ ] Saber cómo monitorear tu uso de solicitudes premium
- [ ] Cambiar entre modelos de IA en Chat y completado de código (OPCIONAL)
- [ ] Usar archivos de prompts para interacciones consistentes con IA
- [ ] Utilizar modos de agente personalizados para varias tareas de desarrollo
- [ ] Configurar instrucciones personalizadas con servidores MCP para comportamiento de IA personalizado

**Tiempo Estimado:** 25-30 minutos

---

## 📊 Paso 1: Monitorear Solicitud Premium

### Opción A: Acceder al Panel Premium

En el IDE:

1. **Abre VS Code** y asegúrate de que GitHub Copilot esté activo
2. **Ubica el estado de Copilot:** Busca el logo de GitHub Copilot en la barra de estado inferior derecha

### Opción B: Acceder al Panel Premium

En github.com:

1. **Navega a GitHub:** Ve a [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
2. **Inicia sesión:** Asegúrate de estar conectado a tu cuenta de GitHub
3. **Ver panel:** Revisa tu porcentaje de uso de solicitudes premium y límites

Ve el porcentaje de solicitud premium para entender cuántas solicitudes te quedan.

---

## 🔄 Paso 2: Cambio Avanzado de Modelo (OPCIONAL)

Modo: edit (editar)

Para este demo, prueba la misma tarea de codificación con diferentes modelos y nota las diferencias.

### Instrucciones

1. Actualiza tu modo a **edit**
2. Selecciona el modelo que quieres probar
3. Agrega los siguientes archivos al UI de Chat de GitHub Copilot como archivos relacionados. Puedes hacerlo seleccionando `Add Context` y escribiendo el nombre de cada archivo. O cierra todas las pestañas, luego abre estos tres archivos. Selecciona `Add Context`, luego `Open Editors` para tomar todos los archivos abiertos en tu IDE. Cualquiera de las dos formas reunirá los archivos de abajo.
```markdown
- /src/app/gallery/page.tsx
- /src/lib/mock-photo-data.ts
- /src/components/GalleryGrid.tsx
```
4. Permanece en la última página: GalleryGrid y resalta las líneas 26 - 43
5. Agrega el siguiente prompt:

Prompt
```typescript
// Pregunta a cada modelo: "Ayúdame a refactorizar esta función para mejor rendimiento, legibilidad y agrega mejoras de TypeScript"
```

Repite los pasos 2-5 para otros dos modelos de tu elección.

¿Qué respuestas te gustaron más? ¿Cuáles menos? Discute en tu grupo.

---

## 📝 Paso 3: Usar Archivos de Prompts

1. Ve a la carpeta `/.github/prompts` y revisa los archivos.
- Hay dos archivos para elegir, cada uno en diferentes niveles de dificultad.
- Revisa el formato de cada uno antes de elegir cuál usar.
2. Elige el archivo que quieres probar.
3. Agrega el prompt de abajo dependiendo del archivo de prompt.

**Generar datos mock**
Prompt
```markdown
/generate-mock-photo-data 3
```

**Refactorizar componente UI**
Prompt
```markdown
/generate-new-ui para la tabla de galerías recientes en la página admin. Quiero que sea el componente de reemplazo para la tabla actual y que sea reutilizable. Colócalo en la carpeta layout.
```

**DESAFÍO BONUS:** Crea tu propio archivo de prompt para pruebas unitarias

Pide a copilot que genere un nuevo archivo de prompt para pruebas unitarias. Usa los siguientes pasos:

1. Ve al UI de GitHub Copilot
2. Haz click en el ícono de engranaje en la esquina superior derecha
3. Selecciona "Prompt Files"
4. Haz click en el ícono de más que dice "New prompt file"
5. Selecciona la carpeta donde quieres guardar el archivo, ej. `.github/prompts/`
6. Nombra el archivo 'generate-unit-tests.prompt.md'
7. Crea tu propio archivo de prompt personalizado con GitHub Copilot:

```markdown
<!-- Agrega archivos relacionados al modo Ask -->
Archivos relacionados:
- /src/components/ui/FeatureCard.tsx
- /.github/prompts/generate-new-ui.prompt.md
- /.github/prompts/generate-mock-photo-data.prompt.md

<!-- Copia/pega el prompt de abajo -->
ayúdame a crear un archivo de prompts para crear generación de pruebas unitarias para los componentes UI.
```

## 🎭 Paso 4: Utilizar Modos de Agente Personalizados

1. Revisa el `Plan.agent.md` en el archivo `.github/agents` para ver el comportamiento esperado del modo
2. Ve a GitHub Copilot Chat
3. Actualiza el modo a modo "Plan"
4. Agrega el prompt de abajo y revisa la sugerencia

```markdown
ayúdame a planificar una nueva página para crear nuevas galerías
```
**DISCUSIÓN**
Revisa la respuesta. ¿Qué otros modos serían útiles para este repo?

**Si el tiempo lo permite**
Intenta implementar los cambios del plan usando un modo diferente para explorar cómo varía la experiencia.

## 🛠️ Step 5: Custom instructions and MCP Servers

### Understanding MCP Servers

Model Context Protocol (MCP) servers allow you to extend GitHub Copilot capabilities to external data sources. Custom instructions can help guide Copilot's behavior to align with your project's coding standards and conventions. This is particularly useful for large teams or complex projects where consistency is key.

**Prerequisites**
- GitHub Copilot License
- VSCode 1.99 or later
- MCP servers in Copilot enabled

### Part One: Get familiar with custom instructions

Custom instructions let you shape GitHub Copilot’s behavior to match your team’s coding style, best practices, and project conventions. With custom instructions, Copilot can automatically follow your preferred patterns, use your naming conventions, and even adapt to your workflow. Let's see what this repos custom instructions are:

1. Go to `.github/custom-instructions.md`
2. Look over the file. Have you noticed coding suggestions have been based around this file?

Now let's generate one with the help of GitHub Copilot.

1. Go to Copilot Chat
2. Select the gear icon on the top right
3. Click "Generate Instructions"

Look over this file and notice how its a good starting point for this project. You can remove or add any instructions your team has in mind!

Custom instructions works in tandem with MCP to help you guide the agent.

### Parte Dos: Autenticación MCP

1. Ve a `.vscode/mcp.json` y revisa el archivo de configuración. Hay dos opciones para elegir dependiendo de tu preferencia y versión. Para OAuth, reférete a `Opción A` abajo. Para instrucciones PAT, reférete a `Opción B`

**Opción A:** Instrucciones para VSCode usando OAuth (Versión 1.101 o superior)

2. Busca el servidor bajo `// Using OAuth (version 1.101 or greater)`
3. Haz click en `start`
4. Aparecerá una ventana emergente para el proceso de autenticación que dirá "The MCP Server Definition 'github' wants to authenticate to GitHub."
5. Selecciona "Allow"
6. Selecciona la cuenta que quieres autenticar y presiona enter

**Opción B:** Instrucciones para VSCode usando GitHub PAT

2. Sigue las instrucciones de [GitHub MCP Server Repo](https://github.com/github/github-mcp-server?tab=readme-ov-file#remote-github-mcp-server)

Ahora que te has autenticado vía OAuth o PAT, confirmemos las herramientas.

1. Ve a GitHub Copilot Chat
2. Selecciona modo "Agent"
3. Haz click en el ícono de herramientas
4. Ve todos los conjuntos de herramientas disponibles

### Parte Tres: Crear issues en esta plantilla con MCP

1. Ya que estás en modo agente en VSCode, escribe el siguiente prompt en el chat para crear un issue con el servidor MCP

```markdown
crea un issue para este repo para una solicitud de funcionalidad para alternar entre modo oscuro y modo claro
```

2. Revisa la respuesta. Una vez confirmado, presiona "continue"
3. ¡Ve al repositorio y visualiza la creación del issue!

## ✅ Lista de Verificación de Completitud

Marca cada ítem al completarlo:

- [ ] Exploré el monitoreo de solicitudes premium e identifiqué patrones de uso
- [ ] Practiqué técnicas de cambio de modelo
- [ ] Usé archivo de prompt específico del proyecto
- [ ] Experimenté con diferentes modos de agente personalizados
- [ ] Entendí los servidores MCP o configuré patrones de instrucción personalizada
- [ ] Apliqué personalizaciones para mejorar mi flujo de trabajo de desarrollo

## 🚀 ¿Qué Sigue?

¡Excelente trabajo! Ahora has dominado las funcionalidades avanzadas de personalización de GitHub Copilot.

---

👉 **[Iniciar Demo de Copilot Spaces](./copilot-spaces.md)**
