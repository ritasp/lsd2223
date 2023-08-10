<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'corticodoguadiana@gmail.com';
    $mail->Password = 'iuygdpuzcrbjxmtq';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $nome);

    $mail->addAddress('corticodoguadiana@gmail.com', 'Cortiço do Guadiana');

    $mail->isHTML(true);
    $mail->Subject = $assunto;
    $mail->Body = 'Nome: ' . $nome . '<br>' 'Email: ' . $email . '<br>' 'Mensagem: ' . $mensagem;

    if ($mail->send()) {
        echo 'Obrigado(a) pela sua mensagem!';
    } else {
        echo 'A sua mensagem não foi enviada. Por favor, tente novamente!';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>