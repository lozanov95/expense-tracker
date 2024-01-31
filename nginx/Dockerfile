FROM node:21 as builder
WORKDIR /builder
COPY ["frontend/package-lock.json", "frontend/package.json", "./"] 
RUN npm install
COPY ["frontend/","./"]
RUN npm run build

FROM nginx:1.25.3
COPY --from=builder /builder/dist/ /var/www/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf