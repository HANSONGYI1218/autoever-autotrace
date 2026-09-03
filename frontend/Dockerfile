FROM node:22-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm@10.32.1

COPY package.json pnpm-lock.yaml ./

RUN pnpm --version
RUN pnpm install --frozen-lockfile


FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.32.1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 문제 확인용: node_modules 전체 복사
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "server.js"]