<template>
    <b-jumbotron>
      <template slot="header">
        <h2>{{title}}</h2>
      </template>
      <template slot="lead">
        {{msg}}
      </template>
    </b-jumbotron>
</template>

<script>
export default {
  name: 'jumbotron',
  data () {
    return {
      title: 'SDice技術メモ',
      msg: '技術備忘録や仕事関連でやったこと'
    }
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
