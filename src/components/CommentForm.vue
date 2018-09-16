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

      <b-form-group id="fileInputGroup"
                    label="添付ファイル:"
                    label-for="fileInput">
        <b-form-file id="fileInput" v-model="form.file" class="mt-3" plain></b-form-file>
        <div class="mt-3">選択添付ファイル: {{form.file && form.file.name}}</div>      
      </b-form-group>

      <b-button type="submit" variant="primary">コメントする</b-button>
      <b-button type="reset" variant="danger">リセット</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      form: {
        name: '',
        text: '',
        icon: null,
        file: null,
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      axios.post('http://' + this.$store.getters.domain + '/api/comment/', {
          target: + this.$route.params.id,
          name: this.form.name,
          text: this.form.text,
      });      
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.text = '';
      this.form.icon = null;
      this.form.file = null;

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>