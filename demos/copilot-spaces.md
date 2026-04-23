# Demo de GitHub Copilot Spaces

¡Bienvenido al demo de GitHub Copilot Spaces! En este ejercicio, aprenderás cómo crear y utilizar GitHub Copilot Spaces para colaborar en tareas de desarrollo dentro de la aplicación de Galería de Fotos y Portafolio.

## Lo que Aprenderás
Al finalizar este demo, podrás:
- [ ] Comprender qué son los GitHub Copilot Spaces y sus beneficios
- [ ] Saber cómo crear un nuevo Copilot Space
- [ ] Poder configurar un Space con objetivos y contexto específicos
- [ ] Completar tareas de desarrollo usando asistencia de IA colaborativa
- [ ] Compartir y administrar Spaces con miembros del equipo

**Tiempo Estimado:** 20-25 minutos

## 🎯 Paso 1: Crear tu Primer Copilot Space

**Objetivo:** Configurar un Copilot Space dedicado para trabajar en funcionalidades de la galería.

### Configuración
1. Ve a `https://github.com/copilot/spaces`
2. Selecciona `Create Space`

### Opción del Grupo A: Análisis y Fortalecimiento de Seguridad

1. Escribe el nombre `Photo Gallery - Security Assessment`
2. Selecciona el propietario `Username` O `OrgName`
3. Agrega la descripción `Implement security best practices for the photo gallery application`
4. Selecciona `Save`

**Agregando instrucciones**

5. Selecciona `Instructions` y agrega el siguiente prompt:
```markdown
You are a security expert helping to analyze and improve the security posture of a Next.js 15 photo gallery application. Focus on:

- File upload security vulnerabilities and mitigations
- Input validation and sanitization
- Authentication and authorization patterns
- XSS prevention in user-generated content
- Secure image processing and storage
- OWASP Top 10 web application security risks
- Next.js specific security best practices

Provide specific code examples and security recommendations that follow industry standards and OWASP guidelines. Consider both client-side and server-side security measures.
```
6. Select save

**Adding sources**

7. Select `Add sources` and select `Add files and repositories`
8. Add the following files and press `save`
```markdown
src/components/upload/UploadZone.tsx
src/lib/mock-photo-data.ts
src/app/layout.tsx
next.config.ts
```
9. Select `Add sources` and select `Link files, pull requests, and issues`
10. Add issue link `https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/3` and press `save`
11. Select `Add sources` and select `Add text content`
12. Add the following content and press `save`
```markdown
## OWASP Top 10 2021 - Key Security Risks for Web Applications

1. **A01 Broken Access Control** - Users can act outside of their intended permissions
2. **A02 Cryptographic Failures** - Failures related to cryptography which often leads to sensitive data exposure
3. **A03 Injection** - User-supplied data is not validated, filtered, or sanitized by the application
4. **A04 Insecure Design** - Risks related to design and architectural flaws
5. **A05 Security Misconfiguration** - Missing appropriate security hardening across any part of the application stack
6. **A06 Vulnerable and Outdated Components** - Using components with known vulnerabilities
7. **A07 Identification and Authentication Failures** - Confirmation of the user's identity, authentication, and session management
8. **A08 Software and Data Integrity Failures** - Code and infrastructure that does not protect against integrity violations
9. **A09 Security Logging and Monitoring Failures** - Failures in logging and monitoring coupled with missing or ineffective integration with incident response
10. **A10 Server-Side Request Forgery** - SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL

## Next.js Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## File Upload Security Considerations
- File type validation
- File size limits
- Malware scanning
- Secure file storage
- Image processing vulnerabilities
```

### Group B Option: Documentation Generation & API Design

1. Type in name `Photo Gallery - Documentation Hub`
2. Select the owner `Username` OR `OrgName`
3. Add in description `Create comprehensive documentation and API design documentation for the photo gallery application`
4. Select `Save`

**Adding instructions**

5. Select `Instructions` and add the following prompt:
```markdown
You are a technical documentation specialist helping to create comprehensive documentation for a Next.js 15 photo gallery application. Focus on:

- API documentation using OpenAPI/Swagger specifications
- Component documentation with usage examples
- Architecture decision records (ADRs)
- User guides and installation instructions
- Code documentation and inline comments
- README improvements and contribution guidelines
- Performance optimization documentation

Follow industry best practices for technical writing, API documentation standards (OpenAPI 3.0), and modern documentation tools. Create clear, actionable documentation that serves both developers and end users.
```
6. Select save

