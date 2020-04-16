<template>
	<div id="JD">

		<div class="box">

			<div class="box-body">
				<div class="form-group">
					<div class="col-sm-5">
						<input type="email" class="form-control" v-model="User" placeholder="Email">
					</div>
					<div class="col-sm-5">
						<input type="email" class="form-control" v-model="Status" placeholder="Password" @keyup.add2="setstudent">
					</div>

					<div class="col-sm-5"><label for="inputPassword3" class="col-sm-2 control-label">搜索</label>
						<input type="email" class="form-control" v-model="keywork" placeholder="搜索">
					</div>
					<div class="box-footer">
						<button type="submit" class="btn btn-default">取消</button>
						<button type="submit" class="btn btn-info pull-right" @click="setstudent">确定</button>
					</div>
				</div>
			</div>

			<div class="box-header">
				<h3 class="box-title">Responsive Hover Table</h3>
			</div>
			<!-- /.box-header -->
			<div class="box-body table-responsive no-padding">

				<table class="table table-hover">
					<tbody>
						<tr>
							<th>ID</th>
							<th>User</th>
							<th>Date</th>
							<th>Status</th>
							<th>Reason</th>
						</tr>

						<tr v-for="(v,i) in search(keywork)">
							<td>{{i}}</td>
							<td>{{v.User}}</td>
							<td>{{v.Date | dCurrency}}</td>
							<td>{{v.Status}}</td>
							<td> <button type="submit" class="btn btn-default" @click="delstatus(i)"> 删除</button></td>
						</tr>

					</tbody>
				</table>


			</div>
			<!-- /.box-body -->
		</div>



	</div>

</template>

<script>
	import Vue from "vue"

	var toast = new Vue({
		el: ''
	});

	Vue.directive("add2", function(el, add2) {
		console.log(el);
		console.log(add2);
	})



	let vm = {};
	let data = {


		keywork: "",

		User: "",
		Status: "",
		studetns: [{
				ID: 1,
				User: "小王",
				Date: "小王11",
				Status: "小王22",
				Reason: "小王33",
			},
			{
				ID: 2,
				User: "小王",
				Date: "小王11",
				Status: "小王22",
				Reason: "小王33",
			},
			{
				ID: 3,
				User: "小王",
				Date: "小王11",
				Status: "小王22",
				Reason: "小王33",
			},
			{
				ID: 4,
				User: "小王",
				Date: "小王11",
				Status: "小王22",
				Reason: "小王33",
			}
		]


	}
	export default {
		data() {

			vm = this;
			return data;



		},
		onLoad() {},
		methods: {
			setstudent() {
				this.studetns.push({
					User: this.User,
					Status: this.Status,
				});
				Vue.prototype.$message("添加成功");
				this.User = this.Status = "";
			},
			delstatus(i) {

				toast.$confirm("此操作将永久删除该数据，是否继续", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: '取消',
					type: "warning"
				}).then(() => {
					vm.studetns.splice(i, 1);
					/* toast.$notify({
						title: '成功',
						message: '删除成功',
						type: 'success',
						duration: 1000
					}); */
					this.$message.success("删除成功");
				});
			},
			search(key) {
				var newList = [];
				this.studetns.forEach(item => {
					if (item.User.indexOf(key) != -1) {
						newList.push(item);
					}
				});
				return newList
				/* 	 return  this.studetns.filter(item => {
						if (item.User.includes(key)) {
							return item
						}
					}) */
			}
		},
		computed: {

		},
		mounted() {},
		filters: {

		},
		watch: {

		}
	};
</script>


<style scoped>
	@import "../assets/css/AdminLTE.min.css";

	li {
		border: 1px dashed #999;
		margin: 5px;
		padding: 5px;
		line-height: 25px;
		font-size: 12px;
		width: 800px;
	}

	li:hover {
		background-color: hotpink;
		transition: all 0.8s ease;
	}

	.v-enter,
	.v-leave-to {
		/* .v-enter, .v-leave-to 设置的过渡样式
	    自动赋给transition 或 transitiongroup标签了 */
		opacity: 0;
		transform: translateY(80px);
	}

	.v-enter-active,
	.v-leave-active {
		/* .v-enter-active, .v-leave-active 设置的过渡样式
	    自动赋给transition 或 transitiongroup标签了 */
		transition: all 0.6s ease;
	}

	.v-move {
		transition: all 0.6s ease;
	}

	/* v-move 特性。会在元素的改变定位的过程中应用。
	       比如列表中有元素被删除,其他元素会上移
	       设置了v-move就会在这起作用. */

	.v-leave-active {
		position: absolute;
		/* 当元素设置了  absolute  后，默认就不是100%的宽度了，而是内容多宽就是多宽
	       所以要给li元素设置一下宽度. */
	}

	/* 用splice删除数组的元素，由于删除的元素经历了一个过渡，始终占据文档流的这个位置，
	  因此下一个元素要等待其过渡消失后再移动过来，造成一个生硬的效果。
	
	  要达到平滑过渡，就要在删除元素leave-active阶段,
	  用position:absolute 让删除的元素脱离文档流，后面的元素才能同时平滑过渡过来。
	 */
</style>
