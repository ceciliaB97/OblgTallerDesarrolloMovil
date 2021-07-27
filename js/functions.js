$(document).ready(function () {
    //DOM ready => se puede manipular elementos html desde JS
    //alert('ready');

    $(document).on("click", "#login_btn", function () {
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
            let url = `http://api.marcelocaiafa.com/login`;
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
                    ons.notification.toast(xml.responseJSON.description, { timeout: 4000 });
                }
            });

        } catch (error) {
            ons.notification.toast(error, { timeout: 2000 });
        }
    });

    $(document).on("click", "#registrarse_btn", function () {
        let nombre = $("#registro_nombre").val();
        let apellido = $("#registro_apellido").val();
        let mail = $("#registro_email").val();
        let genero = $("#registro_genero").val();
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
            if (!genero) {
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
                "password": pass1,
                "email": mail,
                "nombre": nombre,
                "apellido": apellido,
                "sexo": genero
            };
            //CONVERTIR EL OBJETO 'DATOS' A TEXTO PLANO, PARA QUE LO ACEPTE LA API
            //puede ser NECESARIO PARA LA API o NO
            datos = JSON.stringify(datos);

            //objeto JS
            let url = `http://api.marcelocaiafa.com/usuario`;
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: datos,
                success: function(respuesta) {
                    let nav = document.getElementById("nav");
                    nav.pushPage("temp_locales");
                    nav.options = { animation: "lisft", animationOptions: { duration: 2 } };
                    ons.notification.toast("Registrado corretamente", { timeout: 2000 });
                },
                error: function (xml, error, status) {
                    ons.notification.toast(xml.responseJSON.description, { timeout: 4000 });
                }
            });

        } catch (error) {
            ons.notification.toast(error, { timeout: 2000 });
        }
    });



    $(document).on("click", "#login_register_btn", function () {
        let nav = document.getElementById("nav");
        nav.pushPage("temp_registro");
        nav.options = { animation: "lisft", animationOptions: { duration: 2 } };
    });

    // MAIN MENU
    $(document).on("click","#btn_pantalla_principal_productos", function(){
        // Plantilla para side menu
    });
});