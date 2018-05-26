# 12 factor app

## Tomar en cuenta

Si subimos archivos se debe agregar un volumen para persistir en el equipo local y no en la imagen los archivos, ya que si la imagen muere luego los archivos también morirían, esto se hace con volume en *docker-compose.yml*.

## Variables necesarias

- APP_PORT: Puerto en el que correrá la aplicación