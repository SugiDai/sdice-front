<template>
<div class="container">

  <div class="row">
    <listheader title="記事一覧" />
  </div>

  <div class="row">
    <main class="col-12 col-md-8 ">
      <listcard />
    </main>

    <!-- 右側のサイドバー -->
    <aside class="col-12 col-md-3 offset-md-1 ">

      <!-- カテゴリ一覧 -->
      <categorylist />
      <!-- タグ一覧 -->

      <!-- リンク一覧 -->

       <!-- コメント一覧 -->

      <!-- 広告一覧 -->
    </aside>
  </div>

  <!-- 人気記事一覧 -->
  <aside>
  </aside>
</div>
</template>


<script>
import listheader from './ListHeader.vue';
import listcard from './ListCard.vue';
import categorylist from './CategoryList.vue';

export default {
  name: 'MainLayout',
  components: { listheader, listcard, categorylist },
}
</script>
