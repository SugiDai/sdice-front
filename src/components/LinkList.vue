<template>
  <div class="list-group my-5">
    <a href="#" class="list-group-item text-white bg-primary">
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
export default {
  name: 'linklist',
  data () {
    return {
      links: [
      {
        name:"link1",
        adrs:"aaaa",
      },
      ],
    }
  }
}
</script>
