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
                <ion-label>
                    <ion-icon :icon="homeOutline"></ion-icon>
                    <span>Home</span>
                </ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab2">
                <ion-label>
                    <ion-icon :icon="searchOutline"></ion-icon>
                    <span>Search</span>
                </ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab3">
                <ion-label>
                    <ion-icon :icon="notificationsOutline"></ion-icon>
                    <span>Notifications</span>
                </ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab4">
                <ion-label>
                    <ion-icon :icon="personOutline"></ion-icon>
                    <span>Profile</span>
                </ion-label>
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
    --background: #fff;
    height: 50px;
    padding: 10px 0;
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
            padding: 0px 16px;
            border-radius: 50px;
            margin: 0px 16px;

            ion-label {
                display: flex;
                justify-items: center;
                align-items: center;
                font-size: 1.1rem;

                span {
                    display: block;
                    font-size: 1rem;
                    overflow-x: hidden;
                    text-overflow: ellipsis;
                }

                ion-icon {
                    margin-right: 5px;
                }
            }
        }

        ion-label {
            display: none;
            letter-spacing: 0.5px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;

            span {
                display: none;
            }

            ion-icon {
                visibility: visible !important;
                font-size: 1.5rem !important;
                margin-right: 5px;
            }
        }
    }
}
</style>
