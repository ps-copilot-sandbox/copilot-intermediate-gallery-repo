# Minimal Dockerfile referenced by the docker-* jobs in the workflow.
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY target/core-svc.jar /app/core-svc.jar
ENTRYPOINT ["java", "-jar", "/app/core-svc.jar"]
