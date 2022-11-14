FROM node:16
WORKDIR /app-node
ENV PORT=${PORT_BUILD}
EXPOSE ${PORT_BUILD}
COPY . .
RUN npm install
ENTRYPOINT npm start