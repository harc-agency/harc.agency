<template>
  <v-container fluid>
    <row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Module 1</h2>
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
    </row>

    <!-- Projects -->
    <!-- a nice layout of Project -->
    <row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Projects</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Project 1</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Project 1 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module-1/project-1"
                      text>
                      Go to Project 1
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title>
                    <h3>Project 2</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>Project 2 description</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      href="/stork/module-1/project-2"
                      text>
                      Go to Project 2
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
    }
  };
</script>

<style lang="scss" scoped>

</style>
