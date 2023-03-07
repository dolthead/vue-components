<script setup lang="ts">
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonImg, IonIcon, IonBadge, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonText } from '@ionic/vue';
import { searchOutline, bagOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar id="extra-toolbar" color="toolbar">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Screens" />
                </ion-buttons>
                <ion-title>Home Screen</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-title slot="start" class="ion-text-left">Home</ion-title>
                <ion-buttons slot="end">
                    <ion-button>
                        <ion-icon :icon="searchOutline"></ion-icon>
                    </ion-button>
                    <ion-button class="cart-btn">
                        <ion-icon :icon="bagOutline"></ion-icon>
                        <ion-badge>2</ion-badge>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div id="home_page">
                <ion-grid class="ion-no-margin ion-no-padding">
                    <ion-row class="ion-padding-bottom">
                        <ion-col size="12" class="ion-no-padding">
                            <swiper :slidesPerView="1.5" :freeMode="false" :centeredSlides="false" :loop="false"
                                :cssMode="false" :autoplay="false" :keyboard="false" :pagination="false" :scrollbar="false"
                                :zoom="false">
                                <swiper-slide>
                                    <div class="card">
                                        <ion-card class="ion-no-margin">
                                            <ion-card-header class="ion-no-padding">
                                                <ion-img
                                                    src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600"></ion-img>
                                            </ion-card-header>
                                            <ion-card-content>
                                                <ion-text>
                                                    <h1>Scandinavian living Room<span>15 products</span></h1>
                                                </ion-text>
                                            </ion-card-content>
                                        </ion-card>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card">
                                        <ion-card class="ion-no-margin">
                                            <ion-card-header class="ion-no-padding">
                                                <ion-img
                                                    src="https://i.pinimg.com/564x/54/db/15/54db153eb059008c17a8a479810d3dc2.jpg"></ion-img>
                                            </ion-card-header>
                                            <ion-card-content>
                                                <ion-text>
                                                    <h1>Industrial Bohemian<span>12 products</span></h1>
                                                </ion-text>
                                            </ion-card-content>
                                        </ion-card>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="card">
                                        <ion-card class="ion-no-margin">
                                            <ion-card-header class="ion-no-padding">
                                                <ion-img
                                                    src="https://i.pinimg.com/564x/44/1d/52/441d52c012eabeacfdd52c72072bbc5e.jpg"></ion-img>
                                            </ion-card-header>
                                            <ion-card-content>
                                                <ion-text>
                                                    <h1>Minimalist Diner<span>Dining room - 29 products</span></h1>
                                                </ion-text>
                                            </ion-card-content>
                                        </ion-card>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </ion-col>
                    </ion-row>
                    <ion-row class="category ion-padding-horizontal">
                        <ion-col size="12">
                            <ul>
                                <li>
                                    <a>
                                        <!-- <ion-icon slot="start" :icon="sunnyOutline"></ion-icon> -->
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/6346/6346294.png"></ion-img>
                                        <span>Light</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <!-- <ion-icon slot="start" :icon="sunnyOutline"></ion-icon> -->
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/1698/1698669.png"></ion-img>
                                        <span>Sofa</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <!-- <ion-icon slot="start" :icon="sunnyOutline"></ion-icon> -->
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/8172/8172688.png"></ion-img>
                                        <span>Kitchen</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <!-- <ion-icon slot="start" :icon="sunnyOutline"></ion-icon> -->
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/6798/6798294.png"></ion-img>
                                        <span>Storage</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <!-- <ion-icon slot="start" :icon="bedOutline"></ion-icon> -->
                                        <ion-img src="https://cdn-icons-png.flaticon.com/512/4682/4682364.png"></ion-img>
                                        <span>Bed</span>
                                    </a>
                                </li>
                            </ul>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid class="ion-padding-horizontal">
                    <ion-row class="popular">
                        <ion-col size="12">
                            <ion-text>
                                <h1>Popular Products</h1>
                            </ion-text>
                        </ion-col>
                        <ion-col size="6">
                            <div class="product">
                                <ion-card class="card" mode="ios">
                                    <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-bottom">
                                        <ion-img src="https://i.ibb.co/rd7Tz6V/table-lamp-Background-Removed.png"></ion-img>
                                        <ion-text>
                                            <h2>Table Lamp <span>light - 29 products</span></h2>
                                        </ion-text>
                                    </ion-card-content>
                                </ion-card>
                            </div>
                        </ion-col>
                        <ion-col size="6">
                            <div class="product">
                                <ion-card class="card" mode="ios">
                                    <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-bottom">
                                        <ion-img src="https://i.ibb.co/FKcQrkp/pngwing-com-1.png"></ion-img>
                                        <ion-text>
                                            <h2>Accent Chair<span>110 products</span></h2>
                                        </ion-text>
                                    </ion-card-content>
                                </ion-card>
                            </div>
                        </ion-col>
                        <ion-col size="6">
                            <div class="product">
                                <ion-card class="card" mode="ios">
                                    <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-bottom">
                                        <ion-img src="https://i.ibb.co/99vQFNJ/pngwing-com-2.png"></ion-img>
                                        <ion-text>
                                            <h2>loungue Chair<span>Furniture - 5 products</span></h2>
                                        </ion-text>
                                    </ion-card-content>
                                </ion-card>
                            </div>
                        </ion-col>
                        <ion-col size="6">
                            <div class="product">
                                <ion-card class="card" mode="ios">
                                    <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-bottom">
                                        <ion-img src="https://i.ibb.co/K997BFZ/pngwing-com-4.png"></ion-img>
                                        <ion-text>
                                            <h2>Tripod Street light lamp<span>Light - 13 products</span></h2>
                                        </ion-text>
                                    </ion-card-content>
                                </ion-card>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-content,
ion-header ion-toolbar:nth-child(2) {
    --background: #fff !important;
    --color: #222428;
}

ion-header {
    ion-toolbar {
        --background: #fff;
        --min-height: 55px;
        --border-color: transparent !important;

        ion-icon {
            font-size: 26px;
            color: #a7a7a7 !important;
        }

        ion-title {
            padding: 0 16px !important;
            font-weight: 500;
            font-size: 1.5rem;
            letter-spacing: 0.5px;
        }

        .cart-btn {
            border-radius: 12px;
            height: 45px !important;
            // width: 40px;
            position: relative;
            overflow: visible !important;
            margin-right: 8px;

            ion-badge {
                position: absolute;
                font-size: 12px;
                right: -4px;
                bottom: 4px;
                height: 18px;
                width: 18px;
                justify-content: center;
                display: flex;
                border-radius: 50%;
                background: #ffbc00;

            }
        }
    }
}

#home_page {
    padding-top: 8px;
    background: #fff !important;
    --background: #fff !important;

    .swiper {
        width: 100vw !important;
        margin: 0 8px !important;
        padding: 0 !important;
        background: #fff !important;
        --background: #fff !important;

        .swiper-slide .card {
            margin: 0 8px 0 8px !important;
            width: 100%;
        }

        .swiper-wrapper {
            display: flex;
            align-items: center;
        }

        ion-card {
            height: 300px;
            box-shadow: none !important;
            border-radius: 8px;
            background: transparent !important;
            width: 250px;

            ion-img {
                height: 300px;
                object-fit: cover;
                width: 100%;
                max-width: 100%;
            }

            ion-card-content {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 32px 16px 16px 16px !important;
                background: linear-gradient(rgb(255 255 255 / 0%) 0, rgba(0, 0, 0, 0.38) 35%) !important;

                // background: linear-gradient( rgba(255, 255, 255, 0) 5%, rgb(0 0 0 / 38%) 25% ) !important;
                ion-text {
                    h1 {
                        font-size: 1.4rem;
                        letter-spacing: 1.4px;
                        font-weight: 500 !important;
                        color: #fff;
                        text-align: left;

                        span {
                            font-size: 0.9rem;
                            letter-spacing: 0.9px;
                            font-weight: 400 !important;
                            color: #fff;
                            display: block;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
}

.category {
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        justify-content: space-between;
        padding: 8px 0 0;

        li {
            width: auto;
            display: inline-block;
            margin: 0px 16px 0 0px;

            &:last-of-type {
                margin: 0px 0px 0 0px;
            }

            a {
                text-align: center;

                ion-icon {
                    background: #f4f5f8;
                    color: #222428;
                    padding: 10px;
                    border-radius: 50px;
                    height: 30px;
                    width: 30px;
                }

                ion-img {
                    background: #f4f5f8;
                    color: #222428;
                    padding: 8px;
                    border-radius: 50px;
                    height: 50px;
                    width: 50px;
                    margin: 0 auto;
                }

                span {
                    display: block;
                    font-size: 0.8rem;
                    letter-spacing: 0.8px;
                    font-weight: 500;
                    color: #222428;
                    white-space: nowrap;
                    margin: 8px 0;
                }
            }
        }
    }
}

.popular {
    ion-text {
        h1 {
            font-size: 1.2rem;
            letter-spacing: 1.2px;
            font-weight: 500;
            color: #222428;
            margin: 8px 0px 0;
        }
    }

    .product {
        ion-card.card {
            border-radius: 8px;
            box-shadow: none;
            background: #f4f5f8;
            letter-spacing: 0.8px;
            margin: 0;


            ion-card-content {
                padding-bottom: 8px;
                margin-bottom: 8px;

                ion-img {
                    height: 100px;
                    margin: 16px 0;
                }

                h2 {
                    letter-spacing: 1.1px;
                    font-size: 1.1rem;
                    color: #222428;
                    font-weight: 500;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: flow-root;

                    span {
                        display: block;
                        letter-spacing: 0.72px;
                        font-size: 0.72rem;
                        margin: 5px 0 0;
                        font-weight: 400;
                    }
                }
            }

        }
    }
}
</style>
