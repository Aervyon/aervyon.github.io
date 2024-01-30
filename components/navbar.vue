<script setup>
import { ref, reactive } from "vue";

// will impl l8r
const isOpen = ref(false);

const toggleNavbar = () => {
	isOpen.value = !isOpen.value;
};

const urls = reactive([
	{
		name: "blog",
		url: "https://blog.aervyon.com",
	},
	{
		name: "about",
		url: "/about",
	},
	{
		name: "contact",
		url: "mailto:aervy@aervyon.com",
	},
]);
</script>

<template>
	<header
		class="px-5 md:px-20 py-5 flex flex-wrap items-center bg-dark justify-between"
	>
		<NuxtLink
			to="/"
			class="text-aervyon items-center font-bold text-2xl hover:underline hover:text-url-dark"
		>
			Aervyon
		</NuxtLink>
		<!-- Navigation -->
		<button
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			@click="toggleNavbar"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div
			class="w-full md:block md:w-auto text-link-dark text-xl mr-40"
			:class="{ hidden: !isOpen }"
		>
			<ul class="md:space-x-10 p-4 md:p-0 md:flex flex-col md:flex-row">
				<li v-for="url in urls" :key="url.name">
					<NuxtLink :to="url.url" class="hover:text-url-dark">
						<span class="block py-1 px-3">
							{{ url.name }}
						</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</header>
</template>
