<script lang="ts" setup>
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAvatar, IonProgressBar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <ion-content class="ion-padding ion-text-center">
            <ion-grid class="ion-no-padding">
                <ion-row>
                    <ion-col size="12">
                        <ion-card class="card">
                        <ion-card-header class="ion-no-padding">
                            <ion-item lines="none">
                                <ion-label class=""><span class="title">Channels</span></ion-label>
                                <ion-button class="ion-no-margin" slot="end" expand="block" fill="clear" shape="round">
                                    View All
                                </ion-button>
                            </ion-item>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-item>
                                <ion-avatar>
                                    <img src="https://cdn-icons-png.flaticon.com/128/733/733544.png" />
                                </ion-avatar>
                                <ion-label><span class="title">Dribbble</span><span class="sub-title">Community</span></ion-label>
                                <ion-progress-bar color="primary" :value="0.4"></ion-progress-bar>
                                <ion-label class="count">40%</ion-label>
                            </ion-item>
                            <ion-item>
                                <ion-avatar>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" />
                                </ion-avatar>
                                <ion-label><span class="title">Instagram</span><span class="sub-title">Social Media</span></ion-label>
                                <ion-progress-bar color="secondary" :value="0.8"></ion-progress-bar>
                                <ion-label class="count">80%</ion-label>
                            </ion-item>
                            <ion-item>
                                <ion-avatar>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png" />
                                </ion-avatar>
                                <ion-label><span class="title">Slack</span><span class="sub-title">Messenger</span></ion-label>
                                <ion-progress-bar color="tertiary" :value="0.2"></ion-progress-bar>
                                <ion-label class="count">20%</ion-label>
                            </ion-item>
                            <ion-item>
                                <ion-avatar>
                                    <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" />
                                </ion-avatar>
                                <ion-label><span class="title">Google</span><span class="sub-title">SEO & PPC</span></ion-label>
                                <ion-progress-bar color="success" :value="0.55"></ion-progress-bar>
                                <ion-label class="count">55%</ion-label>
                            </ion-item>
                        </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<style lang="scss" scoped>

.card {
    --background: #fff;
    border-radius: 16px !important;
    height: auto;
    width: 100%;
    margin: 0px !important;
    padding: 0px !important;

    ion-card-header {
      padding-top: 10px;

      ion-item {
        padding: 0px 0;
        --background: linear-gradient(
          rgb(0 0 0 / 0%) 100%,
          rgb(255 255 255 / 0%) 100%
        );

        ion-label {
          overflow: unset;

          span.title {
            color: #2c2c2c;
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 1.2px;
          }

          .sub-title {
            color: #707070;
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.9px;
            display: block;
          }
        }

        ion-button {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: capitalize;
        }
      }
    }

    ion-card-content {
      padding: 0px 16px 8px !important;
      ion-item {
        --background: #fff;
        --inner-padding-start: 0px;
        --inner-padding-top: 8px;
        --inner-padding-bottom: 8px;
        --inner-padding-end: 0px;
        --padding-start: 0px !important;
        --padding-end: 0px !important;
        --border-color: #e1e3ea;
        &:last-of-type {
          --border-color: #fff;
        }
        ion-avatar {
          img {
            border-radius: 0;
          }
        }
        ion-label {
          margin: 0 0 0 8px !important;

          .title {
            font-size: 1rem;
            color: #2c2c2c;
            font-weight: 600;
            letter-spacing: 1px;
          }

          .sub-title {
            font-size: 0.8rem;
            color: #a1a1a1;
            display: block;
            font-weight: 500;
            letter-spacing: 0.8px;
          }
        }

        ion-progress-bar {
          display: inline-block;
          width: 30%;
          border-radius: 6px;
          margin-right: 10px;
          height: 6px;
        }

        .count {
          display: contents;
          float: right;
          color: #b5b5c3;
          font-weight: 500;
          letter-spacing: 0.9px;
          font-size: 0.9rem;
        }
      }
    }
  }
</style>
