<script lang="ts" setup>
import { IonRouterOutlet, IonPage, IonLabel, IonIcon, IonTabs, IonTabBar, IonTabButton, IonFab, IonFabButton, IonImg } from '@ionic/vue';
import { walletOutline, pieChartOutline, barChartOutline, gridOutline } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-tabs mode="ios">
            <ion-router-outlet></ion-router-outlet> 
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/FinTechScreen/tab1">
                    <ion-icon :icon="walletOutline"></ion-icon>
                    <ion-label>Wallet</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab2" href="/FinTechScreen/tab2">
                    <ion-icon :icon="pieChartOutline"></ion-icon>
                    <ion-label>Analytics</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab3"></ion-tab-button>
                <ion-tab-button tab="tab4" href="/FinTechScreen/tab3">
                    <ion-icon :icon="barChartOutline"></ion-icon>
                    <ion-label>Investing</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab5" href="/FinTechScreen/tab4">
                    <ion-icon :icon="gridOutline"></ion-icon>
                    <ion-label>More</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
            <ion-fab-button>
                <ion-img src="../../assets/icon/swap.png"></ion-img>
            </ion-fab-button>
        </ion-fab>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-tabs {
    ion-tab-bar {
        --border: 0px !important;
        height: 56px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        --background: #fff !important;

        ion-tab-button {
            -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --background: #fff !important;
            --color: #444444 !important;
            --color-focused: #8757f8 !important;
            --color-selected: #8757f8 !important;

            &[aria-selected="true"] {
                ion-label {
                    color: #222428;
                    font-weight: 600;
                }
            }

            &.transfer {
                height: 56px;
                width: 56px;
                background-color: red;
                border-radius: 50px !important;
            }

            ion-icon {
                font-size: 24px;
            }

            ion-label {
                font-size: 12px;
                letter-spacing: 1px;
                font-weight: 600;
            }
        }
    }
}

ion-fab {
    margin-bottom: 14px;

    ion-fab-button {
        height: 56px;
        width: 56px;
        --background: linear-gradient(#6266ec, #8268e1);
        --background-activated: linear-gradient(#6266ec, #8268e1);
        --background-focused: linear-gradient(#6266ec, #8268e1);
        --background-hover: linear-gradient(#6266ec, #8268e1);
        box-shadow: rgb(127 104 227 / 50%) 1px 12px 25px;
        border-radius: 50px;

        ion-img {
            width: 50%;
        }
    }
}
</style>
