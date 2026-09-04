# =========================
# 1. Dependencies
# =========================
FROM node:22-alpine AS deps

WORKDIR /app

RUN npm install -g pnpm@10.32.1

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile


# =========================
# 2. Build
# =========================
FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.32.1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build


# =========================
# 3. Production
# =========================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# public
COPY --from=builder /app/public ./public

# Next.js standalone
COPY --from=builder /app/.next/standalone ./

# static
COPY --from=builder /app/.next/static ./.next/static

# ==========================================
# SWC helpers
# ==========================================

# standalone에 포함된 @swc/helpers
COPY --from=builder \
    /app/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers \
    /app/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers

# Next.js가 실제로 찾는 경로에 @swc/helpers 복사
COPY --from=builder \
    /app/node_modules/.pnpm/@swc+helpers@0.5.23/node_modules/@swc/helpers \
    /app/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@swc/helpers

EXPOSE 3000

CMD ["node", "server.js"]