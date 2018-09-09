<template>
  <div class="col-12 col-md-12">
    <b-alert v-bind:variant="this.$store.getters.color" show> {{ this.$store.state.listtitle }} </b-alert>
  </div>
</template>

<script>
export default {
  name: 'listheader',
  props: ['title'],
  data () {
    return {
        msg:"duammy",
    }
  },
}
</script>
