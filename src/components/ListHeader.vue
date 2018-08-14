<template>
  <div class="col-12 col-md-12">
    <b-alert variant="primary" show> {{ title }} </b-alert>
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
  }
}
</script>
