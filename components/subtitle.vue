<script setup lang="ts">
defineProps<{
	altColors?: boolean;
}>();
</script>

<template>
	<div
		class="py-2 px-3 border-2 bg-opacity-20 rounded-xl w-fit"
		:class="{
			'border-aervyon bg-aervyon': !altColors,
			'border-accent-secondary-dark bg-accent-secondary-dark': altColors,
		}"
	>
		<p
			class="text-sm md:text-md lg:text-lg text-primary-text-dark font-bold font-mono"
		>
			<slot />
		</p>
	</div>
</template>
