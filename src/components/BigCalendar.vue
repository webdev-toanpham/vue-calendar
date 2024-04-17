<script setup lang="ts">
import { compareDate, type CustomDate } from '@/utils/calendar.util';
import BigDateItem from './BigDateItem.vue';
import CalendarWeekday from './CalendarWeekday.vue';

const { data, selectedDate } = defineProps<{ data: { month: number; year: number; dates: CustomDate[] }, selectedDate?: { events: string[], date: CustomDate } }>();
const emit = defineEmits(['selectDate']);

const onDateClick = (event: CustomDate) => {
    emit('selectDate', event);
}

</script>

<template>
    <div class="">
        <div class="flex items-center gap-x-2 justify-center">
            <div class="text-lg font-bold">
                <span>{{ data.month }}</span>
            </div>
            <div class="text-lg font-bold">
                <span>{{ data.year }}</span>
            </div>
        </div>
        <div class="flex flex-col">
            <CalendarWeekday :is-long-day="true" />
            <div class="grid grid-cols-7 border-t-[1px] border-l-[1px] border-gray-300">
                <BigDateItem v-for="(date, index) in data.dates" :date="date" :key="index"
                    @on-date-click="onDateClick($event)"
                    class="w-full h-[calc((100vw_-_560px)/7)] border-b-[1px] border-r-[1px] border-gray-300"
                    :class="{ '!border !border-blue-500': compareDate(selectedDate?.date, date) }"
                    :events="compareDate(selectedDate?.date, date) ? selectedDate?.events : undefined" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>