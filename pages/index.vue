<!-- eslint-disable vue/html-indent -->
<script setup>
import { reactive, ref, computed } from "vue";

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

const tocActive = reactive({
	intro: true,
	tech: false,
	experience: false,
	works: false,
	about: false,
});

const iconSize = ref("2rem");

// const active = ref("intro");
const route = useRoute();

const active = computed(() => {
	if (!route.hash) return "intro";
	if (route.hash === "#tech") return "tech";
	if (route.hash === "#works" || route.hash === "#projects") return "works";
	if (route.hash === "#about") return "about";
	return "intro";
});

console.log(useRoute().hash);
</script>

<template>
	<div class="pb-10">
		<div class="md:flex mx-auto mt-5 md:mx-32 md:mt-20 lg:mt-60 2xl:mt-72">
			<!-- Generic Profile Information -->
			<div id="intro" class="md:mx-0">
				<img src="/Aervy_Icon.png" class="w-40 rounded-full h-auto" />
				<h1 class="w-fit text-aervyon font-bold text-4xl mt-5">
					Aervyon
				</h1>
				<h2 class="mt-2.5 text-2xl text-primary-text-dark w-max">
					Software Developer
				</h2>
				<!-- Contact Information -->
				<div
					class="w-fit mt-5 justify-evenly flex rounded-xl px-2.5 py-2.5 border-2 hover:border-link-dark bg-accent-secondary-dark bg-opacity-10 border-accent-secondary-dark text-accent-secondary-dark"
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
			</div>
			<div class="mx-auto">
				<div class="mx-auto">
					<Subtitle>Intro</Subtitle>
					<p class="text-2xl w-fit">I've been</p>
					<h1 class="text-primary-text-dark text-4xl">
						developing software that is
					</h1>
					<h1 class="text-aervyon w-fit text-4xl">
						privacy conscious and easy<br />to use
						<span class="text-secondary-text-dark">since 2018</span>
					</h1>
				</div>
				<div class="max-w-prose">
					<ul
						class="text-lg list-disc decoration-aervyon max-w-fit mx-12"
					>
						<li class="text-aervyon">
							<p>cs student</p>
						</li>
						<li class="text-aervyon max-w-prose">
							<p class="text-secondary-text-dark max-w-prose">
								perpetually
								<span class="text-aervyon">learning</span> new
								things by
								<span class="text-aervyon">experimenting</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Basically a table of contents. For now we hide it on mobile -->
			<!-- Will be sticky eventually -->
			<div
				class="hidden w-fit xl:flex flex-col fixed right-52 top-96 h-fit p-4 border-4 border-aervyon rounded-lg bg-[#162C33] text-lg"
			>
				<NuxtLink
					to="/#intro"
					class="h-fit"
					:class="{
						'text-primary-text-dark hover:text-secondary-text-dark':
							active == 'intro',
						'hover:text-primary-text-dark': active != 'intro',
					}"
					><Icon
						name="heroicons:chat-bubble-bottom-center-text-solid"
						size="1.5rem"
						class="mr-2"
					/>Intro
				</NuxtLink>
				<NuxtLink
					to="/#tech"
					class="h-fit"
					:class="{
						'text-primary-text-dark hover:text-secondary-text-dark':
							active == 'tech',
						'hover:text-primary-text-dark': active != 'tech',
					}"
					><Icon
						name="heroicons:device-phone-mobile-20-solid"
						size="1.5rem"
						class="mr-2"
					/>Tech
				</NuxtLink>
				<NuxtLink
					to="/#works"
					class="h-fit"
					:class="{
						'text-primary-text-dark hover:text-secondary-text-dark':
							active == 'works',
						'hover:text-primary-text-dark': active != 'works',
					}"
					><Icon
						name="heroicons:briefcase-solid"
						size="1.5rem"
						class="mr-2"
					/>Works
				</NuxtLink>
				<NuxtLink
					to="/#about"
					class="h-fit"
					:class="{
						'text-primary-text-dark hover:text-secondary-text-dark':
							active == 'active',
						'hover:text-primary-text-dark': active != 'about',
					}"
					><Icon
						name="heroicons:user-solid"
						size="1.5rem"
						class="mr-2"
					/>About
				</NuxtLink>
			</div>
		</div>
		<!-- Tech / Languages area -->
		<div
			id="tech"
			class="mx-auto mt-10 md:mt-20 lg:mt-40 xl:mt-72 2xl:mt-96 w-fit"
		>
			<Subtitle class="mx-auto mb-4">Tech > Languages</Subtitle>
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
			<Subtitle class="mx-auto mb-4"
				>Tech > Libraries & Frameworks</Subtitle
			>
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
				<Subtitle class="mx-auto mb-4"
					>Tech > Database Management</Subtitle
				>
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
				<Subtitle class="mx-auto mb-4"
					>Tech > Linux OS Management</Subtitle
				>
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
	</div>
</template>
