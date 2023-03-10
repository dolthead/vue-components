<script lang="ts" setup>
import { IonIcon, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonBadge, IonCardContent, IonLabel } from '@ionic/vue';
import { eyeOutline, chatbubbleOutline } from 'ionicons/icons';
</script>

<template>
  <div class="bg">
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col size="12">
          <ion-card class="card" mode="ios">
            <ion-card-header class="ion-padding ion-align-items-end">
              <ion-badge color="danger" mode="ios" class="ion-text-uppercase">Live</ion-badge>
            </ion-card-header>
            <ion-card-content class="ion-no-padding">
              <ion-row class="event-actions ion-align-items-center">
                <ion-col size="12" class="heading-title">
                  <ion-label class="ion-margin-bottom"><span class="title">App Development Masterclass - Online
                      Certification Course</span></ion-label>
                </ion-col>
                <ion-col size="4" class="ion-align-self-center">
                  <ion-button class="ion-no-margin" fill="clear" shape="circle" size="small" mode="ios">
                    <ion-icon :icon="eyeOutline" size="small"></ion-icon>
                  </ion-button>
                  <span class="ion-text-start count">{{ new Intl.NumberFormat().format(1757) }}</span>
                </ion-col>
                <ion-col size="4" class="ion-align-self-center">
                  <ion-button class="ion-no-margin" fill="clear" shape="circle" size="small" mode="ios">
                    <ion-icon :icon="chatbubbleOutline" size="small"></ion-icon>
                  </ion-button>
                  <span class="ion-text-start count">{{ new Intl.NumberFormat().format(42) }}</span>
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 300px;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-badge {
    font-size: 0.8rem;
    padding: 3px 10px;
    letter-spacing: 0.8px;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 20px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(rgb(0 0 0 / 65%) 65%,
        rgb(255 255 255 / 0%) 100%);
    --border-color: #c7c7c7;
  }

  ion-card-content {
    padding: 32px 16px 0px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%,
        rgb(0 0 0 / 40%) 30%) !important;

    .title {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1.2px;
      white-space: break-spaces;
      padding-bottom: 5px;
    }

    .heading-title {
      border-bottom: 1px solid #e1e1e1;
    }

    .event-actions {
      ion-col {
        padding-bottom: 5px;
      }

      ion-button[shape="circle"] {
        --border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-left: 0px;
        font-size: xx-small;
        --color: #fff !important;
      }

      .count {
        padding: 8px 0 0 0px;
        position: absolute;
        color: #fff;
      }
    }
  }
}
</style>
