<script setup lang="ts">
import { IonAvatar, IonPage, IonContent, IonButton, IonImg, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
import { chevronBackOutline, heartOutline, arrowForwardOutline, starSharp, starOutline } from 'ionicons/icons';

let segment = '1';
</script>

<template>
    <ion-page id="travel-page">
        <ion-content>
            <div class="post-bg">
                <ion-grid class="ion-no-padding">
                    <ion-row class="ion-justify-content-center">
                        <ion-col class="card" size="12">
                            <ion-row class="ion-padding-vertical web-header">
                                <ion-col size="6">
                                    <ion-button fill="clear" class="ion-no-padding ion-no-margin" mode="ios"
                                        router-link="/Screens" router-direction="back">
                                        <ion-icon :icon="chevronBackOutline"></ion-icon>
                                    </ion-button>
                                </ion-col>
                                <ion-col size="6" class="ion-text-end">
                                    <ion-button fill="clear" class="ion-no-padding ion-no-margin" mode="ios">
                                        <ion-icon :icon="heartOutline"></ion-icon>
                                    </ion-button>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="12">
                                    <ion-img
                                        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        class="bg-img" alt="Post Image"></ion-img>
                                    <div class="bg-img-details">
                                        <ion-item lines="none" class="ion-no-margin ion-no-padding">
                                            <a class="custom-btn">
                                                <ion-icon slot="start" :icon="starSharp"></ion-icon>
                                                4.9
                                            </a>
                                            <ion-label class="avatar-group">
                                                <ul class="avatars">
                                                    <li class="avatars__item">
                                                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            class="avatars__img">
                                                    </li>
                                                    <li class="avatars__item">
                                                        <img src="https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            class="avatars__img">
                                                    </li>
                                                    <li class="avatars__item">
                                                        <span class="avatars__initials">RV</span>
                                                    </li>
                                                    <li class="avatars__item">
                                                        <span class="avatars__others">+16</span>
                                                    </li>
                                                </ul>
                                            </ion-label>
                                        </ion-item>
                                        <ion-item lines="none" class="ion-no-margin ion-no-padding">
                                            <ion-label class="title">Antelope Canyon</ion-label>
                                            <ion-text class="price">$90</ion-text>
                                        </ion-item>
                                    </div>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="12">
                                    <div id="post-segment">
                                        <ion-segment v-model="segment" mode="md" lines="none">
                                            <ion-segment-button value="1">
                                                Overview
                                            </ion-segment-button>
                                            <ion-segment-button value="2">
                                                Gallery
                                            </ion-segment-button>
                                            <ion-segment-button value="3">
                                                Reviews
                                            </ion-segment-button>
                                        </ion-segment>
                                        <ion-card v-show="segment == '1'" class="ion-no-margin ion-padding-bottom">
                                            <ion-card-header>
                                                <ion-label class="title">Tourism and sightseeing</ion-label>
                                            </ion-card-header>
                                            <ion-card-content>
                                                <p>
                                                    Navajo Upper Antelope Canyon is a slot canyon in the American
                                                    Southwest, on Navajo land east of Lechee, Arizona.
                                                    It includes five separate, scenic slot canyon sections on the Navajo
                                                    Reservation, referred to as Upper Antelope Canyon, Rattle Snake
                                                    Canyon, Owl Canyon, Mountain Sheep Canyon and Lower Antelope Canyon.
                                                </p>
                                                <ion-button expand="block" fill="clear" shape="round"
                                                    class="ion-no-padding ion-no-margin ion-text-start">
                                                    Read more
                                                </ion-button>
                                                <div class="action-btn">
                                                    <ion-button expand="full" shape="round" mode="ios">
                                                        <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
                                                        Let's Visit
                                                    </ion-button>
                                                </div>
                                            </ion-card-content>
                                        </ion-card>
                                        <ion-card v-show="segment == '2'" class="ion-no-margin ion-padding-bottom">
                                            <ion-card-content>
                                                <div class="gallery">
                                                    <figure>
                                                        <img src="https://images.pexels.com/photos/45839/antelope-canyon-arizona-sandstone-rock-45839.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            alt="Gallery" />
                                                    </figure>
                                                    <figure>
                                                        <img src="https://images.pexels.com/photos/11026416/pexels-photo-11026416.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            alt="Gallery" />
                                                    </figure>
                                                    <figure>
                                                        <img src="https://images.pexels.com/photos/6332717/pexels-photo-6332717.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            alt="Gallery" />
                                                    </figure>
                                                    <figure>
                                                        <img src="https://images.pexels.com/photos/509371/pexels-photo-509371.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                            alt="Gallery" />
                                                    </figure>
                                                </div>
                                            </ion-card-content>
                                        </ion-card>
                                        <ion-card v-show="segment == '3'" class="ion-no-margin ion-padding-bottom">
                                            <ion-card-content class="ion-no-padding ion-padding-top reviews">
                                                <ion-item lines="none" slot="header" class="">
                                                    <ion-avatar slot="start">
                                                        <img
                                                            src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                                    </ion-avatar>
                                                    <ion-label><span class="user-name">Carol Cox</span>
                                                        <span class="sub-title">4 Reviews | 6 Photos</span>
                                                        <span class="rating">
                                                            <ion-icon :icon="starSharp"></ion-icon>
                                                            <ion-icon :icon="starSharp"></ion-icon>
                                                            <ion-icon :icon="starSharp"></ion-icon>
                                                            <ion-icon :icon="starSharp"></ion-icon>
                                                            <ion-icon :icon="starOutline"></ion-icon> <ion-label
                                                                class="time">3 hrs ago</ion-label>
                                                        </span>
                                                        <span class="text">
                                                            <p>Love coming here and see the exotic rock formation.
                                                                Absolutely beautiful, mother nature's miracles! Must
                                                                see.</p>
                                                        </span>
                                                        <div class="gallery">
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1527154964564-fb23cd9b47a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEFudGVsb3BlJTIwQ2FueW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1491285067156-0486c1fe5fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fEFudGVsb3BlJTIwQ2FueW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1511971148722-9f1254209061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fEFudGVsb3BlJTIwQ2FueW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1582230587856-7fec01506148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fEFudGVsb3BlJTIwQ2FueW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW50ZWxvcGUlMjBjYW55b258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                            <figure>
                                                                <img src="https://images.unsplash.com/photo-1495580847032-db0bac41d44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW50ZWxvcGUlMjBjYW55b258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                                                    alt="Gallery" />
                                                            </figure>
                                                        </div>
                                                    </ion-label>
                                                </ion-item>
                                            </ion-card-content>
                                        </ion-card>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
#travel-page {
    ion-header {
        ion-toolbar {
            --background: transparent;

            ion-back-button,
            ion-icon {
                color: #fff
            }

            ion-icon {
                --ionicon-stroke-width: 40px;
            }
        }
    }

    --background: #ededed;

    .web-header {
        position: absolute;
        top: 0;
        z-index: 999;
        padding: 16px 16px;
        width: 100%;

        ion-button {
            color: #fff !important
        }
    }

    .post-bg {
        min-height: auto;
        display: flex;
        align-items: flex-start;

        form {
            width: 100%;
        }

        .card {
            background-color: #ededed !important;
            border-radius: 20px;
            padding: 0px 0px;
            margin: 0;

            .bg-img {
                height: 60vh;
                object-fit: cover;
            }

            .bg-img-details {
                position: absolute;
                padding: 16px 16px 32px;
                bottom: 32px;
                width: -webkit-fill-available;

                ion-item {
                    padding: 0px 0;
                    --background: linear-gradient(rgb(0 0 0 / 0%) 70%,
                            rgb(255 255 255 / 0%) 100%);
                }

                ion-label.avatar-group {
                    float: right;
                    text-align: right;
                    display: flex;
                    justify-content: end;
                    margin: 0;
                }

                ul.avatars {
                    display: flex;
                    justify-content: start;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    float: left;
                    z-index: 1;
                    padding: 10px 13px 10px 26px;
                    background: #ffffff30;
                    margin: 16px 0;
                    border-radius: 50px;
                }

                li.avatars__item {
                    height: 30px;
                    margin: 0px 0px 0px -12px;
                    padding: 0px 0px 0px 0px;
                    position: relative;
                    // width: 42px;
                }

                img.avatars__img,
                span.avatars__initials,
                span.avatars__others {
                    background-color: #e1e1e1;
                    border: 1.5px solid #ffffff;
                    border-radius: 50%;
                    color: #a1a1a1;
                    font-size: 12px;
                    letter-spacing: 1px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    width: 30px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    object-fit: cover;
                    object-position: center;
                }

                span.avatars__others {
                    background-color: #303030;
                    color: #ebebeb;
                }

                a.custom-btn {
                    background: rgba(255, 255, 255, 0.1882352941);
                    color: #fff;
                    border-radius: 50px;
                    padding: 10px 16px 10px 10px;
                    display: flex;
                    justify-content: center;
                    align-items: end;
                    font-weight: 500;
                    line-height: 16px;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    cursor: pointer;

                    ion-icon {
                        margin: 1.5px 8px;
                    }
                }

                .title {
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #fff;
                    letter-spacing: 1.5px;
                    display: block;
                    white-space: break-spaces;
                }

                .price {
                    font-size: 1.2rem;
                    font-weight: 500;
                    letter-spacing: 1px;
                    color: #fff;
                    text-align: right;
                }
            }
        }

        // Segment SCSS
        #post-segment {
            position: absolute;
            width: 100%;
            top: -32px;

            ion-segment {
                --background: #ffffff !important;
                background: #ffffff !important;
                border-radius: 0px !important;
                border-top-left-radius: 32px !important;
                border-top-right-radius: 32px !important;
                padding: 16px 0px 0px;
                display: flex;
                align-items: flex-start;

                ion-segment-button {
                    text-transform: capitalize;
                    letter-spacing: 1px;
                    --color-hover: #2c2c2c;
                    --color-checked: #2c2c2c;
                    --color: #939393;
                    --indicator-height: 6px;
                    --indicator-color: #2c2c2c !important;
                    --indicator-box-shadow: none !important;
                    --ripple-color: transparent;
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: all 2s cubic-bezier(.075, .82, .165, 1) 0s;

                    &::before {
                        border: none !important;
                    }

                    &.segment-button-checked {
                        font-weight: 500;
                        transition: all 2s cubic-bezier(.075, .82, .165, 1) 0s;
                        transform: scale(1.01);
                    }

                    &::part(indicator) {
                        width: 26px;
                        margin: 0 auto;
                    }

                    &::part(indicator-background) {
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                        // border-radius: 50px;
                    }
                }

                ion-segment-button.segment-button-checked::after {
                    content: "";
                    width: 6px;
                    height: 6px;
                    background: #2c2c2c !important;
                    position: inherit;
                    bottom: -30px;
                    border-radius: 50px !important;
                    -webkit-border-radius: 50px !important;
                    -moz-border-radius: 50px !important;
                    padding: 0px !important;
                    margin: 0px !important;
                    right: 50%;
                    display: none;
                }
            }

            ion-card {
                border-radius: 0px !important;
                --background: #ffffff !important;
                background: #ffffff !important;
                box-shadow: none !important;
                border: none !important;

                .title {
                    font-weight: 500;
                    font-size: 1.1rem;
                    color: #2c2c2c;
                    letter-spacing: 1px;
                }

                p {
                    font-weight: 400;
                    font-size: 1rem;
                    color: #2c2c2c;
                    letter-spacing: 1px;
                    line-height: 22px;
                    display: -webkit-box;
                    -webkit-line-clamp: 7;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                ion-button {
                    color: #ff8f2f;
                    font-size: 1rem;
                    float: left;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                .gallery {
                    margin: 0 auto !important;
                    column-count: 2 !important;
                    z-index: -1;
                    column-gap: 16px;
                    width: 100%;

                    figure {
                        margin: 0 0 16px;
                        display: grid;
                        grid-template-rows: 1fr auto;
                        page-break-inside: avoid;
                        break-inside: avoid;
                        transition: all .8s cubic-bezier(.075, .82, .165, 1) 0s;
                        justify-content: center;

                        &:hover {
                            transform: scale(1.05);
                            cursor: pointer;
                            transition: all .8s cubic-bezier(.075, .82, .165, 1) 0s;
                        }

                        img {
                            grid-row: 1/-1;
                            grid-column: 1;
                            width: auto;
                            border-radius: 16px !important;
                            max-width: 100%;
                            display: block;
                        }
                    }
                }

                .reviews {
                    ion-item {
                        --background: transparent !important;
                        display: flex;
                        align-items: flex-start;
                        --padding-end: 0px;
                        --inner-padding-end: 0px;

                        ion-avatar {
                            margin-top: 3px
                        }

                        ion-label {
                            margin: 0px
                        }
                    }

                    .user-name {
                        color: #3e3e3e;
                        font-size: 1rem;
                        font-weight: 600;
                    }

                    span.sub-title {
                        display: block;
                        color: #9d9d9d;
                        font-size: 0.8rem;
                        font-weight: 500;
                    }

                    .text {
                        p {
                            white-space: normal !important;
                            -webkit-line-clamp: unset;
                            margin-bottom: 8px
                        }
                    }

                    .gallery {
                        column-count: 3 !important;
                        column-gap: 4px;

                        figure {
                            margin: 0 0 4px;

                            &:last-child {
                                margin: 0 0 0px !important;
                            }

                            &:last-of-type {
                                margin: 0 0 0px !important;
                            }

                            img {
                                border-radius: 8px !important;
                            }
                        }
                    }

                    .rating {
                        display: flex;
                        align-items: center;

                        .time {
                            display: inline-flex;
                            font-size: 0.8rem;
                            padding: 5px 10px 2px;
                            font-weight: 500;
                            color: #9d9d9d
                        }

                        ion-icon {
                            color: #ffc950;
                            margin-right: 2px;
                        }
                    }
                }
            }
        }

        .action-btn {
            display: block;
            width: 100%;

            ion-button {
                --background: #ff8f2f;
                --color: #fff !important;
                color: #fff !important;
                width: 100%;
                text-transform: capitalize !important;
                --background-hover: #e58029;
                --background-activated: #e58029;
                --background-focused: #e58029;
            }
        }
    }
}
</style>
