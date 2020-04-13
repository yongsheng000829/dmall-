<template>
	<div class="my">
		<div class="nick-top">
			<div>
				<p>我的昵称</p>
				<p @click="backlogin">17610386712->退出登录</p>
			</div>
			<div class="headImg">
                <img src="../../../static/imgs/u=3897898894,3176354562&fm=11&gp=0.jpg" alt="">
			</div>
		</div>
		<div class="nick-bottom"></div>
		<div class="order">
			<div class="all-order">
				<b>我的订单</b>
				<span>
					查看全部
					<i class="iconfont icon-xiangyou"></i>
				</span>
			</div>
			<div class="every-order">
				<div v-for="(val,i) in orderList" :key="i">
					<span :class="'iconfont icon-'+val.icon"></span>
					<span>{{val.title}}</span>
				</div>
			</div>
		</div>
		<div class="other">
			<p v-for="(val,i) in otherList" :key="i">
				<span :class="'iconfont icon-'+val.icon"></span>
				<span>{{val.title}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [
					{
						title: "待付款",
						icon: "daifukuan"
					},
					{
						title: "待配送",
						icon: "daipeisong"
					},
					{
						title: "已发货",
						icon: "yifahuo"
					},
					{
						title: "退款/售后",
						icon: "tuikuan"
					}
				],
				otherList: [
					{
						title: "我的优惠券",
						icon: "youhuijuan"
					},
					{
						title: "资质规则",
						icon: "fuwuguize"
					},
					{
						title: "联系客服",
						icon: "kefu"
					}
				]
			};
		},
		methods:{
			backlogin(){
			    window.localStorage.clear("uid")
				this.$router.push("/login")
			}
		}

	};
</script>

<style lang="scss" scoped>
	.my {
		position: relative;
		width: 100%;
		height: 100%;
		background: #f1f1f1;
		font-size: 14px;
        overflow: auto;
		.nick-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 110px;
			background: #fe3113;
			padding: 0 15px;
			box-sizing: border-box;
			color: #fff;
			div:first-child {
				p {
                    margin: 5px 0;
				}
				p:first-child {
					font-size: 18px;
					font-weight: bold;
                }
 				p:last-child {
					font-size: 12px;
				}               
			}
            .headImg{
                width: 50px;
                height: 50px;
                line-height: 45px;
                text-align: center;
                background: #fff;
                color: #000;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
            }
		}
		.nick-bottom {
			width: 100%;
			height: 20px;
			background: #fe3113;
		}
		.order {
			position: absolute;
			top: 110px;
			left: 50%;
			transform: translateX(-50%);
			width: 90%;
			height: 140px;
			border-radius: 5px;
			background: #fff;
			.all-order {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 60px;
				padding: 0 10px;
				box-sizing: border-box;
				span {
					color: #a6a6a6;
				}
			}
			.every-order {
				display: flex;
				width: 100%;
				height: 90px;
				div {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					width: 25%;
					height: 100%;
					.iconfont {
						font-size: 30px;
						color: #ff1400;
					}
				}
			}
		}
		.other {
			position: absolute;
			top: 280px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 90%;
			height: 130px;
			border-radius: 5px;
			background: #fff;
			p {
				padding: 0 15px;
				box-sizing: border-box;
                span{
                    margin-right: 10px;
                }
			}
		}
	}
</style>