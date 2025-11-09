# Simple Dockerfile para servir la página estática con nginx
FROM nginx:stable-alpine

# Copiamos los archivos estáticos a la carpeta pública de nginx
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
