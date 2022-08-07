FROM node:18.4.0

RUN mkdir /app
WORKDIR /app

RUN yarn build
ENTRYPOINT ["yarn", "start"]
