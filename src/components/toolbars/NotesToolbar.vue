<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonIcon, IonBackButton } from '@ionic/vue';
import { add, chevronBackOutline } from 'ionicons/icons';
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button color="primary" defaultHref="home" text="Back"
                    :icon="chevronBackOutline"></ion-back-button>
            </ion-buttons>
            <ion-label class="ion-text-center logo">
                <span>Notes</span><img src="https://cdn-icons-png.flaticon.com/512/889/889648.png" alt="Notes" />
            </ion-label>
            <ion-buttons slot="end">
                <ion-button>
                    <ion-icon :icon="add" color="primary"></ion-icon>
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
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: #222428;
            margin-left: 5px;
            font-weight: 500;
            letter-spacing: 1px;
            margin-right: 5px;
            font-size: 1.2rem;
        }

        img {
            width: 10%;
        }
    }

    ion-icon {
        font-size: 26px;
    }
}
</style>
