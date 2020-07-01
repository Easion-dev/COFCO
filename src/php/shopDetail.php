<?php
     header("Content-Type:text/html;charset=utf-8");
     include_once("./connectDB.php");
     $getId = $_REQUEST['goodsId'];
     $sql =  "SELECT * FROM shopper WHERE id='$getId'";
     mysqli_query($db,"SET NAMES utf8");
     $result = mysqli_query($db,$sql);
     
     
       $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
      echo json_encode($data[0],true);
     

?>