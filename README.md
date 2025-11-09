# DigitalOcean Deployment Project

Project Description
This is an educational project created to learn about distributed systems and continuous deployment (CD) using GitHub Actions and DigitalOcean.

What is the application about?
This application is a simple static website that demonstrates:

- Basic Web Development: Pure HTML, CSS, and JavaScript
- Continuous Integration/Continuous Deployment (CI/CD): Automation with GitHub Actions (optional)
- Hosting Platform: Deployment on DigitalOcean (App Platform or Droplet)

Project Structure
digitalocean/
├── index.html 
├── styles.css 
├── script.js 
├── Dockerfile 
├── docker-compose.yml 
├── .dockerignore 
├── README.md 
└── .github/
   └── workflows/
      └── DO.yml

Components
1. index.html
  - Simple webpage titled "My Distributed Project"
  - Contains a greeting: "Hello, DigitalOcean "
  - Includes an interactive button
2. script.js
  - Function showMessage() that displays an alert
  - Message: "You have deployed your site to DigitalOcean!"
3. styles.css
  - Centered design with gray background (#f0f0f0)
  - Arial font
  - Style for buttons with cursor pointer
4. GitHub Actions Workflow (optional)
  - Workflows can be added to automate tests and deployments to DigitalOcean using `doctl` and a `DIGITALOCEAN_ACCESS_TOKEN` secret.

🚀 Deployment Flow
Deployment to DigitalOcean (App Platform — automatic)
1. Push your code to the `main` branch on GitHub
2. From the DigitalOcean control panel, create an App and connect your GitHub repository
3. Select the repository and the `main` branch
4. Configure the build (static site or Docker) and deploy. DigitalOcean App Platform will build and host your site.


Deployment with Docker (Local)
Option 1: Docker
```powershell
# Build the image
docker build -t digitalocean-app .

# Run the container
docker run -d -p 8080:80 digitalocean-app

# The application will be available at http://localhost:8080
```

Option 2: Docker Compose (Recommended)
```powershell
# Start the container
docker compose up -d

# The application will be available at http://localhost:8080

# Stop the container
docker compose down
```

Educational Purpose
This project was created for educational purposes to learn about:

- Basic web development (HTML/CSS/JavaScript)
- Version control with Git and GitHub
- Automation with GitHub Actions (optional)
- Application deployment on DigitalOcean
- Distributed systems concepts
- Containerization with Docker

Docker Requirements
- Docker installed (version 20.10 or higher)
- Docker Compose (included in Docker Desktop)

Notes
- DigitalOcean App Platform: you can connect your GitHub repo directly and enable automatic deployments on push to `main`.
- If you want to use CI to deploy from GitHub Actions, store a `DIGITALOCEAN_ACCESS_TOKEN` in GitHub Secrets and use `doctl` to deploy.
- Docker: Uses `nginx:alpine` to serve static files in a lightweight and efficient way.
# DigitalOcean
