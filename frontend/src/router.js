import Vue from 'vue'
import VueRouter from 'vue-router'

import {ArticleList, BlogPost} from "../../.nuxt/components";
import Author from "~/components/storyblok/Author";
import PostsByTag from "~/components/storyblok/PostsByTag";

Vue.use(VueRouter)

const routes = [
  { path: '/author/:username', component: Author },
  { path: '/post/:slug', component: BlogPost },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: ArticleList },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})
export default router