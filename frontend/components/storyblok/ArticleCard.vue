<template>
    <div class="grid grid-flow-row auto-rows-max w-full h-full bg-white shadow-xl rounded-xl overflow-hidden">
        <NuxtLink :to="'/' + article.slug">
            <Photo
                :src_mob="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${article.cover}`)"
                alt="lorm ipsum"
                :class="show_tags ? 'h-fit' : 'h-40'"
                contain="true"
                class="w-full object-cover pointer-events-none"
            />
            <div class="grid w-full place-items-start align-top gap-4 pt-6 p px-8 mb-4">
                <div class="w-full divide-pq_sky_blue divide-y">
                    <div class="text-5 py-2 text-pq_dark_blue">
                        {{ `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}` }}
                    </div>
                    <h3
                        class="text-pq_dark_blue py-2 --font-secondary font-bold"
                        :class="show_tags ? 'text-9' : 'text-7'"
                    >
                        {{ article.title }}
                    </h3>
                </div>
                <div class="text-5 text-pq_dark_blue" :class="show_tags ? 'opacity-100' : 'hidden'">
                    {{ article.teaser.slice(0, 140) + '(...)' }}
                </div>
            </div>
        </NuxtLink>
        <div class="flex flex-wrap mx-6 mb-6" :class="show_tags ? 'opacity-100' : 'hidden'">
            <div class="flex-none" v-for="(tag, i) in tags" :key="tag.name" @click="change_tag(tag.name)">
                <button
                    class="button py-2 m-2 px-3 text-white font-bold border border-transparent rounded-3xl bg-pq_yellow hover:bg-opacity-0 hover:text-pq_yellow hover:border-pq_yellow transition ease-in duration-200 transform hover:-translate-y-1"
                >
                    {{ tag.name}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['article', 'date', 'tags', 'show_tags'],
    data: () => ({
        months: [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień',
        ],
    }),
    methods: {
        change_tag(tag) {
            this.$nuxt.$emit('change_tag', tag)
        },
    },
}
</script>
