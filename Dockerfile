FROM node

LABEL maintainer matteokjh

WORKDIR /usr/src/app

# 时区
ENV TZ=Asia/Shanghai

COPY package.json *.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start