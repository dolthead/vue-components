<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon } from '@ionic/vue';
import { menu } from 'ionicons/icons';
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button color="primary">
                    <ion-icon :icon="menu"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title class="ion-text-center ion-hide">Title</ion-title>
            <ion-buttons slot="end">
                <ion-button class="avatar">
                    <img src="https://iecommerce.sconn.co.in/assets/images/profile-pic.png" />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #fff;
    --min-height: 70px;

    ion-icon {
        font-size: 26px;
    }

    .avatar {
        width: 50px;
        height: 50px;

        img {
            border-radius: 50% !important;
            object-fit: fill;
        }
    }
}
</style>
