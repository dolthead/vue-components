<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonButton } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
    <div id="swiper-container">
        <ion-grid class="ion-no-padding">
            <ion-row class="title">
                <ion-col size="12" class="ion-text-center ion-padding-top">
                    <ion-label>Fit the plan <br /> to your business</ion-label>
                    <p>We carefully created this plan to fit all your needs.</p>
                </ion-col>
            </ion-row>
            <ion-row class="ion-padding-bottom">
                <ion-col size="12" class="ion-no-padding">
                    <swiper :slidesPerView="1" :freeMode="true" :cssMode="false" :autoplay="false" :keyboard="false"
                        :pagination="false" :scrollbar="false" :zoom="false">
                        <swiper-slide>
                            <div class="card ion-align-items-center day">
                                <div class="ion-padding ion-text-center">
                                    <ion-label>
                                        <span class="title">Just Starting</span>
                                        <span class="sub-title">per user</span>
                                        <span class="price"><span class="currency">$</span> 99</span>
                                        <p>PCI & HIPAA Compliant Hosting</p>
                                    </ion-label>
                                    <ion-button class="action" fill="outline" shape="round" color="primary">
                                        Try it
                                    </ion-button>
                                    <ion-button class="action" fill="solid" shape="round" color="primary">
                                        Buy Now
                                    </ion-button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card ion-align-items-center day">
                                <div class="ion-padding ion-text-center">
                                    <ion-label>
                                        <span class="title-heading">Most Popular</span>
                                        <span class="title">Small Enterprise</span>
                                        <span class="sub-title">Up to 70 users</span>
                                        <span class="price"><span class="currency">$</span> 199</span>
                                        <p>Sharing capabilities, user Permission settings</p>
                                    </ion-label>
                                    <ion-button class="action" fill="outline" shape="round" color="primary" mode="ios">
                                        Try it
                                    </ion-button>
                                    <ion-button class="action" fill="solid" shape="round" color="primary" mode="ios">
                                        Buy Now
                                    </ion-button>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card ion-align-items-center day">
                                <div class="ion-padding ion-text-center">
                                    <ion-label>
                                        <span class="title">Mid-size Enterprise</span>
                                        <span class="sub-title">Up to 125 users</span>
                                        <span class="price"><span class="currency">$</span> 499</span>
                                        <p>Hosting, Authentication, Cloud Messaging, Remote Config, Realtime Database</p>
                                    </ion-label>
                                    <ion-button class="action" fill="outline" shape="round" color="primary">
                                        Try it
                                    </ion-button>
                                    <ion-button class="action" fill="solid" shape="round" color="primary">
                                        Buy Now
                                    </ion-button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<style lang="scss" scoped>
#swiper-container {
    border-radius: 10px;
    padding: 0;
    background: #efefef;

    .title {
        padding: 5px 16px;

        ion-label {
            letter-spacing: 1.5px;
            font-size: 1.5rem;
            font-weight: 600;
            color: #525252;
        }

        p {
            letter-spacing: 1px;
            font-size: 1rem;
            font-weight: 500;
            color: #818181;
            margin: 16px 40px;
        }
    }

    .swiper {
        height: 380px;

        .card {
            background: linear-gradient(0deg, #fff, #fff 70%) no-repeat;
            background-position: bottom;
            background-size: cover;
            border-radius: 32px !important;
            height: auto;
            width: calc(100% - 32px);
            margin: 0 16px;
            padding: 0px !important;

            ion-label {
                margin: 0 !important;

                .title-heading {
                    color: var(--ion-color-primary);
                    font-size: 1rem;
                    text-align: center;
                    display: block;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                    text-transform: capitalize;
                }

                .title {
                    font-size: 1.4rem;
                    text-align: center;
                    display: block;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    text-transform: capitalize;
                    color: #525252;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .sub-title {
                    font-size: 1rem;
                    text-align: center;
                    font-weight: 500;
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 16px;
                    color: #bdbdbd;
                }

                .currency {
                    font-size: 1.5rem;
                    margin: 16px 5px;
                    color: var(--ion-color-primary);
                }

                .price {
                    font-size: 4rem;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                    margin-right: 16px;
                    text-transform: capitalize;
                    color: #525252;
                }

                p {
                    display: flex;
                    align-items: center;
                    height: 70px;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #818181;
                    margin: 5% 8% 8%;
                }
            }

            ion-button.action {
                letter-spacing: 1px;
                margin: 5% 6px 5% !important;
                font-weight: 600;
                text-transform: none !important;
                border-width: 1px;
            }
        }
    }
}
</style>
