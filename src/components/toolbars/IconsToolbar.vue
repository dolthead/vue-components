<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonBadge } from '@ionic/vue';
import { menu, searchOutline, heartOutline, bagOutline } from 'ionicons/icons';
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
                <ion-button color="primary">
                    <ion-icon :icon="searchOutline"></ion-icon>
                </ion-button>
                <ion-button color="primary">
                    <ion-icon :icon="heartOutline"></ion-icon>
                </ion-button>
                <ion-button class="cart-btn" color="primary">
                    <ion-icon :icon="bagOutline"></ion-icon>
                    <ion-badge color="primary">2</ion-badge>
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

    .cart-btn {
        border-radius: 12px;
        height: 45px !important;
        // width: 40px;
        position: relative;
        overflow: visible !important;
        margin-right: 8px;

        ion-badge {
            position: absolute;
            font-size: 12px;
            right: -4px;
            top: 4px;
            height: 18px;
            width: 18px;
            justify-content: center;
            display: flex;
            border-radius: 50%;
        }
    }
}
</style>
