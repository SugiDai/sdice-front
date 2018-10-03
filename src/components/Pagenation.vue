<template>
<div>
  <b-pagination-nav :link-gen="linkGen" :number-of-pages="5" v-model="currentPage" />
</div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>