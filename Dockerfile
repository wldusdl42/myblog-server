FROM node:12.16.0-alpine
MAINTAINER Jiyeon Kim <wldusdl34@gmail.com>

# ENV NODE_ENV=production
# WORKDIR /app
# COPY package.json /app
# COPY ["package.json", "package-lock.json*", "./"] /app
# RUN npm install --production
# COPY . .

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig.build.json ./
RUN npm install pm2 -g
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 9090
# CMD ["npm", "run", "start:dev"]
# CMD ["pm2-runtime", "ecosystem.config.js"]
CMD ["pm2-runtime", "--name", "server", "npm", "run", "start"]