<script setup lang="ts">
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar id="extra-toolbar" color="toolbar">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Screens" />
                </ion-buttons>
                <ion-title>Notifications Screen</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            Notifications screen
        </ion-content>
    </ion-page>
</template>
