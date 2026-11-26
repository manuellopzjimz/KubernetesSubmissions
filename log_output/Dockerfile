FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY index.js .

RUN mkdir -p /app/files

ARG IS_LOGGING_ENABLED=false
ENV IS_LOGGING_ENABLED=$IS_LOGGING_ENABLED

EXPOSE 3000

CMD ["pnpm", "start"]
