
FROM node:16-alpine

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

#RUN npm run prisma:init

RUN npm run build

CMD [ "node", "dist/main.js" ]


