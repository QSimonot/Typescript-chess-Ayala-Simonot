FROM node:latest
WORKDIR /backend

COPY . .

RUN npm run build
RUN npm run generate
RUN npm run dev

EXPOSE 8080