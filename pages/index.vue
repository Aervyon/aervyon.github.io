<!-- eslint-disable vue/html-indent -->
<script setup>
import { reactive, ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useElementVisibility, usePreferredReducedMotion } from "@vueuse/core";

const displayLinks = reactive([
	{
		icon: "mdi:github",
		url: "https://github.com/Aervyon",
	},
	{
		icon: "heroicons:envelope-solid",
		url: "mailto:aervy@aervyon.com",
	},
	{
		icon: "mdi:twitter",
		url: "https://twitter.com/Aervyon",
	},
]);

/*
},
				{
					name: "description",
					content:
						"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
				},
				{ property: "og:image", content: "/OpenGraph_Hex_Glitch.png" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "theme-color", content: "#5BC7EA" },
				{ property: "og:title", content: "Aervyon - # portfolio" },
				{ property: "og:site_name", content: "Aervyon's Portfolio" },
				{ property: "og:url", content: "https://aervyon.com" },
				{
					property: "og:description",
					content:
						"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
				},
				*/

useSeoMeta({
	description:
		"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
	ogDescription:
		"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
	ogTitle: "Aervyon - # portfolio",
	ogUrl: "https://aervyon.com",
	twitterCard: "summary_large_image",
	themeColor: "#5BC7EA",
	ogSiteName: "Aervyon's Portfolio",
	twitterDescription:
		"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
	twitterTitle: "Aervyon - # portfolio",
	ogImage: "/OpenGraph_Hex_Glitch.png",
	twitterImage: "/OpenGraph_Hex_Glitch.png",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
});

// SETUP for the sidebar

const tech = ref(null);
const intro = ref(null);
const projects = ref(null);
const about = ref(null);

const introVisible = useElementVisibility(intro);
const techVisibile = useElementVisibility(tech);
const projectsVisible = useElementVisibility(projects);
const aboutVisible = useElementVisibility(about);

// Set up the little terminal-like blinking animation

const name = "Aervyon";
const title = "Software Developer";
const titleRef = ref("");
const nameRef = ref("A|");

// Load links after we load the name & title
const loadLinks = ref(false);

let cursorInterval;

const reducedMotion = usePreferredReducedMotion();

const setCursor = () => {
	cursorInterval = setInterval(() => {
		if (titleRef.value.endsWith("|")) {
			titleRef.value = titleRef.value.replace("|", "");
		} else {
			titleRef.value = titleRef.value + "|";
		}
	}, 1000);
};

const loadTitleSlowly = () => {
	const interval = setInterval(() => {
		// if len <= name length - 1
		// assume cursor
		// replace cursor
		let len = titleRef.value.length - 1;
		if (len === 0) {
			len = 1;
		}
		if (!titleRef.value) {
			titleRef.value = "S";
		} else if (
			len <= title.length - 1 &&
			titleRef.value[len] !== title[len]
		) {
			titleRef.value = titleRef.value.replace("|", title[len]);
			titleRef.value = titleRef.value + "|";
		}
	}, 50);
	let cleared = false;
	watch(titleRef, () => {
		if (titleRef.value?.length > title.length && !cleared) {
			clearInterval(interval);
			setCursor();
			cleared = true;
			loadLinks.value = true;
		}
	});
};

const loadNameSlowly = () => {
	const interval = setInterval(() => {
		// if len <= name length - 1
		// assume cursor
		// replace cursor
		console.log("Loading name slowly");
		const len = nameRef.value.length - 1;
		if (len <= name.length - 1 && nameRef.value[len] !== name[len]) {
			nameRef.value = nameRef.value.replace("|", name[len]);
			nameRef.value = nameRef.value + "|";
		}
	}, 50);
	let cleared = false;
	watch(nameRef, () => {
		if (nameRef.value?.length > name.length && !cleared) {
			nameRef.value = nameRef.value.replace("|", "");
			clearInterval(interval);
			loadTitleSlowly();
			cleared = true;
		}
	});
};

onMounted(() => {
	if (reducedMotion.value === "reduce") {
		nameRef.value = name;
		titleRef.value = title;
		setCursor();
	} else {
		loadNameSlowly();
	}
});

onBeforeUnmount(() => clearInterval(cursorInterval));

const iconSize = ref("2rem");
</script>

