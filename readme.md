to make images:
cd client;
docker build -t react-app .;
cd server;
docker build -t node-app .;

to run containers:
docker run -p 3000:3000 reactcontainer react-app;
docker run -p 4000:4000 nodecontainer node-app
