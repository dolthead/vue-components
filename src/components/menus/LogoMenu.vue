<script lang="ts" setup>
import { IonPage, IonContent, IonHeader, IonToolbar, IonSplitPane, IonButtons, IonTitle, IonList, IonItem, IonLabel, IonButton, IonMenu, IonMenuButton, IonFooter, IonGrid, IonCol, IonRow, IonImg, IonIcon } from '@ionic/vue';
import { caretBack } from 'ionicons/icons';
</script>

<template>
    <ion-split-pane when="md" contentId="main-content">
        <ion-menu contentId="main-content">
            <ion-header class="ion-hide">
                <ion-toolbar>
                    <ion-title>Menu Content</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="menu">
                <ion-list lines="none">
                    <ion-item class="ion-margin-vertical">
                        <ion-img class="" src="https://cdn-icons-png.flaticon.com/512/732/732242.png"></ion-img>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>About</ion-label>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>Product</ion-label>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>Services</ion-label>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>Career</ion-label>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>Partner</ion-label>
                    </ion-item>
                    <ion-item :detail="true">
                        <ion-label>Contact</ion-label>
                    </ion-item>
                    <ion-item button :detail="false">
                        <ion-label>Login</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
            <ion-footer>
                <ion-button fill="solid" expand="block" color="primary" class="ion-margin">
                    Get Started
                </ion-button>
                <ion-grid class="ion-hide">
                    <ion-row class="ion-justify-content-around">
                        <ion-col size="auto" class="">
                            <ion-img src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"></ion-img>
                        </ion-col>
                        <ion-col size="auto">
                            <ion-img src="https://cdn-icons-png.flaticon.com/512/4923/4923005.png"></ion-img>
                        </ion-col>
                        <ion-col size="auto">
                            <ion-img src="https://cdn-icons-png.flaticon.com/512/4926/4926492.png"></ion-img>
                        </ion-col>
                        <ion-col size="auto">
                            <ion-img src="https://cdn-icons-png.flaticon.com/512/2111/2111748.png"></ion-img>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-footer>
        </ion-menu>
        <ion-page id="main-content" v-bind="$attrs">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
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
    </ion-split-pane>
</template>

<style lang="scss" scoped>
ion-menu {
    ion-content.menu {
        ion-img {
            width: 32px !important;
            transform: rotate(140deg);
        }

        ion-item ion-label {
            letter-spacing: 1px;
        }
    }

    ion-footer {
        ion-img {
            width: 32px !important;
        }

        ion-button {
            letter-spacing: 1px;
        }
    }
}
</style>
