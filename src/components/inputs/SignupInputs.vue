<script lang="ts" setup>
import { modalController, IonBackButton, IonText, IonInput, IonImg, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonItem, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-header mode="md" class="ion-no-padding ion-no-margin ion-no-border ion-hide-sm-up">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="login" text="" :icon="chevronBackOutline" @click="modalController.dismiss()"
                        color="primary"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="login-bg">
                <ion-grid class="ion-no-padding">
                    <ion-row class="ion-justify-content-center">
                        <ion-col class="card" size="12" size-sm="6" size-md="4" size-lg="3">
                            <form>
                                <ion-row class="ion-padding-vertical ion-hide-sm-down">
                                    <ion-col size="12">
                                        <ion-button color="primary" fill="clear" class="ion-no-padding ion-no-margin">
                                            <ion-icon :icon="chevronBackOutline"></ion-icon>
                                        </ion-button>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12">
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/5968/5968331.png" class="logo"
                                            alt="Company Logo"></ion-img>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12">
                                        <h1 class="title ion-text-start ion-margin-bottom">Create Account</h1>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="12">
                                        <ion-item>
                                            <ion-input class="" placeholder="User Name or E-mail"></ion-input>
                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-margin-top">
                                    <ion-col size="12">
                                        <ion-item>
                                            <ion-input class="ion-padding-start" type="password"
                                                placeholder="Password"></ion-input>
                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-margin-top">
                                    <ion-col size="12">
                                        <ion-item class="">
                                            <ion-input class="ion-padding-start" type="password"
                                                placeholder="Confirm Password"></ion-input>
                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-margin-top">
                                    <ion-col size="12">
                                        <ion-row class="ion-margin-bottom">
                                            <ion-col size="12">
                                                <ion-button fill="solid" color="primary" size="default"
                                                    class="login-button ion-text-capitalize ion-no-margin">
                                                    Sign Up
                                                </ion-button>
                                            </ion-col>
                                        </ion-row>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-margin-vertical">
                                    <ion-col size="12">
                                        <ion-text color="medium" class="ion-text-center">
                                            <h6>- or sign up with -</h6>
                                        </ion-text>
                                    </ion-col>
                                    <ion-col size="4" class="social ion-text-center ion-margin-vertical">
                                        <ion-button fill="solid" color="dark">
                                            <ion-img class="social"
                                                src="https://cdn.iconscout.com/icon/free/png-128/google-1772223-1507807.png"></ion-img>
                                        </ion-button>
                                    </ion-col>
                                    <ion-col size="4" class="social ion-text-center ion-margin-vertical">
                                        <ion-button fill="solid" color="dark">
                                            <ion-img
                                                src="https://cdn.iconscout.com/icon/free/png-256/facebook-263-721950.png"></ion-img>
                                        </ion-button>
                                    </ion-col>
                                    <ion-col size="4" class="social ion-text-center ion-margin-vertical">
                                        <ion-button fill="solid" color="dark">
                                            <ion-img
                                                src="https://cdn.iconscout.com/icon/free/png-256/twitter-2038532-1718517.png"></ion-img>
                                        </ion-button>
                                    </ion-col>
                                </ion-row>
                            </form>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-content,
ion-toolbar {
    --background: #ededed;

    @media (min-width: 992px) {
        --background: var(--ion-color-light) !important;
    }
}


.login-bg {
    height: 100vh;
    display: flex;
    align-items: center;

    @media (min-width: 992px) {
        background: #f4f5f8;
    }

    form {
        width: 100%;
    }

    .card {
        background-color: #ededed !important;
        border-radius: 20px;
        padding: 0px 25px;
        margin: 0;

        @media (max-width: 767px) {
            height: 98vh;
        }

        @media (min-width: 992px) {
            background-color: #fff !important;
        }
    }

    .logo {
        height: 70px;
        width: 100%;
        margin: 15px 0;
    }

    .title {
        font-weight: 500 !important;
        font-size: 1.25rem !important;
        letter-spacing: 1px;
        color: #212121 !important;
    }

    ion-item {
        --border-radius: 10px;
        border-radius: 10px;
        --background: #ededed !important;
        --color: #212121 !important;
        letter-spacing: 1px;
        box-shadow: rgb(100 100 111 / 12%) 0px 7px 29px 0px;
        --border-color: transparent !important;
        --min-height: 0 !important;
        margin-bottom: 5px;

        @media (min-width: 992px) {
            --background: #fff !important;
        }

        ion-label {
            padding: 2.5px 0px !important;
        }
    }

    a.fp {
        font-size: 0.8rem;
        letter-spacing: 1px;
        float: right;
        margin-top: 10px;
        text-decoration: none !important;
    }

    .login-button,
    .back-button {
        font-weight: 600 !important;
        width: 100% !important;
        letter-spacing: 1px;
    }

    .social {
        ion-button::part(native) {
            background: var(--ion-color-light) !important;
        }
        ion-img {
            height: 26px;
        }
    }
}
</style>
