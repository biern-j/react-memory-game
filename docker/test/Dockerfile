FROM node:14

RUN mkdir /app

WORKDIR /app

# COPY package*.json .

# RUN npm install

# CMD ["npm", "run", "start"]

RUN ["bash", "-c", "npm install && npm create"]

WORKDIR /app/dist

CMD ["bash", "-c", "npx  serve"]

# WORKDIR /app

# CMD CMD ["bash", "-c", "npx cypress open"]
