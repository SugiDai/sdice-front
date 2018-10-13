<template>
<div>
  <jumbotron></jumbotron>
  <div class="container">
    <div class="row">
      <listheader title="記事一覧" />
    </div>
    <returntop/>
    <viewloading/>
    <div class="row">
      <main class="col-12 col-md-8 ">
        <router-view />
      </main>
      <!-- 右側のサイドバー -->
      <aside class="col-12 col-md-3 offset-md-1 ">
        <!-- カテゴリ一覧 -->
        <categorylist />

        <!-- タグ一覧 -->
        <taglist />

        <!-- リンク一覧 -->
        <linklist />

        <!-- コメント一覧 -->
        <commentlist />

        <!-- 広告一覧 -->
      </aside>
    </div>
    <!-- 人気記事一覧 -->
    <aside>
    </aside>



  </div>
  <authfooter></authfooter>

</div>
</template>


<script>
import jumbotron from "./Jumbotron.vue";
import listheader from "./ListHeader.vue";
import categorylist from "./CategoryList.vue";
import taglist from "./TagList.vue";
import linklist from "./LinkList.vue";
import commentlist from "./CommentList.vue";
import authfooter from "./Footer.vue";
import viewloading from "./ViewLoading.vue";
import returntop from "./ReturnTop.vue";

export default {
  name: "layout",
  components: {
    jumbotron,
    listheader,
    categorylist,
    taglist,
    linklist,
    commentlist,
    authfooter,
    viewloading,
    returntop
  }
};
</script>
