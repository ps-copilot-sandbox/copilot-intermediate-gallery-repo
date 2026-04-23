# Demo de Prácticas de Ingeniería

¡Bienvenido al demo de prácticas de ingeniería de GitHub Copilot! Aquí nos familiarizaremos con las herramientas y funcionalidades profesionales de GitHub Copilot. Comenzaremos en el IDE VS Code y luego nos moveremos a github.com para funcionalidades de colaboración adicionales.

## Lo que Aprenderás
Al finalizar este demo, podrás:
- [ ] Comprender cómo depurar e inspeccionar el proceso de toma de decisiones de Copilot
- [ ] Saber cómo compartir conversaciones de chat con miembros del equipo
- [ ] Estar familiarizado con los prompts del sistema y su importancia
- [ ] Comprender las funcionalidades de colaboración en GitHub.com

**Tiempo Estimado:** 10-15 minutos

## 🔧 Funcionalidades del IDE

GitHub Copilot tiene muchas funcionalidades diseñadas para ayudar a los equipos de ingeniería a comprender la toma de decisiones de la IA y colaborar efectivamente en la generación de código.

### 🐛 Paso 1: Inspeccionar el Proceso de Decisión de Copilot

**Por qué importa:** Comprender cómo Copilot hace sugerencias te ayuda a escribir mejores prompts y confiar en las recomendaciones de la IA.

#### Método 1: Usando Atajo de Teclado
1. Presiona `Ctrl + Shift + P` (Windows/Linux) o `Cmd + Shift + P` (Mac)
2. Escribe "Copilot Chat Debug"
3. Selecciona **"Copilot Chat Debug: Focus on Copilot Chat Debug View"**

#### Método 2: Usando el Menú
1. Ve a **View** → **Command Palette**
2. Escribe "Copilot Chat Debug"
3. Selecciona **"Copilot Chat Debug: Focus on Copilot Chat Debug View"**

#### Qué Verás
Una vez que se abra el panel de depuración, puedes explorar:
- **Prompts:** Los prompts reales enviados a la IA
- **System Prompts:** Instrucciones de fondo dadas a Copilot
- **Metadata:** Información de contexto y configuraciones
- **Response Details:** Cómo Copilot formuló sus sugerencias

**💡 Consejo:** ¡Usa esto cuando las sugerencias de Copilot parezcan inesperadas - puedes ver exactamente qué contexto está usando!

---

### 💬 Paso 2: Compartir Conversaciones de Chat con tu Equipo

**Por qué importa:** Compartir prompts y conversaciones exitosas ayuda a tu equipo a aprender patrones efectivos de colaboración con IA.

#### Exportar una Conversación de Chat

**Método 1: Atajo de Teclado**
1. Presiona `Ctrl + Shift + P` (Windows/Linux) o `Cmd + Shift + P` (Mac)
2. Escribe "Chat: Export"
3. Selecciona **"Chat: Export Chat..."**

**Método 2: Navegación por Menú**
1. Ve a **View** → **Command Palette**
2. Escribe "Chat: Export"
3. Selecciona **"Chat: Export Chat..."**

**Qué sucede:** Esto crea un archivo que contiene todo tu historial de chat que puedes compartir con compañeros de equipo.

#### Importar una Conversación de Chat

**Método 1: Atajo de Teclado**
1. Presiona `Ctrl + Shift + P` (Windows/Linux) o `Cmd + Shift + P` (Mac)
2. Escribe "Chat: Import"
3. Selecciona **"Chat: Import Chat..."**

**Método 2: Navegación por Menú**
1. Ve a **View** → **Command Palette**
2. Escribe "Chat: Import"
3. Selecciona **"Chat: Import Chat..."**

**Caso de uso:** Importa conversaciones compartidas por compañeros de equipo para ver sus estrategias exitosas de prompting.

---

## 🌐 Funcionalidades de Colaboración en GitHub.com

GitHub.com proporciona herramientas adicionales para administrar Copilot a nivel organizacional y compartir conocimiento a través de los equipos.

### 🏛️ Paso 3: Explorar Prompts

**Por qué importa:** Los prompts definen cómo se comporta Copilot en toda tu organización. Comprender esto ayuda a asegurar generación de código consistente y de alta calidad que sigue los estándares de tu equipo.

#### Instrucciones Personales
1. **Navega a GitHub Copilot:** Ve a [https://github.com/copilot](https://github.com/copilot)
2. **Accede a configuraciones:** Haz click en tu ícono de usuario en la esquina inferior izquierda
3. **Abre instrucciones personales:** Selecciona **"Personal instructions"**
4. **Agrega instrucciones:** Puedes agregar guías personalizadas sobre cómo Copilot responde a tus prompts

#### Qué Explorar
- **Instrucciones personales:** ¿Hay alguna preferencia que te gustaría en las instrucciones? ¡Pruébalo!

---

### 🤝 Paso 4: Administrar Conversaciones Compartidas

**Por qué importa:** Las conversaciones compartidas crean una base de conocimiento de interacciones efectivas con IA de la que todo tu equipo puede aprender y construir.

#### Compartir una Conversación
1. **Navega a GitHub Copilot:** Ve a [https://github.com/copilot](https://github.com/copilot)
2. **Inicia un chat:** Comienza una conversación. En la ventana de chat, escribe el siguiente prompt:
   ```markdown
   ¿Cuáles son las ventajas del lenguaje de programación Go?
   ```
3. **Comparte la conversación:** Haz click en el botón **"Share"** en la esquina superior derecha de la ventana de chat
4. **Selecciona compartir:** Selecciona share y copia el enlace para compartir con tu equipo

#### Ver Conversación Compartida
1. **Navega a GitHub Copilot:** Ve a [https://github.com/copilot](https://github.com/copilot)
2. **Accede a opciones de compartir:** Haz click en tu ícono de usuario en la esquina inferior izquierda
3. **Abre administración de conversaciones:** Selecciona **"Manage shared conversations"**

#### Qué Explorar con Conversaciones Compartidas
- **Conversaciones Compartidas:** Navega por conversaciones compartidas por tu equipo
- **Categorías:** Ve cómo las conversaciones están organizadas por tema
- **Patrones de Uso:** Nota qué tipos de conversaciones se comparten más frecuentemente

**💼 Mejores Prácticas para Compartir:**
- Comparte conversaciones que resolvieron problemas complejos
- Incluye contexto sobre cuándo y por qué ciertos enfoques funcionan
- Etiqueta conversaciones con palabras clave relevantes para fácil descubrimiento

## 🚀 ¿Qué Sigue?

¡Felicidades! El segundo demo ha sido completado.

👉 **[Iniciar Demo de Personalización de Copilot](./customize-copilot.md)**
