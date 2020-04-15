<template>
	<div class="logo">
		<H1>es6</H1>

		<h2>ES6 调用方法传参：{{msg}}</h2>

		<h2>ES6 调用方法： {{msg1}}</h2>
		<h2>数组：{{array}}</h2>

		<button v-if="showbtn" @click="handleclick">click me</button>

		<ul>
			<li v-for="c in book">{{c.name}}</li>
		</ul>
		<h1>动画过度</h1>
		ID:<input type="text" v-model="id">
		NAME:<input type="text" v-model="name">
		<input type="button" value="添加" @click="add()">

		<!-- 通过 appear 特性设置节点的在初始渲染的过渡
	         也就是页面刚加载的时候，实现过渡动画 -->
		<transition-group tag="ul" appear>
			<li v-for="(item,i) in list" @click="del(i)" :key="item.id">
				<!-- v-for="(item,i) in list"  
	           del(i)   传参不传id，改成i    ??? 这个是什么用法-->
				{{item.id}} --- {{item.name}}
			</li>
		</transition-group>

	</div>
</template>

<script>
	function f() {
		let n = 5;
		if (true) {
			let n = 10;
		}
		console.log(n);
	}
	f();

	let s = "Hello world";
	s.startsWith("Hello");
	s.includes("o");

	function example() {
		return [1, 2, 3];
	}
	let [a, b, c] = example();

	console.log(example());

	function authorize(user, action) {
		if (!user.hasPrivilege(action)) {
			throw new Error(

			)
		}
	}

	window.a = 1;
	a = 2;
	window.a;

	var constantize = obj => {
		Object.freeze(obj);
		Object.keys(obj).forEach((key, i) => {
			if (typeof obj[key] === "object") {
				constantize(obj[key]);
			}
		});
	};

	//ES6 对象
	let vm = {};

	let data = {
		argum: cbd, //引用方法
		msg: "测试",
		qq: "",
		username: "测试名",
		age: "122",
		showbtn: true,
		msg1: "",
		array: "",
		book: [{
				name: "<<Javascript 高级程序设计>>"
			},
			{
				name: "<javascript 语言精粹>"
			},
			{
				name: "javascript 经典"
			}
		],
		id: '',
		name: '',
		list: [{
				id: 1,
				name: '赵高'
			}, // list里用到的id name 等，要先定义在data
			{
				id: 2,
				name: '秦桧'
			},
			{
				id: 3,
				name: '严嵩'
			},
			{
				id: 4,
				name: '魏忠贤'
			}
		]
	};

	/* class Calc {
	  constructor() {
	    console.log("calc constructor");
	    console.log(vm);
	  }
	  add(a, b) {
	    return a + b;
	  }
	}

	var c = new Calc();
	c.constructor();

	console.log(c.add(1, 2)); */

	const pi = 12222.22;
	console.log(pi);

	const person = {
		username: "小暖",
		age: 18,
		sayhello: () => {
			setInterval(() => {
				console.log("我叫 -" + vm.username + "-我今年-" + vm.age + "-岁");
			}, 5000);
		}
	};
	person.sayhello();

	class cale {
		constructor() {
			console.log("calc constructor");
		}
		add(a, b) {
			return a + b;
		}
		add1() {
			return 1 + 3 + "aaaaaa";
		}
	}
	var cbd = new cale();

	export default {
		name: "logo",
		data() {
			vm = this;
			return data;
		},

		components: {
			// App,
		},
		beforeCreate() {
			/* console.log("创建前：");
			   console.log(this.$data); */
		},
		created() {
			// console.log("创建后");
		},
		beforeMount() {
			/* console.log("挂载前：");
			   console.log(this.$data); */
		},
		mounted() {
			/* console.log("载入后");*/
			$("body").resize();
			/* 
			this.msg = this.$data.argum.add(2, 4);
			this.msg1 = this.$data.argum.add1(); */

			console.log(this.$data);

			let c = [];
			let c1 = [];

			for (let i = 0; i < 10; i++) {
				c.push(i);
				c1[i] = function() {
					console.log(i);
				};
			}

			this.array = c;

			c1[6]();

			function bar(x = 3, y = x) {
				//  return [x,y];
				console.log([x, y] + "---88888");
			}

			bar();

			const foo = Object.freeze({});

			() => console.log(111);
		},
		beforeUpdate() {
			/*console.log('更新前');
			 console.log(this.$data); */
		},
		updated() {
			console.log("==更新后==");
		},
		beforeDestory() {
			console.log("销毁前：");
		},
		destoryed() {
			console.log("销毁后：");
		},
		//事件
		methods: {
			handleclick() {
				alert(this.$data.showbtn);
			},
			add(el) {
				this.list.push({
					id: this.id,
					name: this.name
				});
				this.id = this.name = '';
			},
			del(i) {
				this.list.splice(i, 1); // i 的用法？？
			},
		},
		//我是一个过滤器
		filters: {},
		//我是监听器
		computed: {},
		//它可以用来监测Vue实例上的数据变动
		watch: {},



	};
</script>

<style scoped>
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
