<script setup lang="ts">
import type { CustomDate } from '@/utils/calendar.util';

const props = defineProps<{ events?: string[], date?: CustomDate }>();
</script>

<template>
    <div class="flex flex-col gap-y-3">
        <div class="text-lg" v-if="props.date">{{ props.date?.date.getDate() }} / {{ props.date ?
            props.date?.date.getMonth() + 1 : '' }}
        </div>
        <div class="flex flex-col gap-y-2" v-for="(event, i) in events" :key="i">
            <div class="">{{ event }}</div>
        </div>
    </div>
</template>

<style scoped></style>