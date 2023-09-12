<template>
  <Fireworks v-if="startFireworks"  class="fireworks" :autostart="true"></Fireworks>
</template>

<script>

import {Fireworks} from "@fireworks-js/vue";

export default {
  components: {Fireworks},

  data: () => ({
    startFireworks: false,
  }),

  methods: {
    firePopup() {
      this.$swal({
        allowOutsideClick: false,
        title: 'Willst du mein Trauzeuge werden?',
        icon: 'info',
        showConfirmButton: true,
        showCancelButton: true,
        backdrop: 'rgba(0,0,0,0)'
      }).then(result => {
        if (result.isConfirmed) {
          this.startFireworks = true
          this.$swal({
            allowOutsideClick: false,
            imageUrl: '/beer.gif',
            showConfirmButton: false,
            backdrop: 'rgba(0,0,0,0)'
          })
        } else {
          this.$swal({
            allowOutsideClick: false,
            imageUrl: '/schimmel.jpg',
            title: 'Cancel schimmelt',
            backdrop: 'rgba(0,0,0,0)'
          }).then(() => {
            this.firePopup()
          })
        }
      })
    }
  },

  mounted() {
    this.firePopup()
  }
}
</script>

<style scoped>
.fireworks {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  transition: 1s;
}
</style>