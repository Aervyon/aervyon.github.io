<script setup lang="ts">
defineProps<{
	introActive: boolean;
	techActive: boolean;
	worksActive: boolean;
	aboutActive: boolean;
	active: string;
}>();
</script>

<template>
	<div
		class="hidden xl:flex flex-col sticky top-96 h-fit p-4 border-4 border-aervyon rounded-lg bg-opacity-10 bg-aervyon text-lg"
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
					active == 'about',
				'hover:text-primary-text-dark': active != 'about',
			}"
			><Icon
				name="heroicons:user-solid"
				size="1.5rem"
				class="mr-2"
			/>About
		</NuxtLink>
	</div>
</template>
