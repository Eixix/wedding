<template>
  <header>
  </header>

  <main>
    <v-container fluid="">
      <v-row>
        <v-carousel class="wedding-images">
          <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
          ></v-carousel-item>

          <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
          ></v-carousel-item>

          <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
          ></v-carousel-item>
        </v-carousel>
      </v-row>
      <v-row justify="center" class="pa-10">
        <v-col cols="10">
          <h1 class="text-center">Hochzeitswebsite</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Justo donec enim diam vulputate ut
            pharetra sit amet aliquam. Integer eget aliquet nibh praesent tristique magna. Placerat duis ultricies lacus
            sed turpis. Eu sem integer vitae justo. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.
            Augue neque gravida in fermentum et sollicitudin. Habitant morbi tristique senectus et netus et malesuada
            fames ac. Morbi enim nunc faucibus a pellentesque sit amet. Penatibus et magnis dis parturient montes
            nascetur ridiculus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Lorem ipsum dolor sit
            amet consectetur. Non sodales neque sodales ut etiam.

            Velit scelerisque in dictum non consectetur a erat nam at. Dolor sit amet consectetur adipiscing elit ut
            aliquam purus sit. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Lorem sed risus
            ultricies tristique nulla aliquet enim. Eu tincidunt tortor aliquam nulla facilisi cras. Libero volutpat sed
            cras ornare. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Lacus vel facilisis
            volutpat est velit egestas dui id. Quis blandit turpis cursus in hac. Diam vulputate ut pharetra sit amet
            aliquam id diam maecenas. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Urna id
            volutpat lacus laoreet non curabitur. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Enim
            nunc faucibus a pellentesque sit amet porttitor eget. Egestas fringilla phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien. Cursus sit amet dictum sit. Vulputate sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-card class="mx-auto" color="#000000">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-text>
              Lorem Ipsum dolor
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" color="#000000">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-text>
              Lorem Ipsum dolor
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" color="#000000">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-text>
              Lorem Ipsum dolor
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 't') {
        this.bestManMode = !this.bestManMode
      }
    })
  }
}

</script>

<style scoped>
.wedding-images {
  padding: 0;
}
</style>
