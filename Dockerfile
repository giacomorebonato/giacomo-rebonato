FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock* bunfig.toml ./
RUN bun install

COPY . .

EXPOSE 3000
ENV NODE_ENV=production
ENV HOST=0.0.0.0

CMD ["bun", "server.ts"]
