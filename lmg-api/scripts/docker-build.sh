
#!/bin/bash
. ./docker.env
docker build . -t ${IMAGE_BASE}:latest