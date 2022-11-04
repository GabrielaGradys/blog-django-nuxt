<template>
<div>
  <div class="grid gap-5 overflow-hidden">
        <div :id="$Slugify(body.title)" class="text-pq_light_blue text-17 --font-secondary font-bold" v-if="body.title">
            {{ body.title }}
        </div>
        <div class="text-pq_yellow text-12 --font-secondary font-bold" v-if="body.subTitle">{{ body.subTitle }}</div>
        <div class="grid gap-5">
            <div class="grid text text-6 mb-5 _richText" v-html="body.richText.replaceAll('cite', 'blockquote')"/>
            <component
                class="flex-initial justify-center"
                v-if="body.element"
                v-for="(element, i) in body.element"
                :key="i"
                :is="element.name.model || 'div'"
                :set ="element[`${element.name.model}Set`]"
                >{{ element }}
            </component>
        </div>
    </div>
</div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'
export default {
  props: ['body'],
    data: () => ({
      st: null,
  }),
  mounted() {
        gsap.registerPlugin(ScrollTrigger)
        this.gsap_init()
    },
    beforeDestroy() {
        if (st && st.kill) {
            st.kill()
        }
    },
    methods: {
        gsap_init() {
            this.st = ScrollTrigger.create({
                trigger: this.$el,
                start: 'top 20%',
                end: 'bottom 20%',
                onEnter: () => {
                    this.$nuxt.$emit('change_current_header', this.$Slugify(this.body.title))
                },
                onEnterBack: () => {
                    this.$nuxt.$emit('change_current_header', this.$Slugify(this.body.title))
                },
                // markers: true,
            })
        },
    },
}
</script>

<style lang="scss">
._richText {
  a {
    color: var(--pq_light_blue);
    text-decoration: underline;
  }
  h2 {
    color: var(--pq_yellow);
    font-family: var(--font-secondary);
    font-size: 2em;
    font-weight: bold;
    margin: 0.67em 0;
  }
  blockquote {
    color: var(--pq_light_blue);
    font-family: var(--font-secondary);
    font-size: 1.5em;
    padding: 0.67em;
    border-style: solid;
    border-color: var(--pq_dark_blue);
    border-left-width: 2px;
  }
  hr {
    margin-bottom: 1.5em;
    margin-top: 1.5em;
    border-style: dotted;
    border-top-width: 0.7em;
    border-color: var(--pq_yellow);
  }
}
</style>