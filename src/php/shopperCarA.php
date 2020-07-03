<?php
    header("Content-Type: text/html;charset=utf-8");
    include_once "./connectDB.php";
    
    /* 核心逻辑： */
    /* (1) 先拿到用户提交的参数 */
    $phone = $_REQUEST["phone"];
  
    
    $getData = "SELECT * FROM `shopperCar` WHERE `phone`=$phone ";

    mysqli_query($db,"SET NAMES utf8");

    $result = mysqli_query($db,$getData);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);

    /* 3、把数据转换为JSON数据返回 */

    echo json_encode($data,true);



  
?>