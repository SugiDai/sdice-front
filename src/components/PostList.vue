<template>
<div>
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

export default {
  name: "taglist",
  data() {
    return {
      post_list: []
    };
  },
  methods: {
    feachItems(keyword){
      const params = {params: { keyword : keyword }};
      axios
        .get('http://' + this.$store.getters.domain + '/api/post/', params )
        .then((res)=>{
          this.post_list = res.data;
          console.log(this.post_list);
          // this.$store.commit('setListTitle', "/ 一覧 / " + this.category.name + "/" + res.data.title );
        }).catch((res)=>{
          console.log(res);
        });
    }
  },
  watch: {
      '$route.query.keyword' () {
          this.feachItems(this.$route.query.keyword);
      }
  },
  mounted() {
    this.feachItems(this.$route.query.keyword);
  },
  components: { listcard, page }
};
</script>
