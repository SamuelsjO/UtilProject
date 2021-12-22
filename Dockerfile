FROM node:alpine

WORKDIR /utilproject

COPY ./package.json ./

RUN npm install


EXPOSE 3333

CMD [ "npm" , "run",  "dev" ]