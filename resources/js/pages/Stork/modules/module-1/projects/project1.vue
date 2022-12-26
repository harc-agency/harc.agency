<template>
  <v-container fluid>
    <h1>Project 1</h1>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  aspect-ratio="1.75"
                  max-height="200">
                  <v-btn
                    color="primary"
                    dark
                    absolute
                    bottom
                    right
                    icon
                    @click="dialog = true">
                    <!-- make the play button bigger and more visible with a white outline -->
                    <v-icon size="48"
                            color="white">
                      mdi-play
                    </v-icon>
                  </v-btn>
                </v-img>
              </v-col>

              <v-col cols="12" sm="6">
                <v-card>
                  <v-card-title>
                    <h2>Project 1</h2>
                  </v-card-title>
                  <v-card-text>
                    <p>Project 1 description</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-card-title>
                    <h2>Project 1</h2>
                  </v-card-title>
                  <v-card-text>
                    <p>Project 1 description</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import Layout from '@/layouts/Stork/Layout.vue';

  export default {
    layout: Layout,
    data() {
      return {

      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
