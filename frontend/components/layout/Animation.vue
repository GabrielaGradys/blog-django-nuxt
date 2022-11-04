<template>
    <span class="">
        <slot />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
                fill="none"
                stroke="#FFBD59"
                stroke-width="8"
                d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
            ></path>
        </svg>
    </span>
</template>

<script>
export default {
    name: 'Animation',
}
</script>

<style scoped lang="scss">
span {
    position: relative;
}
svg {
    position: absolute;
    bottom: -0.1em;
    left: 0;
    width: 100%;
    height: 100%;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    pointer-events: none;
    animation: underline 3s ease-in-out forwards infinite;
}
@keyframes underline {
    0% {
        stroke-dashoffset: 1500;
        opacity: 1;
    }
    20% {
        stroke-dashoffset: 1500;
        opacity: 1;
    }
    50% {
        stroke-dashoffset: 0;
    }
    70% {
        stroke-dashoffset: 0;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
