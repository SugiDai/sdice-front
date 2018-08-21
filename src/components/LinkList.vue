<template>
  <div class="list-group my-5">
    <a href="#" class="list-group-item text-white"
    　　　v-bind:class="getColor">
      Link
    </a>
    <div v-for="link in links">
    <a class="list-group-item" v-bind:href="link.adrs" target="_blank" rel="nofollow">
      {{ link.name }}
    </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'linklist',
  data () {
    return {
      links: [],
    }
  },
  computed: {
    getColor () {
      return "bg-" + this.$store.getters.sitedetail.color
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/link/',{})
      .then((res)=>{
        this.links = res.data
      })
      .catch((res)=>{
        console.log(res)
      });
  },

}
</script>
