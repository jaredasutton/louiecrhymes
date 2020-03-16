FROM mongo

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./docker-mongo-entrypoint/. /docker-entrypoint-initdb.d
RUN chmod +x /docker-entrypoint-initdb.d/*.sh