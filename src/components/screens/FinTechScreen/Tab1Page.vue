<script setup lang="ts">
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonImg, IonIcon, IonBadge, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonLabel, IonText, IonAvatar, IonSelect, IonSelectOption, IonItem } from '@ionic/vue';
import { notifications, cafe, bagHandle, musicalNotes, chevronForwardCircleOutline } from 'ionicons/icons';
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
                <ion-title>FinTech Screen</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button color="primary">
                        <ion-img class="logo" src="../../assets/icon/logo.png"></ion-img><span>Fastfin</span>
                    </ion-button>
                </ion-buttons>
                <ion-title class="ion-text-center ion-hide">Title</ion-title>
                <ion-buttons slot="end">
                    <ion-button class="notification-btn">
                        <ion-icon :icon="notifications"></ion-icon>
                        <ion-badge></ion-badge>
                    </ion-button>
                    <ion-button class="avatar">
                        <!-- <ion-icon :icon="search-outline"></ion-icon> -->
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-avatar-5966938-4936168.png" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-grid class="ion-no-padding">

                <ion-row>
                    <ion-col size="12">
                        <div id="heroSlider">
                            <swiper class="mySwiper" :slidesPerView="1.2" :initialSlide="0" :freeMode="true"
                                :cssMode="false" :autoplay="false" :centeredSlides="true" :spaceBetween="18"
                                :keyboard="false" :pagination="true" :scrollbar="false" :zoom="false"
                                :breakpoints="{ '640': { slidesPerView: 1.2, spaceBetween: 32 }, '768': { slidesPerView: 1.2, spaceBetween: 16 }, '1024': { slidesPerView: 1.2, spaceBetween: 16 } }">
                                <swiper-slide>
                                    <ion-card class="card">
                                        <ion-card-header>
                                            <ion-img src="../../assets/icon/visa.png"></ion-img>
                                        </ion-card-header>
                                        <ion-card-content>

                                            <ion-label class="number">
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>1234</span>
                                            </ion-label>
                                            <ion-text>
                                                <h6>Card Holder Name</h6>
                                                <h1>John Green</h1>
                                            </ion-text>
                                            <ion-text>
                                                <h6>Expiry Date</h6>
                                                <h1>06/27</h1>
                                            </ion-text>
                                        </ion-card-content>
                                    </ion-card>
                                </swiper-slide>
                                <swiper-slide>
                                    <ion-card class="card">
                                        <ion-card-header>
                                            <ion-img
                                                src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"></ion-img>
                                        </ion-card-header>
                                        <ion-card-content>

                                            <ion-label class="number">
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>7847</span>
                                            </ion-label>
                                            <ion-text>
                                                <h6>Card Holder Name</h6>
                                                <h1>Sidh Shedge</h1>
                                            </ion-text>
                                            <ion-text>
                                                <h6>Expiry Date</h6>
                                                <h1>06/27</h1>
                                            </ion-text>
                                        </ion-card-content>
                                    </ion-card>
                                </swiper-slide>
                                <swiper-slide>
                                    <ion-card class="card">
                                        <ion-card-header>
                                            <ion-img src="../../assets/icon/visa.png"></ion-img>
                                        </ion-card-header>
                                        <ion-card-content>

                                            <ion-label class="number">
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>1234</span>
                                            </ion-label>
                                            <ion-text>
                                                <h6>Card Holder Name</h6>
                                                <h1>John Green</h1>
                                            </ion-text>
                                            <ion-text>
                                                <h6>Expiry Date</h6>
                                                <h1>06/27</h1>
                                            </ion-text>
                                        </ion-card-content>
                                    </ion-card>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="balance">
                    <ion-col size="12">
                        <ion-card>
                            <ion-card-content class="ion-no-padding ion-padding-horizontal ion-padding-top">
                                <ion-item>
                                    <ion-avatar>
                                        <img src="https://cdn-icons-png.flaticon.com/512/323/323310.png" />
                                    </ion-avatar>
                                    <ion-select interface="action-sheet" placeholder="Currency" value="USD">
                                        <ion-select-option value="USD">USD</ion-select-option>
                                        <ion-select-option value="INR">INR</ion-select-option>
                                    </ion-select>
                                    <ion-label class="amt">15402.01</ion-label>
                                </ion-item>
                                <ion-item lines="none">
                                    <ion-label>
                                        <span class="details">IBAN</span>
                                        <span>LT12</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>1010</span>
                                    </ion-label>
                                    <ion-icon :icon="chevronForwardCircleOutline"></ion-icon>
                                </ion-item>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row class="quick-actions">
                    <ion-col size="12">
                        <ion-label class="title">Quick Actions</ion-label>
                        <swiper class="mySwiper" :slidesPerView="3.4" :initialSlide="1" :freeMode="true"
                            :cssMode="false" :autoplay="false" :centeredSlides="true" :spaceBetween="10"
                            :keyboard="false" :pagination="false" :scrollbar="false" :zoom="false" :loop="false"
                            :breakpoints="{ '640': { slidesPerView: 3.4, spaceBetween: 14 }, '768': { slidesPerView: 3.4, spaceBetween: 14 }, '1024': { slidesPerView: 3.4, spaceBetween: 14 } }">
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-coin-6433222-5526059.png" />
                                    <ion-label>Send Funds</ion-label>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/people-2872338-2389554.png" />
                                    <ion-label>Browse People</ion-label>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/pie-chart-6799278-5600651.png" />
                                    <ion-label>Get Reports</ion-label>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/promotion-6684140-5523033.png" />
                                    <ion-label>Refer</ion-label>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/gift-box-6894594-5740394.png" />
                                    <ion-label>Rewards</ion-label>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card" mode="ios">
                                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/insurance-6949100-5695091.png" />
                                    <ion-label>Insurance</ion-label>
                                </div>
                            </swiper-slide>

                        </swiper>
                    </ion-col>
                </ion-row>
                <ion-row class="transaction">
                    <ion-col size="12">
                        <ion-label>Transactions</ion-label>
                        <ion-card class="card">
                            <ion-card-content class="ion-padding-vertical ion-no-padding">
                                <ion-item class="" lines="none">
                                    <ion-avatar slot="start" size="large">
                                        <!-- <img alt="image" src="" /> -->
                                        <ion-icon :icon="cafe"></ion-icon>
                                    </ion-avatar>
                                    <ion-label><span class="user-name">Starbucks</span><span class="date-time">6:50
                                            pm</span></ion-label>
                                    <div>
                                        <span class="price">$25</span>
                                    </div>
                                </ion-item>
                                <ion-item class="" lines="none">
                                    <ion-avatar slot="start" size="large">
                                        <!-- <img alt="image" src="" /> -->
                                        <ion-icon :icon="bagHandle"></ion-icon>
                                    </ion-avatar>
                                    <ion-label><span class="user-name">Shopping</span><span class="date-time">Jun 12, 11:45
                                            am</span></ion-label>
                                    <div>
                                        <span class="price">$125.50</span>
                                    </div>
                                </ion-item>
                                <ion-item class="" lines="none">
                                    <ion-avatar slot="start" size="large">
                                        <!-- <img alt="image" src="" /> -->
                                        <ion-icon :icon="musicalNotes"></ion-icon>
                                    </ion-avatar>
                                    <ion-label>
                                        <span class="user-name">Apple Music</span>
                                        <span class="date-time">May 20, 1:07 pm</span>
                                    </ion-label>
                                    <div>
                                        <span class="price">$99</span>
                                    </div>
                                </ion-item>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <div class="bottom-bg"></div>
            </ion-grid>
            <!-- <app-explore-container name="Tab 1 page"></app-explore-container> -->

        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
