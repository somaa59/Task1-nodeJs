FROM node

WORKDIR /src/application

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "task.js"]