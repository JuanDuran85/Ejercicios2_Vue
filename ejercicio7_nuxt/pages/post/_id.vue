<template>
    <div class="container">
        <h1 class="title">Página de post</h1>
        <article>
            <h1>{{publica.title}}</h1>
            <p>{{publica.content}}</p>
        </article>
        <aside>
          <h3>Otros Posts</h3>
          <ul>
            <li v-for="(item,index) in noPublicados" :key="index">
              <!-- <nuxt-link :to="`/post/${item.id}`">{{item.title}}</nuxt-link> -->
              <nuxt-link :to="{name: 'post-id', params: {id: item.id}}">{{item.title}}</nuxt-link>
            </li>
          </ul>
        </aside>
    </div>
</template>

<script>
  export default {
      name: 'Post_ID',
      data() {
        return {
          id: this.$route.params.id,
        }
      },
      head(){
        return {
          title: this.publica.title,
          meta: [
            {name:'twitter:title',content: this.publica.title},
            {name:'twitter:description',content: this.publica.content},
            {name:'twitter:image',content: 'https://nuxtjs.org/logos/nuxt-icon.png'},
            {name:'twitter:card',content: 'summary_last_image'},
          ]
        }
      },
      computed: {
        traerPost(){
          return this.$store.getters.enviarPost;
        },
        publica(){
          return this.traerPost.find(result => result.id === this.id);
        },
        noPublicados(){
          return this.traerPost.filter(result => result.id !== this.id);
        }
      }
  }
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>