# pull a container form the docker hub like node:18
FROM node:21 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD [ "node","index.js" ]