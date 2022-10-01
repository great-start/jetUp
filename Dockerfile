FROM node:16-alpine

LABEL title="JetUp test task"
LABEL release-date="01-11-2022"

#RUN addgroup app && adduser -S -G app app
#USER app

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]

