<?php
    header("Content-Type: text/html;charset=utf-8");
    include_once "./connectDB.php";
    
    /* 核心逻辑： */
    /* (1) 先拿到用户提交的参数 */
    $phone = $_REQUEST["phone"];
    $goodsId = $_REQUEST["goodsId"];
  
    
    $setData = "DELETE FROM `shopperCar`  WHERE `phone` =$phone AND `goodsId`=$goodsId";

    $result = mysqli_query($db,$setData);

    /* 3、把数据转换为JSON数据返回 */

    // echo json_encode($data,true);



  
?>