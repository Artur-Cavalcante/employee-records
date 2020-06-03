FROM node:10

WORKDIR /usr/app/auth

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3334

CMD [ "yarn", "start" ]
