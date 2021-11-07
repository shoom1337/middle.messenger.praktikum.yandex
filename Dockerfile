FROM node:12

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY server.js .
COPY package-prod.json package.json

RUN npm install

CMD [ "node", "server.js" ]
