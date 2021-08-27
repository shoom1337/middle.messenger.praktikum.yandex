FROM node:12

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY server.js .
COPY package-prod.json package.json

RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
