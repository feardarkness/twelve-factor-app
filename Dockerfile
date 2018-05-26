FROM node:8-alpine
WORKDIR /srv
COPY . .
# Para permitir que lo escrito enun archivo llamado debug vaya a stdout del equipo (no del container)
RUN ln -sf /dev/stdout /debug.log
RUN npm install --production
CMD [ "node", "index.js" ]