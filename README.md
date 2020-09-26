# Citi Ez-Transfer by Team TrizzaPizza

Team TrizzaPizza's submission for the Citi Virtual Hackathon 2020.

## Introduction

Ez-Transfer is a web centric solution for money transfer that focuses on security and seamless user experience. Targets the following **OWASP** security risks:

1. SQL injection
2. Cross-Site Scripting
3. Broken Authentication
4. Container Escape Attacks

## Security Principles

### Limiting Blast Radius

Our backend services are hosted using containerization in order to limit the blast radius of any intrusion attempts. An intruder would only get access to the container file system and not the host (GCP) filesystem.

### Reducing Surface Area (Multi Stage Builds)

We built and bundle our production code with a multi stage process, preventing redundant code such as unit tests from going into the end distribution bundle. This reduces the amount of code in production which reduces the surface area of malicious attacks.

### Secrets

Sensitive information such as auth tokens and secrets keys were not checked into source code or docker images. We used docker secrets as resources to manage our secret keys.

## Security Techniques

Ez-transfer applies the following techniques to ensure secure transactions and user identity protection:

-   Json Web Tokens to handle user validation. JWT also has a time-to-live so it will expire and has to be refreshed.

-   2FA sms services to handle authentication.

-   Database sanitisation to prevent injection attacks (Object Relational Mapping Layer).

-   CSRF protection because we pass in the JWT through Bearer instead of a cookie.

## User Experience

Ez-transfer applies the following techniques on the User Experience side to provide the optimal experience for end users:

-   Optimistic confirmation to give users live feedback of their transfer progress.

-   Password free authentication to make it easier to log in.

## Demo

-   The frontend can be viewed at http://35.247.137.131:3000/

-   The backend docs can be viewed at http://35.247.137.131:8080/docs. Automatically generated using OpenAPI.

-   Unit Tests

    ![Unit Tests](./unit_test.png)

## Tech Stack

-   Frontend: React

-   Frontend Unit Tests: Jest and Enzyme

-   Backend: FastAPI (Python)

-   Database: PostgreSQL

-   Design Library: Ant Design

-   Deployment Tools: Docker-Compose

-   Cloud Deployment: GCP Compute Virtual Machine

-   2FA Service: Twilio

## Future Improvements

### Container Escape Attacks

Running containers as non-root. Docker currently runs containers as root. This is vulnerable in the case of container escape attacks where intruders are able
to exploit a host process and enter the host filesystem as root. One alternative we are looking at is podman.

### Image Storage Vulnerabilities

We currently store our software images on dockerhub as a public repository. We would need to transition to a private registry when we build enterprise software.

## Work Breakdown

### Chin Zhi Wei

-   Developed the python server, models and postgres database.

-   Deployed the backend service on GCP

### Nigel Lee

-   Setup Twilio account for 2FA authentication purposes.

-   Built the login page with 2FA capabilities.

-   Built the past transactions page

-   Setup the JWT handling

### Lester Tay

-   Built the transaction sending page

-   Setup the front end router

-   Setup the stylesheets
