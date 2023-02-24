<script lang="ts" setup>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonBackButton, IonSearchbar, IonIcon } from '@ionic/vue';
import { chevronBackOutline, albumsOutline } from 'ionicons/icons';
</script>

<template>
    <ion-header mode="md">
        <ion-toolbar>
            <ion-buttons slot="start" class="ion-no-margin">
                <ion-back-button slot="start" color="primary" defaultHref="home" text=""
                    :icon="chevronBackOutline"></ion-back-button>
            </ion-buttons>
            <ion-label>
                <ion-searchbar class="" show-clear-button="focus" placeholder="Search" mode="ios"></ion-searchbar>
            </ion-label>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <ion-icon :icon="albumsOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<style lang="scss" scoped>
ion-toolbar {
    --background: #fff;
    --min-height: 70px;

    ion-searchbar {
        padding: 0;
        margin: 0 auto;
        width: 96%;
        --background: #f4f5f8 !important;
        --placeholder-color: #202020 !important;
        --icon-color: #8c8f95 !important;
        // color: #8c8f95;
        letter-spacing: 0.4px;
        --placeholder-font-weight: 500;
    }

    ion-icon {
        font-size: 26px;
    }
}
</style>
