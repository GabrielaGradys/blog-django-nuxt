<template>
    <div
        class="_fancy w-13 h-13 fixed bottom-10 right-30 rounded-full border p-1 border-pq_yellow hover:bg-pq_yellow select-none cursor-pointer"
        :class="show ? '_show' : ''"
        @click="go_up()"
    >
        <img :src="require('~/assets/svg/arrow.svg')" alt="" class="'w-full h-full" />
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.min'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'
export default {
    data: () => ({
        scroll_t: null,
        show: false,
    }),
    mounted() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
        this.scroll_t = ScrollTrigger.create({
            trigger: document.querySelector('main'),
            // start: '40% center',
            // end: '60% center',
            start: () => window.innerHeight + ' top',
            end: () => window.innerHeight + ' top',
            // markers: true,
            onEnter: () => (this.show = true),
            // onLeave: () => this.unload_all(),
            // onEnterBack: () => this.load_all(),
            onLeaveBack: () => (this.show = false),
        })
    },
    beforeDestroy() {
        if (this.scroll_t && this.scroll_t.kill) this.scroll_t.kill()
    },
    methods: {
        go_up() {
            gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' })
        },
    },
}
</script>

<style scoped lang="scss">
._fancy {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s, visibility 0.4s, background-color 0.4s;
    &._show {
        opacity: 1;
        visibility: visible;
    }
}
</style>
