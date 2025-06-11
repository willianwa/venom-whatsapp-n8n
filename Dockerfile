FROM node:18.19.1

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["bash", "-c", "npm start"]