ion-header {
    box-shadow: none !important;

    ion-toolbar:not(#extra-toolbar) {
        --background: #fff;
        --min-height: 48px;
        padding: 8px 14px 0 !important;
        box-shadow: none !important;
        --border-width: 0px;

        ion-icon {
            font-size: 26px;
        }

        ion-button {
            .logo {
                width: 30px;
            }

            span {
                font-weight: 600;
                letter-spacing: 1.2px;
                font-size: 1.2rem;
                margin-left: 8px;
                color: #292e53;
            }

            &.notification-btn {
                border-radius: 12px;
                height: 45px !important;
                // width: 40px;
                position: relative;
                overflow: visible !important;
                margin-right: 8px;

                ion-icon {
                    color: #564f83 !important;
                }

                ion-badge {
                    position: absolute;
                    font-size: 12px;
                    right: -1px;
                    top: 6px;
                    height: 12px;
                    width: 12px;
                    justify-content: center;
                    display: flex;
                    border-radius: 50%;
                    background: #ff6467;
                    padding: 0;
                    border: 2px solid #fff;
                }
            }

            &.avatar {
                width: 48px;
                height: 48px;

                img {
                    border-radius: 50% !important;
                    object-fit: fill;
                    background: #a9b6ea;
                }
            }
        }


    }
}

