FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY public/index.html /app/public/index.html

COPY index.js .

EXPOSE 3000

CMD ["pnpm", "start"]
