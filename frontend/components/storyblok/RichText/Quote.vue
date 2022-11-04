<template>
    <div>
        <div class="relative divide-pq_dark_blue divide-x-2 p-3">
            <Photo
                :src_dsk="require('~/assets/svg/blockquote.svg')"
                class="absolute left-0 top-0 h-20"
                contain="true"
            />
            <div
                v-for="(text, i) in content[0].content"
                :key="i"
                class="py-1 px-3 ml-22 text-10 text-pq_light_blue --font-secondary"
            >
                {{ text.teaser }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['attrs', 'content'],
}
</script>

<style scoped></style>
