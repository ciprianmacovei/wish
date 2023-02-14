FROM nginx:1.23.3-alpine-slim
COPY ./dockerfiles/nginx/nginx.conf /etc/nginx/conf.d/custom.conf

RUN apk add --update nodejs npm
RUN npm i -g n
RUN n lts & PATH=$PATH

WORKDIR /frontend
COPY ./frontend .

RUN npm i && npm run build
RUN cd dist && mv * /usr/share/nginx/html/


