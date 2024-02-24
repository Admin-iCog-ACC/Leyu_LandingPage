# Start from the official Node.js LTS base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

#pass env var

# Copy all files
COPY . .

# Run the build command
RUN npm run build

# Run npm start script
CMD ["npm","run", "start"]