<?php

include 'db.php';

$postMsg= file_get_contents('php://input');
$msg = json_decode($postMsg, true);

$name = $msg['name'];
$mail = $msg['mail'];
$text = $msg['text'];

$query = "INSERT INTO messages (name, mail, text, date_created)
            VALUES ('$name','$mail','$text', NOW())";

mysqli_query($link, $query);

$error = mysqli_error($link);

if ($error) {
    echo $error;
} else {
    echo json_encode($msg);
}

?>