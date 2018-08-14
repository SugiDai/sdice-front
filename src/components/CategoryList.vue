<template>
  <div class="list-group">
    <a href="#" class="list-group-item text-white bg-primary">
      All Category
    </a>
    <a v-for="category in categories" class="list-group-item" href="#">
      {{ category.name }}<span class="badge badge-primary badge-pill float-right text-white">{{ category.num_posts }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'categorylist',
  data () {
    return {
      mysite: {color:"info"},
      categories: [{
        name:"category-1",
        num_posts:1,
      }],
    }
  }
}
</script>
