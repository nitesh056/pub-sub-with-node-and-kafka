FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["yarn", "dev"]
