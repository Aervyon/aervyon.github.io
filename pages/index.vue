<template>
  <div class="lg:flex lg:flex-wrap cont mx-2 md:ml-14 md:mt-10 md:mx-0 mb-5 md:mb-2">
    <div class="text-highlight-dark">
      <p class="text-xl lg:text-4xl subtitle">
        What do you truly desire?
      </p>
      <h1 class="text-4xl lg:text-6xl font-bold">
        Oh, you want to know about me?
      </h1>
      <p class="text-white max-w-screen-sm md:max-w-screen-md mt-4 text-md lg:text-xl">
        Ok then.<br>
        I see myself as a gamer, a person, and a developer. In that order.
        I primarily like to play online games, but will play single player games when in the mood. I like a lot of fast paced games, like shooters, as well as survival type games (although I prefer those to be online). Open world games are generally the most fun. I don’t really fit into a gaming profile. So lets move on to developer.
        I am by no means certified in any way, however that doesn’t mean I do not enjoy this, at times. I enjoy Pythons syntax and can usually agree with TypeScript but Java is just a pain no matter what I do, therefore I do not use Java, and I prefer not to. I have yet to really use Python. I do most of my development on Github, and primarily use either TypeScript or JavaScript.
        One last bit before I end this, I can enjoy Linux but most of the time its just infuriating.
        <br>Psst, Node is not a be and end all. Neither is any framework, especially frontend ones.
      </p>
      <p class="text-white max-w-screen-sm md:max-w-screen-md mt-4 text-md lg:text-xl">
        See an issue with this site? <a class="text-url-dark underline text-lg" href="https://github.com/VoidNulll/VoidNulll/issues/new?assignees=VoidNulll&template=bug_report.md">Submit a bug report.</a>
        Have any recommendations? <a class="text-url-dark underline text-lg" href="https://github.com/VoidNulll/VoidNulll/issues/new?labels=enhancement&template=site-suggestion.md">Submit a suggestion.</a>
      </p>
    </div>
    <div class="block bg-none">
      <div class="ml-4 lg:mx-0 lg:ml-96 mt-3 lg:mt-2 text-highlight-dark sm:flex lg:block">
        <div class="lg:m-7 mx-0 pt-4 lg:pb-10 bg-primary-dark border-right border-r-4 border-dark lg:border-none h-64 lg:h-auto w-72">
          <h1 class="text-3xl font-bold text-center">
            Organizations
          </h1>
          <ul class="mt-6">
            <li
              v-for="team in teams"
              :key="team.name"
              class="mt-4 text-center"
            >
              <a :href="team.url" class="text-url-dark underline hover:text-white text-2xl">{{ team.name }}</a>
            </li>
          </ul>
        </div>
        <div class="sm:mx-4 lg:m-7 mx-0 text-highlight-dark bg-primary-dark pt-4 p-2 h-64 lg:pb-10 lg:h-auto w-72">
          <h1 class="text-3xl font-bold text-center">
            Projects
          </h1>
          <ul class="mt-6">
            <li
              v-for="project in projects"
              :key="project.name"
              class="mt-4 text-center"
            >
              <a v-if="project.url" :href="project.url" class="text-url-dark underline hover:text-white text-2xl">{{ project.name }}</a>
              <p v-if="!project.url" class="text-url-dark hover:text-white text-2xl">
                {{ project.name }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
      ]
    }
  }
}
</script>
<style>

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
