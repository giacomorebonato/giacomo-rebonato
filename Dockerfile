FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lock* bunfig.toml ./
RUN bun install

COPY . .

RUN bunx tailwindcss -i src/index.css -o src/styles.css
RUN sed -i 's|href="./src/index.css"|href="./src/styles.css"|' index.html
RUN bun build --target=bun --production --outdir=dist ./server.ts

FROM oven/bun:1-slim

WORKDIR /app/dist

COPY --from=build /app/dist .
COPY --from=build /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
ENV HOST=0.0.0.0

CMD ["bun", "server.js"]
