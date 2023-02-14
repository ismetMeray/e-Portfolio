FROM node:lts-alpine3.17

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "serve"]