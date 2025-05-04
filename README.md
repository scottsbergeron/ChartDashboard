# Chart Dashboard

A React application that displays a reporting dashboard with configurable chart components.

## Features

- Responsive dashboard grid system (12 units wide, infinite height)
- Smart chart placement algorithm
- Extensible chart component system
- Docker setup for development with hot-reloading

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Running the Application

1. Clone the repository
2. Run the application with Docker:

```bash
docker-compose up
```

3. Access the application at `http://localhost:3000`

## Project Structure

- `src/components/Dashboard`: Dashboard container component
- `src/components/charts`: Chart components and interfaces
- `src/models`: Data models and interfaces for charts 