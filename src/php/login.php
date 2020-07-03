<?php
    header("Content-Type:text/html;charset=utf-8");
    include_once("./connectDB.php");
    $phone = $_REQUEST["phone"];
    $password = $_REQUEST["password"];
    $sql =  "SELECT * FROM user WHERE phone='$phone'";

    $result = mysqli_query($db,$sql);
    
    if(mysqli_num_rows($result) == 0)
    {
        // [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
        echo '{"status":"error","msg":"该用户不存在!"}';
        // echo "123";
    }else{
      $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
       $_username = $data[0]["username"];
       $_phone = $data[0]["phone"];
      $_password = $data[0]["password"];
     
      if($_password != $password)
      {
        // 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
          echo '{"status":"error","msg":"对不起，您的密码不正确！"}';
      }else{
        // 如果密码正确，那么就返回登录成功。
        echo'{"status":"success","msg":"登录成功！！！","username":"'.$_username.'","phone":"'.$_phone.'"}';
        
      }
    }
    
?>