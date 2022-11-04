<template>
    <div>
        <div class="flex justify-center items-center gap-20">
            <div class="grid text-10 text-pq_light_blue font-bold --font-secondary gap-5">
                <div class="text-pq_light_blue text-15 text-center --font-secondary font-bold">
                    Ocena
                </div>
                <div
                    v-for="(value, key) in data"
                    :key="key"
                >
                    <div v-if="grade_translate[key] != 'skip'" class="flex justify-between gap-10 items-center">
                      <div class="">{{ grade_translate[key] }}</div>
                      <div class="flex justify-end flex-auto">
                          <component
                              v-for="i in 5"
                              :key="i"
                              :is="grade_translate[key].replace(' ', '')"
                              :color="i <= parseInt(value) ? '#FFBD59' : '#615c5d'"
                              class="w-10 h-10"
                          />
                      </div>
                      <div class="div text-pq_light_blue w-min">({{ value }})</div>
                    </div>
                </div>
            </div>
            <Photo :src_dsk="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${data.bookCover}`)" contain="true" class="h-150 w-fit" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data: () => ({
          grade_translate: {
            general: 'Ocena Ogolna',
            readability: 'Przystepnosc Czytania',
            valence: 'Wartosc Praktyczna',
            credibility: 'Wiarygodnosc Autora',
            knowledge: 'Wiedza Psychologiczna',
            bookCover: 'skip',
            '__typename': 'skip',
          }

      }),
}
</script>

<style scoped></style>
