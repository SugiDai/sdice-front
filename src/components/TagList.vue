<template>
  <div class="list-group mt-5">
    <a href="#" class="list-group-item text-white" v-bind:class="this.$store.getters.bgcolor">
    Tag
  </a>
  <div v-for="tag in tags" v-bind:key="tag.id">
  <a class="list-group-item" href="#">
      {{ tag.name }}<span class="badge badge-pill float-right text-white" v-bind:class="getBadgeColor">{{ tag.num_posts }}</span>
  </a>
  </div>
  <a href="#" class="list-group-item">
    >>> 全てのタグを見る
  </a>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'taglist',
  data () {
    return {
      tags: []
    }
  },
  computed: {
    getBadgeColor:function(){
      return this.$store.getters.badgecolor;
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/tag/',{})
      .then((res)=>{
        this.tags = res.data.results
      })
      .catch((res)=>{
        console.log(res)
      });
  },

}
</script>
