<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonText, modalController } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <ion-header class="ion-hide">
            <ion-toolbar>
                <ion-title>Modal</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="modalController.dismiss()">Close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding ion-text-center">
            <img class="action-img" src="https://www.apple.com/legal/images/icon_dataprivacy_2x.png" />
            <ion-text color="dark">
                <h1>Let's Connect</h1>
                <h6 class="action-desc">
                    Aidan's posts will be appear on your feed, and can access profile
                </h6>
            </ion-text>
            <ion-button @click="modalController.dismiss()" expand="block" fill="solid" shape="round" color="primary">
                Follow
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.action-img {
    margin: 20px 0 0;
}

h1 {
    letter-spacing: 0.8px;
}

h6.action-desc {
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.8px;
    color: #515151;
    margin: 0px 0 35px;
    padding: 0 12px;
}

ion-button {
    text-transform: capitalize;
    letter-spacing: 1.5px;
}
</style>
