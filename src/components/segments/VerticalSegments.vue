<script lang="ts" setup>
import { IonSegment, IonSegmentButton, IonCard, IonCardHeader } from '@ionic/vue';
import { ref } from 'vue';

const segment = ref('1');
</script>

<template>
    <div class="segment-container">
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
        <div class="segment-body">
            <ion-card v-show="segment === '1'" class="ion-no-margin ion-no-padding">
                <ion-card-header>
                    1
                </ion-card-header>
            </ion-card>
            <ion-card v-show="segment === '2'" class="ion-no-margin ion-no-padding">
                <ion-card-header>
                    2
                </ion-card-header>
            </ion-card>
            <ion-card v-show="segment === '3'" class="ion-no-margin ion-no-padding">
                <ion-card-header>
                    3
                </ion-card-header>
            </ion-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.segment-container {
    display: inline-flex;
    width: -webkit-fill-available;
    height: 146px;

    ion-segment {
        --background: #ffffff !important;
        border-top-left-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 8px;
        padding: 0 12px 0 0;
        display: block;
        width: max-content;

        ion-segment-button {
            text-transform: capitalize;
            letter-spacing: 0.8px;
            --color: #838383;
            --color-checked: #fff;
            --indicator-height: 0px !important;
            --background-checked: var(--ion-color-primary);
            --color-hover: var(--ion-color-primary);
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-width: 0px 1px 1px 0px;
            border-color: #ddd;
            border-style: solid;

            &.segment-button-checked::after {
                content: '';
                position: absolute;
                left: 100%;
                top: 50%;
                margin-top: -13px;
                border-left: 0;
                border-bottom: 13px solid transparent;
                border-top: 13px solid transparent;
                border-left: 10px solid var(--ion-color-primary);
            }

            &.segment-button-checked:last-of-type {
                border-width: 0px 1px 0px 0px !important;
            }
        }
    }

    .segment-body {
        width: -webkit-fill-available;
    }

    ion-card {
        border-radius: 0px !important;
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 8px !important;
        --background: #ffffff !important;
        background: #ffffff !important;
        box-shadow: none;
        height: -webkit-fill-available;
        padding: 0px;
    }
}
</style>
