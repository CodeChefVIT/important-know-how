FROM node:6-alpine

RUN apk add --update tini

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm cache clean

COPY . .

EXPOSE 3000

CMD ["tini","--","node","./bin/www"]
