<script setup lang="ts">
import { ref } from "vue";
defineProps<{
	iconName?: string;
	iconUrl?: string;
	iconAlt?: string;
	name: string;
	description: string;
	roles: string[];
	darkFont?: boolean;
	logoPadding?: boolean;
	languages?: { icon?: string; iconSize?: string; name: string }[];
	website?: string;
	websiteName?: string;
	repository?: string;
}>();

const size = ref("10rem");
</script>

<template>
	<div class="flex pr-4 pl-0 h-full w-full xl:w-auto py-4">
		<!-- Icon -->
		<Icon
			v-if="iconName"
			:name="iconName"
			:size="size"
			:class="{
				'p-4': logoPadding,
			}"
		/>
		<img
			v-if="iconUrl"
			:alt="iconAlt"
			:class="logoPadding ? 'p-4' : ''"
			:src="iconUrl"
			class="w-20 md:w-30 lg:w-40"
			loading="lazy"
		/>
		<div
			class="ml-10 my-auto font-bold"
			:class="{
				'text-primary-text-dark': !darkFont,
				'text-primary-dark': darkFont,
			}"
		>
			<div class="flex text-xl md:text-2xl">
				<h1>
					{{ name }}
				</h1>
				<div v-if="languages">
					<span v-for="language in languages" :key="language.icon">
						<Icon
							v-if="language.icon && language.iconSize"
							class="ml-2"
							:name="language.icon"
							:size="language.iconSize"
						/>
					</span>
				</div>
			</div>
			<div class="text-base font-normal">
				<div
					v-if="(website && websiteName) || repository"
					class="text-sm md:text-base flex w-full justify-between text-url-dark"
				>
					<a
						v-if="website && websiteName"
						:href="website"
						class="hover:text-highlight-dark underline underline-offset-2"
						target="_blank"
						><Icon
							name="heroicons:link-solid"
							size="1rem"
							class="mr-2"
						/>{{ websiteName }}</a
					>
					<a
						v-if="repository"
						:href="repository"
						class="hover:text-highlight-dark underline underline-offset-2"
						target="_blank"
						><Icon
							name="devicon:git"
							size="1rem"
							class="mr-2 my-auto"
						/>Repo</a
					>
				</div>
				<h2 class="max-w-xs">
					{{ description }}
				</h2>
				<p><b>Roles:</b> {{ roles.join(", ") }}</p>
				<div v-if="languages" class="flex text-base font-normal">
					<p>
						<b>Languages:</b>
						{{ languages.map((lang) => lang.name).join(", ") }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
