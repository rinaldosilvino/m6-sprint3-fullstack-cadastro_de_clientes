FROM node:lts AS development

WORKDIR /app
WORKDIR /datasource

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"] 