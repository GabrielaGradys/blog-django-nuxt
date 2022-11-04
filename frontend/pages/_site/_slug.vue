<template>
    <main>
        <BlogPost
            :content="data"
            :publishDate="new Date(Date.parse(data.publishDate))"
            :readTime ="30"
            :table_of_contents = "table_of_contents"
            :current_header = "current_header"
            :related_articles = "related_articles"
        />
    </main>
</template>

<script>
import gql from "graphql-tag";

export default {
    data: () => ({
        current_header: null,
    }),
    async asyncData({app, params }) {
      const client = app.apolloProvider.defaultClient;
      const fullSlug = `"${params.site}/${params.slug}"`
      const res = await client.query({
        query: gql`query {
            postBySlug(slug: ${fullSlug}) {
            title
            subtitle
            publishDate
            cover
            author {
              user {
                firstName
                lastName
              }
              bio
              website
              photo
            }
            tags {
              name
            }
            category {
              name
            }
            grade{
                  bookCover
                  general
                  readability
                  valence
                  credibility
                  knowledge
                }
            body{
              title
              subTitle
              richText
              element {
                name {
                model
                }
                textwithimageSet {
                  image
                  richText
                  imagePosition
                }
              }
            }
          }
         }`
      })
      const data = res.data.postBySlug

      let table_of_contents = {}
      data.body.map((el) => {
          if (!el['title']) return
          table_of_contents[el['title']] = []
          const sub_header = Array.from(el['richText'].matchAll(/<h2>?.+<\/h2>/gm), (m) => m[0])
          sub_header.map((sub_el) => {
            table_of_contents[el['title']].push(sub_el.replaceAll('<h2>', '').replaceAll('</h2>', ''))
          })
      })

      const response = await client.query({
        query: gql`query {
              relatedPosts(slug: ${fullSlug}) {
                title
                subtitle
                publishDate
                cover
                teaser
                author {
                  user {
                    firstName
                    lastName
                  }
                }
                tags {
                  name
                }
              }
             }`
      })
      const related_articles = response.data.relatedPosts
        return {data, table_of_contents, related_articles}
    },
    mounted() {
        this.$nuxt.$on('change_current_header', (current_header) => {
            this.current_header = current_header
        })
    },
}
</script>

<style scoped></style>
