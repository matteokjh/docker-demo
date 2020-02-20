# 启动脚本

host_port=30000
app_port=3000
container=docker-demo
image=matteokjh/docker-demo

docker run \
    -d \
    --rm \
    -p ${host_port}:${app_port} \
    --name ${container} \
    ${image}