FROM node:16.15-slim

WORKDIR /user/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]