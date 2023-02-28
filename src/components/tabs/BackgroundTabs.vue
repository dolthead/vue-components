<script lang="ts" setup>
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, searchOutline, notificationsOutline, personOutline } from 'ionicons/icons';

import { useTabs } from './useTabs'; // this is only needed when the tabs are used out of proper Ionic page structure
const { tabBarRef } = useTabs(); // this is only needed when the tabs are used out of proper Ionic page structure
</script>

<template>
    <ion-tabs class="tabs-inline">
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom" ref="tabBarRef">
            <ion-tab-button tab="tab1">
                <ion-icon :icon="homeOutline"></ion-icon>
                <ion-label>Home</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab2">
                <ion-icon :icon="searchOutline"></ion-icon>
                <ion-label>Search</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab3">
                <ion-icon :icon="notificationsOutline"></ion-icon>
                <ion-label>Notifications</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab4">
                <ion-icon :icon="personOutline"></ion-icon>
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>

<style lang="scss" scoped>
.tabs-inline {
    position: relative !important;
    display: inline !important;
}
ion-tab-bar {
    --border: 0px !important;
    height: 70px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    ion-tab-button {
        -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        --background: #fff;
        --color: #a7a7a7 !important;

        &[aria-selected='true'] {
            --background: var(--ion-color-primary);
            --color: #fff !important;
            --color-focused: #fff;
            --color-selected: #fff;
        }

        ion-label {
            letter-spacing: 0.5px;
        }
    }
}
</style>
