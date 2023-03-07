<script setup lang="ts">
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonLabel, IonText, IonAvatar, IonItem, IonSegment, IonSegmentButton } from '@ionic/vue';
import { starOutline, cogOutline, settingsOutline } from 'ionicons/icons';

let segment = '1';
</script>

<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar id="extra-toolbar" color="toolbar">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Screens" />
                </ion-buttons>
                <ion-title>Profile Screen</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-grid class="ion-no-padding ion-no-margin">
                <div id="profile">
                    <ion-grid class="ion-no-padding">
                        <ion-row>
                            <ion-col size="12">
                                <ion-card class="card" mode="ios">
                                    <ion-card-header class="ion-no-padding">
                                        <ion-item lines="none" class="ion-no-padding ion-no-margin">
                                            <ion-button slot="start" fill="clear" class="ion-no-padding" mode="ios">
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </ion-button>
                                            <ion-button slot="end" fill="clear" class="ion-no-padding" mode="ios">
                                                <ion-icon :icon="cogOutline" :md="settingsOutline"></ion-icon>
                                            </ion-button>
                                        </ion-item>
                                    </ion-card-header>
                                    <ion-card-content>
                                        <ion-row>
                                            <ion-col size="12">
                                                <div class="profile ion-text-center">
                                                    <div class="img">
                                                        <ion-avatar size="large">
                                                            <img alt="person's pic"
                                                                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                                        </ion-avatar>
                                                    </div>
                                                    <div class="name">
                                                        <ion-text class="ion-margin-top ion-text-nowrap">
                                                            <span class="title">
                                                                Szymon Lattene <i>A Sovereign God that governs the World</i>
                                                            </span>
                                                        </ion-text>
                                                    </div>
                                                    <div id="NH0uONs1jqgj8fBJ3yAk">
                                                        <ion-segment v-model="segment" mode="md">
                                                            <ion-segment-button value="1">
                                                                Gallery
                                                            </ion-segment-button>
                                                            <ion-segment-button value="2">
                                                                Collection
                                                            </ion-segment-button>
                                                        </ion-segment>
                                                        <ion-card v-show="segment == '1'"
                                                            class="ion-no-margin ion-padding-bottom" mode="ios">
                                                            <ion-card-content>
                                                                <div class="gallery">
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/7685848/pexels-photo-7685848.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/2526517/pexels-photo-2526517.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/5859861/pexels-photo-5859861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Gallery" />
                                                                    </figure>
                                                                </div>
                                                            </ion-card-content>
                                                        </ion-card>
                                                        <ion-card v-show="segment == '2'"
                                                            class="ion-no-margin ion-padding-bottom">
                                                            <ion-card-content>
                                                                <div class="gallery">
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/5798971/pexels-photo-5798971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Art" />
                                                                        <figcaption>
                                                                            <ion-label>Art</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/2975228/pexels-photo-2975228.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Vintage" />
                                                                        <figcaption>
                                                                            <ion-label>Vintage</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Watch" />
                                                                        <figcaption>
                                                                            <ion-label>Watch</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Sneakers" />
                                                                        <figcaption>
                                                                            <ion-label>Sneakers</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Museum" />
                                                                        <figcaption>
                                                                            <ion-label>Museum</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                                                            alt="Book" />
                                                                        <figcaption>
                                                                            <ion-label>Book</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                                            alt="Stone" />
                                                                        <figcaption>
                                                                            <ion-label>Stone</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <figure>
                                                                        <img src="https://images.pexels.com/photos/7269677/pexels-photo-7269677.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                                            alt="Toy" />
                                                                        <figcaption>
                                                                            <ion-label>Toy</ion-label>
                                                                        </figcaption>
                                                                    </figure>
                                                                </div>
                                                            </ion-card-content>
                                                        </ion-card>
                                                    </div>
                                                </div>
                                            </ion-col>
                                        </ion-row>
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
#profile {
    .card {
        border-radius: 0 !important;
        height: auto;
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        --background: transparent !important;
        box-shadow: none !important;

        ion-card-header {
            --background: #f6f7fa;
            background-position: top;
            background-size: cover;
            height: 130px;
        }

        ion-item {
            padding: 32px 16px;
            --background: linear-gradient(rgb(0 0 0 / 0%) 82%, rgb(255 255 255 / 0%) 100%);
            --inner-padding-start: 0;
            --inner-padding-end: 0;

            ion-button {
                height: 50px;
                width: 50px;
                background: #fff;
                margin: 0;
                font-size: 1rem;
                border-radius: 12px;
                color: #222428;
            }
        }

        ion-card-content {
            padding: 16px;
            background: #fff;
            border-top-left-radius: 16px !important;
            border-top-right-radius: 16px !important;

            .profile {
                display: initial;
                justify-content: center;
                top: -80px;
                position: relative;
                margin: 0 50%;
                height: auto;

                .img,
                .name {
                    display: grid;
                    justify-content: center;
                }

                .action {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }

                ion-avatar[size="large"] {
                    height: 90px;
                    width: 90px;
                }

                ion-avatar {
                    box-shadow: rgb(50 69 76 / 35%) 0 0 50px 8px;
                    border-radius: 12px;

                    img {
                        border-radius: 12px !important
                    }
                }

                .title {
                    display: block;
                    font-size: 1.2rem;
                    color: #262626;
                    font-weight: 600;
                    letter-spacing: 1.2px;
                    margin-top: 0;

                    i {
                        display: block !important;
                        font-weight: 500;
                        font-size: 0.8rem;
                        letter-spacing: 0.8px;
                        font-style: normal;
                        margin: 6px 0;
                    }
                }
            }

            // segment
            #NH0uONs1jqgj8fBJ3yAk {
                ion-segment {
                    --background: #ffffff !important;
                    background: #ffffff !important;
                    border-radius: 0 !important;
                    border-top-left-radius: 32px !important;
                    border-top-right-radius: 32px !important;
                    padding: 8px 0 0;
                    display: flex;
                    align-items: flex-start;

                    ion-segment-button {
                        text-transform: capitalize;
                        --color-hover: #2c2c2c;
                        --color-checked: #2c2c2c;
                        --color: #939393;
                        // --border-radius: 16px;
                        --indicator-height: 6px;
                        --indicator-color: #2c2c2c !important;
                        --indicator-box-shadow: none !important;
                        --ripple-color: transparent;
                        font-size: 1rem;
                        letter-spacing: 1px;
                        font-weight: 500;
                        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

                        &::before {
                            border: none !important;
                        }

                        &.segment-button-checked {
                            font-weight: 500;
                            transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
                            transform: scale(1.01);
                        }

                        &::part(indicator) {
                            width: 6px;
                            margin: 6px auto;
                            height: 6px;
                            border-radius: 50% !important;
                        }

                        &::part(indicator-background) {
                            border-top-left-radius: 8px;
                            border-top-right-radius: 8px;
                            border-bottom-left-radius: 8px;
                            border-bottom-right-radius: 8px;
                            border-radius: 50% !important;
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
                        padding: 0 !important;
                        margin: 0 !important;
                        right: 50%;
                        display: none;
                    }
                }

                ion-card {
                    border-radius: 0 !important;
                    border-bottom-left-radius: 8px !important;
                    border-bottom-right-radius: 8px !important;
                    --background: #ffffff !important;
                    background: #ffffff !important;
                    box-shadow: none !important;

                    ion-card-content {
                        --background: #ffffff !important;
                        background: #ffffff !important;
                        box-shadow: none !important;
                        padding: 16px 0;

                        .gallery {
                            margin: 0 auto !important;
                            // column-count: 2;
                            z-index: -1;
                            column-gap: 16px;
                            width: 100%;

                            figure {
                                margin: 0 0 16px;
                                display: grid;
                                grid-template-rows: 1fr auto;
                                page-break-inside: avoid;
                                break-inside: avoid;
                                justify-content: center;
                                border: 0 !important;
                                box-shadow: none !important;

                                &:hover figcaption {
                                    transform: scale(1.01);
                                    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
                                    opacity: 1;
                                }

                                figcaption {
                                    grid-row: 1;
                                    grid-column: 1;
                                    justify-self: center;
                                    background: rgb(0 0 0 / 45%);
                                    border-radius: 12px;
                                    width: 100%;
                                    height: 100%;
                                    color: #fff;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 1.6rem;
                                    letter-spacing: 1.6px;
                                    font-weight: 500;
                                }

                                img {
                                    grid-row: 1/-1;
                                    grid-column: 1;
                                    width: auto;
                                    border-radius: 12px !important;
                                    max-width: 100%;
                                    display: block;
                                    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
                                }

                                ion-item {
                                    --background: transparent !important;
                                    --color: #222428;
                                    width: 100%;
                                    display: block !important;

                                    ion-avatar {
                                        margin-right: 6px;

                                        img {
                                            height: 35px;
                                            width: 35px;
                                        }
                                    }

                                    ion-label {
                                        font-size: 1rem;
                                        letter-spacing: 1px;
                                        margin: 2px 0 5px !important;
                                    }
                                }

                                .rating {
                                    display: flex;
                                    align-items: center;

                                    ion-icon {
                                        color: #ffc950;
                                        margin-right: 2px;
                                        font-size: 0.8rem;
                                    }
                                }

                                ion-button {
                                    letter-spacing: 1px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
