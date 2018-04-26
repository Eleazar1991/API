FROM node:latest
ENV bucket_name bucket_key
RUN mkdir /src
WORKDIR /src
ADD ./package.json /src/package.json
RUN npm install
COPY ./index.js /src/index.js
COPY ./back /src/back
EXPOSE	8080
CMD npm start 	
