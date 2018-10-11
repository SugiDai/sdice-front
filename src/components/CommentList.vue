<template>
  <div class="hidden-sm-down list-group my-5">
    <a href="#" class="list-group-item text-white" v-bind:class="this.$store.getters.bgcolor">
    Comment
  </a>
  <div v-for="comment in comments" v-bind:key="comment.id" class="list-group-item" rel="nofollow">
    <router-link :to="{ name:'post', params : { id: comment.target } }" >
      {{ comment.name }}(返信:{{ comment.num_recomments }})
      <span class="badge badge-pill float-right text-white" v-bind:class="getBadgeColor">{{ comment.days_since_joined }}</span>
    </router-link>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "linklist",
  data() {
    return {
      comments: []
    };
  },
  computed: {
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    }
  },
  mounted() {
    axios
      .get("http://" + this.$store.getters.domain + "/api/comment/", {})
      .then(res => {
        this.comments = res.data.results;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
