<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link class="nav-link"
              :class="{
                active: tab === 'my_article'
              }"
              exact
              :to="{
                name: 'profile',
                query: {
                  tab: 'my_article'
                }
              }" 
              >My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" 
              :class="{
                active: tab === 'favorit_article'
              }"
              :to="{
                name: 'profile',
                query: {
                  tab: 'favorit_article'
                }
              }">Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="items in articles" :key="items.slug">
          <div class="article-meta">
            <nuxt-link to="/">
              <img :src="items.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link to="/" class="author">{{items.author.username}}</nuxt-link>
              <span class="date">{{items.createdAt | date('MMM DD, YYYY')}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> {{items.favoritesCount}}
            </button>
          </div>
          <nuxt-link to="/" class="preview-link">
            <h1>{{items.title}}</h1>
            <p>{{items.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles } from '@/api/profile'
export default {
  name: 'MyArticle',
  data () {
    return {
      articles: []
    }
  },
  async ayyncData({ query}) {
    alert(1)
    console.log(query.tab || 'my_article', '000')
    const tab = query.tab || 'my_article'
    const limit = 5
    const loadArticles = tab === 'my_article'
    ? getArticles
    : getArticles
    const { data } = await loadArticles({
      author: this.user.username,
      limit,
      offset: 0
    })
    // console.log(data)
    // this.tab = tab
    // this.articles = data.articles
    return {
      tab,
      articles
    }
  },
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style>

</style>