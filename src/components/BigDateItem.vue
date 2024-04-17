<script setup lang="ts">
import { type CustomDate } from '@/utils/calendar.util';

const props = defineProps<{ date: CustomDate, events?: string[] }>();
const emit = defineEmits(['onDateClick']);
</script>

<template>
    <div class="flex flex-col p-2 hover:cursor-pointer hover:bg-[#efefef]"
        :class="{ '!bg-blue-400 !text-white': props.date.isToday, 'text-gray-500 opacity-70': props.date.isLastMonth || props.date.isNextMonth }"
        @click="emit('onDateClick', props.date)">
        <span>{{ props.date.date.getDate() }}</span>
        <div class="flex flex-col mt-1 gap-y-1" v-if="!!events?.length">
            <div class="px-1 py-1 rounded-md bg-blue-300 text-white line-clamp-1" v-for="(event, i) in events" :key="i"
                :title="event">
                <span class="">{{ event }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>