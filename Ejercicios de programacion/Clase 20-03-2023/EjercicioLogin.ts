/* Ejercicio login 
* Desarrolle un algoritmo que permita loguearse a un sistema, ingresando un nombre de usuario y la contraseña adecuada
* Considerar que tanto el usuario como la contraseña estan formados solo por letras
* El sistema debera validar que el usuario y la contraseña sean correctas , comparandolas con las que el sistema tiene registrado para ese usuario .
    Tenga en cuenta que el sistema tiene registrado el usuario Juan y la clave claveJuan. */

    import * as rls from "readline-sync";

    const UsuarioReg : string = "Juan";
    const claveRegistrada : string ="claveJuan";
    let nomUsuario : string = rls.question("Ingrese Nombre de Usuario: ");
    let Contraseña : string = rls.question("Ingrese Clave: ");

    if ((nomUsuario == UsuarioReg) && (Contraseña == claveRegistrada)){
        console.log("Usted se ingreso correctamente");
    }
    else {
        console.log("Usuario o contraseña incorrectos, vuelva a intentarlo");
    }

