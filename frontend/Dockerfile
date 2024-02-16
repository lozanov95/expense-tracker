FROM node:21
VOLUME [ "/frontend" ]
COPY ./frontend/package-lock.json ./frontend/package.json ./
RUN npm install
WORKDIR /frontend
CMD ["npm" ,"run", "dev" ,"--","--host"]