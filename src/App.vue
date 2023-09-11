<template>
  <header>
  </header>

  <main>
    <v-icon icon="mdi-home"></v-icon>
    Hier entsteht die Website für unsere Hochzeit
    <BestMan v-if="bestManMode"></BestMan>
  </main>
</template>
<script>
import BestMan from "@/components/BestMan.vue";

export default {
  components: {BestMan},

  data: () => ({
    bestManMode: false
  }),

  mounted() {
    if (window.screen.width === 5120 && window.navigator.userAgent.toLowerCase().includes('win')) {
      this.bestManMode = true
    }

    document.body.addEventListener('keydown', (e) => {
      if (e.key === 't') {
        this.bestManMode = !this.bestManMode
      }
    })
  }
}

</script>