ion-content {
    --background: #fff;

    #heroSlider {
        .swiper {
            .swiper-wrapper {
                display: flex;
                align-items: center;
            }

            .swiper-pagination {
                bottom: 0px;
                top: 232px;

                .swiper-pagination-bullet {
                    height: 4px;
                    width: 16px;
                    margin: 0 6px;
                    border-radius: 16px;
                    background: #8b59ee !important;
                    transition: all .8s cubic-bezier(.075, .82, .165, 1) 0s;
                }

                .swiper-pagination-bullet-active {
                    width: 50px;
                }
            }

            .swiper-slide {
                margin: 10px 0 0;
                text-align: left;
                transition: all .4s cubic-bezier(.075, .82, .165, 1) 0s;
                height: 252px;

                &.swiper-slide-active {
                    transform: scale(1.05);

                    .card {
                        height: 200px;
                        max-height: 200px;
                    }
                }
            }

            .swiper-slide:first-of-type .card {
                margin-left: 0px !important;
            }

            .swiper-slide:last-of-type .card {
                margin-right: 0px !important;
            }

            .swiper-slide .card {
                margin: 4px 0px 48px !important;
            }

            .card {
                --background: -webkit-linear-gradient(120deg, #4b2e8b 0%, #476ccc 120%);
                /* Chrome 10-25, Safari 5.1-6 */
                --background: linear-gradient(120deg, #4b2e8b 0%, #476ccc 120%);
                box-shadow: rgb(73 78 173 / 15%) 0px 12px 30px;
                border-radius: 16px;
                margin: 0px;
                height: 180px;
                transition: all .4s cubic-bezier(.075, .82, .165, 1) 0s;

                ion-card-header {
                    padding: 8px 22px 0;

                    ion-img {
                        width: 70px;
                    }
                }

                ion-card-content {
                    padding: 0px 16px 0 22px;

                    .number {
                        span {
                            margin-right: 8px;
                            color: #fff;
                            font-size: 1.35rem;
                            letter-spacing: 1.35px;
                        }
                    }

                    ion-text {
                        display: inline-block;
                        margin-right: 22px;
                        font-weight: 500;
                        padding: 16px 0;

                        @media (min-width: 992px) {
                            margin-right: 9px;
                        }

                        h1 {
                            color: #fff;
                            font-size: 1rem;
                            letter-spacing: 1px;
                            margin: 5px 0;
                        }

                        h6 {
                            color: #cbcbcb;
                            font-size: 0.75rem;
                            letter-spacing: 0.75px;
                        }
                    }
                }
            }
        }
    }

    .balance {
        padding: 8px 24px 24px;

        ion-card {
            margin: 0;
            background: #f3f7ff;
            box-shadow: none !important;

            ion-card-content {
                ion-item {
                    --background: #f3f7ff !important;
                    --inner-padding-end: 0px;
                    --inner-padding-start: 0px;
                    --inner-padding-bottom: 12px;
                    --padding-start: 0px;
                    --padding-end: 0px;
                    --border-color: #d9e1e8;
                    --highlight-color-focused: #f3f7ff;
                    --background-activated: #f3f7ff;
                    --background-focused: #f3f7ff;

                    ion-avatar {
                        width: 40px;
                        height: 40px
                    }

                    ion-select {
                        padding: 0px 12px;

                        &::part(text) {
                            color: #292e53;
                            font-weight: 600;
                            font-size: 1.2rem;
                            letter-spacing: 0.5px;
                        }

                        &::part(icon) {
                            opacity: 1;
                            margin-left: 0.6rem;
                            content: url('../../assets/icon/arrow-down.png');
                            height: 13px;
                            width: 13px;
                        }
                    }

                    .amt {
                        color: #1d842f !important;
                        text-align: right;
                        font-weight: 600;
                        font-size: 1.4rem !important;
                        letter-spacing: 0.5px;
                        margin: 0px;
                    }

                    ion-label {
                        margin: 12px 0 0;
                    }

                    ion-icon {
                        color: #5e6172;
                        float: right;
                        font-size: 32px;
                        margin-top: 10px;
                    }

                    span {

                        color: #292e53;
                        font-weight: 600;
                        font-size: 1.1rem;
                        letter-spacing: 1.1px;
                        margin-right: 7px;

                        &.details {
                            display: block;
                            color: #292e53;
                            font-weight: 500;
                            font-size: 0.9rem;
                            letter-spacing: 0.9px;
                            margin-bottom: 4px;
                        }
                    }

                }
            }

        }
    }

    .quick-actions {
        padding-bottom: 24px;

        ion-label.title {
            padding: 0 0 24px 24px;
            color: #292e53;
            font-weight: 600;
            letter-spacing: 1.2px;
            font-size: 1.2rem;
        }

        .swiper {
            div.card {
                background: #f3f7ff;
                margin: 18px 0 0px;
                // height: 88px !important;
                box-shadow: none;
                border-radius: 8px;
                padding: 58px 0 10px;
                position: relative;
                display: flex;
                justify-content: center;
                width: -webkit-fill-available;
                height: 110px;

                img {
                    width: 72px !important;
                    margin: 0 auto;
                    position: absolute;
                    top: -16px;
                }

                ion-label {
                    word-spacing: 999rem;
                    color: #292e53;
                    font-weight: 600;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    line-height: 17px;
                    text-align: center;
                }

            }
        }
    }


    .transaction {
        padding: 0 0 24px 24px;

        ion-label {
            color: #292e53;
            font-weight: 600;
            letter-spacing: 1.2px;
            font-size: 1.2rem;
        }

        .card {
            --background: #fff;
            border-radius: 16px !important;
            box-shadow: none !important;
            height: auto;
            width: 100%;
            margin: 0px !important;
            padding: 0px !important;

            ion-card-content {
                padding-top: 4px !important;

                ion-label {
                    overflow: unset;

                    span.title {
                        color: #8a91af;
                        font-size: 1rem;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                    }
                }

                ion-item {
                    padding: 0px 0;
                    --padding-start: 0px;
                    --background: linear-gradient(rgb(0 0 0 / 0%) 100%,
                            rgb(255 255 255 / 0%) 100%);
                    --border-color: #dbdbdb;

                    &:last-child {
                        --border-color: #ededed;
                    }

                    &:hover {
                        background: #fff;
                        cursor: pointer;

                        ion-avatar {
                            --border-radius: 8px;
                            border: 2px solid #8a91af5c;
                        }
                    }

                    ion-avatar[size="large"] {
                        width: 50px;
                        height: 50px;
                        --border-radius: 8px;
                        background: #f0f4fd;
                        color: #8a91af;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;
                    }

                    ion-label {
                        display: grid;
                    }

                    .user-name {
                        color: #2c2c2c;
                        font-size: 1rem;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                    }

                    span.price {
                        display: flex;
                        justify-content: end;
                        font-size: 1.2rem;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        color: #2c2c2c;
                    }

                    .date-time {
                        color: #a3a3a3;
                        font-size: 0.9rem;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin: 5px 0 0;
                    }
                }
            }
        }
    }

    .bottom-bg {
        height: 50px;
        background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
        position: fixed;
        bottom: 0px;
        width: 100%;
        z-index: 99999;
    }

}
</style>
