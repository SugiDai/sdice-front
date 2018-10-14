<template>
  <table class="table">
    <tbody>
      <tr v-for="item in items" v-bind:key="item.id">
        <td>
          <router-link :to="{ name:'top' ,  query: { keyword :item.name }  }" >
            {{item.allname}}
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
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
      .get(process.env.PROTOCOL + this.$store.getters.domain + "/api/tag/", {})
      .then(res => {
        this.items = res.data.results.map((tag)=>{
          return {"id": tag.id, "allname": tag.name + " (" + tag.num_posts + ")" , "name": tag.name}
        });
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
