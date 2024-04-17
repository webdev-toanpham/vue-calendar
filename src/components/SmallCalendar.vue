<script setup lang="ts">
import { compareDate, type CustomDate, weekDays } from '@/utils/calendar.util';
import SmallDateItem from './SmallDateItem.vue';
import CalendarWeekday from './CalendarWeekday.vue';

const { data, selectedDate } = defineProps<{ data: { month: number; year: number; dates: CustomDate[] }, selectedDate?: CustomDate }>();
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
            <CalendarWeekday />
            <div class="grid grid-cols-7">
                <SmallDateItem v-for="(date, index) in data.dates" :date="date" :key="index"
                    @on-date-click="onDateClick($event)" class="w-[40px] h-[40px]"
                    :class="{ 'border border-blue-500': compareDate(selectedDate, date) }" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>