<script lang="ts" setup>
import { IonRouterOutlet, IonPage, IonLabel, IonIcon, IonTabs, IonTabBar, IonTabButton } from '@ionic/vue';
import { grid, gridOutline, earth, earthOutline, notifications, notificationsOutline, person, personOutline } from 'ionicons/icons';

let current_tab = 'tab1';
</script>

<template>
    <ion-page>
        <ion-tabs @ionTabsDidChange="current_tab = $event.tab">
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/FeedsProfileScreens/tab1">
                    <ion-label>
                        <ion-icon :icon="current_tab == 'tab1' ? grid : gridOutline"></ion-icon>
                        <span>Feeds</span>
                    </ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab2" href="/FeedsProfileScreens/tab2">
                    <ion-label>
                        <ion-icon :icon="current_tab == 'tab2' ? earth : earthOutline"></ion-icon>
                        <span>Explore</span>
                    </ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab3" href="/FeedsProfileScreens/tab3">
                    <ion-label>
                        <ion-icon :icon="current_tab == 'tab3' ? notifications : notificationsOutline"></ion-icon>
                        <span>Notifications</span>
                    </ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab4" href="/FeedsProfileScreens/tab4">
                    <ion-label>
                        <ion-icon :icon="current_tab == 'tab4' ? person : personOutline"></ion-icon>
                        <span>Profile</span>
                    </ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style lang="scss">
ion-content,
ion-header ion-toolbar {
    --background: #f6f7fa !important;
    --color: #222428;
}

.gallery {
    column-count: 5;
}

@media (max-width: 767px) {
    .gallery {
        column-count: 2;
    }
}

#profile {
    ion-segment-button {
        max-width: 50px !important;
    }
}
</style>

<style lang="scss" scoped>
ion-tabs {
    ion-tab-bar {
        --border: 0px !important;
        --background: #fff;
        height: 50px;
        padding: 12px 0;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        ion-tab-button {
            -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --background: #fff;
            --color: #a7a7a7 !important;

            &.tab-selected {
                --background: var(--ion-color-primary);
                --color: #fff !important;
                --color-focused: #fff;
                --color-selected: #fff;
                padding: 0px 16px;
                border-radius: 10px;
                margin: 0px 16px;

                ion-label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;

                    span {
                        display: block;
                        letter-spacing: 1px;
                        font-weight: 400;
                    }

                    ion-icon {
                        margin-right: 5px;
                        font-size: 1.2rem !important;
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
}</style>
