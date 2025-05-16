# Cursor Rules for NextGen DAP
*Tech Stack Requirements**
- Use TypeScript for all code.
- All cloud services must use LocalStack in dev.
- Simulations must be Dockerized.
- All features must be testable in local sandbox mode.
- Use OpenTelemetry for tracing.
- Prefer functional components with hooks
- Follow Clean Architecture principles
- All cloud interactions must use LocalStack in dev

**AI Patterns**
- Generate JSDoc with @example sections
- Include Zod validation schemas
- Add integration tests using Playwright
- Use AWS SDK v3 with localstack endpoints

**DAP-Specific**
- Simulation sandboxes must be Dockerized
- Guides require 3 fallback modalities (text/video/interactive)
- All user actions must be recorded in OpenTelemetry format
- Implement feature toggles for cloud provider switches