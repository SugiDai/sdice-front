<template>
<div class="mb-5 card">

  <div class="card-header" v-bind:class="this.$store.getters.bgcolor">
    <h1 class="card-title text-white">{{ post.title }}</h1>
  </div><!-- card-header終了 -->

  <div class="card-body row">
    <!-- card-bodyの左側 -->
    <div class="col-xs-12 col-sm-6 text-center">
      <div v-if="post.thumnail">
        <b-img thumbnail fluid v-bind:src="getThumnail" v-bind:alt="post.title" />
      </div>
      <div v-else>
        <b-img src="./static/no_image.svg" fluid-grow alt="post.title" />
      </div>
    </div><!-- card-bodyの左側終わり -->

    <!-- card-bodyの右側 -->
    <div class="col-xs-12 col-sm-6">
      <span class="badge badge-pill" v-bind:class="this.$store.getters.badgecolor">{{ post.days_since_joined }}</span>
      <span class="badge badge-pill" v-bind:class="this.$store.getters.badgecolor">{{ getCreatedAtStr }}</span>
      <br>

      <span class="badge" v-bind:class="this.$store.getters.badgecolor">
        <a class="text-white" b-bind:href="post.category.name">{{ post.category.name }}</a>
      </span>
      <br>

      <div class='tag-blox' v-for="item in post.tag" v-bind:key="item">
        <span class="badge" v-bind:class="getBadgeColor">
          <a class="text-white" v-bind:href="item">{{ item }}</a>
        </span>
      </div>
      <br>
      <hr>
      <router-link :to="{ name:'post', params : { id: post.pk } }" class="btn btn-outline-primary btn-lg btn-block" > 続きを読む</router-link>
      <br>

      <div v-if="user.is_authenticated">
        <a v-bind:href="post.pk">管理画面へ</a>
      </div>
    </div>

  </div><!-- card-body終了 -->

</div>
</template>

<script>
import mixin from "../mixin";

export default {
  name: "listcard",
  props: ["post"],
  mixins: [mixin],

  data() {
    return {
      mysite: { title: "マイサイトタイトル", description: "マイサイトの説明" },
      user: { is_authenticated: true },
      card_items: []
    };
  },
  computed: {
    getBadgeColor:function(){
      return this.$store.getters.badgecolor;
    },
    getThumnail() {
      return "http://" + this.$store.getters.domain + this.post.thumnail;
    },
    getCreatedAtStr: function() {
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth() + 1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d + "日";
      return result;
    }
  },
};
</script>

<style>
  .tag-blox {
    padding:1px;
    float: left;
  }
</style>
