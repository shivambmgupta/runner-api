FROM node:14-alpine AS node
WORKDIR  /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]