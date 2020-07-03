<?php

/* 1、连接数据库 */
include_once "./connectDB.php";

$phone = $_REQUEST["phone"];

/* 多表查询 */
// $sql = "SELECT shopperCar.goodsId,shopperCar.num,shopper.title,shopper.price,shopper.img FROM shopperCar,shopper WHERE shopperCar.goodsId = shopper.id AND phone=$phone";
$sql = "SELECT shopperCar.*,shopper.* FROM shopperCar , shopper WHERE shopperCar.goodsId = shopper.id AND phone=$phone";

mysqli_query($db,"SET NAMES utf8");
$result = mysqli_query($db,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>