<template>
<div class="container">

  <div class="row">
    <listheader title="記事一覧" />
  </div>

  <div class="row">
    <main class="col-12 col-md-8 ">
      <postlist />
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
</template>


<script>
import listheader from './ListHeader.vue';
import postlist from './PostList.vue';

import categorylist from './CategoryList.vue';
import taglist from './TagList.vue';
import linklist from './LinkList.vue';
import commentlist from './CommentList.vue';

export default {
  name: 'MainLayout',
  components: { listheader, postlist, categorylist, taglist, linklist, commentlist },
}
</script>
