$(document).ready(function() {
    //DOM ready => se puede manipular elementos html desde JS
    //alert('ready');
    $("#sec_resultados").hide();

    $(document).on("click", "#btn", function() {
        let busq = $("#buscar").val();

        try {
            if (!busq) {
                throw "Texto de busqueda requerido";
            }

            //objeto JS
            let url = `https://tastedive.com/api/similar?k=355111-Test-XN24AJ8K&q=${busq}&verbose=1`;                    
            $.ajax({
                url:url,
                type:"GET",
                dataType:"jsonp",
                success:function(respuesta) {
                    let info;
                    $("#sec_resultados").show();

                    //elemento 1
                    $("#nom1").text(respuesta.Similar.Info[0].Name);
                    $("#descr1").text(respuesta.Similar.Info[0].wTeaser);
                    $("#video1").attr("src", respuesta.Similar.Info[0].yUrl);
                    $("#link1").attr("href", respuesta.Similar.Info[0].wUrl);

                    $.each(respuesta.Similar.Results, function(pos, grupo){
                        if (grupo.wTeaser != "") {
                            info = `<hr><h2>${grupo.Name}</h2><p>${grupo.wTeaser}</p><br><a href="${grupo.wUrl}" target="_blank">Wikipedia</a>`;
                            $("#sec_resultados").append(info);
                        }
                    });
                }
            });

        } catch (error) {
            $("#error_resultados").html(error);
        }
    });

});