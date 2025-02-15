FROM node:23-alpine AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN npm i pnpm@9 -g

WORKDIR /app

COPY ./ ./

RUN pnpm i
RUN node --run build
RUN rm -rf frontend
RUN pnpm prune --production --config.ignore-scripts=true

EXPOSE 3000

CMD ["node", "--run", "start"]
