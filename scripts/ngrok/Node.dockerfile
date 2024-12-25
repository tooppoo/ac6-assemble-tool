FROM node:22.12.0-slim@sha256:35531c52ce27b6575d69755c73e65d4468dba93a25644eed56dc12879cae9213

WORKDIR /app

COPY . /app

RUN npm ci

CMD ["npm", "run", "dev"]
