FROM node:20-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY . .
RUN pnpm install --production
RUN npx prisma generate
EXPOSE 3000
CMD ["npx", "ts-node", "./src/server.ts"]
