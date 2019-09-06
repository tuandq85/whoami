FROM nginx:alpine

RUN rm /usr/share/nginx/html/*
#copy dist content to html nginx folder, config nginx to point in index.html
ADD ./dist/whoami/. /usr/share/nginx/html/

# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# RUN echo "daemon off;" >> /etc/nginx/nginx.conf
ADD ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf