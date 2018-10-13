<template>
<div class="bg">
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="box">
      <h2>{{this.$store.state.title}}</h2>
      <p class="lead">{{this.$store.state.header_text}}</p>
    </div>
    <div style="height:120px">
    </div>

  </div>
</div>
</div>
</template>

<script>
export default {
  name: "jumbotron"
};
</script>

<style scoped>
.jumbotron {
  background: url(/static/topj.jpg) center no-repeat;
  background-size: cover;
  position: relative;
}

.box {  
  position: absolute;
  z-index: 50;
}

.bg {
  background-size: cover;
  position: relative;
}

.bg::before {
  content: " ";
  background-color: rgba(0, 0, 100, 0.6);
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

h1,
h2 {
  color: aliceblue;
  font-weight: normal;
}

p {
  color: aliceblue;
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
