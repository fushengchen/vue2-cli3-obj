<template>
    <div>
        <ul class="bang_tab">
            <li class="active"><a href="javascript:;">日榜</a></li>	
            <li><a href="javascript:;">周榜</a></li>	
            <li><a href="javascript:;">月榜</a></li>		
		</ul>
    </div>
</template>

<style>
.bang_tab{position:fixed;left:0;top:0;width:100%;height:44px;line-height:44px;z-index:88;background:white;box-shadow:0 1px 3px 0 rgba(0,0,0,.1);display:flex}
.bang_tab li{flex:1}
.bang_tab li a{display:block;width:80%;margin:0 auto;height:42px;line-height:42px;text-align:center;color:#666;border-bottom:2px solid transparent}
.bang_tab li.active a{color:#be3233;border-color:#be3233}    
</style>

