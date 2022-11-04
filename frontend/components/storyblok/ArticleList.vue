<template>
    <div class="grid gap-12 place-items-center justify-center" :class="type === 'long' ? 'grid-flow-col' : ''">
        <ArticleCard
            v-for="(article, i) in articles"
            :key="i"
            :article="article"
            :tags="article.tags"
            :show_tags="type === 'long'"
            :date ="new Date(Date.parse(article.publishDate))"
        />
    </div>
</template>

<script>
export default {
    props: ['articles', 'type'],
}
</script>
