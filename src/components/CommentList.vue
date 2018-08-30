<template>
  <div class="hidden-sm-down list-group my-5">
    <a href="#" class="list-group-item text-white bg-primary">
    Comment
  </a>
  <a v-for="comment in comments" class="list-group-item" href="#comment-area" rel="nofollow">
      {{ comment.name }}(返信:{{ comment.num_recomments }})
      <span class="badge badge-primary badge-pill float-right text-white">{{ comment.days_since_joined }}</span>
  </a>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'linklist',
  data () {
    return {
      comments: [],
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/comment/',{})
      .then((res)=>{
        this.comments = res.data
      })
      .catch((res)=>{
        console.log(res)
      });
  },

}
</script>
