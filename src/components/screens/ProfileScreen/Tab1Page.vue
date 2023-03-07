<script setup lang="ts">
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonAvatar, IonItem } from '@ionic/vue';
import { peopleOutline, starSharp, starOutline } from 'ionicons/icons';
</script>

<template>
    <ion-page>
        <ion-header mode="ios">
            <ion-toolbar id="extra-toolbar" color="toolbar">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/Screens" />
                </ion-buttons>
                <ion-title>Feeds Screen</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-grid class="ion-no-padding">
                <ion-row class="welcome">
                    <ion-col size="12">
                        <ion-item lines="none" class="ion-no-padding">
                            <ion-label>
                                Hola,
                                <span>Szymon</span>
                                <small>Create your best gallery today</small>
                            </ion-label>
                            <a class="profile">
                                <ion-icon :icon="peopleOutline" size="default"></ion-icon>
                            </a>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row class="feeds">
                    <ion-col size="12">
                        <div class="gallery">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        </ion-avatar>
                                        <ion-label>
                                            Claudia Tula
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/1974657/pexels-photo-1974657.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        </ion-avatar>
                                        <ion-label>
                                            Claudia Tula
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </ion-avatar>
                                        <ion-label>
                                            Daniel G
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </ion-avatar>
                                        <ion-label>
                                            Daniel G
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </ion-avatar>
                                        <ion-label>
                                            Claudia P
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        </ion-avatar>
                                        <ion-label>
                                            Julia R
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.unsplash.com/photo-1587090311790-61e3ae82ac17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        </ion-avatar>
                                        <ion-label>
                                            Julia R
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/5715317/pexels-photo-5715317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                        </ion-avatar>
                                        <ion-label>
                                            Claudia Tula
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Gallery" />
                                <figcaption>
                                    <ion-item class="ion-no-padding ion-no-margin" lines="none">
                                        <ion-avatar slot="start">
                                            <img
                                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </ion-avatar>
                                        <ion-label>
                                            Daniel G
                                            <span class="rating">
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starSharp"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                                <ion-icon :icon="starOutline"></ion-icon>
                                            </span>
                                        </ion-label>
                                    </ion-item>
                                    <ion-button expand="block" mode="ios" size="small">
                                        Follow
                                    </ion-button>
                                </figcaption>
                            </figure>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>
.welcome {
    padding: 16px;

    ion-item {
        --background: transparent;
        --color: #222428;
        --inner-padding-end: 0;

        ion-label {
            font-size: 1.6rem;
            font-weight: 600;
            letter-spacing: 1px !important;

            span {
                font-weight: 500 !important;
            }

            small {
                font-size: 1rem !important;
                font-weight: 400;
                display: block;
                margin: 5px 0;
            }
        }

        .profile {
            padding: 12px;
            margin: 0;
            background: #fff;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            font-size: 1.4rem;
            color: #222428;
            // box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
        }
    }
}

.feeds {
    padding: 32px 16px;
    background: #fff;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

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

            &:hover figcaption {
                transform: scale(1.01);
                transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
                opacity: 1;
            }

            figcaption {
                opacity: 0;
                grid-row: 2;
                grid-column: 1;
                justify-self: center;
                // display: inline-flex;
                background: #fff;
                box-shadow: #0003 0 0 50px, #0003 0 0 25px;
                border-radius: 12px;
                width: 92%;
                margin: 0 0 8px;
                padding: 8px;
                transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
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



// tabs.page.scss
ion-tabs {
    ion-tab-bar {
        --border: 0px !important;
        --background: #fff;
        height: 50px;
        padding: 12px 0;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        ion-tab-button {
            -webkit-transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --background: #fff;
            --color: #a7a7a7 !important;

            &[aria-selected='true'] {
                --background: var(--ion-color-primary);
                --color: #fff !important;
                --color-focused: #fff;
                --color-selected: #fff;
                padding: 0px 16px;
                border-radius: 10px;
                margin: 0px 16px;

                ion-label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;

                    span {
                        display: block;
                        letter-spacing: 1px;
                        font-weight: 400;
                    }

                    ion-icon {
                        margin-right: 5px;
                        font-size: 1.2rem !important;
                    }
                }
            }

            ion-label {
                display: none;
                letter-spacing: 0.5px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;

                span {
                    display: none;
                }

                ion-icon {
                    visibility: visible !important;
                    font-size: 1.5rem !important;
                    margin-right: 5px;
                }
            }
        }
    }
}</style>
