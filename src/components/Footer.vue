<template>
    <footer class="text-center" v-bind:class="getBgColor" >
        <div class="container">
            <p class="text-white">Copyright {{ this.$store.getters.author }} All Rights Reserved.</p>
            <p><a v-bind:href="getAuthorMailHref" rel="nofollow">{{ this.$store.getters.authormail }}</a></p>
        </div>
    </footer>    
</template>


<script>
export default {
  name: 'linklist',
  data () {
    return {
      comments: [],
    }
  },
  computed: {
    getAuthorMailHref () {
      return "mailto:-" + this.$store.getters.authormail
    },
    getBadgeColor () {
      return "badge-" + this.$store.getters.sitecolor
    },
    getBgColor () {
      return "bg-" + this.$store.getters.sitecolor
    },
  },  
  
}
</script>

<style>
    footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
    }

    footer p {
    margin-bottom: .25rem;
    }

    footer a {
    color: blue;
    text-decoration: underline;
    }
</style>