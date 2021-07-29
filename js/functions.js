$(document).ready(function() {
    //DOM ready => se puede manipular elementos html desde JS
    //alert('ready');

    //#region login
    $(document).on("click", "#login_btn", function() {
        let mail = $("#login_usuario").val();
        let pass = $("#login_password").val();

        try {
            if (!mail) {
                throw "Usuario requerido";
            }
            // /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/ VALIDAR EMAIL
            if (!/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(mail)) {
                throw "Email no v&aacute;lido";
            }
            if (!pass) {
                throw "Contrase&ntilde;a requerida";
            }

            let datos = {
                "email": mail,
                "password": pass
            };
            //CONVERTIR EL OBJETO 'DATOS' A TEXTO PLANO, PARA QUE LO ACEPTE LA API
            //puede ser NECESARIO PARA LA API o NO
            datos = JSON.stringify(datos);

            //objeto JS
            let url = `https://ort-tallermoviles.herokuapp.com/api/usuarios/session`;
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: datos,
                success: function(respuesta) {
                    let nav = document.getElementById("nav");
                    nav.pushPage("temp_locales");
                    nav.options = { animation: "lisft", animationOptions: { duration: 2 } };
                    //ons.notification.toast("Logueado corretamente", { timeout: 2000 });
                },
                error: function (xml, error, status) {
                    ons.notification.toast(xml.responseJSON.error, { timeout: 4000 });
                }
            });

        } catch (error) {
            ons.notification.toast(error, { timeout: 2000 });
        }
    });
    //#endregion login

    //#region registrarse
    $(document).on("click", "#registrarse_btn", function() {
        let nombre = $("#registro_nombre").val();
        let apellido = $("#registro_apellido").val();
        let mail = $("#registro_email").val();
        let direccion = $("#registro_direccion").val();
        let pass1 = $("#registro_password").val();
        let pass2 = $("#registro_password_repeat").val();

        try {
            if (!nombre) {
                throw "Nombre requerido";
            }
            // /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/ VALIDAR EMAIL
            if (!/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(mail)) {
                throw "Email no v&aacutelido";
            }
            if (!apellido) {
                throw "Apellido no v&aacute;lido";
            }
            if (!mail) {
                throw "Email requerida";
            }
            if (!direccion) {
                throw "Genero requerida";
            }
            if (!pass1) {
                throw "Contrase&ntilde;a requerida";
            }
            if (!pass2) {
                throw "Contrase&ntilde;a requerida";
            }
            if (pass1 !== pass2) {
                throw "Contrase&ntilde;as deben ser iguales";
            }

            let datos = {
                "nombre": "Gabriel",
                "apellido": "Arce",
                "email": "gab1.arpe@gmail.com",
                "direccion": "Calle A 1234",
                "password": "aa123456"
              }; 
        
            //CONVERTIR EL OBJETO 'DATOS' A TEXTO PLANO, PARA QUE LO ACEPTE LA API
            //puede ser NECESARIO PARA LA API o NO
            datos = JSON.stringify(datos);

            //objeto JS
            let url = `https://ort-tallermoviles.herokuapp.com/api/usuarios`;
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: datos,
                success: function(respuesta) {
                    let nav = document.getElementById("nav");
                    nav.pushPage("temp_login");
                    nav.options = { animation: "lisft", animationOptions: { duration: 2 } };
                    ons.notification.toast("Registrado corretamente", { timeout: 2000 });
                },
                error: function (xml, error, status) {
                    ons.notification.toast(xml.responseJSON.error, { timeout: 4000 });
                }
            });

        } catch (error) {
            ons.notification.toast(error, { timeout: 2000 });
        }
    });
    //#endregion registrarse


    //#region redirigir a registro
    $(document).on("click", "#login_register_btn", function() {
        let nav = document.getElementById("nav");
        nav.pushPage("temp_registro");
        nav.options = { animation: "lisft", animationOptions: { duration: 2 } };
    });
    //#endregion redirigir a registro

});