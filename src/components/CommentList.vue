<template>
  <div class="hidden-sm-down list-group my-5">
    <a href="#" class="list-group-item text-white bg-primary">
    Comment
  </a>
  <a v-for="comment in comments" class="list-group-item" href="#comment-area" rel="nofollow">
      {{ comment.name }}(返信:{{ comment.num_recomments }})
      <span class="badge badge-primary badge-pill float-right text-white">{{ comment.created_at }}</span>
  </a>
</div>
</template>

<script>
export default {
  name: 'linklist',
  data () {
    return {
      comments: [
      {
        name:"link1",
        num_recomments:20,
        created_at:"約X日前",
      },
      ],
    }
  }
}
</script>
