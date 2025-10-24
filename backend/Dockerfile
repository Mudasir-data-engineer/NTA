# build stage
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /workspace

# copy pom.xml and Maven wrapper files (if you have them)
COPY pom.xml mvnw ./
COPY .mvn .mvn

# download dependencies
RUN mvn -B -q dependency:go-offline

# copy source code and build jar
COPY src ./src
RUN mvn -B -DskipTests package

# runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# copy the jar from build stage
ARG JAR_FILE=/workspace/target/*.jar
COPY --from=build ${JAR_FILE} app.jar

# expose port
EXPOSE 8080

# run the jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
