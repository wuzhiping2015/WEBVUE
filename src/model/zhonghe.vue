<template lang="html">
	<div class="container">
	 
	</div>
</template>

<script>
import Vue from "vue";
import HEAD from "@/model/HEAD.vue";
import FOOT from "@/model/FOOT.vue";
import list from "@/model/list.vue";

let app = {};
let data = {
  hobby3: []
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

  beforeMount() {
    fetch("topology_alarm.json")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(1111111111111111);
        console.log(res);
      })
      .catch(err => {});
  },
  mounted() {
    /*  fetch("topology_alarm.json").then(res => {
       console.log(res);
      })
      .then(res => {
        console.log(1111111111111111);
        console.log(res);
      })
	  .catch(err => {}); */

    this.$http.get("topology_alarm.json")
      .then(res => {
        console.log(res);
      })
      .then(res => {
        console.log(res);
      });
    console.log(111111111);
  },

  created() {
    /* fetch("elog_file.log")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(44444444444444444);
        console.log(res);
      })
      .catch(err => {}); */
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
