FROM node:24-alpine AS build

RUN npm i pnpm -g

WORKDIR /app

COPY ./ ./

RUN pnpm i
RUN node --run build
RUN rm -rf frontend
# RUN pnpm prune --production --config.ignore-scripts=true

EXPOSE 3000

CMD ["node", "--run", "start"]
