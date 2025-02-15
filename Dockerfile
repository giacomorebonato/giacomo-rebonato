FROM node:23-bookworm AS build

RUN npm i pnpm@9 -g

WORKDIR /app

COPY ./ ./

RUN pnpm i
RUN pnpm dlx playwright install --with-deps chromium
RUN node --run build
RUN rm -rf frontend tests
RUN pnpm prune --production --config.ignore-scripts=true

EXPOSE 3000

CMD ["node", "--run", "start"]
