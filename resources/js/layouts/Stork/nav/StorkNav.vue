<template>
  <div class="d-flex row">
    <v-tabs background-color="transparent">
      <inertia-link v-if="isAdmin" :href="route('admin.index')" as="v-tab">
        <v-icon class="mr-2">mdi-account-cog</v-icon> Admin
      </inertia-link>

      <inertia-link :href="'/stork'" as="v-tab">
        <v-icon class="mr-2">mdi-account-cog</v-icon> Stork
      </inertia-link>
    </v-tabs>
  </div>
</template>
<script>


  export default {
    name: 'StorkNav',
    computed: {

      hasAuthUser() {
        return this.$page.props?.auth.user;
      },

      isAdmin() {
        return this.$page.props?.auth.user?.data?.isAdmin;
      }


    },
    methods: {
      itemLink(item) {
        return item.link ? item.link : '';
      },
      itemTarget(item) {
        return item.target ? item.target : '';
      },
      showLink(item) {
        return !item.hide_link || !item.admin;
      }
    }

  };
</script>
