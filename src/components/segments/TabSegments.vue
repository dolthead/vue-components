<script lang="ts" setup>
import { IonSegment, IonSegmentButton, IonCard, IonCardHeader } from '@ionic/vue';
import { ref } from 'vue';

const segment = ref('1');
</script>

<template>
    <ion-segment v-model="segment" mode="md">
        <ion-segment-button value="1">
            Segment 1
        </ion-segment-button>
        <ion-segment-button value="2">
            Segment 2
        </ion-segment-button>
        <ion-segment-button value="3">
            Segment 3
        </ion-segment-button>
    </ion-segment>
    <ion-card v-show="segment === '1'" class="ion-no-margin ion-padding-bottom">
        <ion-card-header>
            1
        </ion-card-header>
    </ion-card>
    <ion-card v-show="segment === '2'" class="ion-no-margin ion-padding-bottom">
        <ion-card-header>
            2
        </ion-card-header>
    </ion-card>
    <ion-card v-show="segment === '3'" class="ion-no-margin ion-padding-bottom">
        <ion-card-header>
            3
        </ion-card-header>
    </ion-card>
</template>

<style lang="scss" scoped>
ion-segment {
    --background: #ffffff !important;
    background: #ffffff !important;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 16px 16px 0;

    ion-segment-button {
        text-transform: capitalize;
        letter-spacing: 0.8px;
        --color: #838383;
        --color-checked: #fff;
        --indicator-height: 0px !important;
        --background-checked: var(--ion-color-primary);
        --color-hover: var(--ion-color-primary);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
}

ion-card {
    border-radius: 0px !important;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    --background: #ffffff !important;
    background: #ffffff !important;
}
</style>