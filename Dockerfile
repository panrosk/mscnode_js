
# Dockerfile

# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en la aplicación
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
