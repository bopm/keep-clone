### STAGE 1: Build ###
# We label our stage as 'builder'
FROM node:8.1.4-alpine as builder

ENV APP_PATH /app
MAINTAINER Sergey Moiseev <moiseev.sergey@gmail.com>

COPY package.json .

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir $APP_PATH && cp -R ./node_modules .$APP_PATH

WORKDIR $APP_PATH

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --aot --prod --env=prod && gulp compress

### STAGE 2: Setup ###
FROM nginx:1.13.3-alpine

ENV APP_PATH /app
MAINTAINER Sergey Moiseev <moiseev.sergey@gmail.com>

## Copy our default nginx config
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

EXPOSE 80

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder $APP_PATH/dist/* /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
