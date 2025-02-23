#! /bin/bash

APP_VERSION=$1
DEPLOY_ENABLED=$2
RUN_ON_PORT=$3


(
  set -e
  EXISTING_IMAGE=$(docker images| grep "portfolio" | awk -F " " '{print $3}')
  if [[ "$EXISTING_IMAGE" != "" ]]; then
    echo "Deleting existing image $EXISTING_IMAGE"
    docker rmi $EXISTING_IMAGE
  fi


  echo "Build started..."
  docker build -t portfolio:$APP_VERSION .

  if [[ "$DEPLOY_ENABLED" == "deploy" ]]; then
    if [[ "$RUN_ON_PORT" == "" ]]; then
      RUN_ON_PORT=8800
    fi

    echo "Starting deploy container..."
    docker run -d -p $RUN_ON_PORT:80 portfolio:$APP_VERSION
    echo "Deployed the app/site portfolio:$APP_VERSION in the port $RUN_ON_PORT successfully!!!"
  fi
)
errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "ERROR: Unexpected error occured."
  exit $errorCode
fi