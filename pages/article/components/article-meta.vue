<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }"
      class="author"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{ article.createAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username !== user.username">
      <button class="btn btn-sm btn-outline-secondary"
      :class="{
        actice: article.author.following
      }">
        <i class="ion-plus-round"></i>
        &nbsp;
        {{article.following ? 'Unfollow' : 'Follow'}}
        <span class="counter">{{article.author.username}}</span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" 
      :class="{
        actice: article.author.favorited
      }">
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post
        <span class="counter">{{article.favoritesCount}}</span>
      </button>
    </template>

    <template v-else>
      <nuxt-link class="btn btn-outline-secondary btn-sm"
      :to="{
        name: 'editor',
        params: {
          slug: article.slug
        }
      }"
      :class="{
        actice: article.author.following
      }">
        <i class="ion-edit"></i>
        &nbsp;
        Edit Article
      </nuxt-link>
      
      &nbsp;&nbsp;
      <button class="btn btn-outline-danger btn-sm"
      @click="delArticle"
      :class="{
        actice: article.author.favorited
      }">
        <i class="ion-trash-a"></i> 
        &nbsp;
        Delete Article
      </button>
    </template>
  </div>
</template>

<script>
import { deleteArticle } from '@/api/edit'
import { mapState } from 'vuex'
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async delArticle () {
      await deleteArticle(this.article)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style>
</style>