<template>
    <div>
    <!-- 目次部分 -->
    <div class="card toc-pad">
      <div class="text-center font-weight-bold h4">目次</div>
      <div id="toc"></div>
    </div>

    <div class="card">
        <div class="card-header" v-bind:class="this.$store.getters.bgcolor">
          <h1 class="card-title text-white">{{ post.title }}</h1>
        </div>
        <div class="card-body">
          <span class="badge badge-pill" v-bind:class="this.$store.getters.badgecolor" >{{ post.days_since_joined }}</span>
          <span class="badge badge-pill" v-bind:class="this.$store.getters.badgecolor" >{{ getCreatedAtStr }}</span>

          <br>
          <span class="badge" v-bind:class="this.$store.getters.badgecolor">
            <a class="text-white" href="#">{{ this.category.name }}</a>
          </span>
          <br>
          <div class='tag-blox' v-for="item in post.tag" v-bind:key="item">
            <span class="badge" v-bind:class="getBadgeColor">
              <a class="text-white" v-bind:href="item">{{ item }}</a>
            </span>
          </div>
          <br>
          <hr>
          <article class="markdown-body">
              <!-- 記事詳細部分 -->
              <vuemarkdown :source="post.text" :toc="toc" toc-id="toc" toc-anchor-link-symbol=">"></vuemarkdown>
          </article>
        </div>
        <div class="card-footer">
          <p>添付ファイル</p>
          <div v-for="file in file_list" v-bind:key=" file.id">
            <a v-bind:href="file.src">{{ file.title }} - {{ file.name }}</a><br>
          </div>
        </div>        
        
    </div>

    <div id="comment-area">
      <detailcomment v-bind:comments="post.comments"></detailcomment>
    </div>

    <div class="text-center my-5">
      <!-- コメント一覧 -->
      <a href="#" rel="nofollow" class="btn btn-lg text-white" v-bind:class="this.$store.getters.bgcolor" >コメントページへ</a>
    </div>
</div>
</template>

<script>
import listcard from './ListCard.vue';
import page from './Page.vue';
import axios from 'axios';
import detailcomment from './DetailComment.vue';
import vuemarkdown from 'vue-markdown'

export default {
  name: 'taglist',
  props: { id: Number },
  data () {
    return {
      post: {},
      category: {},
      toc:true,
      file_list:[],
    }
  },
  computed: {
    getBadgeColor:function(){
      return this.$store.getters.badgecolor;
    },
    getCreatedAtStr:function(){
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth()+1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d  + "日";
      return result;
    },
  },
  methods:{
    getfile:function(id_list){
      id_list.forEach(id => {
        axios.get('http://localhost:8000/api/file/' + id, {} )
          .then((res)=>{
            var data = res.data;
            var src = res.data.src;
            data.name = src.split('/').pop();
            this.file_list.push(data);
        });        
      });
    }
  },
  mounted () {
    axios
      .get('http://' + this.$store.getters.domain + '/api/post/' + this.$route.params.id, {} )
      .then((res)=>{
        this.post = res.data;
        this.category = res.data.category;
        this.$store.commit('setListTitle', "/ 一覧 / " + this.category.name + "/" + res.data.title );
        this.getfile(this.post.files)
      }).catch((res)=>{
        console.log(res);
      });
  },
  components: { listcard, page, vuemarkdown, detailcomment },
}
</script>

<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 25px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 10px;
		}
	}

  .tag-blox {
    padding:0.5px;
    float: left;
  }

  .toc-pad {    
    padding:10px;
  }

</style>
