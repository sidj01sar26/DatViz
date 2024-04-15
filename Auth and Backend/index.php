<?php
require_once 'includes/library.php';
$app = new AppLib();
if (isset($_POST['register'])) {
    $fullname = htmlspecialchars($_POST['fullname']);
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confirmpass = htmlspecialchars($_POST['confirm_password']);
    if ($password == $confirmpass) {
        $app->Register($fullname, $username, $email, $password);
    } else {
        echo "<script>alert('your passwords does not match')</script>";
    }
} elseif (isset($_POST['login'])) {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $app->Login($username, $password);
}