# Tarea 1 - IIC2173 - Arquitectura de Sistemas de Software


### Autor: [Vicente Fuenzalida Marín](mailto:vjfuenzalida@uc.cl)

### Requerimientos

* node.js
* git
* npm
* mongodb

### **¿Cómo iniciar la aplicación?**

* Clonar el repositorio
```
$ git clone https://github.com/vjfuenzalida/IIC2173-tarea1.git
```


* Instalar los paquetes necesarios
```
$ npm install
```

* Iniciar el servidor local (puerto 3000)
```
$ npm start
```
* visitar la [página de inicio](http://127.0.0.1:3000/)

### **Modo de uso**

La aplicación permite registrar las requests realizadas al servidor donde ésta corre, para luego mostrarlas en una [tabla](http://127.0.0.1:3000/list) (por simplicidad muestra solo las últimas 10 requests). Se detalla la IP del servidor, del cliente que realizó la request HTTP, y la fecha y hora en que se procesó la request.