<template>
<div class="mb-5 card">

  <div class="card-header" v-bind:class="getBgColor">
    <h1 class="card-title text-white">{{ post.title }}</h1>
  </div><!-- card-header終了 -->

  <div class="card-body row">
    <!-- card-bodyの左側 -->
    <div class="col-xs-12 col-sm-6 text-center">
      <div v-if="post.thumnail">
        <b-img thumbnail fluid v-bind:src="getThumnail" v-bind:alt="post.title" />
      </div>
      <div v-else>
        <b-img src="./static/sdice_logo.svg" fluid-grow alt="post.title" />
      </div>
    </div><!-- card-bodyの左側終わり -->

    <!-- card-bodyの右側 -->
    <div class="col-xs-12 col-sm-6">
      <span class="badge badge-pill" v-bind:class="getBadgeColor">{{ post.days_since_joined }}</span>
      <span class="badge badge-pill" v-bind:class="getBadgeColor">{{ getCreatedAtStr }}</span>
      <br>

      <span class="badge" v-bind:class="getBadgeColor">
        <a class="text-white" b-bind:href="post.category.name">{{ post.category.name }}</a>
      </span>
      <br>

      <div v-for="tag in post.tag.all" v-bind:key="tag.id">
        <span class="badge" v-bind:class="getBadgeColor">
          <a class="text-white" v-bind:href="tag.name">{{ tag.name }}</a>
        </span>
      </div>
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
export default {
  name: 'listcard',
  props: ['post'],
  data () {
    return {
      mysite:{ title:"マイサイトタイトル",  description:"マイサイトの説明"} ,
      user:{ is_authenticated:true} ,
      card_items: [],
    }
  },
  computed: {
    getThumnail () {
      return "http://" + this.$store.getters.domain + this.post.thumnail
    },

    getBadgeColor () {
      return "badge-" + this.$store.getters.sitecolor
    },
    getBgColor () {
      return "bg-" + this.$store.getters.sitecolor
    },
    getCreatedAtStr:function(){
      var dt = new Date(Date.parse(this.post.created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth()+1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d  + "日";
      return result;
    }
  },
  mounted () {
    this.$store.dispatch('getSiteDetail').then((res)=>{
      this.$store.commit('setSiteDetail', res.data[0])
    })
  }
}
</script>
