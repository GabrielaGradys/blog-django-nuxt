<template>
  <div class="grid gap-6 align-center items-center justify-content">
    <div
        v-for="(element, i) in set"
        :key="i"
        class="gap-5 "
        :class="element.imagePosition == 'UP' || element.imagePosition =='DO'? 'grid': 'flex align-center items-center'">
      <Photo
          v-if="element.imagePosition == 'UP'||element.imagePosition == 'LE'"
          :src_dsk="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${element.image}`)"
          contain="true"
          class="w-1/5"
      />
      <div class="grid text text-6"
           :class="element.imagePosition == 'RI' || element.imagePosition == 'LE'? 'w-4/5': 'w-full'"
           v-html="element.richText"/>
      <Photo
          v-if="element.imagePosition == 'DO'||element.imagePosition == 'RI'"
          :src_dsk="require(`/Users/Programowanko/PycharmProjects/psychologiczne_iq-django/backend/media/${element.image}`)"
          contain="true"
          class="w-1/5"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['set']
}
</script>

<style scoped>

</style>