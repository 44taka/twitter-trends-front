FROM node:18.4.0

RUN mkdir /app
COPY ./app /app
WORKDIR /app

RUN yarn install
# RUN yarn build
# ENTRYPOINT ["yarn", "start"]
