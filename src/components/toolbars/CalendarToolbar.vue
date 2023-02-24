<script lang="ts" setup>
    import { IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonSegment, IonSegmentButton, IonIcon } from '@ionic/vue';
    import { calendarOutline, searchOutline } from 'ionicons/icons';
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button expand="block" fill="clear" color="primary">
                    Today
                </ion-button>
            </ion-buttons>
            <ion-label>
                <ion-segment value="Day" mode="ios">
                    <ion-segment-button value="Day">
                        <ion-label>Day</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="Week">
                        <ion-label>Week</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="Month">
                        <ion-label>Month</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-label>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <ion-icon :icon="calendarOutline"></ion-icon>
                </ion-button>
                <ion-button color="primary">
                    <ion-icon :icon="searchOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #fff;
    --min-height: 70px;

    ion-label {
        margin: 0 auto;
        width: 94%;

        ion-segment {
            --background: #eeeeee;

            ion-segment-button {
                --color-checked: var(--ion-color-primary);
                --color: #757d8a;
                font-weight: 500;
                letter-spacing: 0.8px;

                &.segment-button-checked {
                    font-weight: 600;
                }
            }
        }
    }

    ion-icon {
        font-size: 26px;
        color: #757d8a;
    }
}
</style>
