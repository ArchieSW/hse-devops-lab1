FROM node:20-alpine3.16 AS builder
COPY . .
RUN npm install
RUN npm run test
RUN npm run build

FROM nginx:alpine

COPY --from=builder ./dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]