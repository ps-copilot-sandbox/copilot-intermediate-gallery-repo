# Demo de GitHub MCP: de Issue a Pull Request

¡Bienvenido al demo de GitHub MCP para GitHub Copilot! En este ejercicio mostrarás cómo Copilot puede pasar de una conversación en VS Code a una acción real en GitHub usando herramientas MCP. La narrativa de la demo es simple: definir una mejora, crear un issue desde el chat, asignarlo a GitHub Copilot y revisar el pull request resultante.

---

## Lo que Aprenderás
Al finalizar este demo, podrás:
- [ ] Explicar qué aporta un servidor MCP en un flujo real con GitHub Copilot
- [ ] Autenticar y validar el servidor GitHub MCP dentro de VS Code
- [ ] Crear un issue de GitHub desde Copilot Chat usando herramientas MCP
- [ ] Refinar el alcance de una funcionalidad con prompts iterativos
- [ ] Conectar el issue con GitHub Copilot para generar un PR automáticamente
- [ ] Revisar críticamente el PR y la sesión generada por Copilot

**Tiempo Estimado:** 12-15 minutos

---

## Objetivo de la Demo

Demostrar que GitHub Copilot no solo ayuda a escribir código, sino que también puede operar sobre GitHub cuando dispone de herramientas externas vía MCP.

La historia que vas a contar es:

1. Defines una mejora funcional sobre este proyecto.
2. Copilot crea el issue en GitHub usando MCP.
3. Refinas el issue para que sea implementable.
4. Asignas el issue a GitHub Copilot.
5. Revisas el pull request generado.

---

## Prerrequisitos

- GitHub Copilot activo
- VS Code con soporte MCP habilitado
- Acceso al repositorio en GitHub con permisos para crear issues
- El archivo `.vscode/mcp.json` configurado con el servidor GitHub MCP

Archivo relevante del repo:

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

---

## 🎯 Paso 1: Presenta la Idea de Valor

Antes de tocar nada, dedica 30-45 segundos a explicar qué va a ver la audiencia.

### Mensaje sugerido

```markdown
En esta demo no vamos a usar MCP como una pieza de configuración, sino como una capacidad práctica. Vamos a pedirle a Copilot que cree trabajo real en GitHub desde el chat, y luego conectaremos ese issue con GitHub Copilot para que continúe el flujo hasta un pull request.
```

**Resultado esperado:** La audiencia entiende que MCP aporta acciones, no solo contexto.

---

## 🛠️ Paso 2: Verifica el Servidor MCP

1. Abre el archivo `.vscode/mcp.json`
2. Muestra que el repo ya tiene configurado el servidor `github`
3. Abre GitHub Copilot Chat en modo `Agent`
4. Revisa el selector de herramientas para confirmar que las tools de GitHub están disponibles

### Si necesitas autenticarte

1. Inicia el servidor MCP desde VS Code
2. Acepta el flujo OAuth cuando aparezca el diálogo
3. Selecciona tu cuenta de GitHub

**Tip para el workshop:** No inviertas demasiado tiempo en la autenticación. Si algo falla, explica el flujo y pasa al plan B del final.

**Resultado esperado:** Copilot puede ver y usar herramientas de GitHub a través de MCP.

---

## ✍️ Paso 3: Crea un Issue Desde el Chat

Con Copilot Chat en modo agente, utiliza un prompt que sea visual, concreto y pequeño para demo.

### Prompt recomendado

```markdown
Usando las herramientas disponibles, crea un issue en GitHub para este repositorio proponiendo una nueva funcionalidad: filtros avanzados en la galería por tag y orientación de imagen.

Quiero:
- un título claro
- contexto del problema
- propuesta funcional
- criterios de aceptación
- checklist técnica inicial
- una nota corta explicando qué archivos del repo probablemente se verán afectados
```

### Qué remarcar mientras responde Copilot

- Está usando contexto local del repositorio
- Está actuando sobre GitHub, no solo redactando texto
- Puede proponer impacto técnico con base en la estructura del proyecto

**Resultado esperado:** Se crea un issue real en GitHub, bien redactado y accionable.

---

