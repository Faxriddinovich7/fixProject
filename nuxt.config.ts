// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      title:"wolf",
      link:[
        {rel:"icon",type:"image/png", href:"/wolf.png"},
      ],
      meta:[
          {name:"wolf",content:"this is a wolf"},
        {name:"keywords",content:"this is a keywords"},
      ]
    }
  }
})
