<template>
  <v-navigation-drawer v-model="sidebarDrawer" :mini-variant.sync="mini" app dark permanent stateless clipped>
    <v-list dense flat outlined>
      <v-list-item class="pointer" @click="isSidebarClosed = !isSidebarClosed">
        <v-icon v-if="!mini">mdi-menu-open</v-icon>
        <v-icon v-else>mdi-menu-open mdi-rotate-180</v-icon>
      </v-list-item>


      <div v-for="item in items" :key="item.title" class="pointer">
        <v-list-group v-if="item.items" v-model="item.active" :prepend-icon="item.icon">
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>
                <inertia-link :href="item.link || ''" as="span">{{ item.title }}</inertia-link>
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <template #default>
            <v-list-item v-for="child in item.items" :key="child.title" class="grey darken-1 ">
              <inertia-link v-if="child.link" as="div" class="" :href="child.link">
                <span>{{ child.title }}</span>
              </inertia-link>
              <v-list-item-content v-else>
                <v-list-item-title v-text="child.title"/>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>

        <inertia-link v-else :href="item.link || ''" as="span" class="pointer">
          <v-list-item>
            <v-list-item-icon>
              <v-icon v-text="item.icon"/>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </inertia-link>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        sidebarDrawer: true,
        isSidebarClosed: this.$page.props.auth.user.data.settings?.adminNav?.isSidebarClosed,
        items: [
          {
            title: 'Start Here',
            link: '/stork',
            icon: 'mdi-account'
          },

          // Resources
          {
            title: 'Resources',
            icon: 'mdi-folder',
            items: [
              {
                title: 'Resource 1',
                link: '/stork/resource1',
                icon: 'mdi-book'
              },
              {
                title: 'Resource 2',
                link: '/stork/resource2'
              },
              {
                title: 'Resource 3',
                link: '/stork/resource3'
              },
              {
                title: 'Resource 4',
                link: '/stork/resource4'
              },
              {
                title: 'Resource 5',
                link: '/stork/resource5'
              },
              {
                title: 'Resource 6',
                link: '/stork/resource6'
              },
              {
                title: 'Resource 7',
                link: '/stork/resource7'
              },
              {
                title: 'Resource 8',
                link: '/stork/resource8'
              }]
          },

          // nest modules
          {
            title: 'Modules',
            icon: 'mdi-folder',
            items: [
              {
                title: 'Module 1',
                link: '/stork#module1'
              },
              {
                title: 'Module 2',
                link: '/stork#module2'
              },
              {
                title: 'Module 3',
                link: '/stork#module3'
              },
              {
                title: 'Module 4',
                link: '/stork#module4'
              },
              {
                title: 'Module 5',
                link: '/stork#module5'
              },
              {
                title: 'Module 6',
                link: '/stork#module6'
              },
              {
                title: 'Module 7',
                link: '/stork#module7'
              },
              {
                title: 'Module 8',
                link: '/stork#module8'
              }]
          }

        ]
      };
    },
    computed: {
      mini: {
        get() {
          return (this.isSidebarClosed || this.$vuetify.breakpoint.smAndDown) && this.isSidebarClosed;
        },
        set(value) {
          return value;
        }

      }
    },
    watch: {
      isSidebarClosed(value) {
        axios.post('/user-settings', {
          'adminNav.isSidebarClosed': value
        });
      }
    }
  };
</script>
