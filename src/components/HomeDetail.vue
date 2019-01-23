<template>
    <div>
        <!--虚拟商品-->	
		<div class="ztmc">
			<h2><i class="icons">&#xe628;</i>虚拟商品</h2>
			<ul class="ztmc_list">
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic1.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic2.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic3.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic4.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				</ul>
		</div>
		
		
		<!--实物商品-->	
		<div class="ztmc">
			<h2><i class="icons">&#xe628;</i>实物商品</h2>
			<ul class="ztmc_list">
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic1.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic2.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic3.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				<li>
					<a href="javacsript:;"><div class="img"><img src="../assets/img/pic4.png"/></div></a>
					<div class="prolist_info">
						<h4>小米笔记本MIX8核i72G独显</h4>
						<p class="grey">原价:￥<span>18.00</span></p>
						<p class="red">抢购价:￥<span>15.00</span></p>
						<div class="add"><a href="javacsript:;">立即抢购</a></div>
					</div>
				</li>
				</ul>
		</div>
		<!-- {{msg}} -->
    </div>
</template>

<style>
/*主题卖场*/
.ztmc{overflow:hidden;background:white;margin-top:10px}
.ztmc h2{font-size:16px;height:42px;line-height:42px;color:#333;text-indent:10px;box-shadow:0 -1px 0 0 #ddd inset;position:relative}
.ztmc h2 a{text-indent:0;display:block;position:absolute;right:10px;top:8px;width:30px;height:30px;line-height:30px;text-align:center;color:#999;background:#f2f2f2;border-radius:50%}
.ztmc h2 a i{margin:0}
.ztmc_list li{width:50%;padding:1px;box-sizing:border-box;float:left;box-shadow:1px 1px 0 0 #eee;text-align:left;position:relative}
.ztmc_list li div.img{text-align:center;overflow:hidden;height:180px;box-sizing:border-box;background:#f6f6f6;padding:5px}
.ztmc_list li div.img img{max-width:100%;height:170px}
.prolist_info{background:#fff;padding:5px;padding-top:0;overflow:hidden}
.ztmc_list li h4{font-size:14px;color:#333;margin:10px auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.ztmc_list li p.red{font-size:14px;height:20px;line-height:20px;color:#ea4e00!important}
.ztmc_list li p.grey{font-size:14px;height:20px;line-height:20px;color:#ccc;text-decoration:line-through;}
.ztmc_list li div.add{display:block;padding:5px;height:40px;}
.ztmc_list li div.add a{display:block;width:88%;margin:4px auto;text-align:center;height:32px;line-height:32px;border:1px solid #c52600;color:#c52600;border-radius:5px}
.ztmc_list li div.add a i{color:#c52600;font-size:20px!important}


</style>

<script>
// export default {

// 	date(){return {msg:'homedetail'}},

// 	beforeCreate(){console.log('-------beforeCreate')},
//     created(){console.log('-------created')},
//     beforeMount(){console.log('-------beforeMount')},
//     mounted(){console.log('-------mounted')},
//     beforeUpdate(){console.log('-------beforeUpdate')},
//     updated(){console.log('-------updated')},
// }
</script>

