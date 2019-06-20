<?php

  $nome     = $_POST['txtNome'];
  $telefone = $_POST['txtTelefone'];
  $email    = $_POST['txtEmail'];
  $mensagem = $_POST['txtMensagem'];

  $corpo  = "Nome: ".$nome."<BR>\n";
  $corpo .= "Email: ".$email."<BR>\n";
  $corpo .= "Mensagem: ".$mensagem."<BR>\n";

  if(mail("contato@fatecpgjr.com.br", "", $corpo)){
    echo("email enviado com sucesso");
  } else {
    echo("Erro ao enviar e-mail");
  }

?>