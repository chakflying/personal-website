FROM node:lts-alpine

WORKDIR /usr/src/app
ENV HOST 0.0.0.0
EXPOSE 3000

COPY . /usr/src/app
RUN apk update && apk add yarn
RUN yarn install --pure-lockfile
RUN yarn run build
CMD ["yarn", "run", "start"]
