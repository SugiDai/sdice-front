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
