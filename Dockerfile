FROM node:lts-buster

WORKDIR /home/apps

RUN npm install -g firebase-tools
RUN export NODE_OPTIONS="--max-old-space-size=8192"

VOLUME /home/apps

# emulator suite
EXPOSE 4000
# firebase hosting
EXPOSE 5000
# cloud functions
EXPOSE 5001
# cloud firestore
EXPOSE 8080
# cloud pub/sub
EXPOSE 8085
# realtime database
EXPOSE 9000
# firebase login
EXPOSE 9005
# authentication
EXPOSE 9099

CMD [ "/bin/bash" ]