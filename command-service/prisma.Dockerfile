# =========================
# Prisma DB Push
# =========================
FROM node:22-alpine

WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm@10.32.1

# 의존성 파일 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# Prisma schema 복사
COPY src/prisma ./src/prisma

# Prisma Client 생성
RUN pnpm prisma generate

# 기본 실행 명령
CMD ["pnpm", "prisma", "db", "push", "--schema", "src/prisma/schema.prisma"]