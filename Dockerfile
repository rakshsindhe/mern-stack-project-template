FROM node:12.18-alpine

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
COPY client/package.json /usr/src/app/client
COPY client/package-lock.json /usr/src/app/client
RUN npm run clientInstall

COPY . /usr/src/app
RUN npm run build
RUN rm -rf /usr/src/app/client/
EXPOSE 5000
CMD ["npm", "start"]