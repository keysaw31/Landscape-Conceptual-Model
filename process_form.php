<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $jobSite = $_POST["job-site"];
    $message = $_POST["message"];

    $to = "kiesau31@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Job Site Address: $jobSite\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success"; // You can handle success in your JavaScript code
    } else {
        echo "error"; // You can handle error in your JavaScript code
    }
}
?>
