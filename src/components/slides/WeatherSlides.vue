<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonImg, IonIcon } from '@ionic/vue';
import { navigate } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
    <div id="swiper-container">
        <ion-grid class="ion-no-padding">
            <ion-row class="title">
                <ion-col size="12">
                    <ion-label class="">Today's Weather</ion-label>
                </ion-col>
            </ion-row>
            <ion-row class="ion-padding-bottom">
                <ion-col size="12" class="ion-no-padding">
                    <swiper :slidesPerView="1.5" :freeMode="true" :cssMode="false" :autoplay="false" :keyboard="false"
                        :pagination="false" :scrollbar="false" :zoom="false">
                        <swiper-slide>
                            <div class="widget ion-align-items-center day">
                                <div class="ion-padding">
                                    <div class="weather-img">
                                        <ion-img src="https://cdn-icons-png.flaticon.com/128/6974/6974833.png"></ion-img>
                                    </div>
                                    <ion-label>
                                        <span class="temp">15°C</span>
                                        <span class="weather-desc">Clear</span>
                                        <span class="location ion-margin-bottom">
                                            <ion-icon :icon="navigate"></ion-icon>
                                            &nbsp;Paris, France
                                        </span>
                                    </ion-label>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="widget ion-align-items-center night">
                                <div class="ion-padding">
                                    <div class="weather-img">
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/1684/1684371.png"></ion-img>
                                    </div>
                                    <ion-label>
                                        <span class="temp">24°C</span>
                                        <span class="weather-desc">Rain</span>
                                        <span class="location ion-margin-bottom">
                                            <ion-icon :icon="navigate"></ion-icon>
                                            &nbsp;Singapore
                                        </span>
                                    </ion-label>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="widget ion-align-items-center day">
                                <div class="ion-padding">
                                    <div class="weather-img">
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"></ion-img>
                                    </div>
                                    <ion-label>
                                        <span class="temp">7°C</span>
                                        <span class="weather-desc">Partly Cloudy</span>
                                        <span class="location ion-margin-bottom">
                                            <ion-icon :icon="navigate"></ion-icon>
                                            &nbsp;New York, USA
                                        </span>
                                    </ion-label>
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
        padding: 16px 16px 5px;

        ion-label {
            letter-spacing: 1.2px;
            font-size: 1.2rem;
            font-weight: 600;
            color: #343434;
        }
    }

    .swiper {
        padding-right: 16px;

        .widget {
            background-position: bottom;
            background-size: cover;
            border-radius: 16px !important;
            height: auto;
            width: calc(100% - 18px);
            margin: 0 16px;
            padding: 0px !important;

            &.day {
                background: linear-gradient(0deg, #fff, #fff 70%) no-repeat;

                ion-label,
                .weather-desc {
                    color: #343434;
                }
            }

            &.night {
                background: linear-gradient(0deg, #090810, #090810 70%) no-repeat;

                ion-label,
                .weather-desc {
                    color: #ededed;
                }
            }

            .weather-img {
                display: flex;
                justify-content: center;

                ion-img {
                    width: 100px;
                    height: 100px;
                    margin: 16px 0;
                }
            }

            ion-label {
                margin: 0 !important;

                .temp {
                    font-size: 1.8rem;
                    text-align: center;
                    display: block;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                    margin: 0px 0 5px;
                    text-transform: capitalize;
                }

                .weather-desc {
                    font-size: 0.9rem;
                    text-align: center;
                    font-weight: 500;
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 16px;
                }

                .location {
                    font-size: 0.9rem !important;
                    text-align: center;
                    font-weight: 500;
                    color: #858585;
                    margin: 16px 0px 6px;
                    letter-spacing: 0.8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}</style>
