exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=bb7a5726&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.userProfile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.userProfile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.userProfile.bio))+"</p> "),(_vm.userProfile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n             \n            Edit Profile Settings\n          ")]):_c('button',{staticClass:"btn btn-sm btn-outline-secondary action-btn"},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n             \n            "+_vm._s(!_vm.userProfile.following ? 'Follow' + _vm.userProfile.username : 'Unfollow' + _vm.userProfile.username)+"\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active: _vm.tab === 'my_article'
              },attrs:{"exact":"","to":{
                name: 'profile',
                query: {
                  tab: 'my_article'
                }
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active: _vm.tab === 'favorit_article'
              },attrs:{"exact":"","to":{
                name: 'profile',
                query: {
                  tab: 'favorit_article'
                }
              }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(items){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":items.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":"/"}},[_vm._v(_vm._s(items.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(items.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(items.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name: 'article',
            params: {
              slug: items.slug
            }
          }}},[_c('h1',[_vm._v(_vm._s(items.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(items.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
              active: item === _vm.page
            }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                name: 'profile',
                query: {
                  page: item,
                  tab: _vm.tab
                }
              }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=bb7a5726&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const getArticles = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: ['authenticated'],
  name: "UserProfile",

  data() {
    return {
      userProfile: ''
    };
  },

  async asyncData({
    params,
    query
  }) {
    const limit = 5;
    const page = Number.parseInt(query.page || 1);
    const username = params.username;
    console.log(params.username);
    const tab = query.tab || 'my_article';
    console.log(tab);
    const loadArticles = tab === 'my_article' ? {
      author: username,
      limit,
      offset: (page - 1) * limit
    } : {
      favorited: username,
      limit,
      offset: (page - 1) * limit
    };
    const [userInfo, article] = await Promise.all([getProfile(username), getArticles(loadArticles)]);
    const userProfile = userInfo.data.profile;
    const {
      articles,
      articlesCount
    } = article.data;
    return {
      userProfile,
      limit,
      // 每页大小
      tab,
      page,
      articlesCount,
      articles
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  },
  watchQuery: ['tab', 'page']
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "064e6578"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map