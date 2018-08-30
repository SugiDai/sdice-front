<template>
    <b-jumbotron>
      <template slot="header">
        <h2>{{this.$store.state.sitedetail.title}}</h2>
      </template>
      <template slot="lead">
        {{this.$store.state.sitedetail.header_text}}
      </template>
    </b-jumbotron>
</template>

<script>
export default {
  name: 'jumbotron',
  mounted () {
      this.$store.dispatch('getSitedetail').then((res)=>{
        this.$store.commit('setSitedetail', res.data[0])
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
