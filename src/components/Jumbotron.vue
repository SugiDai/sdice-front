<template>
    <b-jumbotron>
      <template slot="header">
        <h2>{{this.$store.state.title}}</h2>
      </template>
      <template slot="lead">
        {{this.$store.state.header_text}}
      </template>
    </b-jumbotron>
</template>

<script>
export default {
  name: 'jumbotron',
  mounted () {
    this.$store.dispatch('getSiteDetail').then((res)=>{
      this.$store.commit('setSiteDetail', res.data.results[0])
      this.$store.commit('setTitle', res.data.results[0].title)
      this.$store.commit('setHeaderText', res.data.results[0].header_text)
      this.$store.commit('setColor', res.data.results[0].color)
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
