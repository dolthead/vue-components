<script lang="ts" setup>
import { IonList, IonItem, IonLabel, IonRadioGroup, IonRadio, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<template>
    <ion-grid class="card">
        <ion-row class="ion-margin-vertical">
            <ion-col size="12">
                <ion-label class="title">Select User List</ion-label>
            </ion-col>
        </ion-row>
        <ion-row class="">
            <ion-col size="12">
                <ion-list class="">
                    <ion-radio-group name="userList" value="userList1">
                        <ion-item lines="none" color="none" class="ion-no-padding">
                            <ion-avatar slot="start">
                                <img alt="userList Profile"
                                    src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE4fHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            </ion-avatar>
                            <ion-radio value="userList1" class="name" color="primary">Bartosz Chorąży</ion-radio>
                        </ion-item>
                        <ion-item lines="none" color="none" class="ion-no-padding">
                            <ion-avatar slot="start">
                                <img alt="userList Profile"
                                    src="https://images.unsplash.com/photo-1549237511-6b64e006ce65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            </ion-avatar>
                            <ion-radio value="userList2" class="name" color="primary">Vasileios Soutis</ion-radio>
                        </ion-item>
                        <ion-item lines="none" color="none" class="ion-no-padding">
                            <ion-avatar slot="start">
                                <img alt="userList Profile"
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            </ion-avatar>
                            <ion-radio value="userList3" class="name" color="primary">Loana Albisser</ion-radio>
                        </ion-item>
                    </ion-radio-group>
                </ion-list>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style lang="scss" scoped>
.card {
    background-color: #fff !important;
    border-radius: 16px !important;
    height: auto;
    width: 100%;
    padding: 16px 16px;

    ion-label.title {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1.2px;
        color: #2f2f2f;
        text-align: left;
    }

    ion-list {
        --ion-item-background: transparent;
        padding: 0px !important;

        ion-item {
            --ion-item-background: transparent !important;
            padding-bottom: 8px;

            &:last-of-type {
                padding-bottom: 0px;
            }

            ion-avatar {
                margin: 0px !important;
                padding: 0px !important;
            }

            ion-radio {
                font-size: 1rem;
                font-weight: 500;
                color: #3e3e3e;
                letter-spacing: 0.8px;
                margin-left: 16px;
                height: 100%;
            }

            ion-radio::part(container) {
                border-radius: 50px;
                border: 2px solid #ddd;
                width: 24px;
                height: 24px;
            }

            ion-radio::part(mark) {
                background: none;
                transition: none;
                transform: none;
                border-radius: 0;
            }

            ion-radio.radio-checked::part(container) {
                background: var(--ion-color-primary);
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
        }
    }
}
</style>
