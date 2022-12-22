<template>
  <div>
    <v-app>
      <v-app-bar clipped-left app>
        <StorkNav/>
        <v-spacer/>
        <ProfileMenu/>
      </v-app-bar>

      <SidebarNav/>


      <v-main class="warm">
        <slot></slot>
      </v-main>
    </v-app>


    <!-- Modal Portal -->
    <portal-target name="modals" multiple/>
  </div>
</template>

<script>
  import ProfileMenu from '@/layouts/nav/ProfileMenu';
  import StorkNav from '@/layouts/Stork/nav/StorkNav';
  import SidebarNav from '@/layouts/Stork/nav/SidebarNav';

  export default {
    data() {
      return {};
    },
    components: {
      SidebarNav,
      StorkNav,
      ProfileMenu
    }
  };
</script>
