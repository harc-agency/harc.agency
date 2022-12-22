<template>
  <v-container fluid>
    <!-- welcome video -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Welcome to Stork</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <!-- Modules -->
    <row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Modules</h2>
          </v-card-title>
          <v-card-text>
            <!-- grid of modules -->

            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Module 1</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Module 1 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module-1"
                      text>
                      Go to Module 1
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Module 2</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Module 2 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module-2"
                      text>
                      Go to Module 2
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Module 3</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Module 3 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module3"
                      text>
                      Go to Module 3
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Module 4</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Module 4 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module4"
                      text>
                      Go to Module 4
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </row>
  </v-container>
</template>

<script>
  import Layout from '@/layouts/Stork/Layout.vue';


  export default {

    layout: Layout,
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {
    }
  };
</script>

<style scoped>

</style>
