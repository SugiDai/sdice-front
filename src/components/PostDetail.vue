<template>
    <div>
    <!-- 目次部分 -->
    <div class="text-center font-weight-bold h4">目次</div>
    <div id="toc"></div>

    <div class="card">
        <div class="card-header" v-bind:class="getBgColor">
          <h1 class="card-title text-white">{{ post.title }}</h1>
        </div>
        <div class="card-body">
            <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ post.days_since_joined }}</span>
            <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ getCreatedAtStr }}</span>

            <br>
            <span class="badge" v-bind:class="getBadgeColor">
              <a class="text-white" href="#">{{ this.category.name }}</a>
            </span>


            <hr>
            <article class="markdown-body">
                <!-- 記事詳細部分 -->
                <vuemarkdown :source="post.text" :toc="toc" toc-id="toc" toc-anchor-link-symbol=">"></vuemarkdown>
            </article>

        </div>
    </div>

    <div id="comment-area">
    <!-- コメント一覧 -->
    </div>

    <div class="text-center my-5">
      <!-- コメント一覧 -->
      <a href="#" rel="nofollow" class="btn btn-lg text-white" v-bind:class="getBgColor" >コメントページへ</a>
    </div>
</div>
</template>

<script>
import listcard from './ListCard.vue';
import page from './Page.vue';
import axios from 'axios';
import vuemarkdown from 'vue-markdown'

export default {
  name: 'taglist',
  props: { id: Number },
  data () {
    return {
      post: {},
      category: {},
      toc:true
    }
  },
  computed: {

    getCreatedAtStr:function(){
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth()+1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d  + "日";
      return result;
    },
    getBadgeColor () {
      return "badge-" + this.$store.getters.sitecolor
    },
    getBgColor () {
      return "bg-" + this.$store.getters.sitecolor
    },
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/post/' + this.$route.params.id, {} )
      .then((res)=>{
        this.post = res.data;
        this.category = res.data.category;
        this.$store.commit('setListTitle', "/ 一覧 / " + this.category.name + "/" + res.data.title );
      })
      .catch((res)=>{
        console.log(res);
      });
  },
  components: { listcard, page, vuemarkdown },
}
</script>

<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
