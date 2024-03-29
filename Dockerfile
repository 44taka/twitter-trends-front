FROM node:18.4.0 AS builder

# RUN mkdir /app
# COPY ./app /app
WORKDIR /app
# COPY ./app/package.json ./
# COPY ./app/yarn.lock ./
COPY ./app /app
RUN yarn install --frozen-lockfile --production=false
RUN yarn build

FROM node:18.4.0 AS runner

COPY --from=builder /next.config.js ./
COPY --from=builder /public ./public
COPY --from=builder /.next/static ./.next/static
COPY --from=builder /.next/standalone ./

# COPY --from=builder ./next.config.js ./
# COPY --from=builder ./public ./public
# COPY --from=builder ./.next/static ./.next/static
# COPY --from=builder ./.next/standalone ./

ENV NODE_ENV=production
ENV PORT 80
EXPOSE 80

CMD ["node", "server.js"]

# Install dependencies only when needed
# FROM node:18.4.0 AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY ./app/package.json ./app/yarn.lock* ./app/package-lock.json* ./app/pnpm-lock.yaml* ./
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
#   else echo "Lockfile not found." && exit 1; \
#   fi


# # Rebuild the source code only when needed
# FROM node:18.4.0 AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY ./app .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn build

# # If using npm comment out above and use below instead
# # RUN npm run build

# # Production image, copy all the files and run next
# FROM node:18.4.0 AS runner
# WORKDIR /app

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # You only need to copy next.config.js if you are NOT using the default configuration
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 80

# ENV PORT 80

# CMD ["node", "server.js"]

#####################################
# FROM node:18.4.0

# RUN mkdir /app
# COPY ./app /app
# WORKDIR /app

# RUN yarn install
# RUN yarn build
# ENTRYPOINT ["yarn", "start"]