## 🎛️ Paso 4: Reduce el Alcance para la Demo

Después de crear el issue, haz una segunda iteración para enseñar que el valor no está solo en ejecutar herramientas, sino en mejorar la definición del trabajo.

### Prompt recomendado

```markdown
Ahora reduce el alcance del issue para que sea apto para una demo de 20 minutos y reescribe los criterios de aceptación para que sean verificables.
```

### Alternativa aún más simple

```markdown
Reescribe este issue para que la implementación mínima sea: filtrar por orientación de imagen y mostrar un contador de resultados en la galería.
```

**Resultado esperado:** Obtienes un issue mejor acotado y más fácil de delegar.

---

## 🤖 Paso 5: Asigna el Issue a GitHub Copilot

1. Ve al issue en GitHub
2. Asigna el issue a `GitHub Copilot`
3. Explica brevemente que ahora entra en juego el agente en la nube
4. Espera a que GitHub Copilot prepare la propuesta y el PR

### Mensaje sugerido para narración

```markdown
Aquí se ve la transición importante: MCP nos ayuda a crear y estructurar trabajo desde el IDE, y GitHub Copilot toma ese trabajo para continuar el flujo de implementación en GitHub.
```

**Resultado esperado:** El issue queda en manos de GitHub Copilot para generar una solución.

---

## 🔍 Paso 6: Revisa el Pull Request Generado

Cuando el PR esté disponible:

1. Abre el PR generado
2. Muestra `View Session` para enseñar trazabilidad
3. Revisa el diff de forma crítica
4. Pide a Copilot una revisión rápida del riesgo

### Prompt recomendado para cerrar la demo

```markdown
Revisa este cambio como si fueras reviewer. ¿Qué riesgos de regresión ves, qué validaciones faltan y qué tests serían los mínimos antes de hacer merge?
```

### Qué observar con la audiencia

- Si el cambio respeta los patrones del repo
- Si el alcance realmente coincide con el issue
- Si faltan validaciones o pruebas
- Si el PR es mergeable o necesita iteración humana

**Resultado esperado:** La audiencia ve que el flujo termina con revisión, no con aceptación ciega.

---

## 🧠 Puntos de Mensaje para la Audiencia

Usa estas ideas durante la presentación:

- MCP convierte a Copilot en un agente con herramientas, no solo en un asistente conversacional.
- El valor real aparece cuando enlazas contexto local, acciones remotas y revisión humana.
- Un buen prompt no solo pide ejecutar, también acota el trabajo para que el resultado sea útil.
- La automatización acelera el flujo, pero la calidad sigue dependiendo de una revisión técnica consciente.

---

## 🪂 Plan B Si MCP o OAuth Fallan

Si la autenticación falla o el servidor no está disponible, mantén la misma historia de demo.

### Plan B

1. Pide a Copilot que redacte el issue con el mismo prompt
2. Copia el contenido manualmente a GitHub
3. Explica que con MCP conectado ese paso pasa de ser manual a ejecutarse directamente desde el chat

### Frase útil

```markdown
Aunque hoy no esté autenticado el servidor, la diferencia clave es que con MCP el mismo razonamiento que redacta el issue puede además publicarlo y operar sobre GitHub.
```

---

## ✅ Lista de Verificación de Completitud

Marca cada ítem al completarlo:

- [ ] Expliqué el valor de MCP en menos de un minuto
- [ ] Verifiqué o mostré la configuración del servidor GitHub MCP
- [ ] Creé un issue desde GitHub Copilot Chat
- [ ] Refiné el alcance del issue con un segundo prompt
- [ ] Asigné el issue a GitHub Copilot
- [ ] Revisé el PR o expliqué el flujo esperado hasta el PR
- [ ] Cerré la demo con una revisión crítica de riesgos y validaciones

---

## 🚀 ¿Qué Sigue?

Después de esta demo, puedes enlazar con otras dos experiencias del repo:

1. `customize-copilot.md` para profundizar en instrucciones personalizadas y MCP
2. `coding-agent.md` para continuar con la parte de revisión del trabajo generado por Copilot

Esta demo funciona especialmente bien como puente entre personalización, automatización y colaboración.