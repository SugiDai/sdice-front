<template>
  <div>
    <transition name="rtop">
        <div id="pagetop" v-show="scY > 30" @click="toTop" >
            <i class="fa fa-share">Top</i>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "returnTop",
  data() {
    return {
      scTimer: 0,
      scY: 0
    };
  },
  created: function() {
    window.addEventListener("scroll", this.scEvent);
    //this.getPostData();
  },
  methods: {
    toTop: function() {
      let scrolled = window.pageYOffset;
      window.scrollTo(0, Math.floor(scrolled * 0.8));
      if (scrolled > 0) {
        window.setTimeout(this.toTop, 10);
      }
    },
    //scイベントで現在のスクロール値を取得
    scEvent: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;

        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

#pagetop {
  position: fixed;
  bottom: 30px;
  right: 50px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  background: #f45f5f;
  transition: 0.3s; /*滑らかな動きに*/
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  z-index: 100;
}

#pagetop i {
  /*中央のアイコン*/
  color: white;
  line-height: 56px; /*＝幅と高さ*/
  vertical-align: middle;
  font-size: 18px; /*サイズ*/
}

.rtop-enter-active,
.rtop-leave-active {
  transition: opacity 1s;
}
.rtop-enter,
.rtop-leave-to {
  opacity: 0;
}
</style>