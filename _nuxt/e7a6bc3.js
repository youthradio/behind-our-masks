(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(e,t,n){var content=n(255);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("4a8ff684",content,!0,{sourceMap:!1})},253:function(e,t,n){(function(t){var n=""===t.env.BASE_URL_PRODUCTION?t.env.BASE_URL_PRODUCTION:"/behind-our-masks",r=""===t.env.BASE_URL_PRODUCTION?"https://behindourmasks.net":"https://youthradio.github.io".concat(n);e.exports={baseURL:n,title:"Behind Our Masks - Uncovering pandemic life for California’s young adults",author:"Static Author",publishDate:"April. 14, 2020",location:"Oakland, CA",description:"We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.",url:r,featureImage:"".concat(r,"/images/BOM-new-meta-img.jpg"),featureImagePath:"images/feature",featureImageDescription:"We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.",featureImageCaption:"We are young Californians. COVID has taken over our lives, and life choices. Behind our masks, our families changed; our paths changed; our futures changed. These are our stories of a year of struggle and finding our way forward. A project of YR Media in Oakland, The kNOw in Fresno, Boyle Heights Beat in Los Angeles, and Coachella Unincorporated in the Eastern Coachella Valley.",wpPostSlug:"Black-Mirror-What-Artificial-Intelligence-Means-for-Race-Art-and-the-Apocalypse",wpPostID:"60986",fbAppID:"73080818131",twitterHandler:"@itsyrmedia",POLLSERVER:"https://ee51aej7u4.execute-api.us-west-2.amazonaws.com/latest",docs:[{name:"Main about quotes",id:"1RKLRozZ88INOjwUcF_qNyZzUf-c-xkaKCGWykJ9b2VQ"},{name:"Eduardo video",id:"16Ze5Yth7R5tITwqTRPEXVsPLlDORGHQXxBZP7pcopyE"},{name:"Pandemic Took Young People’s Jobs, And Maybe Their Lifespans Too",id:"17v27fl8zsQ2XIbkEhIS-_8iOAHIxDBz9oOo3lYrbIsc"},{name:"Profile of essetial workers",id:"1E-pwBDTTAJndMzwmNIpXQx84XhkLnXhtjtFGb1F-rr0"},{name:"No Easy Choices: Stay in School or Pay the Rent?",id:"1BxDW9Cxh4E3hadmwtteLZvwjiCd0Bqmzk0GRwPTD2nY"},{name:"Stuck in the Digital Divide",id:"1xwn1hf7v4cj5djPwi7hpovw93l5OQbeS6LUa-0Pm2mM"},{name:"Organizing From Home: Pandemic Forces Activists to Adjust    ",id:"1CvbJvjCK6d7JTZdFoz7XSBTwy9eCgtiT0Qo0UXVIe0Y"},{name:"'Everything's Just Up in the Air' Pandemic Stalls Football Season and Dreams",id:"1mZmFYMYixrF8wY0a382d4iJ8eAFV8tT4lOdFkNs7Jww"},{id:"1FO4qXExKMNFHCgzyr_AyJj4U9TTtH2TIocPPsbyswEo"},{id:"1jbNyPy4wxB3Wz6Ay31WyTdXhoSwKfGfdLIsAT5j496s"},{id:"1JxfH9YfkT6LRYXt7LlEcC7gj4epu6srxVILMBh19q8g"},{id:"15-F4gqQWg1ls7d9zqTrxtZB5nM93ocoR5D_eFohlxxE"}],dataPath:"data/data.json",newsletter:{uid:"962a6c84da5c12bc5b3486086",id:"6c6dda9845",url:"https://media.us4.list-manage.com/subscribe/post-json"}}}).call(this,n(110))},254:function(e,t,n){"use strict";n(239)},255:function(e,t,n){(t=n(70)(!1)).push([e.i,'[id][data-v-557d5890]:before{content:"";display:block;height:50px;margin-top:-50px;visibility:hidden}.menu-body[data-v-557d5890]{transition:transform .5s ease-in-out;position:fixed;top:0;left:0;right:0;max-width:100%;max-height:100vh}',""]),e.exports=t},272:function(e,t,n){"use strict";n.r(t);n(154),n(30);var data=n(224),r=n(253),o={components:{},asyncData:function(e){var t=data.main.latest.map((function(e){return data.stories.find((function(t){return t.slug===e.slug}))}));return{canUrl:r.url,latest:t,articleData:data}},data:function(){return{activeStory:""}},mounted:function(){},methods:{articleFormatComponent:function(article){return"print"===article.format?"article-text":"video"===article.format?"article-video":"audio"===article.format?"article-audio":null}}},l=(n(254),n(29)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"bg-orange z-2 flex flex-column menu-body min-vh-100 open",attrs:{tabindex:"0"}},[e._m(0),e._v(" "),n("ul",{staticClass:"ma0 pl0 ph3 pv3 list overflow-y-scroll flex-grow-2 max-h-100"},[e._l(e.latest,(function(article){return[n("li",{key:article.slug+"-2",staticClass:"pa1 flex justify-start items-start"},[n("div",[n("svg",{staticClass:"db pr2 pt1",attrs:{width:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"10",cy:"10",r:"8.5",stroke:"black","stroke-width":"3"}})])]),e._v(" "),n("a",{staticClass:"link db dim black pl1",attrs:{href:e.canUrl+"#"+article.slug,target:"_blank",rel:"noreferrer"}},[n("h4",{staticClass:"mv0 lh-title f4 fw4 menu-item",domProps:{innerHTML:e._s(article.title)}})])])]}))],2),e._v(" "),e._m(1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ph3 relative z-1 pv3 sticky top-0 bg-orange"},[t("div",{staticClass:"flex flex-wrap justify-between"},[t("h1",{staticClass:"mt2 mb0 f1-ns f2 fw8 pr2-ns lh-0-9"},[this._v("BEHIND OUR MASKS")]),this._v(" "),t("h3",{staticClass:"mt3 mb1 f5 fw8 flex flex-column justify-around pl2-ns"},[t("div",{staticClass:"ttu mw5"},[this._v("\n          Uncovering pandemic life for California’s young adults\n        ")])])]),this._v(" "),t("div",{staticClass:"bt b--black bw4 pb3"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ph3 flex flex-wrap justify-between items-center"},[t("div",{staticClass:"flex justify-around mv3"},[t("div",{staticClass:"ph2"},[t("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://boyleheightsbeat.com/",target:"_blank",rel:"noreferrer"}},[t("img",{staticClass:"mw3 w-100",attrs:{src:"n_images/bhb.png",loading:"lazy",alt:"Boyle Heights Beats"}})])]),this._v(" "),t("div",{staticClass:"ph2"},[t("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://coachellaunincorporated.org/",target:"_blank",rel:"noreferrer"}},[t("img",{staticClass:"mw3 w-100",attrs:{src:"n_images/cuninc.png",loading:"lazy",alt:"Coachella Unincorporated"}})])]),this._v(" "),t("div",{staticClass:"ph2"},[t("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://theknowfresno.org/",target:"_blank",rel:"noreferrer"}},[t("img",{staticClass:"mw3 w-100",attrs:{src:"n_images/thek.png",loading:"lazy",alt:"The Know Youth Media"}})])]),this._v(" "),t("div",{staticClass:"ph2"},[t("a",{staticClass:"db pointer link grow no-underline",attrs:{href:"https://yr.media",target:"_blank",rel:"noreferrer"}},[t("img",{staticClass:"mw3 w-100",attrs:{src:"n_images/yrmedia.png",loading:"lazy",alt:"YR Media"}})])])])])}],!1,null,"557d5890",null);t.default=component.exports}}]);