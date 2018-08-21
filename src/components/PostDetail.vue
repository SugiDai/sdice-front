<template>
    <div>
    <!-- 目次部分 -->
    <div id="toc"></div>

    <article>
    <!-- 記事詳細部分 -->
    </article>

    <div id="comment-area">
    <p>{{post.title}}</p>
    <!-- コメント一覧 -->
    </div>

    <div class="text-center my-5">
      <!-- コメント一覧 -->
      <a href="#" rel="nofollow" class="btn btn-lg text-white" v-bind:class="getBgColor" >コメントページへ</a>
    </div>
</div>
</template>

<script>
import listcard from './ListCard.vue';
import page from './Page.vue';
import axios from 'axios';


export default {
  name: 'taglist',
  props: { id: Number },
  data () {
    return {
      post: [],
    }
  },
  computed: {
    getBgColor () {
      return "bg-" + this.$store.getters.sitedetail.color
    }
  },
  mounted () {
    console.log(this.$route)
    axios
      .get('http://localhost:8000/api/post/' + this.$route.params.id, {} )
      .then((res)=>{
        this.post = res.data
      })
      .catch((res)=>{
        console.log(res)
      });
  },
  components: { listcard, page },
}
</script>
