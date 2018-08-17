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
export default {
  name: 'taglist',
  data () {
    return {
      tags: [
      {
        name:"Python",
        num_posts:10,
      },
      {
        name:"Django",
        num_posts:100,
      },
      {
        name:"BootStrap",
        num_posts:10,
      },
      ],
    }
  }
}
</script>
