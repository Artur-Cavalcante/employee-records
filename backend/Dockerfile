FROM node:10

WORKDIR /usr/app/backend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD [ "yarn", "start" ]
