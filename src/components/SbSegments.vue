<script lang="ts" setup>
    import { IonSegment, IonSegmentButton, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonText, IonRadio } from '@ionic/vue';
    import { ref } from 'vue';

    const segment = ref('1');
</script>

<template>
    <div id="container">
        <ion-segment v-model="segment" color="primary" mode="md">
            <ion-segment-button value="1">
                <img src="https://iecommerce.sconn.co.in/assets/icon/mastercard.svg" class="mastercard" alt="mastercard" />
            </ion-segment-button>
            <ion-segment-button value="2">
                <img src="https://iecommerce.sconn.co.in/assets/icon/amazon.svg" alt="amazon" />
            </ion-segment-button>
            <ion-segment-button value="3">
                <img src="https://iecommerce.sconn.co.in/assets/icon/google.svg" alt="google" />
            </ion-segment-button>
            <ion-segment-button value="4">
                <img src="https://iecommerce.sconn.co.in/assets/icon/paypal.svg" alt="paypal" />
            </ion-segment-button>
        </ion-segment>
        <ion-card v-show="segment === '1'" class="ion-no-margin ion-padding-bottom" mode="ios">
            <ion-card-content class="ion-no-padding">
                <ion-grid class="ion-no-padding ion-padding-horizontal">
                    <ion-row>
                        <ion-col size="12">
                            <ion-list>
                                <ion-radio-group name="mastercards" value="master">
                                    <ion-list-header class="ion-no-padding">
                                        <ion-label>Cards</ion-label>
                                    </ion-list-header>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <img src="https://iecommerce.sconn.co.in/assets/icon/visa-boxed.svg">
                                            <ion-text class="">Visa
                                                <span class="d-block fs-xxs fw-bold">Debit <i>****</i> 1795</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="visa" mode="md"></ion-radio>
                                    </ion-item>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <img src="https://iecommerce.sconn.co.in/assets/icon/mastercard-boxed.svg">
                                            <ion-text class="">Mastercard
                                                <span class="d-block fs-xxs fw-bold">Credit <i>****</i> 1985</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="master" mode="md"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
        <ion-card v-show="segment === '2'" class="ion-no-margin ion-padding-bottom">
            <ion-card-content class="ion-no-padding">
                <ion-grid class="ion-no-padding ion-padding-horizontal">
                    <ion-row>
                        <ion-col size="12">
                            <ion-list>
                                <ion-radio-group name="amazon" value="1">
                                    <ion-list-header class="ion-no-padding">
                                        <ion-label>Amazon Pay UPI ID</ion-label>
                                    </ion-list-header>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <ion-text class="">amazonpay@apl
                                                <span class="d-block fs-xxs fw-bold">98 <i>****</i> 7821</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="1" mode="md"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
        <ion-card v-show="segment === '3'" class="ion-no-margin ion-padding-bottom">
            <ion-card-content class="ion-no-padding">
                <ion-grid class="ion-no-padding ion-padding-horizontal">
                    <ion-row>
                        <ion-col size="12">
                            <ion-list>
                                <ion-radio-group name="amazon" value="1">
                                    <ion-list-header class="ion-no-padding">
                                        <ion-label>Google Pay UPI ID</ion-label>
                                    </ion-list-header>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <ion-text class="">googlepay@okicici
                                                <span class="d-block fs-xxs fw-bold">88 <i>****</i> 4107</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="1" mode="md"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
        <ion-card v-show="segment === '4'" class="ion-no-margin ion-padding-bottom">
            <ion-card-content class="ion-no-padding">
                <ion-grid class="ion-no-padding ion-padding-horizontal">
                    <ion-row>
                        <ion-col size="12">
                            <ion-list>
                                <ion-radio-group name="mastercards" value="master">
                                    <ion-list-header class="ion-no-padding">
                                        <ion-label>Bank Accounts and Cards</ion-label>
                                    </ion-list-header>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <img src="https://iecommerce.sconn.co.in/assets/icon/visa-boxed.svg">
                                            <ion-text class="">Visa
                                                <span class="d-block fs-xxs fw-bold">Debit <i>****</i> 1795</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="visa" mode="md"></ion-radio>
                                    </ion-item>
                                    <ion-item lines="none" class="ion-no-padding">
                                        <div class="accounts">
                                            <img src="https://iecommerce.sconn.co.in/assets/icon/mastercard-boxed.svg">
                                            <ion-text class="">Mastercard
                                                <span class="d-block fs-xxs fw-bold">Credit <i>****</i> 1985</span>
                                            </ion-text>
                                        </div>
                                        <ion-radio slot="end" value="master" mode="md"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<style lang="scss" scoped>
    ion-segment {
        --background: #ffffff !important;
        background: #ffffff !important;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        padding: 8px 16px 0;

        ion-segment-button {
            text-transform: capitalize;
            letter-spacing: 0.8px;
            color: #838383;

            img {
                width: 55px;
                padding: 12px;
                height: 55px;

                &.mastercard {
                    padding: 6px !important;
                }
            }
        }
    }

    ion-card {
        border-radius: 0px !important;
        border-bottom-left-radius: 16px !important;
        border-bottom-right-radius: 16px !important;
        --background: #ffffff !important;
        background: #ffffff !important;

        ion-list {
            --background: #fff !important;
            background: #fff !important;

            ion-radio {
                --color: #dbdbdb;
            }

            ion-list-header {
                ion-label {
                    font-weight: 500;
                    font-size: 1rem;
                    letter-spacing: 1px;
                    margin-bottom: 16px;
                    color: #222428;
                    margin: 0px;
                }
            }

            ion-item {
                --background: #fff !important;
                background: #fff !important;
                --color: #222428;

                .accounts {
                    display: flex;
                    align-items: center;
                    line-height: 1.2;

                    img {
                        height: 60px;
                    }

                    ion-text {
                        font-weight: 600;
                        font-size: 0.875rem !important;
                        letter-spacing: 0.8px;
                        color: #222428;
                        display: inline-block !important;

                        span {
                            display: flex !important;
                            font-weight: 500 !important;
                            font-size: 0.6rem !important;
                            letter-spacing: 0.6px !important;

                            i {
                                font-style: normal;
                                margin: 0 3px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
