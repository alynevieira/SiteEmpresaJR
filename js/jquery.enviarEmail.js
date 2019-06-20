(function ( $ ) {
    $.fn.enviarEmail = function( opcoes, callback ) {
        if(opcoes.nome == null || opcoes.nome == '' || 
           opcoes.email == null || opcoes.email == '' ||
           opcoes.mensagem == null || opcoes.mensagem == '') {
            callback(false, 'Verifique o preenchimento dos campos e tente novamente.');
        } else {
            var settings = $.extend({
                nome: 'Empresa Junior',
                telefone: '(13) 3591-6968',
                email: 'contato@fatecpgjr.com.br',
                mensagem: 'Mensagem de Teste'
            }, opcoes );		

            $.ajax({
                method: 'post',
                url: 'enviarEmail.php',
                data: {
                    'site' : 'ejr',
                    'name' : settings.nome,
                    'phone' : settings.telefone,
                    'email' : settings.email,
                    'message' : settings.mensagem
                },
                complete: function(xhr, textStatus, errorThrown) {
                    if(xhr.status == 500) {
                        callback(false, 'Ocorreu um erro ao enviar o email.');
                    } else {
                        callback(true);
                    }
                }
            }); 
        }
    };
}( jQuery ));