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
  mounted() {
    axios
      .get("http://localhost:8000/api/post", {})
      .then(res => {
        this.post_list = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  },
  components: { listcard, page }
};
</script>
