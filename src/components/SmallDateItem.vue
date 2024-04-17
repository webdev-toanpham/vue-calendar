<script setup lang="ts">
import { type CustomDate } from '@/utils/calendar.util';

const { date } = defineProps<{ date: CustomDate }>();
const emit = defineEmits(['onDateClick']);
</script>

<template>
    <div class="flex items-center justify-center hover:cursor-pointer hover:bg-[#efefef]"
        :class="{ '!bg-blue-400 !text-white': date.isToday, 'text-gray-500 opacity-70': date.isLastMonth || date.isNextMonth }"
        @click="emit('onDateClick', date)">
        <span>{{ date.date.getDate() }}</span>
    </div>
</template>

<style scoped></style>