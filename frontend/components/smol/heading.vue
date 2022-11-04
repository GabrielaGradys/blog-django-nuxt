<template>
    <div class="my-3" :class="headers[attrs.level]" :id="$Slugify(content[0].text)">
        {{ content[0].text }}
    </div>
</template>

<script>
export default {
    props: ['attrs', 'content'],
    data: () => ({
        headers: {
            1: 'text-pq_light_blue text-15 --font-secondary font-bold',
            2: 'text-pq_yellow text-10 --font-secondary font-bold',
            3: 'text-pq_dark_blue text-5 uppercase font-bold',
        },
    }),
}
</script>

<style scoped></style>
