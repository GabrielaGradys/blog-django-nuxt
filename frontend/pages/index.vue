<template>
    <main class="bg-gradient-to-b from-pq_light_blue via-pq_sky_blue to-pq_pastel_blue">
        <div class="relative">
            <h1
                @click="on_post_list_change(0)"
                class="drop-shadow-md p-5 absolute top-0 text-bold text-22 left-1/2 -translate-x-1/2 --font-secondary bg-clip-text text-transparent bg-gradient-to-b from-white to-pq_sky_blue"
            >
                Psychologiczne IQ
            </h1>
            <Photo :src_dsk="require('~/assets/img/baner/baner_nowy.png')" class="w-screen h-220" contain="true" />

            <div id="o_mnie" class="group">
                <div class="absolute right-10 top-10 items-center justify-center">
                    <Photo
                        :src_dsk="require('~/assets/img/Gabi_portret.png')"
                        class="h-22 w-22 rounded-full shadow-md"
                        contain="true"
                    />
                    <div
                        class="drop-shadow-md text-7 bg-clip-text text-transparent bg-gradient-to-b from-[#91caf2] to-pq_sky_blue text-center --font-secondary"
                    >
                        O mnie
                    </div>
                </div>
                <div
                    class="absolute top-0 right-30 opacity-0 invisible group-hover:visible group-hover:opacity-80 _transition cursor-pointer"
                >
                    <div class="absolute top-15 right-8 w-8 h-8 items-center justify-center bg-white rotate-45"></div>
                    <div
                        class="absolute right-10 w-110 top-5 shadow-md bg-gradient-to-bl from-white via-pq_sky_blue rounded-3xl items-center justify-center p-5"
                    >
                        <div class="--font-secondary text-10 text-pq_light_blue text-center pb-5">
                            Hej! Tu <Animation>Gabi</Animation>
                        </div>
                        <div class="text-pq_dark_blue text-center text-5">
                            Jestem psychologiem, a moją pasją jest dzielenie się z ludźmi całą magią, jaką chowa w sobie
                            funkcjonowanie człowieka. Zostań ze mną i podnieś swoje psychologiczne IQ.
                            <br />
                            Kliknij, jeśli chcesz dowiedzieć się więcej.
                            <br />
                            Miłej Lektury!
                        </div>
                    </div>
                </div>
            </div>

            <div id="blogs_sections" class="absolute grid grid-cols-3 bottom-0 h-70 w-full -translate-y-60">
                <div class="" @click="on_post_list_change(1)">
                    <Hover
                        txt="Miejsce pełne merytorycznych informacji i samych sprawdzonych faktów. Zawsze staram się ująć każdy temat zawodowo, ale lekko."
                    />
                </div>
                <div class="" @click="on_post_list_change(2)">
                    <Hover
                        txt="Tutaj znajdziesz recenzje, najlepsze pozycje do czytania, oglądania i słuchania! Śmietanka psychologiczna istniejących książek, filmów i nie tylko!"
                    />
                </div>
                <div class="" @click="on_post_list_change(3)">
                    <Hover
                        txt="To miejsce, gdzie dziele się moimi subiektywnymi przeżyciami, doświadczeniami i przemyśleniami. Nie ma tu przypisów i bibliografii, ale za to masa serca!"
                    />
                </div>
            </div>
        </div>
        <div id="blog_posts" class="relative mx-5 -translate-y-80">
            <div class="relative p-10">
                <div
                    class="bg-clip-text drop-shadow-md text-transparent bg-gradient-to-b from-pq_dark_blue via-[#236787] to-pq_light_blue --font-secondary text-15 my-10 text-left"
                >
                    <!--                    {{ post_list_title }}-->
                </div>
                <ArticleList :articles="filtered_articles" type="long"></ArticleList>
            </div>
        </div>
    </main>
</template>

<script>
import gql from 'graphql-tag'
export default {
    head() {
      return {
        title: "Strona Główna"
      };
    },
    created() {
        this.$nuxt.$on('change_tag', (tag) => {
            this.filter_articles('postsByTag', tag)
        })
    },
    beforeDestroy() {
        this.$nuxt.$off('change_tag')
    },
    data: () => ({
        post_list_search: {
            0: 'blog',
            1: 'strefa-wiedzy',
            2: 'psychoteka',
            3: 'z-mojej-perspektywy',
        },
        post_list_title: 'Najnowsze na blogu',
        post_list_titles: [
            'Najnowsze na blogu',
            'Najnowsze w Strefie Wiedzy',
            'Najnowsze w Psychotece',
            'Najnowsze z Mojej Perspektywy',
        ],
        filtered_articles: [],
    }),
    mounted() {
        // console.log(this.publishedPosts)
        this.filtered_articles = [...this.postsData]
    },
    methods: {
        on_post_list_change(n) {
            if (n===0) {
              this.filtered_articles = this.postsData
              return
            }
            this.post_list_title = this.post_list_titles[n]
            this.filter_articles('postsByCategory', this.post_list_search[n])
        },
        async filter_articles(query, search_value) {
          const res = await this.$apollo.query({
              query: gql`query {
                    ${query}(value: "${search_value}") {
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
          console.log(res.data[query])
          this.filtered_articles = res.data[query]
        },
    },
  async asyncData({app, params }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`query {
        publishedPosts {
          title
          subtitle
          publishDate
          metaDescription
          slug
          teaser
          cover
          author {
            user {
              firstName
              lastName
            }
          }
          tags {
            name
          }
          category {
            name
          }
        }
      }`
    })
    const postsData = res.data.publishedPosts
    // console.log(postsData)
    return {postsData}
  }
}
</script>

<style scoped>
._gradient {
    background: linear-gradient(
        180deg,
        rgba(175, 221, 253, 0.8) 0%,
        rgba(255, 188, 89, 0.8) 40%,
        rgba(255, 188, 89, 0.8) 60%,
        rgba(255, 255, 255, 1) 100%
    );
}
._transition {
    transition: opacity 0.3s, visibility 0.3s;
}
</style>
