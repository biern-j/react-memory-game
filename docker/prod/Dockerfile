FROM node:14 AS builder

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run create


FROM nginx:1.19

COPY --from=builder /app/dist /usr/share/nginx/html