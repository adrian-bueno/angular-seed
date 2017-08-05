FROM nginx:1.13-alpine

RUN apk add --no-cache openssl

RUN mkdir -p /etc/nginx/ssl

# Auto-generated certificate and key (change -subj option)
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=CC/ST=State/L=Localization/O=Organization/OU=Organizational Unit/CN=Common Name"
# Or copy them
# COPY <path>/nginx.crt <path>/nginx.key /etc/nginx/ssl/

COPY dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
