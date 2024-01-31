FROM node:21 as builder
WORKDIR /builder
COPY package-lock.json package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM scratch
VOLUME [ "/static/" ]
WORKDIR /static/
COPY --from=builder /builder/dist/ /static/
CMD [ "/bin/sh" ]
