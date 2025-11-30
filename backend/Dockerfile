FROM node:25-alpine AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]