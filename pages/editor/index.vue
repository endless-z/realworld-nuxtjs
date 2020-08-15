<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" v-model="article.title" placeholder="Article Title" required>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" v-model="article.description" placeholder="What's this article about?" required>
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" v-model="article.tagList" @keyup.enter="onSubmit" placeholder="Enter tags">
                <div class="tag-list" v-if="tagList.length > 0">
                  <span class="tag-default tag-pill" v-for="(item, index) in tagList" :key="index">
                  <i class="ion-close-round"></i>
                  {{item}}
                </span>
                </div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" @click="uploadArticle" type="button">
              Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { newArticle, editArticle } from '@/api/edit'
import { getArticle } from '@/api/article'
export default {
  // 在路由匹配组件渲染之前先执行中间件处理
  middleware: ['authenticated'],
  name: 'EditorIndex',
  data () {
    return {
      article: {
        title: '',
        body: '',
        description: '',
        tagList: ''
      },
      tagList: []
    }
  },
  async asyncData ({ params }) {
    if (!params.slug) return
    const { data } = await getArticle(params.slug)
    const { article } = data
    const tagList = article.tagList
    article.tagList = ''
    return {
      tagList,
      article
    }
  },
  methods: {
    async uploadArticle () {
      this.article.tagList = this.article.tagList === '' ? this.tagList : this.article.tagList
      if (this.article.slug) {
        const { data } = await editArticle({article: this.article})
        this.$router.push('/article/'+ data.article.slug)
      } else {
        const { data } = await newArticle({article: this.article})
        this.$router.push('/article/'+ data.article.slug)
      }
    },
    onSubmit () {
      this.tagList.push(this.article.tagList)
      this.article.tagList =  ''
    }
  },
  watchQuery: ['slug'],
}
</script>

<style>

</style>