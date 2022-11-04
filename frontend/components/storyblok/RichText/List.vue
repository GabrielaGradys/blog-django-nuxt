<template>
    <div>
        <ul
            :class="type === 'ordered_list' ? 'list-decimal' : 'list-disc'"
            class="list-inside text-pq_dark_blue text-7"
        >
            <li v-for="(line, i) in content" :key="i" class="p-2">{{ line.content[0].content[0].text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['content', 'type'],
}
</script>

<style scoped></style>