**Adding sources**

7. Select `Add sources` and select `Add files and repositories`
8. Add the following files and press `save`
```markdown
README.md
COMPONENT_USAGE_GUIDE.md
src/components/ui/index.ts
src/app/page.tsx
package.json
```
9. Select `Add sources` and select `Link files, pull requests, and issues`
10. Add issue link `https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/4` and press `save`
11. Select `Add sources` and select `Add text content`
12. Add the following content and press `save`
```markdown
# Documentation Standards

## API Documentation
- OpenAPI 3.0 specification with complete schemas
- Clear endpoint naming and HTTP status codes
- Request/response examples and error handling
- Authentication and rate limiting documentation

## Code Documentation
- Function/method purpose and parameters
- Usage examples and dependencies
- Error conditions and return values
- Performance considerations

## Architecture Documentation
- Decision records (ADRs) with context and rationale
- System design and component relationships
- Deployment and configuration guides
- Troubleshooting and maintenance procedures

## Tools & Formats
- **API Docs**: Swagger UI, Postman, Insomnia
- **Code Docs**: JSDoc, TypeDoc, inline comments
- **Wikis**: GitHub Wiki, Notion, Confluence
- **Static Sites**: Docusaurus, GitBook, MkDocs
```

### Share your Space[OPTIONAL]

**This option is ONLY if you made the Owner an organization**

13. Select `Share` on the top right side
14. Update `No Access` to `Viewer`
15. Copy the link and send to the Option B Group.

**Expected Result:** A new Copilot Space will be created and opened, providing you with a dedicated environment for this development session.

## 🤝 Step 2: Collaborate and Share

**Goal:** Use an existing Copilot Space to complete the task listed below.

**Challenge:** If your group created the Space in an organization, switch Copilot Spaces to try out the other groups! I.e, if you choose **Option B** in the previous exercise, this time you will be following **Option A** exercise and vice versa.

### Group A Option

1. Go to the Copilot Space
2. Type in the following prompt to analyze security vulnerabilities:

```markdown
I need help identifying and fixing security vulnerabilities in our photo gallery application. Please analyze our file upload component and suggest:

1. How to validate file types securely (not just by extension)
2. Protection against malicious file uploads and XSS attacks
3. Proper input sanitization for photo titles and tags
4. Content Security Policy (CSP) headers for Next.js
5. Rate limiting strategies for upload endpoints

Based on the OWASP Top 10 guidelines, what are the most critical security issues I should address first in this photo gallery application?
```

3. Ask another question! What else do you want to learn?

### Group B Option

1. Go to the Copilot Space
2. Type in the following prompt to create comprehensive documentation:

```markdown
I need to create professional documentation for our photo gallery application. Please help me:

1. Generate an OpenAPI 3.0 specification for our photo management API endpoints
2. Create detailed component documentation with usage examples for our UI components
3. Write an Architecture Decision Record (ADR) for choosing Next.js 15 with TypeScript
4. Improve our README with installation, development, and deployment instructions
5. Create a contributing guide for other developers

Following industry best practices, what documentation structure would you recommend for this type of application?
```

3. Ask another question! What else do you want to learn?

### Final discussion

- How were you able to collaborate with your team using Copilot Spaces?
- How did Copilot’s suggestions help (or hinder) your collaboration?
- What would you do differently next time to improve teamwork and productivity?

Share your thoughts and any tips you discovered for making the most of Copilot Spaces in a team setting.

**Resultado Esperado:** Habrás usado exitosamente asistencia de IA con fuentes externas estándar de la industria para conducir un análisis de seguridad o crear documentación completa para la aplicación de Galería de Fotos y Portafolio.

## ✅ Lista de Verificación de Completitud

Marca cada ítem al completarlo:

- [ ] Creé un nuevo GitHub Copilot Space con un enfoque claro en seguridad o documentación
- [ ] Configuré instrucciones detalladas incorporando estándares de la industria
- [ ] Agregué archivos de proyecto relevantes al contexto del Space
- [ ] Usé el Space para analizar la estructura de código existente
- [ ] Documenté el progreso y decisiones dentro del Space
- [ ] Compartí o guardé el Space para colaboración futura

## 🚀 ¿Qué Sigue?

¡Felicidades! Has creado y usado exitosamente un GitHub Copilot Space para trabajo de desarrollo enfocado.

👉 **[Iniciar Demo de Agente en la Nube de GitHub Copilot](./coding-agent.md)**