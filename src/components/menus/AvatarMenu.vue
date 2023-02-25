<script lang="ts" setup>
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonTitle, IonList, IonItem, IonAvatar, IonLabel, IonIcon, IonItemDivider, IonButton, IonMenu, IonMenuButton } from '@ionic/vue';
import { home, person, location, settings, heart, notifications, pricetag, informationCircle, arrowForwardCircle, caretBack } from 'ionicons/icons';
</script>

<template>
    <ion-menu ref="menu" contentId="main-content" type="push">
        <ion-header class="ion-hide">
            <ion-toolbar>
                <ion-title>Menu Content</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="menu">
            <ion-list lines="none">
                <ion-item>
                    <ion-avatar class="ion-margin-vertical" size="large" slot="start">
                        <img src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </ion-avatar>
                    <ion-label class="user">
                        <span class="name">Neil Sherman</span>
                        <span class="profile">Traveler</span>
                    </ion-label>
                </ion-item>
                <ion-item :detail="false" class="active">
                    <ion-icon :icon="home" slot="start"></ion-icon>
                    <ion-label>
                        Home
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="person" slot="start"></ion-icon>
                    <ion-label>
                        Profile
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="location" slot="start"></ion-icon>
                    <ion-label>
                        Near Me
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="heart" slot="start"></ion-icon>
                    <ion-label>
                        Favorites
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="notifications" slot="start"></ion-icon>
                    <ion-label>
                        Notifications
                    </ion-label>
                </ion-item>
                <ion-item-divider>
                    &nbsp;
                </ion-item-divider>
                <ion-item :detail="false">
                    <ion-icon :icon="pricetag" slot="start"></ion-icon>
                    <ion-label>
                        Promotions
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="settings" slot="start"></ion-icon>
                    <ion-label>
                        Settings
                    </ion-label>
                </ion-item>
                <ion-item :detail="false">
                    <ion-icon :icon="informationCircle" slot="start"></ion-icon>
                    <ion-label>
                        Help
                    </ion-label>
                </ion-item>
                <ion-item-divider>
                    &nbsp;
                </ion-item-divider>
                <ion-item button :detail="false">
                    <ion-icon :icon="arrowForwardCircle" slot="start"></ion-icon>
                    <ion-label>
                        Logout
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-page id="main-content" v-bind="$attrs">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                            <g transform="translate(-23 -44)">
                                <rect class="cls-1" width="22" height="1.8" rx="2" transform="translate(23 44)" />
                                <rect class="cls-1" width="15" height="1.8" rx="2" transform="translate(23 52)" />
                                <rect class="cls-1" width="22" height="1.8" rx="2" transform="translate(23 60)" />
                            </g>
                        </svg>
                    </ion-menu-button>
                </ion-buttons>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h4 class="ion-no-margin">Main Content</h4>
            <p>Click the icon in the top left to toggle the menu.</p>
            <ion-button router-link="/Menus" router-direction="back">
                <ion-icon slot="start" :icon="caretBack"></ion-icon>
                Back to Menus
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.cls-1 {
    fill: currentColor;
}
ion-menu {
    --ion-background-color: #419b95 !important;
    --ion-text-color: var(--ion-color-primary-contrast);

    ion-content.menu {
        --background: #419b95 !important;

        ion-list {
            --background: #419b95 !important;
            --color: #ffffff !important;

            &.list-md,
            &.list-ios {
                background: transparent !important;
            }
        }

        ion-item {
            --background: #419b95 !important;
            --color: #ffffff !important;

            &.active {
                --background: #fff !important;
                color: #6e6e6e !important;
                font-weight: 600;
                margin-right: 20px;

                border-top-right-radius: 50px !important;
                border-bottom-right-radius: 50px !important;
                border-radius: 40px 999em 999em 40px !important;
                -moz-border-radius-topright: 50px !important;
                -moz-border-radius-bottomright: 50px !important;
                -moz-border-radius: 40px 999em 999em 40px !important;
                -webkit-border-top-right-radius: 50px !important;
                -webkit-border-bottom-right-radius: 50px !important;
                -webkit-border-radius: 40px 999em 999em 40px !important;
            }

            ion-icon {
                margin-right: 12px;
                font-size: 20px;
                color: #ffffff !important;
            }
        }

        ion-avatar {
            margin-right: 12px;
            width: 40px;
            height: 40px;
        }

        ion-label .name {
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 1px;
        }

        ion-label .profile {
            display: block;
            font-size: 0.8rem;
            color: #dfdfdf;
            margin: 2px 0;
        }

        ion-item ion-label {
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }

        ion-item ion-label.user {
            display: block !important;
        }

        ion-item-divider {
            --background: #ffffff !important;
            border: 1px solid #67afaa !important;
            height: 0 !important;
            margin: 20px 20px !important;
            min-height: 0px;
            width: 85%;
        }
    }
}
</style>
