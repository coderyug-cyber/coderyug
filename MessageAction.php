<?php

    $server ="localhost";
    $username = "root";
    $password = "root";
    $database = "coderyug_db";

    $con = mysqli_connect($server, $username, $password, $database);

    if($con){
        echo "Connection successed...";
        echo "<br>";
    }
    else{
        echo "Connection failed...";
    }

    $u_name = $_POST['uname'];
    $u_email = $_POST['email'];
    $u_message = $_POST['message'];

    $query = "INSERT INTO message_table (name, email, message) values('$u_name', '$u_email', '$u_message')";

    $result = mysqli_query($con, $query);

    if($result){
        echo "Insert successfully...";
        mysqli_close($con);
    }
    else{
        echo "Insertion failed...";
    }
?>