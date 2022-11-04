module.exports = {
    mode: 'jit',
    purge: {
        options: {
            // Whitelisting some classes to avoid purge
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                pq_light_blue: '#38B6FF',
                pq_dark_blue: '#15253D',
                pq_yellow: '#FFBD59',
                pq_gray: '#615c5d',
                pq_sky_blue: '#afddfd',
                pq_pastel_blue: '#bee1fa',
            },
            // gridRow: () => {
            //     let ret = {}
            //     for (let i = 1; i <= 20; i++) {
            //         ret[`span-${i}`] = `span ${i} / span ${i}`
            //     }
            //     return ret
            // },
        },
        spacing: () => {
            let ret = {}
            for (let i = 0; i <= 1000; i += 4) {
                ret[i / 4] = `${i / 16}rem`
            }
            for (let i = 1008; i <= 2000; i += 16) {
                ret[i / 4] = `${i / 16}rem`
            }
            return ret
        },
        fontSize: () => {
            let ret = {}
            for (let i = 0; i <= 132; i += 2) {
                ret[i / 4] = `${i / 16}rem`
            }
            return ret
        },
        lineHeight: () => {
            let ret = {}
            for (let i = 10; i <= 20; i++) {
                ret[i] = `${i / 10}`
            }
            return ret
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
