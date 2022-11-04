<template>
    <a :href="link" class="block relative overflow-hidden">
        <Photo :src_dsk="img" class="h-full w-full" />
        <div class="_bg grid items-center justify-center absolute top-0 left-0 h-full w-full">
            <div class="_hvr font-bold px-8 text-center leading-14">
                {{ txt }}
                <div
                    class="
                        hover:bg-pq_light_blue
                        transition-colors
                        duration-500
                        bg-pq_dark_blue
                        rounded-full
                        text-white
                        w-max
                        p-3
                        justify-center
                        mx-auto
                        mt-5
                        leading-14
                        text-3.5
                    "
                >
                    Przejdź do wpisów
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'CallToAction',
    props: ['img', 'txt', 'link'],
}
</script>

<style scoped lang="scss">
.relative {
    ._bg {
        background-color: transparent;
        transition: background-color 0.7s ease-in-out;
    }
    &:hover ._bg {
        background-color: #ffbd59cc;
    }
    ._hvr {
        position: relative;
        top: 100%;
        transition: top 0.7s ease-in-out;
    }
    &:hover ._hvr {
        top: 0;
    }
}
</style>
