<script setup>
import { reactive, ref } from "vue";

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

const iconSize = ref("2rem");
</script>

<template>
	<div>
		<div class="mx-auto mt-5 md:mx-32 md:mt-20 w-fit">
			<!-- Generic Profile Information -->
			<div class="mx-auto md:mx-0 w-full">
				<img src="/Aervy_Icon.png" class="w-40 rounded-full h-auto" />
				<h1 class="w-fit text-aervyon font-bold text-4xl mt-5">
					Aervyon
				</h1>
				<h2 class="mt-2.5 text-2xl text-primary-text-dark">
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
		</div>
	</div>
</template>
