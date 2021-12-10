docker run -it --rm -v "$(pwd)/apps":/home/apps \
    -p 4000:4000 \
    -p 5000:5000 \
    -p 5001:5001 \
    -p 8080:8080 \
    -p 8085:8085 \
    -p 9000:9000 \
    -p 9005:9005 \
    -p 9099:9099 \
--name firebase_cli firebase_cli /bin/bash