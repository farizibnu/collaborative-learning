# Use the official Node.js image as the base image
FROM node:14-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# # Build the React app
# RUN npm run build

# # Use the official Nginx image as the runtime image
# FROM nginx:1.21-alpine

# # Copy the built React app from the build stage to the runtime stage
# COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# # Command to start Nginx when the container runs
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]