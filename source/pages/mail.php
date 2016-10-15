<?php
// require_once 'vendor/autoload.php';
// echo $_POST['email'];
// echo $_POST['nombre'];
// echo $_POST['consulta'];
if(isset($_POST['email'],$_POST['nombre'],$_POST['consulta'])) 
{
  // $mail = new PHPMailer;
  // Datos Formulario
  $from = $_POST['email'];
  $nombre = $_POST['nombre'];
  $consulta = $_POST['consulta'];
  //Mail sender
  $webmail = "From: Pa Seguros <agustinesoria96@gmail.com>";
  // //Configuracion de mail
  $asunto = "Consulta de $nombre";
  $body = "Consulta de $nombre (Email: $from) $consulta";
  //Envio de Email
  // $mail->From = "dasd";
  // $mail->FromName = "joel";
  // $mail->addAddress("agustinesoria96@gmail.com","santi");
  // $mail-> isHTML(false);
  // $mail->Subject = "asunto";
  // $mail->Body = "body";
  //Enviar Mail
  if(mail($webmail,utf8_decode($asunto),utf8_decode($body),$webmail)) 
  {
    return json_encode(array("status"=> 200));
  } 
  else 
  {
    return json_encode(array("status"=> 404));
  }
}