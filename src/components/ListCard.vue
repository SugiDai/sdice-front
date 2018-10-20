<template>
  <transition name="lcard">
    <div class="card-deck">
      <div class="mb-4 card">
        <div class="card-body row">
          <div class="col-xs-12 col-sm-6 text-center">
            <div v-if="post.thumnail">
              <b-img thumbnail fluid v-bind:src="getThumnail" v-bind:alt="post.title" />
            </div>
            <div v-else>
              <b-img src="./no_image.svg" fluid-grow alt="post.title" />
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <h4 class="card-title">{{ post.title }}</h4>
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
            <p class="post-description" >{{ post.description }}</p>
            <router-link :to="{ name:'post', params : { id: post.pk } }" class="btn btn-outline-primary btn-lg btn-block" > 続きを読む</router-link>
            <br>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    },
    getThumnail() {
      return (this.post.thumnail);
    },
    getCreatedAtStr: function() {
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth() + 1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d + "日";
      return result;
    }
  }
};
</script>

<style>
.card-body h4 {
  font-size: 100%;
  text-align: left;
  padding: 0.25em 0.5em;
  color: #666;
  background: transparent;
  border-left: solid 5px #7db4e6;
}

.post-description {
  font-size: 80%;
  text-align: left;
  color: #666;
  background: transparent;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}

.tag-blox {
  padding: 1px;
  float: left;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}

.lcard-enter-active,
.lcard-leave-active {
  transition: opacity 1s;
}

.lcard-enter,
.lcard-leave-to {
  opacity: 0;
}
</style>
