<template>
  <div class="list-group mt-5">
    <a href="#" class="list-group-item text-white" v-bind:class="this.$store.getters.bgcolor">
    Tag
  </a>
  <div v-for="tag in tags" v-bind:key="tag.id">
    <router-link :to="{ name:'top' ,  query: { keyword :tag.name }  }" class="list-group-item" >
      {{ tag.name }}<span class="badge badge-pill float-right text-white" v-bind:class="getBadgeColor">{{ tag.num_posts }}</span>
    </router-link>
  </div>
  <router-link :to="{ name:'tagtable' }" class="list-group-item" > >>> 全てのタグを見る </router-link>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "taglist",
  data() {
    return {
      tags: []
    };
  },
  computed: {
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    }
  },
  mounted() {
    axios
      .get(process.env.API_END_POINT + "/tag/", {})
      .then(res => {
        this.tags = res.data.results;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
