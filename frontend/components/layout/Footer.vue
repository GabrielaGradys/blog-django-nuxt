<template>
    <div class="absolute bg-pq_sky_blue">
        <Photo
            :src_dsk="require('~/assets/svg/newletter.gif')"
            class="absolute h-50 left-20 bottom-30"
            contain="true"
        />
        <div id="mc_embed_signup" class="right-0 p-10 grid grid-cols-2 justify-between align-middle">
            <div class="grid p-15 ml-42">
                <heading
                    class="text-left drop-shadow-sm"
                    :attrs="{ level: 1 }"
                    :content="[{ text: 'Zapisz się na Newsletter' }]"
                />
                <div class="text-left">
                    Raz w miesiącu dostaniesz ode mnie list z nowościami na blogu i moimi osobistymi przemyśleniami.
                </div>
            </div>
            <form
                action="https://psychologiczneiq.us19.list-manage.com/subscribe/post?u=a5129f0c994c67f067d5fc3b2&amp;id=87465206b6&amp;f_id=002a80e4f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="grid validate content-center m-15"
                target="_self"
            >
                <div id="mc_embed_signup_scroll" class="text-pq_dark_blue grid">
                    <div class="flex h-12">
                        <input
                            type="email"
                            placeholder="Twój Adres Email"
                            name="EMAIL"
                            class="required email h-full w-100 rounded-l-2xl text-gray-400 py-2 px-3"
                            id="mce-EMAIL"
                            required
                        />
                        <input
                            type="submit"
                            value="Zapisuję się!"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="text-8 --font-secondary px-10 rounded-r-2xl text-white text-center font-bold bg-pq_light_blue hover:bg-pq_dark_blue hover:text-pq_light_blue transition ease-in duration-200 transform hover:-translate-x-1"
                        />
                    </div>
                    <div hidden="true"><input type="hidden" name="tags" value="6238625" /></div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display: none"></div>
                        <div class="response" id="mce-success-response" style="display: none"></div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px" aria-hidden="true">
                        <input type="text" name="b_a5129f0c994c67f067d5fc3b2_87465206b6" tabindex="-1" value="" />
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!--End mc_embed_signup-->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
