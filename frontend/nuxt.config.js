import path from 'path'
import fs from 'fs'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    server: {
        // https: {
        //     key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
        //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
        // },
        port: 3000, // default: 3000
        host: 'localhost', // default: localhost,
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Page title',
        description: 'Page description',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Page description',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Montserrat:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap',
                rel: 'stylesheet',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['./assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/global.js', '~/plugins/100vhFix.js'],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    tailwindcss: {
        cssPath: '~/assets/scss/vendors/tailwind.css',
        configPath: 'tailwind.config.js',
    },

    // Modules: https://go.nuxtjs.dev/config-modules

    modules: [
        '@nuxtjs/apollo',
        // '@nuxtjs/gtm',
        [
            'nuxt-lazy-load',
            {
                // These are the default values
                images: true,
                videos: false,
                audios: true,
                iframes: true,
                native: false,
                polyfill: true,
                directiveOnly: false,

                // Default image must be in the static folder
                // defaultImage: '/default-image.svg',

                // To remove class set value to false
                loadingClass: 'isLoading',
                loadedClass: 'isLoaded',
                appendClass: 'lazyLoad',

                observerConfig: {
                    // See IntersectionObserver documentation
                },
            },
        ],
    ],
    gtm: {
        // id: 'gtm-id-goes-here',
    },

    /* https://github.com/nuxt-community/gtm-module*/

    axios: {
        baseURL: "http://localhost:8000/api"
    },
    apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8000/graphql',
      },
    },
  },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    // loading: '~/components/layout/Loader.vue',
    router: {
        // trailingSlash: true,
    },

    styleResources: {
        scss: ['./assets/scss/abstracts.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
