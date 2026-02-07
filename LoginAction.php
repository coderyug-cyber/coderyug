<?php
    $server ="localhost";
    $username = "root";
    $password = "root";
    $database = "coderyug_db";

    $con = mysqli_connect($server, $username, $password, $database);

    if(!$con){
        echo "Connection failed...";
    }
    else{
        echo "Connection successed...";
    }

    $user_id = $_POST['username'];
    $user_pass = $_POST['password'];

    $query = "SELECT *FROM coderyug_db WHERE your_name = '$user_id' AND your_email =  '$user_pass' ";

    $result = mysqli_query($con, $query);

    if(mysqli_num_rows($result)==1){
        echo "Login success...";
    }
    else{
        echo "Login failed...";
    }
?>