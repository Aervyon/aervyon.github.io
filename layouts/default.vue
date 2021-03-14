<template class="bg-dark">
  <div class="h-screen flex flex-col">
    <div class="static top-0 flex bg-primary-dark p-4">
      <a class="font-bold ml-5 uppercase whitespace-nowrap text-highlight-dark text-xl" href="/">
        VoidNulll
      </a>
      <div>
        <ul class="flex">
          <li
            v-for="goto in urls"
            :key="goto.title"
            class="ml-4 text-white text-md pl-3"
          >
            <a :href="goto.url">
              {{ goto.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Nuxt class="flex-grow" />
    <div class="flex bg-primary-dark p-4 pin-b">
      <h1 class="text-accent">
        &copy; {{ new Date().getFullYear() }} VoidNulll
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      urls: [
        {
          title: 'github',
          url: 'https://github.com/VoidNulll'
        },
        {
          title: 'twitter',
          url: 'https://twitter.com/VoidNulll0515'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
