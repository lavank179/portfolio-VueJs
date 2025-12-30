FROM node:20.19.6-alpine

# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json first for better caching
COPY package*.json ./
RUN npm install
# Copy the entire project
COPY . .
RUN npm run build && \
    rm -rf node_modules/


FROM nginx:latest

WORKDIR /usr/share/nginx/html
# Remove default Nginx static files
RUN rm -rf ./*
# Copy built static files from Node.js container
COPY --from=0 /app ./
# Start Nginx - But at present just use basic static html no nginx proxy.
CMD ["nginx", "-g", "daemon off;"]