<template>
    <div>
    <jumbotron></jumbotron>
    <mainlayout></mainlayout>
    </div>
</template>

<script>
import jumbotron from './Jumbotron.vue';
import mainlayout from './MainLayout.vue';

export default {
  name: 'layout',
  components: { jumbotron, mainlayout},
}
</script>
