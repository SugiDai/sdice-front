<template>
  <div id="app">
    <header>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#"><img src="../static/sdice_logo.svg" width="32" height="32"></b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item :to="{ name:'tagtable' }" > All Tag </b-nav-item>
            <!-- <b-nav-item href="#">Feed</b-nav-item> -->
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit="onSubmit">
              <b-form-input  id="keywordInput" v-model="keyword" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <transition name="appt">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      keyword: ""
    };
  },
  beforeCreate() {
    this.$store.dispatch("getSite").then(res => {
      this.$store.commit("setDomain", res.data.results[0].domain);
      this.$store.commit("setName", res.data.results[0].name);
    });
    this.$store.dispatch("getSiteDetail").then(res => {
      this.$store.commit("setSiteDetail", res.data.results[0]);
      this.$store.commit("setTitle", res.data.results[0].title);
      this.$store.commit("setHeaderText", res.data.results[0].header_text);
      this.$store.commit("setColor", res.data.results[0].color);
      this.$store.commit("setAuthor", res.data.results[0].author);
      this.$store.commit("setAuthorMail", res.data.results[0].author_mail);
    });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push({ name: "top", query: { keyword: this.keyword } });
    }
  }
};
</script>

<style>
.appt-enter-active, .appt-leave-active{
    transition: opacity 1s;
}
.appt-enter, .appt-leave-to {
    opacity: 0;
}
</style>