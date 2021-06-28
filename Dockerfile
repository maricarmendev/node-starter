FROM node:14-alpine

RUN mkdir /opt/app

WORKDIR /opt/app

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]