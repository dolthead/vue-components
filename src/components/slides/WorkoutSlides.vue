<script lang="ts" setup>
import { IonIcon } from '@ionic/vue';
import { time, locationSharp, calendarClear } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
    <div id="swiper-container">
        <swiper class="mySwiper" :slidesPerView="1.2" :initialSlide="1" :freeMode="true" :cssMode="false" :autoplay="false"
            :centeredSlides="true" :spaceBetween="18" :keyboard="false" :pagination="false" :scrollbar="false" :zoom="false">
            <swiper-slide>
                <div class="card">
                    <div class="event">
                        <img src="http://pngfreepic.com/wp-content/uploads/2021/06/fitness-32-276x350.png?v=1664972359"
                            alt="Live Workout" />
                        <a class="date">
                            <ion-icon :icon="time"></ion-icon>
                            5:45 AM
                        </a>
                        <div class="content">
                            <span class="title">Live Workout</span>
                            <span class="desc">Come join us for the free session</span>
                            <span class="location">
                                <ion-icon :icon="locationSharp"></ion-icon>
                                SP Club
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <div class="event">
                        <img src="http://pngfreepic.com/wp-content/uploads/2021/06/fitness-png-72-227x350.png?v=1664972521"
                            alt="Live Workout" />
                        <a class="date">
                            <ion-icon :icon="calendarClear"></ion-icon>
                            01 Dec 22
                        </a>
                        <div class="content">
                            <span class="title">Live Workout</span>
                            <span class="desc">Come join us for the free session</span>
                            <span class="location">
                                <ion-icon :icon="locationSharp"></ion-icon>
                                SP Club
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <div class="event">
                        <img src="http://pngfreepic.com/wp-content/uploads/2021/06/fitness-png-64-261x350.png?v=1664972502"
                            alt="Live Workout" />
                        <a class="date">
                            <ion-icon :icon="calendarClear"></ion-icon>
                            17 DEC 22
                        </a>
                        <div class="content">
                            <span class="title">Live Workout</span>
                            <span class="desc">Come join us for the free session</span>
                            <span class="location">
                                <ion-icon :icon="locationSharp"></ion-icon>
                                SP Club
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
#swiper-container {
    border-radius: 10px;
    padding: 56px 0 0px;
    height: 351px;
    background: linear-gradient(60deg, #13547a 0%, #80d0c7 100%);

    .swiper {
        .swiper-slide {
            height: 220px;
            margin: 10px 0 0;
        }

        .swiper-slide:first-of-type .card {
            margin-left: 0px !important;
        }

        .swiper-slide:last-of-type .card {
            margin-right: 0px !important;
        }

        .swiper-slide .card {
            margin: 0px 0px !important;
        }

        .card {
            background: #fff;
            background-position: bottom;
            background-size: cover;
            border-radius: 16px !important;
            height: 198px;
            width: 100%;
            margin: 0px 0px 16px !important;
            padding: 0px !important;

            .event {

                img {
                    width: 172px;
                    height: 204px;
                    object-fit: contain;
                    top: -5px;
                    position: absolute;
                    right: -16px;
                }

                .date {
                    height: 38px;
                    width: 108px;
                    white-space: nowrap;
                    padding: 10px 16px;
                    margin: 0 16px;
                    background: #2f3646;
                    border-bottom-left-radius: 16px;
                    border-bottom-right-radius: 16px;
                    color: #fff;
                    text-align: center;
                    font-size: 0.8rem;
                    float: left;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: normal;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    ion-icon {
                        margin-right: 5px;
                    }
                }

                .content {
                    padding: 0 16px 20px;
                    position: absolute;
                    bottom: 0px;
                    width: 58%;
                    z-index: 1;

                    span {
                        display: block;
                        text-align: left;

                        &.title {
                            font-size: 1.3rem;
                            letter-spacing: 1px;
                            font-weight: 600;
                            color: #2c3240;
                            text-transform: capitalize;
                            padding-bottom: 6px;
                            white-space: nowrap;
                        }

                        &.desc {
                            font-size: 1rem;
                            letter-spacing: 0.8px;
                            color: #020202;
                            opacity: 0.75;
                            font-weight: 500;
                            padding-bottom: 8px;
                            line-height: 1.25;
                        }

                        &.location {
                            font-size: 1rem;
                            color: #858585;
                            font-weight: 500;
                            letter-spacing: 1px;
                            padding-bottom: 16px;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            ion-icon {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
