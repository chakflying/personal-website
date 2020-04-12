FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
RUN apk update && apk add curl git yarn
RUN yarn install
RUN yarn run dev

EXPOSE 3000
