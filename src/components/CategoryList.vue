<template>
  <div class="list-group">
    <a href="#" class="list-group-item text-white bg-primary">
      All Category
    </a>
    <a v-for="category in categories" v-bind:key="category.id" class="list-group-item" href="#">
      {{ category.name }}<span class="badge badge-primary badge-pill float-right text-white">{{ category.num_posts }}</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'categorylist',
  data () {
    return {
      mysite: {color:"info"},
      categories: [],
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/category/',{})
      .then((res)=>{
        this.categories = res.data.results
      })
      .catch((res)=>{
        console.log(res)
      });
  },

}
</script>
