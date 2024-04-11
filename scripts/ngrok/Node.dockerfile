FROM node:21.7.3-slim

WORKDIR /app

COPY . /app

RUN npm ci

CMD ["npm", "run", "dev"]
