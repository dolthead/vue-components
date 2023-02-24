<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonIcon } from '@ionic/vue';
import { menu, personCircleOutline } from 'ionicons/icons';
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button color="primary">
                    <ion-icon :icon="menu"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-label class="ion-text-center logo">
                <img src="https://codemyionic.com/assets/icon/logo.svg" alt="CodeMyIonic" /><span>CodeMyIonic</span>
            </ion-label>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <ion-icon :icon="personCircleOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #fff;
    --min-height: 70px;

    .logo {
        letter-spacing: 0.8px;
        color: #222428;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 20px;
        }

        span {
            color: #222428;
            margin-left: 5px;
            font-weight: 500;
            letter-spacing: 1px;
        }
    }

    ion-icon {
        font-size: 26px;
    }
}
</style>
