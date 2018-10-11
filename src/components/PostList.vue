<template>
  <div class="item-container" v-bind:scroll="infiniteScroll" >
    <div v-for="post in post_list" v-bind:key="post.id">
      <article>
        <listcard v-bind:post="post"/>
      </article>
      <page />
    </div>
  </div>
</template>

<script>
import listcard from "./ListCard.vue";
import page from "./Page.vue";
import axios from "axios";

function api(url, page, keyword) {
  const params = { params: { page: page, keyword: keyword } };
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
  data() {
    return {
      apiurl: "",
      page: 1,
      keyword: "",
      post_list: [],
      max_flg: false
    };
  },
  created() {
    window.addEventListener("scroll", this.infiniteScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.infiniteScroll);
  },

  methods: {
    async fetch() {
      this.apiurl = "http://" + this.$store.getters.domain + "/api/post/";
      const items = await api(this.apiurl, this.page, this.keyword);
      if (items.length == 0) {
        this.max_flg = true;
      }
      this.post_list.push(...items);
      this.page++;
    },
    infiniteScroll(event) {
      // スクロールされたピクセル数
      var scroll = window.scrollY;
      // 一番下のコンテンツの高さ
      var content_height = window.document.documentElement.clientHeight;
      // 下部の位置
      var content_max = window.document.documentElement.scrollHeight;

      if (scroll + content_height >= content_max && !this.max_flg) {
        this.fetch();
      }
    },
    feachItems(keyword) {
      this.$store.commit("setListTitle", "/ 一覧 / " + keyword);
      this.page = 1;
      this.post_list = [];
      this.keyword = keyword;
      this.fetch();
    }
  },
  watch: {
    "$route.query.keyword"() {
      this.feachItems(this.$route.query.keyword);
    }
  },
  mounted() {
    this.feachItems(this.$route.query.keyword);
  },
  components: { listcard, page }
};
</script>
