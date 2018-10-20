<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameInputGroup"
                    label="名前:"
                    label-for="nameInput">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter nickname">
        </b-form-input>
      </b-form-group>
      <b-form-group id="textInputGroup"
                    label="コメント:"
                    label-for="textInput">
        <b-form-textarea id="textInput"
                        v-model="form.text"
                        placeholder="Enter something to text "
                        :rows="3"
                        :max-rows="6">
        </b-form-textarea>
        <pre class="mt-3">{{ form.text }}</pre>
      </b-form-group>
      <b-form-group id="iconInputGroup"
                    label="サムネイル:"
                    label-for="iconInput">
        <b-form-file id="iconInput" v-model="form.icon" :state="Boolean(form.icon)" placeholder="Choose a file..."></b-form-file>
        <div class="mt-3">サムネイルファイル: {{form.icon && form.icon.name}}</div>
      </b-form-group>
      <br>
      <b-button type="submit" variant="primary">コメントする</b-button>
      <b-button type="reset" variant="danger">リセット</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'commentform',
  props: { id: Number },
  data () {
    return {
      form: {
        name: '',
        text: '',
        icon: null,
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      let post_id = this.$route.params.id;
      let data = new FormData;
      data.append('target', post_id);
      data.append('name', this.form.name);
      data.append('text', this.form.text);
      if( this.form.icon != null ){
        data.append('icon', this.form.icon);
      }
      axios.post(process.env.API_END_POINT + '/comment/', data).then((res)=>{
        alert("Add Comment.");
        this.$router.push({ name: 'post', params: { id: post_id }});
      });
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.text = '';
      this.form.icon = null;

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>