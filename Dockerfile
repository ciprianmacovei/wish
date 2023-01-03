# FROM python:3.11-alpine as BASE
# COPY . /app
# WORKDIR /app
# RUN apk add gcc libffi-dev openssl-dev musl-dev mariadb-dev \
#     && apk add --no-cache mariadb-connector-c-dev
# RUN pip install --upgrade pip
# RUN pip install -r requirements.txt
# CMD [ "python", "app.py"]

# Base image
FROM python:3.11

# Install system packages
RUN apt-get update && apt-get install -y nginx && apt-get install -y npm && npm install -y -g pm2 && npm i -y -g n
RUN n lts && PATH=$PATH

# Create directories for the backend and frontend
RUN mkdir -p /backend
RUN mkdir -p /frontend

# Set the working directory to the backend directory
WORKDIR /backend

# Copy the requirements file and install the Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the backend code
COPY . .

# Expose the port that the backend will run on
EXPOSE 5000

# Set the command to start the backend server
# CMD ["python", "app.py"]
RUN pm2 start python -- app.py

# Set the working directory to the frontend directory
WORKDIR /frontend

# Copy the frontend code
COPY ./app-base .

# Build the frontend
RUN npm install
RUN npm run build

# Copy the built frontend to the nginx default location
RUN cp -r dist/* /var/www/html/
RUN cp /backend/default /etc/nginx/sites-available/

# Expose the port that nginx will run on
EXPOSE 80

# Set the command to start nginx
CMD ["nginx", "-g", "daemon off;"]