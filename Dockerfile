# Build stage
FROM node:22.12.0-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./
COPY tsconfig*.json ./

# Instalar dependencias (npm install en lugar de ci para mejor compatibilidad)
RUN npm install

# Copiar código fuente
COPY . .

# Build
RUN npm run build

# Runtime stage
FROM node:22.12.0-alpine

WORKDIR /app

# Copiar solo lo necesario del stage anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/package*.json ./

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
