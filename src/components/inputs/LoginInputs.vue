<script lang="ts" setup>
import { IonItem, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
</script>

<template>
    <div class="content">
        <div class="login-bg">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-col class="card" size="12" size-sm="10">
                        <form>
                            <ion-row class="ion-margin-bottom">
                                <ion-col size="12" class="ion-margin-bottom">
                                    <h1 class="title ion-text-center"> Login </h1>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-margin-bottom">
                                <ion-col size="12">
                                    <ion-item class="ion-margin-bottom ion-align-self-center">
                                        <ion-input class="" label="Enter User Name or E-mail"
                                            label-placement="floating"></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-margin-top">
                                <ion-col size="12" class="ion-margin-bottom">
                                    <ion-item class="">
                                        <ion-input class="ion-padding-start" type="password" label-placement="floating"
                                            label="Password"></ion-input>
                                    </ion-item>
                                    <a routerLink="/Forget-password" class="fp" color="medium">Forgot Password?</a>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="12">
                                    <ion-row class="ion-margin-bottom">
                                        <ion-col size="6">
                                            <ion-button fill="solid" shape="round" color="primary" size="default"
                                                class="login-button ion-text-capitalize ion-no-margin">
                                                Login
                                            </ion-button>
                                        </ion-col>
                                        <ion-col size="6">
                                            <ion-button fill="clear" shape="round" color="medium" size="default"
                                                class="back-button ion-text-capitalize ion-no-margin">
                                                Back to Home
                                            </ion-button>
                                        </ion-col>
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                        </form>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    --background: #191919 !important;
    --color: #f4f5f8 !important;
}

.login-bg {
    height: 80vh;
    display: flex;
    align-items: center;

    form {
        width: 100%;
    }

    .card {
        background-color: #212121 !important;
        border-radius: 20px;
        margin: 0;
        padding: 20px;

        // @media (max-width: 767px) {
            height: 78vh;
        //     display: flex;
        //     align-items: center;
        // }
    }

    .title {
        font-weight: 500 !important;
        font-size: 1.75rem !important;
        letter-spacing: 1px;
        color: var(--ion-color-light);
    }

    ion-item {
        --border-radius: 50px;
        border-radius: 50px;
        --background: #2e2e2e !important;
        --color: #f4f5f8 !important;
        letter-spacing: 1px;

        ion-label {
            padding: 2.5px 10px !important;
        }

        ion-input {
            padding: 2.5px 10px !important;
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
}
</style>
