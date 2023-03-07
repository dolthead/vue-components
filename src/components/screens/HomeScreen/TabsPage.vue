<script lang="ts" setup>
import { IonRouterOutlet, IonPage, IonLabel, IonIcon, IonTabs, IonTabBar, IonTabButton, IonFab, IonFabButton, IonImg } from '@ionic/vue';
import { home, homeOutline, compass, compassOutline, cube, cubeOutline, person, personOutline } from 'ionicons/icons';

let current_tab = 'tab1';
</script>

<template>
    <ion-page>
        <ion-tabs mode="ios" @ionTabsDidChange="current_tab = $event.tab">
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/HomeScreen/tab1">
                    <ion-icon :icon="current_tab == '1' ? home : homeOutline"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab2" href="/HomeScreen/tab2">
                    <ion-icon :icon="current_tab == '2' ? compass : compassOutline"></ion-icon>
                    <ion-label>Explore</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab3" href="/HomeScreen/tab3">
                    <ion-icon :icon="current_tab == '3' ? cube : cubeOutline"></ion-icon>
                    <ion-label>Order</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab4" href="/HomeScreen/tab4">
                    <ion-icon :icon="current_tab == '4' ? person : personOutline"></ion-icon>
                    <ion-label>Profile</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-tabs {
    ion-tab-bar {
        --border: 0px !important;
        height: 55px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        --background: #fff !important;

        ion-tab-button {
            -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --background: #fff !important;
            --color: #a7a7a7 !important;
            --color-focused: #ffbc00 !important;
            --color-selected: #ffbc00 !important;

            &.tab-selected {
                ion-label {
                    color: #222428;
                    font-weight: 600;
                }
            }

            ion-label {
                letter-spacing: 0.5px;
            }
        }
    }
}
</style>
