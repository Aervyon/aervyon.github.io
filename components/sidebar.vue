<script setup lang="ts">
defineProps<{
	introActive: boolean;
	techActive: boolean;
	projectsActive: boolean;
	aboutActive: boolean;
	active: string;
}>();
</script>

<template>
	<div
		class="hidden w-fit xl:flex flex-col h-fit p-4 border-4 border-aervyon rounded-lg bg-[#162C33] text-lg font-mono shadow-lg shadow-black"
		:class="{
			'fixed right-52 top-96': !introActive,
			'sticky mx-auto my-auto': introActive,
		}"
	>
		<NuxtLink
			to="/#intro"
			class="h-fit"
			:class="{
				'text-primary-text-dark hover:text-secondary-text-dark':
					introActive,
				'hover:text-primary-text-dark': !introActive,
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
					techActive,
				'hover:text-primary-text-dark': !techActive,
			}"
			><Icon
				name="heroicons:device-phone-mobile-20-solid"
				size="1.5rem"
				class="mr-2"
			/>Tech
		</NuxtLink>
		<NuxtLink
			to="/#projects"
			class="h-fit"
			:class="{
				'text-primary-text-dark hover:text-secondary-text-dark':
					projectsActive,
				'hover:text-primary-text-dark': !projectsActive,
			}"
			><Icon
				name="heroicons:briefcase-solid"
				size="1.5rem"
				class="mr-2"
			/>Projects
		</NuxtLink>
		<NuxtLink
			to="/#about"
			class="h-fit"
			:class="{
				'text-primary-text-dark hover:text-secondary-text-dark':
					aboutActive,
				'hover:text-primary-text-dark': !aboutActive,
			}"
			><Icon
				name="heroicons:user-solid"
				size="1.5rem"
				class="mr-2"
			/>About
		</NuxtLink>
	</div>
</template>
