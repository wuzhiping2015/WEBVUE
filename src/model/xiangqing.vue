<template lang="html">
	<div style="width: 750px; margin: 0px auto ;">
		<HEAD></HEAD>
<h1 style="border:1px solid blue;">
    {{this.$store.state.count}}
    状态管理:<BR/>
      {{this.$store.state.istabbbar}}
  </h1>

		<h1>{{appid}}</h1>
		<img :src="src1" alt="" />
		<img src="@/assets/11.gif" style="display: block;width: 40px;	margin: 0 auto;" />
		
		<p class="site-title">树懒果园 泰国进口大金煌芒果</p>
	 
		<div style="border:1px solid red; padding:10px;"> 
				<h1>{{getdata.title}}</h1>
				<h1>{{getdata.price}}</h1>
				<h1><img :src="getdata.img" alt="" /></h1>
		</div>

		<ul>
			<router-link to="xiangqingpage" tag="li">
				<h2 class="site-cont">点击我 跳出子级菜单</h2>
			</router-link>

      	<router-link to="xq1" tag="li">
				<h2 class="site-cont">点击我 跳出子级菜单</h2>
			</router-link>
      	<router-link to="xq2" tag="li">
				<h2 class="site-cont">点击我 跳出子级菜单</h2>
			</router-link>

		</ul>
		<div>
			<router-view></router-view>
		</div>
 

	<!-- 	<FOOT  v-show="$store.state.istabbbar"></FOOT> -->
   
  <h1 v-html="waibu"></h1>
    	<FOOT  v-show="isshow"></FOOT>
	</div>

</template>

<script>
import FOOT from "@/model/FOOT.vue";
import HEAD from "@/model/HEADxq.vue";

import { ceshiyige, ceshi1 } from "@/main";

let data = {
  src1: require("../assets/images/a.gif"),
  appid: "",
  getdata: "",
  waibu: ""
};
let app = {};
export default {
  props: ["price", "title", "img", "idaa"],
  data() {
    app = this;
    return data;
  },
  components: {
    FOOT,
    HEAD
  },
  mounted() {
    //console.log(this.$route.params.id,this.id);
    console.log(this.$route.params.idaa);
    console.log(`HTTP?FIME=${this.$route.params.idaa}$k=1222`);
    console.log(this.$route.params.idaa);
    this.appid = this.$route.params.idaa;

    let numbertype = this.$route.params.idaa;
    this.$http.get("http://localhost:3000/todos").then(
      function(res) {
        app.getdata = res.data[numbertype];
        console.log(app.getdata);
      },
      function() {
        console.log("请求失败处理");
      }
    );
    this.waibu = ceshiyige + ceshi1;
  },
  //控制tabar 显示隐藏
  beforeMount() {
    //  this.$store.state.istabbbar = true;
    this.$store.commit("hiddentabbar", false);
  },
  beforeDestroy() {
    // this.$store.state.istabbbar = false;
    this.$store.commit("showentabbar", true);
  },
  computed: {
    isshow() {
      return this.$store.state.istabbbar;
    }
  }
};
</script>

<style lang="css">
.detail {
  padding: 0.25rem;
  font-size: 12px;
}

.detail > img {
  display: block;
  width: 80%;
  margin: 0 auto 0.5rem;
}

.detail > p {
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: left;
  padding-bottom: 0.5rem;
}

.detail > p.site-title {
  color: #ff8000;
}

p.site-cont {
  color: #666;
  font-size: 0.9rem;
}

div.show {
  color: #f00;
  font-size: 0.9rem;
}
</style>
