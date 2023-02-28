# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /src

COPY package.json ./

RUN npm install

# Add the source code to app
COPY . .

EXPOSE 80

# Generate the build of the application
RUN npm run build

