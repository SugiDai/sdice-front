<template>
  <div class="list-group">
    <a href="#" class="list-group-item text-white" v-bind:class="this.$store.getters.bgcolor">
      All Category
    </a>
    <div v-for="category in categories" v-bind:key="category.id">
      <router-link :to="{ name:'top' ,  query: { keyword :category.name }  }" class="list-group-item" >
        {{ category.name }}<span class="badge badge-pill float-right text-white" v-bind:class="getBadgeColor">{{ category.num_posts }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "categorylist",
  data() {
    return {
      mysite: { color: "info" },
      categories: []
    };
  },
  computed: {
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    }
  },
  mounted() {
    axios
      .get(process.env.API_END_POINT + "/category/", {})
      .then(res => {
        this.categories = res.data.results;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
