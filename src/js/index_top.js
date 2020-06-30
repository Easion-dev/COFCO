(function data() {
    let data = `
    <div id="nav">
    <div class="nav_center">
        <div class="nav_left">
            <ul>
                <li>
                    <span class="iconfont icon-home"></span>
                    <span>当前城市：</span>
                    <span>广州↓</span>
                </li>
            </ul>
            <ul>
                <li>欢迎来我买网</li>
                <li><a href="javascript:void(0)"></a>登陆</li>
                <li><a href="javascript:void(0)"></a>注册</li>
            </ul>
        </div>
        <div class="nav_right">
            <ul class="nav_ul">
                <li class="nav_r_li">
                    我的账户↓
                    <ul class="zhanghu">
                        <li>代付订单</li>
                        <li>我的消息</li>
                        <li>代付订单</li>
                        <li>我的消息</li>
                        <li>代付订单</li>
                        <li>我的消息</li>
                        <li>代付订单</li>
                        <li>我的消息</li>
                    </ul>
                </li>
                <li>
                    <span class="iconfont icon-gouwucheman"></span>
                    <span>购物车<span>0</span>件</span>
                </li>
                <li class="t_item">|</li>
                <li>客户服务↓</li>
                <li class="t_item">|</li>
                <li>企业购</li>
                <li class="t_item">|</li>
                <li>
                    <img src="./img/ICBC.png" alt="">
                </li>
                <li>
                    <img src="./img/中信.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</div>
<div id="header">
    <div class="logo">
        <img src="./img/logo.png" alt="">
    </div>
    <div class="search_wrap">
        <div class="search_c">
            <div class="iconfont icon-sousuo"></div>
            <input type="text" class="top_search">
            <button class="top_btn">搜索</button>
        </div>
    </div>
    <div class="search_r">
        <a href="javascript:void(0)">高级搜索</a>
    </div>
    <div class="app">
        <a href="javascript:void(0)">
            <img src="./img/buy.jpg" alt="">
        </a>
    </div>
</div> 
    `;
    $("body").prepend(data)
})()