# Use an official Node.js runtime as the base image for the frontend
FROM node:14 as frontend

# Set the working directory to /app/frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the frontend source code into the container
COPY frontend ./

# Build the frontend
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Define the command to start the frontend
CMD ["npm", "start"]
