from node

WORKDIR /app

copy . .

expose 8080 

run npm install

cmd ["npm", "start"]