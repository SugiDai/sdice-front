<template>
  <div class="list-group mt-5">
    <a href="#" class="list-group-item text-white bg-primary">
    Tag
  </a>
  <div v-for="tag in tags">
  <a class="list-group-item" href="#">
      {{ tag.name }}<span class="badge badge-primary badge-pill float-right text-white">{{ tag.num_posts }}</span>
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
  mounted () {
    axios
      .get('http://localhost:8000/api/tag/',{})
      .then((res)=>{
        this.tags = res.data
      })
      .catch((res)=>{
        console.log(res)
      });
  },

}
</script>
