<template>
    <div>
        <div class="footer">
	      	<ul>
				<!-- <li class="active"><a href="index.html"><p><i class="icons">&#xe66b;</i></p><h4>首页</h4></a></li> -->
				<!-- <li><a href="pm.html"><p><i class="icons">&#xe68f;</i></p><h4>排行</h4></a></li> -->
				<!-- <li><a href="help.html"><p><i class="icons">&#xe608;</i></p><h4>客服</h4></a></li> -->
				<!-- <li><a href="my.html"><p><i class="icons">&#xe607;</i></p><h4>我的</h4></a></li> -->

                <router-link to="/home" tag="li" active-class="active" ><a href="javascript:;"><p><i class="icons">&#xe66b;</i></p><h4>首页</h4></a></router-link>
                <router-link to="/Rankhome" tag="li" active-class="active" ><a href="javascript:;"><p><i class="icons">&#xe68f;</i></p><h4>排行</h4></a></router-link>
                <router-link to="/MyHome" tag="li" active-class="active" ><a href="javascript:;"><p><i class="icons">&#xe608;</i></p><h4>客服</h4></a></router-link>
                <router-link to="/Servershome" tag="li" active-class="active" ><a href="javascript:;"><p><i class="icons">&#xe607;</i></p><h4>我的</h4></a></router-link>
			</ul>
       </div>
    </div>
</template>

<style>
    /*footer*/
    .footer{position:fixed;bottom:0;left:0;width:100%;height:60px;box-shadow:0 -1px 3px 0 rgba(0,0,0,.2);background:#fff;z-index:88}
    .footer ul li{width:25%;float:left;text-align:center;color:#333;font-size:12px}
    .footer ul a{display:block;height:50px;padding-top:6px}
    .footer ul h4{height:20px;line-height:20px}
    .footer ul p{height:30px;line-height:30px;text-align:center}
    .footer ul i{font-size:24px;color:#666;margin:0}
    .footer ul li.active h4,.footer ul li.active i{color:#be3233}
    .footer>a{display:block;width:80%;height:40px;line-height:40px;background:#be3233;color:white;font-size:12px;text-align:center;margin:10px auto;border-radius:3px}


    .foot_l{width:130px;float:left;height:60px;line-height:60px;padding:0 5px}
    .foot_r{width:calc(100% - 140px);float:right;height:60px;text-align:right;overflow:hidden}
    .foot_r a{display:inline-block;width:80px;height:40px;line-height:40px;margin-top:10px;border-radius:5px;margin-right:10px;text-align:center;color:white}
    a.jrgwc{background:orangered}
    a.ljgm{background:#be3233}
</style>

