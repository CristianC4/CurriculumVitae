# CurriculumVitae
He realizado una hoja de vida en formato web, subida en Heroku

## About
_Esta página solo es un ejercicio de practica front-end, no es ni por asomo un ejemplo de buenas practicas de programación o diseño, simpelemente fue un proyecto personal meramente academico, esta subido en [Curriculum Vitae Cristian](https://blooming-basin-92631.herokuapp.com/)

### Pre-requisitos 📋
* Tener instalado Git
* Algun editor de codigo para HTML/CSS/JavaScript

### Instalación 🔧
_Intente hacer la pagina lo menos compleja posible, por tanto al inicio solo utilice CSS/HTML/JavaScript, no quice utilizar ningun framework, por que la motivación del proyecto era repasar el lenguaje de programación JavasCript/ECMAScript, aun y sin embargo para darle un poco mas de personalidad al proyecto decidi usar Bootstrap 4, con las referencias que se muestran en su página principal_

```
    <!-- Device mobile -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<!-- Popper JS -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
```
_En un principio plantee usar jQuery para realizar la paginacón dinamica, pero luego hice uso de PHP, por lo que realice una instalación local para ArchLinux, del servidor XAMPP, usando los repositorios de la comunidad AUR, y con el asistente Yay (gusto personal), ¿Porqué?, por que con php es mas sencillo ;D_
```
  yay -S xampp
```
### Heroku
_Use heroku como herramienta para colgarlo en la web de forma gratuita, para ello instalé composer, de igual forma de AUR, al estar en GNU no tuve problema con snap, pero tal vez tambien sea necesario instalarlo en algunos casos, importante crear dos archivos composer.json y Procfile, el composer.json en este caso quedo vacio ({}), ambos tienen lo siguiente:_
```
composer.json
  {}
Procfile
  web: vendor/bin/heroku-php-apache2 web/
```
_Luego simplemente realice un push en heroku para poder ver la pagina que está en About_
```
  $ git push heroku main // En mi caso main, manejando otros branch master o lo que sea.. 
```

### TODO 📌
_Queda pendiente arreglar el pequeño bug ocasionado por usar javascript para la barra de navegación y php para la paginacón dinamica, lo que involuntariamente ocasiono un reload de cada nav-link teniendo que reiterar el click_

## Autor ✒️

_Gracias a Internet y la documentación de cada una de la plataformas usadas_

* **Cristian Camilo Cuervo Castillo** - *Desarrollador y lo que sea* -
