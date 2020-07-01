$(function () {
    let codec = "";
    let captcha2 = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 6, //线条数量
        dotR: 2, //点的半径
        dotNum: 10, //点的数量
        preGroundColor: [100, 180], //前景色区间
        backGroundColor: [1500, 2500], //背景色区间
        fontSize: 100, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'fill', //字体绘制方法，有fill和stroke
        content: 'abcdefghijklmnopqrstuvw', //验证码内容
        length: 4 //验证码长度
    }); // 传值
    captcha2.draw(document.querySelector('#captcha2'), r => {
        console.log(r, '验证码2');
        codec = r;
    });
    let check = {
        "username": {
            reg: `/^[a-zA-Z]{2,6}$/.test(val)`,
            msg: "×"
        },
        "phone": {
            reg: `/^1[2-9]\\d{3,9}$/.test(val)`,
            msg: "×"
        },
        "password1": {
            reg: `/^[a-zA-Z0-9]{3,6}$/.test(val)`,
            msg: "×"
        },
        "password2": {
            reg: `$.trim($("#password1").val()) === val`,
            msg: "×"
        },
        "code": {
            reg: "val == codec ",
            msg: "×"
        }
    }
    $("#code").trigger("blur")

    $(".mc_content .mc_cc input").blur(function () {
        let check_id = this.id;
        let val = $.trim($(this).val());

        if (eval(check[check_id].reg)) {
            $(this).next().text("√")
        } else {
            $(this).next().text("×")

        }
    })
    $(".yan_cc input").blur(function () {
        let val = $.trim($(this).val());
        if (eval(check["code"].reg)) {
            $(this).next().text("√")
        } else {
            $(this).next().text("×")
        }
    })
    $("#btn").click(function () {

        // console.log($(".mc_cc").children("span"));
        $("#username,#phone,#password1,#password2,#code").trigger("blur");

        // $.each($(".mc_cc").children("span")
        // console.log($(".mc_cc span"));
        let arr_check;
        let arr_c=document.querySelectorAll(".mc_cc span");
        // console.log(arr_c);
        for(let key in arr_c){
            if(arr_c[key].innerText =="×"){
                arr_check = "×";
            }   

        }
        

        
        if (arr_check == "×" || $(".yan_cc span").text() == "×") {
            alert("注册信息依然有错请重新输入")
            return
        }
        if (!($("#checkBox").is(":checked"))) {
            alert("勾选并阅读协议")
            return
        }
        // console.log("sss");
        let data = {
            username: $.trim($("#username").val()),
            phone: $.trim($("#phone").val()),
            password: $.trim($("#password1").val()).slice(0, 15)
        }
        console.log(data);

        $.ajax({
            type:"post",
            url: "./php/register.php",
            data,
            dataType: "json"
        }).done(data => {
            if (data.status == "success") {
                alert("注册成功")
                location.href="./login.html"

            } else {
                alert(data.msg);

            }
        })


    })
})


