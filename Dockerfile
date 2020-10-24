FROM node:15-alpine
WORKDIR /app

# RUN echo '1' && cat src.js

COPY src.js ./

RUN echo '2' && cat src.js

CMD node src
