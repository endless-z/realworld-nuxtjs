<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>{{user.bio}}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ user.following ? 'Edit Profile Settings': 'Follow Eric Simons'}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <my-articles :articles="articles"/>
  </div>
</template>

<script>
import { getProfile, getArticles } from '@/api/profile'
import MyArticles from './components/my-articles'
export default {
  middleware: ['authenticated'],
  name: "UserProfile",
  components: {
    MyArticles
  },
  data () {
    return {
      user: '',
    }
  },
  async asyncData ({params}) {
    const limit = 5
    // console.log(user)
    const username = params.username
    const [ userInfo, article ] = await Promise.all([
      getProfile(username),
      getArticles({
        author: username,
        limit,
        offset: 0
      })
    ])
    const user = userInfo.data.profile
    const { articles } = article.data
    console.log(articles, 'user')
    return {
      user,
      articles
    }
  }
};
</script>

<style>
</style>