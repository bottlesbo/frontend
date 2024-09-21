FROM node:17-alpine as builder
WORKDIR /backend
COPY ["package*.json", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM node:17-alpine as runner
WORKDIR /backend
RUN chown -R node:node /backend
COPY --from=builder --chown=mode:node /backend /backend
USER node
EXPOSE 4000
EXPOSE 4001
ENTRYPOINT ["npm", "run", "start"]

