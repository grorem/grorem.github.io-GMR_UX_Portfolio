<?php
    $name = $_POST['name'];
    $email = $_POST['email'];

    $message = $_POST['message'];

    $username = $_POST['username'];

    $from = 'From: Rorem Law Website Contact Form';


    $to = 'mark.rorem@gmail.com';
    $subject = 'Rorem Law Website Contact Form Submission';

    $body = "From: $name\n\n E-Mail: $email\n\n Message:\n\n $message";

    $SpamErrorMessage = "No Websites or URLs permitted";



    if (preg_match("/http/i", "$name")) {echo "$SpamErrorMessage"; exit();}
     if (preg_match("/http/i", "$email")) {echo "$SpamErrorMessage"; exit();}

    		if (preg_match("/http/i", "$message")) {echo "$SpamErrorMessage"; exit();}


    if ($_POST['submit'])  {

    if (( mail ($to, $subject, $body, $from)) && ($username == "")) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}




?>
