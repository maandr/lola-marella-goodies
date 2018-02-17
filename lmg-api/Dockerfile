FROM node:alpine
MAINTAINER Mats Andresen <mats.andresen@gmx.de>

# Create working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle source
COPY . .

# Expose application port
EXPOSE 3000

# Start application
CMD [ "npm", "start" ]