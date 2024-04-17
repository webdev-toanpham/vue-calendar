<script setup lang="ts">
import { computed, ref } from 'vue';
import SmallCalendar from './SmallCalendar.vue';
import { getFullDatesOfMonth, type CustomDate } from '@/utils/calendar.util';
import BigCalendar from './BigCalendar.vue';
import RightSidebar from './RightSidebar.vue';

const date = ref<Date>(new Date());
const selectedDate = ref<{ events: string[], date: CustomDate }>()
const data = computed(() => getFullDatesOfMonth(date.value.getFullYear(), date.value.getMonth()));

const onDateSelect = (event: CustomDate) => {
    date.value = event.date;

    // Get event by date here
    selectedDate.value = {
        events: [`event ${event.date.getDate()}/${event.date.getMonth() + 1} - 1`, `event ${event.date.getDate()}/${event.date.getMonth() + 1} - 2`],
        date: event
    };
}

</script>

<template>
    <div class="flex h-screen">
        <div class="min-w-[280px] h-full bg-[#f5f5f5] pt-8">
            <SmallCalendar :data="data" :selected-date="selectedDate?.date" @select-date="onDateSelect($event)" />
        </div>
        <div class="flex-1 pt-8">
            <BigCalendar :data="data" :selected-date="selectedDate" @select-date="onDateSelect($event)" />
        </div>
        <div class="min-w-[280px] h-full pt-8 border-x">
            <RightSidebar :date="selectedDate?.date" :events="selectedDate?.events" />
        </div>
    </div>
</template>

<style scoped></style>