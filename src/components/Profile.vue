<template>
<div class="profile_card">
    <div class="profile_box">
        <img v-bind:src="profile.profile_image" class="profile_icon">
        <div>
            <p class="profile_title">プロフィール</p>
            <p class="profile_name">{{profile.profile_name }}</p>
        </div>
    </div>
    <p class="content">{{profile.introduction}}</p>
    <p class="content"><vuemarkdown :source="profile.description" toc-anchor-link-symbol=">"></vuemarkdown></p>
</div>
</template>

<script>
import axios from "axios";
import vuemarkdown from "vue-markdown";

function api(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {})
      .then(res => {
        resolve(res.data);
      })
      .catch(res => {
        reject(res.data);
      });
  });
}

export default {
  name: "profile",
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    async fetch() {
      this.apiurl =
        process.env.PROTOCOL + this.$store.getters.domain + "/api/profile/1/";
      this.profile = await api(this.apiurl);
    }
  },
  mounted() {
    this.fetch();
    this.$store.commit("setListTitle", "/ プロフィール");
  },
  components: { vuemarkdown }
};
</script>

<style>
.profile_card {
  width: 500px;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px #ccc;
}
.profile_box {
  display: flex;
}
.profile_icon {
  width: 48px;
  height: 48px;
  margin: 10px;
  border-radius: 24px;
  object-fit: cover;
}
.profile_name {
  font-size: 80%;
  margin-bottom: 10px;
  color: #888;
}
.profile_title {
  font-size: 150%;
  margin: 10px 0;
  color: #444;
}
.content {
  padding: 10px;
  color: #666;
}

.content h1 {
  font-size: 110%;
  padding: 0.25em 0.5em; /*上下 左右の余白*/
  color: #666;
  background: transparent; /*背景透明に*/
  border-left: solid 5px #7db4e6; /*左線*/
}

.content h2 {
  font-size: 80%;
  padding: 0.25em 0.5em; /*上下 左右の余白*/
  color: #666;
  background: transparent; /*背景透明に*/
  border-left: solid 5px #7db4e6; /*左線*/
}

</style>