<template>
<div class="mb-5 card">

  <div class="card-header bg-primary">
    <h1 class="card-title text-white">{{ post.title }}</h1>
  </div><!-- card-header終了 -->

  <div class="card-body row">
    <!-- card-bodyの左側 -->
    <div class="col-xs-12 col-sm-6 text-center">
      <div v-if="post.thumnail" >
        <a v-bind:href=" post.thumnail.url " target="_blank" rel="nofollow"><img class="img-fluid lazy" b-bind:data-original="post.thumnail.url" b-bind:alt=" post.title "></a>
      </div>
      <div v-else>
        <img class="img-fluid lazy" data-original="/static/blog/img/noimage.png" b-bind:alt="post.title">
      </div>
      <div>{{this.$store.state.sitedetail.header_text}}</div>
    </div><!-- card-bodyの左側終わり -->

    <!-- card-bodyの右側 -->
    <div class="col-xs-12 col-sm-6">
      <span class="badge badge-primary badge-pill">{{ post.created_at }}</span>
      <span class="badge badge-primary badge-pill">{{ post.created_at }}</span>
      <br>

      <span class="badge badge-primary">
        <a class="text-white" b-bind:href="post.category.name">{{ post.category.name }}</a>
      </span>
      <br>

      <div v-for="tag in post.tag.all">
        <span class="badge badge-primary">
          <a class="text-white" v-bind:href="tag.name">{{ tag.name }}</a>
        </span>
      </div>
      <hr>

      <a class="btn btn-outline-primary btn-lg btn-block" v-bind:href="post.pk">続きを読む</a>
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
  mounted () {
      this.$store.dispatch('getSitedetail').then((res)=>{
        this.$store.commit('setSitedetail', res.data[0])
    })
  }
}
</script>
