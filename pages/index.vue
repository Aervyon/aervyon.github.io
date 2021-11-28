<template>
  <div id="content" class="mt-10 xl:mt-28">
    <div class="mx-4 md:mx-0 md:ml-14 font-bold text-highlight-dark text-3xl md:text-4xl lg:text-5xl animate-fadeIn">
      <h1>Aervyon</h1>
    </div>
    <p class="ml-4 md:ml-14 mb-4 md:mb-16 2xl:mb-32 font-bold text-gray-400 text-lg md:text-xl lg:text-2xl">
      Young programmer, gamer, and maybe more?
    </p>
    <div id="hero" class="ml-24 md:ml-14 md:mx-0">
      <div class="block md:flex">
        <div class="place-self-center flex md:block mx-16 text-3xl lg:text-4xl">
          <a href="https://github.com/Aervyon" class="mb-5 text-url-dark hover:text-accent" aria-label="GitHub Profile">
            <span class="iconify" data-icon="akar-icons:github-fill" data-inline="false" />
          </a>
          <a href="https://twitter.com/Aervyon" class="ml-2 text-url-dark hover:text-accent" aria-label="Twitter Profile">
            <span class="iconify" data-icon="akar-icons:twitter-fill" data-inline="false" />
          </a>
        </div>
        <img src="/Aervy_Icon.png" class="md:ml-20 2xl:w-112 w-36 ml-6">
        <div class="block md:flex ml-4 md:ml-20 mt-10 md:place-self-center text-2xl lg:text-4xl">
          <div class="mb-2">
            <a class="text-url-dark border-2 2xl:border-4 border-highlight-dark p-1 place-self-center px-4 text-center" href="#programmer">Programmer</a>
          </div>
          <div class="mt-8 md:mt-0 w-full">
            <a class="text-url-dark border-2 2xl:border-4 border-highlight-dark p-1 place-self-center px-[2.85rem] md:ml-6 text-center" href="#gamer">Gamer</a>
          </div>
        </div>
      </div>
    </div>
    <div data-aos-duration="1000" data-aos="zoom-in-up" class="text-md mb-7 ml-4 lg:max-w-screen-md xl:max-w-screen-lg xl:text-xl text-gray-400 mx-4 md:mx-0 md:ml-14">
      <h1 id="programmer" class="text-highlight-dark text-2xl xl:text-3xl">
        Want to learn more about what I program?<br>I'll tell you...
      </h1>
      <p>
        I primarily work with TypeScript and JavaScript (when necessary or TypeScript is unnecessary)<br>
        <span class="text-accent">I was venturing into Python, as it's something new, interesting, and its syntax is straight forward enough. I have no use for it, so im no longer looking into it.</span>
        <br>I am not a fan of Java. It does not make sense to me, at all.
        <br>In the future I may venture into Rust or Golang or another compiled language.
        <br>Here's a list of the JS/TS frameworks & libraries I have used, along with my experience level.
      </p>
      <ul class="mb-4">
        <li
          v-for="jstech in technologies.js"
          :key="jstech.name"
          class="ml-4"
        >
          - <a :href="jstech.link" class="text-url-dark underline">
            {{ jstech.name }}
          </a> - {{ jstech.experience }}
        </li>
      </ul>
      <p>
        I have done some sysadmin things, but they aren't too important or much. <br>Here are some examples: Managing configs for sshd, ufw, certbot, nginx. Installing packages like Node, MongoDB, etc.<br>Basically what everyone does in Linux based operating systems.<br>
        <span class="text-accent">I do not think Linux operating systems makes a good desktop OS for most people, and can't recommend it as a desktop OS.</span>
      </p>
    </div>
    <hr class="border-accent">
    <section data-aos-duration="1000" data-aos="zoom-in-up" class="text-md mb-14 mt-7 ml-4 md:ml-14 md:mx-0 xl:text-xl text-gray-400 2xl:ml-[calc(100vw-68.5rem)]">
      <h1 id="gamer" class="text-highlight-dark text-2xl xl:text-3xl 2xl:mr-14 mb-6 2xl:text-right">
        I think it needs to be stated for the record<br>I love playing games.
      </h1>
      <p class="lg:max-w-screen-md xl:max-w-screen-lg">
        <span class="text-accent">I'm a PC enthusiast, I play a lot of games primarily on PC. <em>That doesn't mean I hate consoles.</em> I actually quite like consoles</span>
        <br>I just find them to be an inconvience at times, however it doesn't help that I have a very last-gen console.
        <br>I play a wide variety of games, though not as much variety as others.
        <br>
        <span class="text-accent">Sanboxes?</span> Check.
        <span class="text-accent"> Role playing games?</span> check.
        <br><span class="text-accent">Survival games?</span> Definitely, those are very fun and sometimes even challenging I dare say.
        <br><span class="text-accent">Racing games?</span> Check, although they can get boring.
        <br>I do enjoy <span class="text-accent">cooperative (or co-op competitive)</span> games a lot, however I do not like online-only games.
        <br><span class="text-accent">Horizon Zero Dawn? </span>Yes.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      teams: [
        {
          name: 'Folderr',
          url: 'https://github.com/Folderr'
        },
        {
          name: 'Axonteam',
          url: 'https://github.com/AxonTeam'
        }
      ],
      projects: [
        {
          name: 'Wastelander One Cogs (WIP)'
        }
      ],
      technologies: {
        js: [
          { name: 'TypeScript', link: 'https://www.typescriptlang.org', experience: 'I\'m not sure actually' },
          { name: 'Node.js', link: 'https://nodejs.org', experience: 'I\'m not quite sure, however of my JS projects are in Node.js' },
          { name: 'Express', link: 'https://expressjs.com', experience: 'I have decent experience writing routes, managing auth, rendering pages, and configuring express servers' },
          { name: 'Mongoose (MongoDB Driver)', link: 'https://mongoosejs.com', experience: 'I have experience writing and interacting with models in Mongoose.' },
          { name: 'Vue', link: 'https://v3.vuejs.org/', experience: 'I am very new to Vue.' },
          { name: 'NuxtJS', link: 'https://nuxtjs.org/', experience: 'I have experience with making statically generated sites. This site is a static site made in NuxtJS.' },
          { name: 'Fastify', link: 'https://fastify.io', experience: 'Entry-level to medium-level experience with Fastify. I namely have murdered it by replacing a OOP designed webserver built on Express, and slapped Fastify in its place.' }
        ]
      }
    }
  }
}
</script>
<style>
#hero {
  background-image: url("/new_circles.svg");
  background-size: 20rem;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  min-height: 75vh;
}

@media screen and (min-width: 200px) and (max-width: 800px) and (min-height: 400px) {
  #hero {
    min-height: 90vh
  }
}

@media screen and (min-width: 1920px) and (min-height: 900px) {
  #hero {
    background-size: 40rem;
    min-height: 72vh;
  }
}

@media screen and (min-width: 2560px) and (min-height: 1200px) {
  #hero {
    background-size: 60rem;
    min-height: 76vh
  }
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
  letter-spacing: 1px;
  font-size: 42px;
}

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
