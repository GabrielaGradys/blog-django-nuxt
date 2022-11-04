<template>
    <div
        id="header"
        class="fixed bg-gradient-to-b from-white to-white w-full shadow-2xl px-70 flex gap-10 justify-between items-center"
    >
        <a href="/" class="absolute top-2 left-25 bg-white rounded-full drop-shadow-2xl">
            <img :src="require('~/assets/svg/ikona.svg')" class="h-20 w-20" />
        </a>
        <div id="menu" class="flex gap-16 py-2 uppercase items-center text-5 xl:text-4 tracking-wide">
            <div v-for="(link, i) in links" :key="i" class="relative group p-4 text-center">
                <a
                    :href="link.link"
                    class="text-pq_dark_blue font-bold pb-1 hover:border-pq_yellow border-b-2 transition-all duration-300"
                    :class="
                        $nuxt.$route.path.substring(0, $nuxt.$route.path.lastIndexOf('/')) == link.link ||
                        $nuxt.$route.path == link.link
                            ? 'border-pq_yellow border-b-2'
                            : 'border-transparent'
                    "
                >
                    {{ link.label }}
                </a>
                <div
                    v-if="link.sublinks"
                    class="absolute hidden gap-4 top-full bg-white w-full text-center group-hover:grid left-0"
                >
                    <a
                        v-for="(sublink, j) in link.sublinks"
                        :key="j"
                        :href="sublink.link"
                        class="hover:text-pq-orange transition-colors duration-300"
                    >
                        {{ sublink.label }}
                    </a>
                </div>
            </div>
        </div>
        <GoUp />
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    label: 'Strona Główna',
                    link: '/',
                    sublinks: [],
                },
                { label: 'O Blogu', link: '/o-blogu' },
                { label: 'Psychoteka', link: '/blog/psychoteka' },
                { label: 'Strefa Wiedzy', link: '/blog/strefa-wiedzy' },
                { label: 'Z mojej perspektywy', link: '/blog/z-mojej-perspektywy' },
            ],
        }
    },
    mounted() {
        // console.log(this.$route.path.substring(0, this.$route.path.lastIndexOf('/')))
    },
}
</script>

<style scoped></style>
