<template>
	<!-- default：默认状态
	get： 采纳状态：
	cancel： 作废状态 -->
	<section class="settle-item cancel">
		<div class="title">
			<div class="time">2019-02(v6) {{item.status}}</div>
			<div class="result">结算报告</div>

		</div>
		<div class="total">
			<div class="notice">结算金额汇总</div>
			<div class="num">￥2323456324.54</div>
		</div>
		<ul class="item-con">
			<li>
				<label>商户数：</label>
				<span>231家</span>
			</li>
			<li>
				<label>SKU数：</label>
				<span>4520个</span>
			</li>
			<li>
				<label>销售数量汇总：</label>
				<span>345231件</span>
			</li>
			<li>
				<label>销售金额汇总：</label>
				<span>￥345324.56</span>
			</li>
			<li>
				<label>优惠金额汇总：</label>
				<span>￥43234.87</span>
			</li>
		</ul>
		<ul class="item-con profix">
			<li>
				<label>报告状态：</label>
				<span class="status">已采纳</span>
			</li>
			<li>
				<label>生成时间：</label>
				<span>2019-03-13  12:43:34</span>
			</li>
			<li>
				<label>采纳时间：</label>
				<span>2019-03-14  09:43:34</span>
			</li>
			<li>
				<label>采纳人：</label>
				<span>张磊</span>
			</li>
			<li>
				<label>作废时间：</label>
				<span>— —</span>
			</li>
			<li>
				<label>备注：</label>
				<span>这里显示备注，可以支持折行，字数不受
         限制，穷尽展示。</span>
			</li>
		</ul>
		<div class="btns">
			<el-button>删除</el-button>
			<el-button>下载</el-button>
			<el-button @click="clickFn" class="get">采纳</el-button>
		</div>
	</section>
</template>

<script>
    export default {
		props:['item', 'index'],
		methods: {
			clickFn() {
				this.$emit('clickFn', this.item, this.index)
			}
		}
        
    }
</script>

<style scoped lang="scss">
.settle-item {
	// transition: 1s all;
	// flex: 0 0 290px;
	float: left;
	box-shadow: 0 0 8px 0 rgba(0,0,0,0.05);
	border-radius: 6px;
	background: #fff;
	box-sizing: border-box;
	padding: 0 10px 16px;
	width: 290px;
	margin: 0 20px 20px 0;
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 38px;
		border-bottom: 1px dashed #e3e3e3;
		margin-bottom: 10px;
		.time {
			color: #333;
			font-size: 16px;
		}
		.result {
			color: #666666;
			font-size: 12px;
		}
	}
	.total {
		background: #E8E8E8;
		color: #333;
		border-radius: 4px;
		height: 60px;
		display: flex;
		box-sizing: border-box;
		padding-left: 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10px;
		.notice {
			font-size: 12px;
		}
		.num {
			font-size: 18px;
		}
	}
	.item-con {
		padding-bottom: 20px;
		border-bottom: 1px dashed #e3e3e3;
		margin-bottom: 20px;
		li{
			display: flex;
			font-size: 12px;
			line-height: 22px;
			box-sizing: border-box;
			padding-left: 10px;
			&:nth-child(odd){
				background: #F8F8F8;
			}
			label {
				color: #666;
				flex: 0 0 auto;
			}
			span {
				color: #151515;
				.status {
					color: #FF6B00;
				}
			}
		}
	}
	.profix {
		li{
			&:last-child {
				margin-bottom: 10px;
			}
		}
		margin-bottom: 15px;
	}
	.btns {
		display: flex;
		justify-content: center;
	}

}
.get {
	.title{
		.result {
			color: #FF6B00;
		}
	}
	.total {
		background: #FF6B00;
		color: #fff;
	} 
}
.cancel {
	background: #F8F8F8;
	border: 1px solid #E3E3E3;
	box-shadow: 0 0 0 0 rgba(0,0,0,0);
	.total {
		background: #e8e8e8;
		color: #999;
	} 
	.item-con {
		li{
			&:nth-child(odd){
				background: #f3f3f3;
			}
			label {
				color: #999;
			}
			span {
				color: #999;
			}
		}
	}

}

</style>