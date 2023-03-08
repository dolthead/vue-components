<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonList, IonItem, IonLabel, IonAvatar, IonRadioGroup, IonRadio, IonButton, IonIcon, IonRow, IonCol, modalController } from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <!-- header fixed START -->
        <ion-header class="ion-hide">
            <ion-toolbar>
                <ion-title class="ion-no-padding ion-text-start">Select Family Member</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="modalController.dismiss()">
                        <ion-icon :icon="closeOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <!-- header fixed END -->
        <ion-content class="ion-padding-horizontal ion-text-center">
            <ion-row class="title-row">
                <ion-col>
                    <ion-title class="ion-no-padding ion-text-start">Select family member</ion-title>
                    <ion-button class="ion-float-right ion-no-padding ion-no-margin" fill="clear" color="dark"
                        @click="modalController.dismiss()">
                        <ion-icon :icon="closeOutline"></ion-icon>
                    </ion-button>
                </ion-col>
            </ion-row>
            <ion-list>
                <ion-radio-group name="member" value="member1">
                    <ion-item lines="none" color="none" class="ion-no-padding">
                        <ion-avatar slot="start">
                            <img alt="Member Profile"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </ion-avatar>
                        <ion-radio value="member1" class="ion-no-margin name" color="success">Matheus Souto</ion-radio>
                    </ion-item>
                    <ion-item lines="none" color="none" class="ion-no-padding">
                        <ion-avatar slot="start">
                            <img alt="Member Profile"
                                src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </ion-avatar>
                        <ion-radio value="member2" class="ion-no-margin name" color="success">Eduardo Souto</ion-radio>
                    </ion-item>
                    <ion-item lines="none" color="none" class="ion-no-padding">
                        <ion-avatar slot="start">
                            <img alt="Member Profile"
                                src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </ion-avatar>
                        <ion-radio value="member3" class="ion-no-margin name" color="success">Ana Souto</ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>
            <ion-button @click="modalController.dismiss()" expand="block" fill="clear" shape="round" color="primary">
                Continue
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-title {
    letter-spacing: 1px;
    display: inline-flex;
    float: left;
}

ion-item {
    --ion-item-background: transparent !important;
    padding-bottom: 16px;
}

ion-item:last-of-type {
    padding-bottom: 0px;
}

ion-list {
    --ion-item-background: transparent;
}

ion-radio {
    font-weight: 500;
    letter-spacing: 0.8px;
    height: 100%;
}

ion-radio::part(container) {
    border-radius: 50px;
    border: 2px solid #ddd;
    width: 30px;
    height: 30px;
}

ion-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
}

ion-radio.radio-checked::part(container) {
    background: #20cca4;
    border-color: transparent;
}

ion-radio.radio-checked::part(mark) {
    width: 6px;
    height: 10px;

    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;

    transform: rotate(45deg);
}

ion-button {
    text-transform: capitalize;
    letter-spacing: 1.5px;
    font-weight: bold;
}

.title-row {
    padding-top: 16px !important;
    ion-col {
      display: block;
    }
  }
  </style>
