<template>
  <div>
    <div class="card-wrapper" v-for="(item, key, index) in card_items" :key="index">
    <b-card
        border-variant="primary"
        v-bind:header="item.title"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center">
      <p class="card-text"> {{item.text}} </p>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listcard',
  data () {
    return {
      card_items: [
      {
        title:"Vue.js を使用して色々試して見る",
        text:"テストデータ",
      },
      {
      title:"Vue.js ",
      text:"まじか",
      }
      ],
    }
  }
}
</script>

<style>
.card-wrapper{
    margin-bottom: 10px;
}
</style>
