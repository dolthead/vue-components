<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon, IonTitle } from '@ionic/vue';
import { gridOutline } from 'ionicons/icons';
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button defaultHref="home" text=""></ion-back-button>
            </ion-buttons>
            <ion-title class="ion-text-center">Profile</ion-title>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <ion-icon :icon="gridOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #fff;
    --min-height: 70px;

    ion-title {
        letter-spacing: 0.8px;
        color: #222428;
    }

    ion-icon {
        font-size: 26px;
    }
}
</style>
