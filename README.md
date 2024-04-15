# BACK-END


Este proyecto es una aplicación de backend construida con Node.js y Express. Proporciona una API REST para gestionar usuarios y tarjetas, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estos recursos. Los datos de los usuarios se almacenan en un archivo JSON, lo que simplifica la persistencia de datos sin necesidad de una base de datos compleja.
Requisitos

Para ejecutar este proyecto, necesitarás tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde nodejs.org.
Instalación

1. Clona este repositorio en tu máquina local usando:
   git clone [https://github.com/ErdwinNandayapa/web_project_around_express.git]
   
2. Navega al directorio del proyecto:
cd directorio_del_proyecto

3. Instala las dependencias del proyecto:
  npm install

Uso
Para iniciar la aplicación, ejecuta el siguiente comando en la terminal:
npm start
Esto iniciará el servidor en el puerto 3000 (o en el puerto definido en la variable de entorno PORT), y podrás acceder a la API a través de http://localhost:3000.
Endpoints Disponibles

Usuarios
GET /users: Obtiene una lista de todos los usuarios.
GET /users/:id: Obtiene los detalles de un usuario específico por su ID.

Tarjetas
Los endpoints para tarjetas no están definidos en este README, ya que el código relevante no fue proporcionado.

Contribuir
Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, realiza tus cambios y envía un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE en este repositorio para obtener más detalles.
