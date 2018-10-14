<template>
  <div>
    <div v-for="comment in comments" v-bind:key="comment.id">
      <div class="row mt-3">
        <div v-if="comment.icon" class="col-md-2 d-none d-md-block">
            <b-img thumbnail fluid class="img-fluid lazy" v-bind:src="getImageUrl(comment.icon)" v-bind:alt="comment.name" />
        </div>
        <div v-else class="col-md-2 d-none d-md-block">
            <b-img thumbnail fluid class="img-fluid lazy" src="./static/no_image.svg" v-bind:alt="comment.name" />
        </div>
        <div class="col-md-10">
            <h5>
              {{ comment.name }}
              <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ comment.days_since_joined}}</span>
              <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ getCreatedAtStr(comment.created_at)}}</span>
              <router-link :to="{ name:'recommentform', query:{ postid:comment.target, commentid:comment.id } }" >返信する</router-link>
            </h5>
            <div v-for="file in comment.files" v-bind:key="file.pk">
              <a href="#">添付ファイルダウンロード()</a><br>
            </div>
            {{ comment.text }}
            <recomment v-bind:commentid="comment.id"></recomment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import recomment from './DetailReComment.vue';

export default {
  name: "listcard",
  props: ["comments"],
  data() {
    return {
    };
  },
  methods:{
    getImageUrl: function(page){
      return process.env.FILE_ENDPOINT + page;
    },
    getCreatedAtStr: function(created_at) {
      var dt = new Date(Date.parse(created_at));
      var y = dt.getFullYear();
      var m = ("00" + (dt.getMonth() + 1)).slice(-2);
      var d = ("00" + dt.getDate()).slice(-2);
      var result = y + "年" + m + "月" + d + "日";
      return result;
    }
  },
  computed: {
    getBadgeColor:function(){
      return this.$store.getters.badgecolor;
    },
  },
  components: { recomment },

};
</script>
