
# Dockerfile

# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en la aplicaci—n
WORKDIR /app

# Copia los archivos de la aplicaci—n al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicaci—n escucha
EXPOSE 3000

# Comando para ejecutar la aplicaci—n
CMD ["node", "src/app.js"]
