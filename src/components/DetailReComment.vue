<template>
  <div>
    <div v-for="recomment in recomments" v-bind:key="recomment.id">
      <div class="row mt-3">
        <!--
        <div v-if="recomment.icon" class="col-md-2 d-none d-md-block">
            <b-img thumbnail fluid class="img-fluid lazy" v-bind:src="recomment.icon" v-bind:alt="recomment.name" />
        </div>
        <div v-else class="col-md-2 d-none d-md-block">
            <b-img thumbnail fluid class="img-fluid lazy" src="./static/no_image.svg" v-bind:alt="recomment.name" />
        </div>
        -->
        <div class="col-md-10">
            <h5>
              {{ recomment.name }}
              <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ recomment.days_since_joined}}</span>
              <span class="badge badge-pill" v-bind:class="getBadgeColor" >{{ getCreatedAtStr(recomment.created_at)}}</span>
            </h5>
            {{ recomment.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listcard",
  props: ["commentid"],
  data() {
    return {
      recomments: []
    };
  },
  mounted() {
    axios
      .get(process.env.API_END_POINT + "/recomment/?comment=" + this.commentid,
        {}
      )
      .then(res => {
        this.recomments = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
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
    getBadgeColor: function() {
      return this.$store.getters.badgecolor;
    }
  }
};
</script>
