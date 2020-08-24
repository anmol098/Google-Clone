<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link>-->
    <!--      |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <nav class="navbar is-transparent mt-1">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control mt-2 is-size-6">
              Gmail
            </p>
            <p class="control mt-2 is-size-6 has-text-centered">
              Images
            </p>
            <p class="control mt-1 has-text-centered">
              <Apps style="color: black; font-size: 40px;"/>
            </p>

            <figure class="image mt-2 is-32x32 control">
              <img class="is-rounded" src="https://via.placeholder.com/32x32.png?text=A"/>
            </figure>
          </div>
        </div>
      </div>
    </nav>
    <div class="hero is-medium">
      <div class="hero-body">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p class="control">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""
                     style="height: 92px;">
              </p>
            </div>
            <div class="content control has-icons-left has-icons-right" style="margin: auto; width:40%;">
              <input v-model="search" class="input is-rounded is-hovered is-centered is-medium" type="text"
                     placeholder="">
              <span class="icon is-left">
                <Magnify style="color: gray; font-size: 32px;"/>
              </span>
              <span class="icon is-right">
                <Microphone style="color: blue; font-size: 32px;"/>
              </span>
            </div>
            <div class="content is-centered control mt-3 buttons" style="margin: auto; width:50%;">
              <button class="button is-primary is-light" @click="searchValue">Google Search</button>
              <button class="button is-primary is-light">I'm Feeling Lucky</button>
            </div>
            <div class="content mt-3">
              <p class="control">
                Google offered in: <a>हिन्दी</a> <a>বাংলা</a> <a>తెలుగు</a> <a>मराठी</a> <a>தமிழ்</a> <a>ગુજરાતી</a> <a>ಕನ್ನಡ</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <nav class="level notification" style=" position: fixed; bottom: 0; width: 100%;">
      <!-- Left side -->
      <div class="level-left ml-5 is-size-6">
        <p class="level-item">Advertising</p>
        <p class="level-item">Business</p>
        <p class="level-item">How Search works</p>
      </div>

      <!-- Right side -->
      <div class="level-right mr-5">
        <p class="level-item">Privacy</p>
        <p class="level-item">Terms</p>
        <p class="level-item">Settings</p>
      </div>
    </nav>
    <!--    <router-view/>-->
  </div>
</template>

<script>
import { Apps, Magnify, Microphone } from 'mdue'

export default {
  data: function () {
    return {
      search: ''
    }
  },
  components: {
    Apps,
    Magnify,
    Microphone
  },
  methods: {
    searchValue () {
      window.open('https://www.google.com/search?q=' + encodeURIComponent(this.search), '_blank')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
