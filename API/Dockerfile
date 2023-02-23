FROM node:lts-alpine3.17


WORKDIR /src

COPY package.json ./
RUN npm install


COPY . .

EXPOSE 80

CMD ["npm", "run", "serve"]