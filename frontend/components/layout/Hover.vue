<template>
    <div
        class="
            relative
            flex flex-col
            gap-6
            justify-center
            items-center
            p-8
            opacity-0
            hover:opacity-100
            transition-opacity
            duration-300
            cursor-pointer
        "
    >
        <div class="absolute bg-pq_yellow top-0 left-0 h-full w-full filter blur-3xl opacity-80"></div>
        <div class="relative text-pq_dark_blue font-bold text-5 text-center mt-18 --font-primary">
            {{ txt }}
        </div>

        <div
            class="
                relative
                bg-pq_sky_blue
                rounded-3xl
                px-6
                py-4
                items-center
                justify-center
                text-pq_light_blue
                font-bold
                text-center
            "
        >
            Zobacz Posty
        </div>
    </div>
</template>

<script>
export default {
    props: ['txt'],
}
</script>

<style scoped></style>
