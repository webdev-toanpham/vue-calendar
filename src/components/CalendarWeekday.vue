<script setup lang="ts">
import { weekDays } from '@/utils/calendar.util';
const props = defineProps<{ isLongDay?: boolean }>()
</script>

<template>
    <div class="grid grid-cols-7" :class="{ 'border-t-[1px] border-l-[1px] border-gray-300': isLongDay }">
        <div class="flex justify-center" :class="{ 'border-r-[1px] border-gray-300': isLongDay }"
            v-for="(day, i) in weekDays" :key="i">
            <span>{{ props.isLongDay ? day.long : day.short }}</span>
        </div>
    </div>
</template>

<style scoped></style>