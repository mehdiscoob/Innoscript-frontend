# Use official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
