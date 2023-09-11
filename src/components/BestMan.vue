<template>
  <Fireworks class="fireworks" :autostart="true"></Fireworks>
</template>

<script>

import {Fireworks} from "@fireworks-js/vue";

export default {
  components: {Fireworks},

  mounted() {
    this.$swal({
      title: 'TEST',
      icon: 'error'
    })
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