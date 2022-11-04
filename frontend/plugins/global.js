import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'

gsap.registerPlugin(ScrollTrigger)

export default (context, inject) => {
    const img = (img_obj, desktop = true, size = null) => {
        if (!img_obj || img_obj.image === undefined || img_obj.imagemob === undefined) {
            return ''
        }
        let _img = desktop || !img_obj.imagemob ? img_obj.image : img_obj.imagemob
        if (_img.sizes && size) {
            return _img.sizes[size] ? _img.sizes[size] : ''
        }
        return _img.url ? _img.url : ''
    }
    inject('img', img)
    context.$img = img

    const fadeUpInit = () => {
        gsap.utils.toArray('.fadeUp').forEach((elem) => {
            let _delay = elem.getAttribute('fadeUpDelay')
            let _fire_soon = elem.getAttribute('fadeUpFireSoon')
            gsap.fromTo(
                elem,
                { y: `${100 / 16}rem`, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,

                    duration: 1,
                    delay: _delay ? _delay : 0,
                    paused: true,
                    ease: 'sine.out',

                    scrollTrigger: {
                        trigger: elem,
                        start: _fire_soon ? '-=100 bottom' : '-=100 80%',
                        end: _fire_soon ? '-=100 bottom' : '-=100 80%',
                    },
                }
            )
        })
        ScrollTrigger.refresh()
    }
    inject('fadeUpInit', fadeUpInit)
    context.$fadeUpInit = fadeUpInit

    const getRootVar = (varName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(varName)
    }
    inject('getRootVar', getRootVar)
    context.$getRootVar = getRootVar

    const toggleBodyScroll = (force = null) => {
        if (force === null) {
            document.documentElement.classList.toggle('overflow-hidden')
            document.body.classList.toggle('overflow-hidden')
        }
        if (force === true) {
            document.documentElement.classList.add('overflow-hidden')
            document.body.classList.add('overflow-hidden')
        }
        if (force === false) {
            document.documentElement.classList.remove('overflow-hidden')
            document.body.classList.remove('overflow-hidden')
        }
    }
    inject('toggleBodyScroll', toggleBodyScroll)
    context.$toggleBodyScroll = toggleBodyScroll

    const getToken = () => {
        return 'riNUqyB3s3wFEjUelf55Qwtt'
    }
    inject('getToken', getToken)
    context.$getToken = getToken

    const Slugify = (text) => {
        if (!text) return ''
        const change = {
            ą: 'a',
            ś: 's',
            ć: 'c',
            ż: 'z',
            ź: 'z',
            ó: 'o',
            ę: 'e',
            ł: 'l',
            ń: 'n',
        }
        return text
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll(/[^a-z0-9_]/g, function (not_pl) {
                return change[not_pl] || ''
            })
    }
    inject('Slugify', Slugify)
    context.$Slugify = Slugify

    const Gradify = (text) => {
        if (!text) return ''
        const change = {
            ą: 'a',
            ś: 's',
            ć: 'c',
            ż: 'z',
            ź: 'z',
            ó: 'o',
            ę: 'e',
            ł: 'l',
            ń: 'n',
        }
        return text.replaceAll(' ', '').replaceAll(/[^a-zA-Z0-9_]/g, function (not_pl) {
            return change[not_pl] || ''
        })
    }
    inject('Gradify', Gradify)
    context.$Gradify = Gradify

    const GetBlogPostData = async ($axios, query, error, app, params) => {
        try {
            let response = await $axios.$get(
                `/blog/${params.site}/${
                    params.slug
                }?token=${app.$getToken()}&version=published&resolve_relations=recomended_articles`
            )
            let grade = response.story.content.content.filter(function (content) {
                return content['component'] === 'Book Grade'
            })
            let spis_tresci = {}

            response.story.content.content.map((el) => {
                if (el['component'] !== 'paragraph' || !el['Header']) return
                spis_tresci[el['Header']] = []
                el['paragraph']['content'].map((sub_el) => {
                    if (sub_el['type'] !== 'heading' || sub_el['attrs']['level'] !== 2) return
                    spis_tresci[el['Header']].push(sub_el['content'][0]['text'])
                })
            })
            return {
                grade: grade[0] || null,
                spis_tresci: spis_tresci,
                content: response.story.content,
                tags: response.story.tag_list,
                articles: response.rels,
                date: new Date(Date.parse(response.story.published_at)),
            }
        } catch (err) {
            console.log(err)
            if ($axios.isCancel(error)) {
                console.log('Aborted')
            } else {
                error({ statusCode: 500, message: 'Connection error' })
                return
            }
        }
    }
    inject('GetBlogPostData', GetBlogPostData)
    context.$GetBlogPostData = GetBlogPostData
}
