FROM node:14-alpine

WORKDIR /app

ENV ENVIRONMENT=development
ENV DB_HOST=postgres-db
ENV DB_USER=postgres
ENV DB_PASS=docker
ENV SERVER_PORT=8081

COPY package.json /app
RUN yarn install --silent
COPY . /app
RUN yarn add global ts-node
RUN yarn add global typescript

CMD yarn migrate --up && yarn migrate --up --seed && yarn dev

EXPOSE 8081