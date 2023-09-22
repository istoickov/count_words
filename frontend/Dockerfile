# Use an official Node.js runtime as the base image for the frontend
FROM node:14-alpine as build

# Set the working directory to /app/frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN yarn install

# Copy the frontend source code into the container
COPY frontend ./

# Build the frontend
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
