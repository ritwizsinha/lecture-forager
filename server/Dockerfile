FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./dist ./

EXPOSE 4000

CMD ["npm", "run", "prod"]