<template>
	<div class="pb-10">
		<div
			class="mx-auto mt-10 md:mt-20 lg:mt-60 2xl:mt-72 md:grid md:grid-cols-2 xl:grid-cols-3"
		>
			<!-- Generic Profile Information -->
			<section id="intro" ref="intro" class="mx-auto w-fit">
				<div class="flex md:block">
					<img
						src="/Aervy_Icon.png"
						class="w-20 h-20 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mt-auto rounded-full lg:my-0 mr-4 lg:mr-0"
					/>
					<div>
						<h1
							class="w-fit text-aervyon font-bold text-3xl md:text-4xl xl:text-5xl md:mt-2 text-shadow shadow-black"
						>
							{{ nameRef }}
						</h1>
						<h2
							class="mt-1 md:mt-2 text-xl md:text-2xl xl:text-3xl text-primary-text-dark w-max text-shadow shadow-aervyon font-bold"
						>
							{{ titleRef }}
						</h2>
					</div>
				</div>
				<!-- Contact Information -->
				<Transition
					enter-from-class="opacity-0"
					enter-active-class="transition duration-300"
				>
					<div
						v-if="loadLinks"
						class="mx-auto md:mx-0 w-fit mt-5 justify-evenly flex rounded-xl px-2.5 py-2.5 border-2 hover:border-link-dark bg-accent-secondary-dark bg-opacity-10 border-accent-secondary-dark text-accent-secondary-dark shadow-md shadow-black"
					>
						<a
							v-for="link in displayLinks"
							:key="link.icon"
							:href="link.url"
							class="hover:text-link-dark px-2.5"
						>
							<!-- Icon Size feels like a patch for now -->
							<Icon :name="link.icon" :size="iconSize" />
						</a>
					</div>
				</Transition>
			</section>
			<div class="mx-auto w-fit mt-10 md:my-auto">
				<div class="w-fit font-mono">
					<div class="flex mb-2">
						<Subtitle class="w-max">Intro</Subtitle>
						<a class="ml-2 my-auto text-url-dark" href="/#intro"
							><Icon name="heroicons:link-solid" size="1.5rem"
						/></a>
					</div>
					<p class="text-xl lg:text-2xl w-max">I've been</p>
					<h1
						class="text-primary-text-dark text-2xl lg:text-4xl w-max"
					>
						developing software that is
					</h1>
					<h1 class="text-aervyon w-max text-2xl lg:text-4xl">
						privacy conscious and easy<br />to use
						<span class="text-secondary-text-dark">since 2018</span>
					</h1>
				</div>
				<div class="max-w-prose w-fit">
					<ul
						class="text-base lg:text-lg list-disc decoration-aervyon max-w-fit ml-8 lg:mx-12"
					>
						<li class="text-aervyon w-fit">
							<p class="w-fit">cs student</p>
						</li>
						<li class="text-aervyon w-fit lg:max-w-prose">
							<p
								class="text-secondary-text-dark lg:max-w-prose max-w-xs break-words w-fit"
							>
								perpetually
								<span class="text-aervyon">learning</span> new
								things by
								<span class="text-aervyon"
									><br />experimenting</span
								>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Basically a table of contents. For now we hide it on mobile -->
			<!-- Will be sticky eventually -->
			<Sidebar
				:intro-active="introVisible"
				:tech-active="techVisibile"
				:projects-active="projectsVisible"
				:about-active="aboutVisible"
			/>
		</div>
		<!-- Tech / Languages area -->
		<section id="tech" ref="tech">
			<div
				class="mx-auto mt-24 md:mt-36 lg:mt-40 xl:mt-72 2xl:mt-96 w-fit"
			>
				<div class="flex mb-4 mx-auto w-fit justify-start">
					<div class="flex space-x-2">
						<Subtitle>Tech</Subtitle>
						<Subtitle :alt-colors="true">Languages</Subtitle>
					</div>
					<a class="my-auto ml-2 text-url-dark" href="/#tech"
						><Icon name="heroicons:link-solid" size="1.5rem"
					/></a>
				</div>

				<!-- I need to make some language cards... -->
				<div
					class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-fit"
				>
					<ExperienceCard
						:dark-font="true"
						icon-name="devicon:javascript"
						title="JavaScript"
						class="bg-[#F0DB4F]"
						:start="new Date('2018-01-01')"
						description="Reasonably Experienced. Prefer TS more"
					/>
					<ExperienceCard
						icon-name="devicon:typescript"
						title="TypeScript"
						class="bg-[#007ACC]"
						:start="new Date('2019-08-14')"
						description="Reasonably Experienced"
					/>
					<ExperienceCard
						icon-name="skill-icons:golang"
						title="Go"
						class="bg-[#00B4E0]"
						:start="new Date('2023-04-05')"
						description="Not super experienced, but will happily work with"
						:dark-font="true"
					/>
					<ExperienceCard
						icon-name="logos:python"
						title="Python"
						class="bg-[#26557C]"
						:start="new Date('2023-12-15')"
						description="Learning python, so far I'd be willing to use it if needed/desired by a team."
						:logo-padding="true"
					/>
				</div>
			</div>
			<div class="mx-auto mt-16 w-fit">
				<div class="flex space-x-2 mx-auto mb-4 w-fit">
					<Subtitle>Tech</Subtitle>
					<Subtitle :alt-colors="true"
						>Libraries & Frameworks</Subtitle
					>
				</div>

				<!-- I need to make some language cards... -->
				<div
					class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-fit"
				>
					<ExperienceCard
						icon-name="devicon:vuejs"
						:logo-padding="true"
						title="Vue"
						class="bg-[#297050]"
						:start="new Date('2021-03-13')"
						description="Vue is by far my current favorite web development framework"
					/>
					<ExperienceCard
						icon-name="logos:nuxt-icon"
						:logo-padding="true"
						title="Nuxt"
						class="bg-[#297050]"
						:start="new Date('2021-03-13')"
						description="Nuxt makes working with Vue easy, and as a result, I really enjoy working with Nuxt."
					/>
					<ExperienceCard
						icon-name="devicon:fastify"
						title="Fastify"
						:logo-padding="true"
						class="bg-[#303030]"
						:start="new Date('2021-07-18')"
						description="JS/TS webserver framework that has a lot of good DX. Very nice to work with."
					/>
					<ExperienceCard
						icon-name="devicon:mongoose"
						title="Mongoose"
						class="bg-[#2B0000]"
						:start="new Date('2018-08-01')"
						description="Mongooses typings are a pain but other than that its my go to choice for a JS MongoDB ODM"
						:logo-padding="true"
					/>
					<ExperienceCard
						icon-name="devicon:express"
						title="Express"
						:dark-font="true"
						class="bg-[#FFFFFF]"
						:start="new Date('2018-01-01')"
						description="I started with express but then its lack of good typing support became a pain, so I moved to Fastify"
						:logo-padding="true"
					/>
				</div>
				<div class="mx-auto mt-16 w-fit">
					<div class="mx-auto mb-4 w-fit flex space-x-2">
						<Subtitle>Tech</Subtitle>
						<Subtitle :alt-colors="true"
							>Database Management</Subtitle
						>
					</div>
					<!-- I need to make some language cards... -->
					<div class="grid sm:grid-cols-1 md:grid-cols-2 w-fit">
						<ExperienceCard
							icon-name="devicon:mongodb"
							title="MongoDB"
							class="bg-[#38802c]"
							:start="new Date('2021-01-01')"
							description="I've managed this on DigitalOcean, Linode, and Oracle. Recently learned how to do TLS with ACME certificates"
						/>
						<ExperienceCard
							icon-name="devicon:postgresql"
							title="PostgreSQL"
							class="bg-[#336791]"
							:start="new Date('2023-11-07')"
							description="I've managed this on Linode, and Oracle. Have setup WAL streaming replication"
						/>
					</div>
				</div>
				<div class="mx-auto mt-16 w-fit">
					<div class="flex mx-auto mb-4 w-fit space-x-2">
						<Subtitle>Tech</Subtitle>
						<Subtitle :alt-colors="true"
							>Linux OS Management</Subtitle
						>
					</div>
					<!-- I need to make some language cards... -->
					<div
						class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-fit"
					>
						<ExperienceCard
							icon-name="devicon:fedora"
							title="Fedora"
							class="bg-[#3C6EB4]"
							:start="new Date('2024-01-18')"
							description="The OS my PC runs 4/5ths of the time."
							:logo-padding="true"
						/>
						<ExperienceCard
							icon-name="devicon:rockylinux"
							title="Rocky Linux"
							class="bg-[#000]"
							:start="new Date('2023-03-23')"
							description="I've managed this on DigitalOcean, and Oracle. Currently manages Folderr's developer stuff"
							:logo-padding="true"
						/>
						<ExperienceCard
							icon-name="devicon:debian"
							title="Debian"
							class="bg-[#BF5573]"
							:start="new Date('2023-11-01')"
							description="My laptop's OS, and hosts 1/2 of Folderr's databases"
							:logo-padding="true"
						/>
						<ExperienceCard
							icon-name="logos:ubuntu"
							title="Ubuntu"
							class="bg-[#DD4814]"
							:start="new Date('2020-01-07')"
							description="The other server OS I use, if Debian/RHEL based is not available"
							:logo-padding="true"
						/>
					</div>
				</div>
			</div>
		</section>
		<section id="projects" ref="projects">
			<div class="mx-auto mt-24 md:mt-36 lg:mt-40 w-fit">
				<div class="mx-auto mt-16 lg:w-fit">
					<div class="flex mb-4 mx-auto w-fit justify-start">
						<Subtitle>Projects</Subtitle>
						<a class="my-auto ml-2 text-url-dark" href="/#projects"
							><Icon name="heroicons:link-solid" size="1.5rem"
						/></a>
					</div>
					<!-- I need to make some language cards... -->
					<div
						class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full"
					>
						<ProjectCard
							:roles="['Lead', 'designer']"
							icon-url="/folderr-icon.svg"
							icon-alt="A simple vibrant green folder outline in a black box, the folder has a semi-transparent green fill"
							name="Folderr/Folderr"
							:dark-font="false"
							class="bg-[#0D130C]"
							description="A file host with custom user URL support"
							:languages="[
								{
									name: 'TypeScript',
									icon: 'devicon:typescript',
									iconSize: '1.5rem',
								},
								{
									name: 'Vue',
									icon: 'devicon:vuejs',
									iconSize: '1.5rem',
								},
							]"
						/>
						<ProjectCard
							:roles="['Lead developer']"
							icon-url="/folderr-icon.svg"
							repository="https://github.com/Folderr/foldcli"
							icon-alt="A simple vibrant green folder outline in a black box, the folder has a semi-transparent green fill"
							name="Folderr/foldcli"
							class="bg-[#0D130C]"
							:dark-font="false"
							:start="new Date('2024-01-18')"
							description="A command-line interface for Folderr"
							:languages="[
								{
									name: 'Go',
									icon: 'skill-icons:golang',
									iconSize: '1.5rem',
								},
							]"
						/>
						<ProjectCard
							:roles="['Lead']"
							website="https://folderr.net"
							website-name="Website"
							repository="https://github.com/Folderr/Docs"
							icon-url="/folderr-icon.svg"
							icon-alt="A simple vibrant green folder outline in a black box, the folder has a semi-transparent green fill"
							name="Folderr/docs"
							class="bg-[#0D130C]"
							:dark-font="false"
							description="Documentation for Folderr"
						/>
						<ProjectCard
							:roles="['Developer', 'designer']"
							repository="https://github.com/Aervyon/aervyon.github.io"
							icon-url="/logo-cut.svg"
							name="This website"
							class="bg-[#343434]"
							:dark-font="false"
							description="My portfolio, from scratch with Nuxt 3"
							:languages="[
								{
									name: 'Vue',
									icon: 'devicon:vuejs',
									iconSize: '1.5rem',
								},
							]"
						/>
					</div>
				</div>
			</div>
		</section>
		<section id="about" ref="about">
			<div class="mx-auto mt-24 md:mt-36 lg:mt-40 w-fit">
				<div class="mx-auto mt-16 lg:w-fit">
					<div class="flex mb-4 mx-auto w-fit justify-start">
						<Subtitle>About Aervy</Subtitle>
						<a class="my-auto ml-2 text-url-dark" href="/#about"
							><Icon name="heroicons:link-solid" size="1.5rem"
						/></a>
					</div>
					<div
						class="mt-20 text-primary-text-dark sm:grid grid-cols-2 mx-30 gap-40"
					>
						<div class="mx-12 lg:mx-36">
							<h1 class="text-2xl font-bold font-mono">About</h1>
							<h2
								class="text-aervyon text-2xl font-bold font-mono"
							>
								Software Developer
							</h2>
							<h3 class="text-secondary-text-dark max-w-xs">
								Undergraduate Computer Science student in the
								U.S.
							</h3>
						</div>
						<div class="mx-12 my-auto max-w-prose mt-12 md:mt-0">
							<h2 class="text-xl lg:text-2xl w-fit">
								What have I been doing all this time?
							</h2>
							<p
								class="text-lg my-auto text-secondary-text-dark mt-2"
							>
								I've been devloping
								<span class="text-accent"
									>frontends and APIs</span
								>
								for the last 6 years.
							</p>
							<p class="text-lg my-auto text-secondary-text-dark">
								I started with Discord bots in 2018, then moved
								onto services, APIs, and frontends as they
								offered
								<span class="text-accent">more challenge.</span>
							</p>
							<h2 class="mt-8 text-xl lg:text-2xl w-fit">
								I'm currently learning...
							</h2>
							<ul
								class="text-lg mx-auto text-secondary-text-dark mt-2"
							>
								<li>
									<Icon
										name="devicon:python"
										size="1.5rem"
										class="mr-2"
									/>
									<span class="text-accent">Python</span> -
									For it's quick development times and ability
									to run nearly anywhere without compilation
								</li>
								<li>
									<Icon
										name="skill-icons:golang"
										size="1.5rem"
										class="mr-2"
									/>
									<span class="text-accent">Golang</span> -
									For it's quick development times and speed
								</li>
								<li>
									<Icon
										name="ph:file-sql"
										size="1.5rem"
										class="mr-2"
									/>
									<span class="text-accent">SQL</span> - I
									want to expand the databases I am good at
								</li>
							</ul>
						</div>
					</div>
					<div
						class="mt-20 text-primary-text-dark sm:grid grid-cols-2 mx-30 gap-40"
					>
						<div class="mx-12 lg:mx-36">
							<h1 class="text-2xl font-bold font-mono">About</h1>
							<h2
								class="text-aervyon text-2xl font-bold font-mono"
							>
								Design
							</h2>
							<h3 class="text-secondary-text-dark max-w-xs mt-2">
								I try designing sites
							</h3>
						</div>
						<div
							class="mx-12 md:mx-0 mt-5 md:mt-0 my-auto max-w-prose w-fit"
						>
							<h2 class="text-xl lg:text-2xl w-fit">
								What have I designed?
							</h2>
							<ul
								class="lg:text-lg my-auto text-secondary-text-dark w-fit mt-2"
							>
								<li class="w-fit">
									<a
										href="https://github.com/Aervyon/aervyon.github.io"
										class="text-url-dark hover:text-link-dark"
										><Icon
											name="mdi:github"
											size="1.5rem"
											class="mr-2"
									/></a>
									<a
										href="https://aervyon.com"
										class="text-url-dark hover:text-link-dark underline"
										>This Site</a
									>
								</li>
								<li class="w-fit">Folderr V2</li>
								<li class="w-fit">A college club website</li>
							</ul>
						</div>
					</div>
					<div
						class="mt-20 text-primary-text-dark sm:grid grid-cols-2 mx-30 gap-40"
					>
						<div class="mx-12 lg:mx-36 w-fit">
							<h1 class="text-2xl font-bold font-mono w-fit">
								About
							</h1>
							<h2
								class="text-aervyon text-2xl font-bold font-mono w-fit"
							>
								Gamer
							</h2>
							<h3
								class="text-secondary-text-dark max-w-xs w-fit mt-2"
							>
								Likes to have fun but also <b>loves</b> winning
							</h3>
							<p class="text-secondary-text-dark max-w-xs w-fit">
								I like playing First Person Shooters, adventure
								games, RPGs
							</p>
						</div>
						<div
							class="mx-12 mt-5 md:mt-0 md:mx-0 my-auto w-fit md:max-w-prose"
						>
							<h2 class="text-xl lg:text-2xl">
								What games do I play?
							</h2>
							<ul
								class="text-lg my-auto w-fit text-secondary-text-dark mt-2"
							>
								<li class="w-fit">The Outer Wilds</li>
								<li class="w-fit">Deathloop</li>
								<li class="w-fit">Back 4 Blood</li>
								<li class="w-fit">Lethal Company</li>
								<li class="w-fit">Call of Duty: MWIII</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
