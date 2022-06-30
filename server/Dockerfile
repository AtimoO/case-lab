FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

VOLUME /static

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]