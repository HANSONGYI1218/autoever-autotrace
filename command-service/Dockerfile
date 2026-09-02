# =========================
# 1. Dependencies
# =========================
FROM node:22-alpine AS deps

WORKDIR /app

# pnpm 10.32.1 설치
RUN npm install -g pnpm@10.32.1

COPY package.json pnpm-lock.yaml ./

RUN pnpm --version
RUN pnpm install --frozen-lockfile


# =========================
# 2. Build
# =========================
FROM node:22-alpine AS builder

WORKDIR /app

# pnpm 10.32.1 설치
RUN npm install -g pnpm@10.32.1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm --version
RUN pnpm run build


# =========================
# 3. Production
# =========================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]