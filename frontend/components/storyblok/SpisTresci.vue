<template>
    <div :class="type === 'small' ? 'flex-1' : ''">
        <div
            id="spis_tresci"
            class="grid p-2 rounded-3xl px-10 bg-pq_pastel_blue bg-opacity-20"
            :class="type === 'small' ? 'top-0 right-0 gap-5 shadow-md' : 'ml-30 mr-10 gap-10'"
        >
            <div
                class="text-pq_light_blue --font-secondary font-bold"
                :class="type === 'small' ? 'text-10 text-center' : 'text-17'"
            >
                Spis Treści
            </div>
            <ul
                class="grid list-decimal list-inside text-pq_yellow"
                :class="type === 'small' ? 'text-5 font-semibold'  : 'text-7 font-bold'"
            >
                <li
                    class="mb-2"
                    v-for="(header_2, header_1) in spis_tresci"
                    :key="header_1"
                    :class="current_header === $Slugify(header_1) ? 'text-pq_light_blue drop-shadow-sm' : ''"
                >
                    <a
                        :href="`#${$Slugify(header_1)}`"
                        @click="on_header_click"
                        >{{ header_1 }}</a
                    >
                    <ul
                        v-if="header_2.length"
                        class="grid list-disc ml-3 m-2 list-inside text-pq_yellow"
                        :class="type === 'small' ? 'text-5 font-medium' : 'text-7 font-bold' "
                    >
                        <li
                            v-for="(sub_header, i) in header_2"
                            :key="`${header_1}-${i}`"
                            :class="current_header === $Slugify(header_1) ? 'text-pq_light_blue drop-shadow-sm' : ''">
                            <a :href="`#${$Slugify(sub_header)}`"
                               @click="on_header_click"
                            >{{ sub_header }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.min'
export default {
    props: ['spis_tresci', 'type', 'current_header'],
    mounted() {
        gsap.registerPlugin(ScrollTrigger)
        if (this.type === 'small') {
            this.gsap_init()
        }
    },
    beforeDestroy() {
        if (st && st.kill) {
            st.kill()
        }
    },
    data: () => ({
        st: null,
    }),
    methods: {
        gsap_init() {
            this.st = ScrollTrigger.create({
                trigger: this.$el,
                pin: this.$el.querySelector('#spis_tresci'),
                start: 'top 60',
                end: () => 'bottom ' + (this.$el.querySelector('#spis_tresci').clientHeight + 60),
                markers: false,
            })
        },
        on_header_click(e) {
            e.preventDefault()
            gsap.to(window, { duration: 1, scrollTo: { y: e.target.hash, offsetY: 80 }, ease: 'power2.inOut' })
        },
    },
}
</script>

<style scoped></style>
