# Task Management System - DevOps Project

A full-stack task management application built for learning DevOps practices including CI/CD pipelines, containerization, and cloud deployment.

## Features

- User authentication (Register/Login)
- Create, read, update, delete tasks
- Task status management (Todo, In Progress, Done)
- Task priority levels (Low, Medium, High)
- Due dates
- Filter and search functionality

## Technology Stack

**Backend:**
- Node.js with Express
- TypeScript
- Sequelize ORM
- PostgreSQL database
- JWT authentication

**Frontend:**
- React 19 & Vite
- TypeScript
- React Router
- Axios

## Getting Started

### Prerequisites

- Node.js 22+ and npm
- Docker and Docker Compose
- Git

### Default Ports

- Frontend: `5173`
- Backend: `5000`
- Database: `5432`

## Run Task manager Locally

### 1. Clone repository and install dependencies
```bash
git clone <repo_url>
cd <directory_name>
npm run install:all
```
### 2. Run PostgreSQL in Docker:
Powershell:
```bash
docker run -d `
  --name postgres-local `
  -e POSTGRES_DB=taskmanagement `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -p 5433:5432 `
  postgres:18-alpine
```
Linux or MacOS
```bash
docker run -d \
  --name postgres-local \
  -e POSTGRES_DB=taskmanagement \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5433:5432 \
  postgres:18-alpine
```
### 3. Run backend
```bash
npm run dev:backend
```
### 4. Run frontend
```bash
npm run dev:frontend
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Database: localhost:5432

## Tasks

Tänne tehtävät

## CI/CD Pipeline

Run linter & test
Coverage testin ajaminen ja tuloksen vieminen artifactina voisi olla kiva lisä. Täytyy ihmetellä tuota.
Build

## Deployment
Render deployment tai Rahti

## Security
CodeQL
Dependencies

**HUOM** Nyt token on tallennettu elaimen localstorage:en josta varamasti tulee CodeQL hälytys. Tuo pitäisi muuttaa HttpOnly cookieksi.

## Monitoring
Bäkkärissä on health check url
Lokituksen monitorointi?