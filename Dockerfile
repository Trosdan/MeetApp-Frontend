FROM node:12.18

WORKDIR /frontend

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
