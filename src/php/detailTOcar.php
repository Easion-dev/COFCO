<?php
    header("Content-Type: text/html;charset=utf-8");
    include_once "./connectDB.php";
    
    /* 核心逻辑： */
    /* (1) 先拿到用户提交的参数 */
    $phone = $_REQUEST["phone"];
    $goodsId = $_REQUEST["goodsId"];
    $numA = $_REQUEST["num"];


    $sql = "SELECT * FROM `shopperCar` WHERE `phone` = $phone AND `goodsId` = $goodsId";
    
    $r = mysqli_query($db, $sql);
    
    $num= mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */
    
    /* + 检查：检查当前的用户名在数据库中是否已经存在，如果存在那么就应该提示，否则就插入 */ 
    if($num ==0){
        $sql = "INSERT INTO `shopperCar` (`phone`,`goodsId`,`num`) VALUES ($phone,$goodsId,$numA)";
    }else{
        $sql = "UPDATE `shopperCar` SET `num` = `num` + $numA WHERE `phone`=$phone AND  `goodsId` = $goodsId";
    }
    $retval =  mysqli_query($db,$sql);
    mysqli_query($db,"SET NAMES utf8");
    if(!$retval){
        die('无法插入数据: ' . mysqli_error($conn));
    }
    echo '{"status":"success"}';
    

    /* 3、把数据转换为JSON数据返回 */

    



  
?>