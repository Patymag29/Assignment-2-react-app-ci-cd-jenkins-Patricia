
# Use oficial Node.js image based on Alpine
FROM node:22.14.0-alpine 

# Install o bash e git (dependencies) to facilitate the use of terminal
RUN apk add --no-cache bash git 

#Install Netlify CLI globally (-g) to allow the use of netlify commands in the container
RUN npm install -g netlify-cli 

# Set the working directory to /app
WORKDIR /app 

# Start the container with a shell (bash) to allow interaction with the terminal when the container is run
CMD ["sh"] 
