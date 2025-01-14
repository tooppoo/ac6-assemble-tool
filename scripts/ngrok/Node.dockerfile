FROM node:22.13.0-slim@sha256:f5a0871ab03b035c58bdb3007c3d177b001c2145c18e81817b71624dcf7d8bff

WORKDIR /app

COPY . /app

RUN npm ci

CMD ["npm", "run", "dev"]
