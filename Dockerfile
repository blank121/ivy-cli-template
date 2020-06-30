FROM ALIYUN_HOST_VPC/ivydad/docker-vue:latest as builder
ENV NODE_ENV NODE_ENV_VALUE
WORKDIR /PROJECT_NAME
COPY . .
RUN mv /ivy/docker-vue/node_modules ./ && NODE_ENV=test yarn install && yarn build

FROM ALIYUN_HOST_VPC/ivydad/nginx-base:latest
RUN cp cons/m.conf /etc/nginx/conf.d/default.conf && sed -i "s/ALIAS_NAME/PROJECT_NAME/g" /etc/nginx/conf.d/default.conf
COPY --from=builder PROJECT_NAME/dist/ PROJECT_NAME/public/favicon.ico /PROJECT_NAME/
EXPOSE 80
