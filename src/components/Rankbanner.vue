<template>
    <div>
        <ul class="top_bang">
            <li>
            <div class="img"><img src="../assets/img/pic1.png"/></div>
            <h2>清风徐来</h2>
            <p>已获胜<span>452</span>单</p>
            </li>
            <li>
                <div class="img"><img src="../assets/img/pic1.png"/></div>
                <h2>清风徐来</h2>
                <p>已获胜<span>392</span>单</p>
            </li>
            <li>
                <div class="img"><img src="../assets/img/pic1.png"/></div>
                <h2>清风徐来</h2>
                <p>已获胜<span>352</span>单</p>
            </li>
        </ul>
    </div>
</template>

<style>
    .top_bang{height:120px;padding:20px 0;overflow:hidden;background:linear-gradient(to bottom right,#be3233 30%,#9e1819);background-color:#be3233;}
    .top_bang li{width:33.33%;height:120px;float:left;text-align:center;position:relative}
    .top_bang li .img{height:70px;text-align:center;position:relative;margin-bottom:6px}
    .top_bang li .img img{box-shadow:0 3px 3px 0 rgba(0,0,0,.2);border-radius:50%;width:70px;height:70px;text-align:center;position:relative}
    .top_bang h2,.top_bang p{height:22px;line-height:22px;text-align:center;color:white;font-size:14px}
    .top_bang p{color:rgba(255,255,255,.6)}
    .top_bang p span{color:#fff} 
</style>