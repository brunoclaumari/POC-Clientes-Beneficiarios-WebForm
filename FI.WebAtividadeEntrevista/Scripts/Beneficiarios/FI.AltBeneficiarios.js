

//$(document).ready(function () {
//    if (obj) {
//        $('#formBeneficiario #Id').val(obj.Id);
//        $('#formBeneficiario #CpfBeneficiario').val(obj.Cpf);
//        $('#formBeneficiario #NomeBeneficiario').val(obj.Nome);
//        //$('#formBeneficiario #Id').val(obj.CEP);
       
//    }

//    $('#formBeneficiario').submit(function (e) {
//        e.preventDefault();
        
//        $.ajax({
//            url: urlPost,
//            method: "POST",
//            data: {
//                "NOME": $(this).find("#Nome").val(),
//                "Cpf": $(this).find("#Cpf").val()
//            },
//            error:
//            function (r) {
//                if (r.status == 400)
//                    ModalDialog("Ocorreu um erro", r.responseJSON);
//                else if (r.status == 500)
//                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
//            },
//            success:
//            function (r) {
//                ModalDialog("Sucesso!", r)
//                $("#formCadastro")[0].reset();                                
//                window.location.href = urlRetorno;
//            }
//        });
//    })
    
//})


