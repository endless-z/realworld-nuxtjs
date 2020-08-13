<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="uploadUserInfo">
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" v-model="user.image" placeholder="URL of profile picture" />
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" required/>
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="user.bio"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email" required/>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" v-model="user.password" placeholder="Password" required/>
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadUser, getUserInfo } from '@/api/settings'
export default {
  middleware: ['authenticated'],
  name: "SettingIndex",
  data() {
    return {
      user: {
        image: '',
        username: '',
        password: '',
        bio: '',
        email: ''
      }
    }
  },
  async asyncData () {
    const { data } = await getUserInfo()
    const user = data.user
    return {
      user
    }
  },
  methods: {
    async uploadUserInfo () {
      await uploadUser({user: this.user})
    }
  }
};
</script>

<style>
</style>