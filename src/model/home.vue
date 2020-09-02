<template lang="html">

	<div class="container">
		<HEAD></HEAD>

		<div class="content">

  <h1 style="border:1px solid blue;">
    {{this.$store.state.count}}
     {{this.$store.state.istabbbar}}
  </h1>
			<ul class="cont-ul">
		<!-- <list v-for="item in hobby3" :price="item.price" :title="item.title" :img="item.img"></list> -->

				<li class="goods-list" v-for="(item,i) in hobby3">
					<!-- <router-link to="/xiangqing" class="goods-list-link"> -->
				<div @click="xiangqing(i)" class="goods-list-link">
						<div class="goods-list-pic">{{i}}
							<img :src="item.img" alt="">
						</div>
						<div class="goods-list-desc">
							<p class="goods-list-name">{{ item.title }}11111111111111</p>
							<p class="goods-list-price">{{ item.price|dTofixed|dCurrency }}</p>
						</div>
					</div>
				</li> 
			</ul>


      <ul>
        <li v-for="(item,i) in cinemas" :key="item.cinemaId">
           {{item.address}}
        </li>
      </ul>
		</div>
		<FOOT></FOOT>
	</div>
</template>

<script>
import Vue from "vue";
import HEAD from "@/model/HEAD.vue";
import FOOT from "@/model/FOOT.vue";
import list from "@/model/list.vue";
import axios from "axios";

let app = {};
let data = {
  hobby3: [],
  cinemas: []
};

export default {
  name: "container",
  data() {
    app = this;
    return data;
  },
  components: {
    HEAD,
    FOOT,
    list
  },
  created() {
    /* this.$http.get('/api/goods').then((data) => {
				this.items = data.body.data;
			}) */
    this.$http.get("http://localhost:3000/todos").then(
      function(res) {
        app.hobby3 = res.data;
        console.log(app.hobby3);
      },
      function() {
        console.log("请求失败处理");
      }
    );
  },
  mounted() {
    /*   axios({
      url: "https://m.maizuo.com/gateway?cityId=350200&ticketFlag=1&k=9203865",
      headers: {
        " X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15982374471076112645947394","bc":"350200"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      console.log(res.data);
    }); */
    this.$http.get("http://localhost:3000/cinemas").then(
      function(res) {
        app.cinemas = res.data;
        console.log(res.data);
      },
      function() {
        console.log("请求失败处理");
      }
    );
  },
  methods: {
    xiangqing(id) {
      this.$router.push({
        name: "xiangqing",
        params: {
          idaa: id
        }
      });
    }
  },
  //控制tabar 显示隐藏
  beforeMount() {
    this.$store.state.istabbbar = false;
  },
  beforeDestroy() {
    this.$store.state.istabbbar = false;
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  margin: 0 auto;
}

.content {
  margin-bottom: 1.8rem;
}

.cont-ul {
  padding-top: 0.5rem;
  background-color: #ccc;
}

.cont-ul::after {
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}

.goods-list {
  width: 50%;
  float: left;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}

.goods-list:nth-of-type(odd) {
  border-right: 0.15rem solid #ccc;
}

.goods-list:nth-of-type(even) {
  border-left: 0.15rem solid #ccc;
}

.goods-list-link {
  display: block;
  padding: 0.5rem 0;
  margin: 0 0.3rem;
  text-align: center;
  background-color: #fff;
}

.goods-list:nth-of-type(even) .goods-list-link {
  margin-left: 0;
}

.goods-list:nth-of-type(odd) .goods-list-link {
  margin-right: 0;
}

.goods-list-pic {
  padding: 0.5rem;
}

.goods-list-pic > img {
  width: auto;
  height: 4rem;
}

.goods-list-desc {
  padding: 0 0.5rem;
}

.goods-list-desc:after {
  display: block;
  content: "";
  clear: both;
}

.goods-list-name,
.goods-list-price {
  width: 50%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: #333;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-list-price {
  color: #ff8000;
  float: right;
}
</style>
