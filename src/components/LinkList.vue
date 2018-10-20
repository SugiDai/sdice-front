<template>
  <div class="list-group my-5">
    <a href="#" class="list-group-item text-white" v-bind:class="this.$store.getters.bgcolor">
      Link
    </a>
    <div v-for="link in links" v-bind:key="link.id">
      <a class="list-group-item" v-bind:href="link.adrs" target="_blank" rel="nofollow">
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "linklist",
  data() {
    return {
      links: []
    };
  },
  mounted() {
    axios
      .get(process.env.API_END_POINT + "/link/", {})
      .then(res => {
        this.links = res.data.results;
      })
      .catch(res => {
        console.log(res);
      });
    this.$store.commit("setListTitle", "/ 一覧 ");
  }
};
</script>
