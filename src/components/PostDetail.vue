<template>
<transition name="pcard">
  <div>
    <div class="card toc-pad">
      <div class="text-center font-weight-bold h4">目次</div>
      <div id="toc"></div>
    </div>
    <div class="card">
      <div class="card-header" v-bind:class="this.$store.getters.bgcolor">
        <h4 class="card-title text-white">{{ post.title }}</h4>
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
            <vuemarkdown :source="post.text" :toc="toc" toc-id="toc" toc-anchor-link-symbol=""></vuemarkdown>
        </article>
      </div>
      <div class="card-footer">
        <p>添付ファイル</p>
        <div v-for="file in file_list" v-bind:key=" file.id">
          <a v-bind:href="file.src" v-bind:download="file.name">{{ file.title }} - {{ file.name }}</a><br>
        </div>
      </div>        
    </div>
    <div id="comment-area">
      <detailcomment v-bind:comments="post.comments"></detailcomment>
    </div>
    <div class="text-center my-5" v-show="post.comments.length <= 10">
      <router-link :to="{ name:'commentform', params:{ 'id':post.pk }}" class="btn btn-lg text-white" v-bind:class="this.$store.getters.bgcolor" >コメントページへ</router-link>
    </div>
</div>
</transition>
</template>

<script>
import listcard from "./ListCard.vue";
import page from "./Page.vue";
import axios from "axios";
import detailcomment from "./DetailComment.vue";
import vuemarkdown from "vue-markdown";

function api(url) {
  const params = {};
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(res => {
        reject(res.data);
      });
  });
}

export default {
  name: "taglist",
  props: { id: Number },
  data() {
    return {
      commentform: [],
      post: {},
      category: {},
      toc: true,
      file_list: []
    };
  },
  computed: {
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    },
    getCreatedAtStr: function() {
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth() + 1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d + "日";
      return result;
    }
  },
  methods: {
    getfile: function(id_list) {
      id_list.forEach(id => {
        axios
          .get(process.env.API_END_POINT + "/file/" + id, {})
          .then(res => {
            var data = res.data;
            data.name = res.data.src.split("/").pop();
            this.file_list.push(data);
          });
      });
    },
    async fetch(id) {
      var url = process.env.API_END_POINT + "/post/" + id;
      this.post = await api(url);
      this.category = this.post.category;
      this.$store.commit(
        "setListTitle",
        "/ 一覧 / " + this.category.name + "/" + this.post.title
      );
      this.getfile(this.post.files);
    }
  },
  watch: {
    "$route.params.id"() {
      this.fetch(this.$route.params.id);
    }
  },
  mounted() {
    this.fetch(this.$route.params.id);
  },
  components: { listcard, page, vuemarkdown, detailcomment }
};
</script>

<style>
.card-body h4 {
  font-size: 100%;
  text-align: left;
  padding: 0.25em 0.5em;
  background: transparent;
}

.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4 {
  text-align: left;
  padding: 0.25em 0.5em;
  color: #666;
  background: transparent;
  border-left: solid 5px #7db4e6;
}

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
  padding: 0.5px;
  float: left;
}

.toc-pad {
  padding: 10px;
}

.pcard-enter-active,
.pcard-leave-active {
  transition: opacity 1s;
}

.pcard-enter,
.pcard-leave-to {
  opacity: 0;
}

</style>
