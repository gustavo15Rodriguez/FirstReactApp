# FirstReactApp

Primer proyecto en React Native.

## Instalar dependencias

>Para instalar las dependencias necesarias para ejecutar el proyecto
usted debe tener previamente instalado `nmp`, si no es asi, debe instarlo.

Usted debe dirijirse al directorio del proyecto a traves de la linea de comandos
y ejecutar `npm install` y esperar que se instalen todas la dependencias.

## Correr el proyecto

Usted debe ejecutar `expo start` y esperar que el proyecto inicie.
Despues, en su celular debe instalar `expo` y seguido de ello escanear el codigo QR dado en la consola,
o si ha abierto un navegador con la direccin Ip proporcionada en la linea de comandos, el codigo QR que aparece
en la esquina inferior izquierda. Si su celular es IOS, debe hacerlo a traves del enlace que dicha pagina proporcina 
en el mismo lugar.

Para mas informacion acerca de lo anterior puede dirijirse a 
la pagina oficial de [expo](https://expo.io/learn).

> NOTA: Recuerde tener habilitada la opcion de desarrollador en su celular.

Si usted ha ejecutado dicho proyecto en linux, debe ejecutar el siguiente comando 
para evitar errores a la hora de iniciar el proyecto:

`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Mas informacion en la pagina oficial 
de [React native](https://reactnative.dev/docs/troubleshooting#unable-to-start-react-native-package-manager-on-linux).

## Ejecutar versiones del proyecto.

El proyecto cuenta con dos versiones que son la `v1.0` y la `v2.0`. En la primera se hace uso de las propiedades
de react native, state y componentes y demás. En la segunda version se implementa el uso de `React base`, notificaciones
push, `react-navigation` y acceso a la localización del dispositivo. Los pasos a seguir para ejecutar 
cualquiera de las dos versiones es el mismo. Use la que más le guste.     

Para ensayar notificaciones push puede ir [aquí](https://expo.io/notifications), donde encontrara una pagina
interactiva diseñada para el tema en cuestión. El token requerido al principio lo puede encontrar
en la consola de comandos al ingresar al `Home` de la aplicación.  