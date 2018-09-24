<template>
  <b-table  :items="items">
    <template slot="All Tags " slot-scope="data">
      <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
        {{data.value}}
      </a>
    </template>
  </b-table>
</template>

</template>

<script>
import axios from "axios";
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
]

export default {
  name: "tagTable",
  data() {
    return {
      items: items
    };
  },
  mounted() {
    this.$store.commit('setListTitle', "/ 一覧 / 全てのタグを見る /" );
    axios
      .get("http://" + this.$store.getters.domain + "/api/tag/", {})
      .then(res => {
        this.items = res.data.results.map((tag)=>{
          return {"All Tags ": tag.name + " (" + tag.num_posts + ")"}
        });
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
