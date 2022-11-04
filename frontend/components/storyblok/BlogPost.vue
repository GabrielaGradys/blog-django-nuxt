<template>
    <div>
        <div class="flex bg-white">
            <div _id="main content" class="grid w-full h-full mt-10 gap-10">
                <h2 class="text-pq_light_blue text-15 text-center --font-secondary font-bold">
                    {{ content.subtitle }}
                </h2>
                <Photo :src_dsk="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${content.cover}`)" contain="true" class="h-150 w-full" />
                <h1 class="text-pq_yellow text-0 text-center --font-secondary font-bold">{{ content.title }}</h1>
                <BookGrade v-if="content.grade" class="pl-30 pr-10" :data="content.grade" />
                <SpisTresci :spis_tresci="table_of_contents" />
                    <Paragrah
                        class="pl-30 pr-10 gap-5"
                        v-for="(paragraph, i) in content.body"
                        :key="i"
                        :body="paragraph"
                    >
                    </Paragrah>
            </div>
            <div _id="sidebar" class="hidden md:flex flex-col w-1/3 bg-white bg-opacity-20 px-20 pt-20">
                <div _id="metadata" class="grid justify-center gap-5">
                    <div class="flex flex-row gap-5">
                        <Photo
                            :src_dsk="require('~/assets/svg/calendar.svg')"
                            class="basis-1/3 w-12 h-12 bg-pq_pastel_blue rounded-full p-1"
                            contain="true"
                        />
                        <div class="grid">
                            <div class="basis-2/3 grid text-4 text-pq_gray content-center">Data Publikacji:</div>
                            <div class="basis-2/3 grid text-5 text-pq_dark_blue content-center">
                                {{ `${publishDate.getDate()} ${months[publishDate.getMonth()]}, ${publishDate.getFullYear()}` }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-5">
                        <Photo
                            :src_dsk="require('~/assets/svg/zegar_2.svg')"
                            class="basis-1/3 w-12 h-12 bg-pq_pastel_blue rounded-full p-1"
                            contain="true"
                        />
                        <div class="grid">
                            <div class="basis-2/3 grid text-4 text-pq_gray content-center">Czas czytania:</div>
                            <div class="basis-2/3 grid text-5 text-pq_dark_blue content-center">
                                {{ `${readTime} minut` }}
                            </div>
                        </div>
                    </div>
                    <NuxtLink class="flex flex-row gap-5" :to="content.author.website">
                        <Photo
                            :src_dsk="require('~/assets/img/Gabi_portret.png')"
                            class="basis-1/3 w-12 h-12 bg-pq_pastel_blue rounded-full p-1"
                            contain="true"
                        />
                        <div class="grid">
                            <div class="basis-2/3 grid text-4 text-pq_gray content-center">Autorka:</div>
                            <div class="basis-2/3 grid text-5 text-pq_dark_blue content-center">
                              {{ content.author.user.firstName  }} {{content.author.user.lastName}}
                            </div>
                        </div>
                    </NuxtLink>
                    <div class="flex flex-row gap-5">
                        <Photo
                            :src_dsk="require('~/assets/svg/tag.svg')"
                            class="basis-1/3 w-12 h-12 bg-pq_pastel_blue rounded-full p-1"
                            contain="true"
                        />
                        <div class="grid mb-4">
                            <div class="grid text-4 text-pq_gray content-center">Tagi:</div>
                            <div class="flex flex-wrap content-center">
                                <NuxtLink v-for="(tag, i) in content.tags" :key="i" :to="`/?tag=${tag.name}`">
                                    <button
                                        class="button py-2 m-2 px-3 text-white font-bold border border-transparent rounded-3xl bg-pq_yellow hover:bg-opacity-0 hover:text-pq_yellow hover:border-pq_yellow transition ease-in duration-200 transform hover:-translate-y-1"
                                    >
                                        {{ tag.name }}
                                    </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <heading
                    v-if="related_articles"
                    class="text-center justify-start drop-shadow-sm"
                    :attrs="{ level: 2 }"
                    :content="[{ text: 'Powiązane artykuły' }]"
                />
                <ArticleList v-if="related_articles" :articles="related_articles"></ArticleList>
                <div _id="social_media" class="grid p-6 gap-3">
                    <heading
                        class="text-center justify-start drop-shadow-sm"
                        :attrs="{ level: 2 }"
                        :content="[{ text: 'Social Media' }]"
                    />
                    <div class="grid grid-cols-2 align-middle content-center justify-center">
                        <NuxtLink
                            type="button"
                            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-2xl text-sm text-center inline-flex items-center mr-2 mb-2"
                            :to="'/'"
                        >
                            <Photo
                                :src_dsk="require('~/assets/svg/instagram.svg')"
                                class="w-7 h-7 mr-2 ml-3"
                                contain="true"
                            />
                            <p class="text-xl font-bold pt-0.5">Instagram</p>
                        </NuxtLink>
                        <NuxtLink
                            type="button"
                            class="px-2 py-1 text-white bg-[#3b5998] hover:bg-pq_dark_blue font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                            :to="'/'"
                        >
                            <Photo :src_dsk="require('~/assets/svg/facebook.svg')" class="w-7 h-7" contain="true" />
                            <div class="text-xl font-bold pt-0.5">Facebook</div>
                        </NuxtLink>
                        <!--                    <div class="hidden">{{// TODO:'kiedyś tu będzie feed z instagrama'}}</div>-->
                    </div>
                </div>
                <SpisTresci :spis_tresci="table_of_contents" type="small" :current_header="current_header" />
            </div>
        </div>
        <div
            _id="about_author"
            class="grid mx-40 mt-15 mb-10 bg-opacity-30 border border-pq_sky_blue rounded-3xl shadow-md"
        >
            <heading
                class="text-center text-pq_light_blue drop-shadow-sm pt-5 text-13"
                :attrs="{ level: 2 }"
                :content="[{ text: 'O Autorce wpisu' }]"
            />
            <div class="flex justify-center align-middle content-center">
                <Photo
                    :src_dsk="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${content.author.photo}`)"
                    class="m-10 w-40 rounded-full"
                    contain="true"
                />
                <div class="grid justify-start px-10 pb-10 w-2/3">
                    <heading class="drop-shadow-sm" :attrs="{ level: 2 }" :content="[{ text: `${content.author.user.firstName} ${content.author.user.lastName}` }]" />
                    <div class="grid text-pq_dark_blue text-6">
                        {{content.author.bio}}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="related_articles" _id="recommended_articles" class="bg-pq_sky_blue bg-opacity-40 p-20 mt-10">
            <heading
                class="text-center justify-start drop-shadow-sm -mt-10 p-5 pb-10"
                :attrs="{ level: 1 }"
                :content="[{ text: 'Mogą Cię zainteresować' }]"
            />
            <ArticleList :articles="related_articles" type="long" class="px-40" />
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
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
  props: ['content', 'publishDate', "readTime", "table_of_contents", "current_header", "related_articles"],
}
//TODO: dodatkowe elementy wpisu (tabela, ocena_ksizki, inne w tym temacie)
</script>

<style scoped></style>
