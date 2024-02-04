<script setup lang="ts">
import { ref } from "vue";
defineProps<{
	iconName: string;
	title: string;
	start: Date;
	duration?: string;
	description: string;
	darkFont?: boolean;
	logoPadding?: boolean;
}>();

const size = ref("10rem");

// time for a year (365.5d):  ms * 31579200000
// time for a month (30.43d): ms * 2629152000
// time for a day:            ms * 86400000
// time for an hour:          ms * 3600000
// time for a minute:         ms * 60000
// time for a second:         ms * 1000
const formatDate = (duration: number): string => {
	if (duration >= 31579200000) {
		return (duration / 31579200000).toPrecision(2) + "y";
	}
	if (duration >= 2629152000) {
		return (duration / 2629152000).toPrecision(2) + "m";
	}
	return (duration / 86400000).toPrecision(2) + "d";
};
</script>

<template>
	<div class="flex pr-4 pl-0 py-2">
		<!-- Icon -->
		<Icon
			:name="iconName"
			:size="size"
			:class="{
				'p-4': logoPadding,
			}"
		/>
		<div
			class="ml-10 text-2xl my-auto font-bold"
			:class="{
				'text-primary-text-dark': !darkFont,
				'text-primary-dark': darkFont,
			}"
		>
			<div>
				<h1>{{ title }}</h1>
			</div>
			<div>
				<p class="text-lg font-semibold">
					{{
						!duration
							? formatDate(Date.now() - Number(start))
							: duration
					}}
					of experience
				</p>
				<p class="text-base font-normal max-w-xs">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>
