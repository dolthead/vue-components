<script lang="ts" setup>
import { IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonCardHeader, IonImg, IonProgressBar, IonIcon } from '@ionic/vue';
import { play } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header class="ion-no-padding">
            <ion-item lines="none">
              <ion-label class="">
                <span class="title">Progress</span><span class="sub-title">Courses</span>
              </ion-label>
              <ion-button class="ion-no-margin" slot="end" expand="block" fill="clear" shape="round">
                View All
              </ion-button>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
            <ion-grid class="ion-no-padding">
              <ion-row class="a-section ion-no-padding ion-align-items-center">
                <ion-col size="4">
                  <ion-img
                    src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ion-img>
                </ion-col>
                <ion-col size="6">
                  <ion-label><span class="title">Photography</span></ion-label>
                  <ion-progress-bar :value="0.25"></ion-progress-bar>
                  <ion-label class="count">25%</ion-label>
                </ion-col>
                <ion-col size="2">
                  <ion-button fill="solid" shape="round" color="light" class="ion-no-margin">
                    <ion-icon :icon="play"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
              <ion-row class="a-section ion-no-padding ion-align-items-center">
                <ion-col size="4">
                  <ion-img
                    src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></ion-img>
                </ion-col>
                <ion-col size="6">
                  <ion-label><span class="title">UI/UX Design</span></ion-label>
                  <ion-progress-bar :value="0.5"></ion-progress-bar>
                  <ion-label class="count">50%</ion-label>
                </ion-col>
                <ion-col size="2">
                  <ion-button fill="solid" shape="round" color="light" class="ion-no-margin">
                    <ion-icon :icon="play"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
              <ion-row class="a-section ion-no-padding ion-align-items-center">
                <ion-col size="4">
                  <ion-img
                    src="https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ion-img>
                </ion-col>
                <ion-col size="6">
                  <ion-label><span class="title">Animation</span></ion-label>
                  <ion-progress-bar :value="0.8"></ion-progress-bar>
                  <ion-label class="count">80%</ion-label>
                </ion-col>
                <ion-col size="2">
                  <ion-button fill="solid" shape="round" color="light" class="ion-no-margin">
                    <ion-icon :icon="play"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: #ededed;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-card-header {
    padding-top: 10px;

    ion-item {
      padding: 0px 0;
      --background: linear-gradient(rgb(0 0 0 / 0%) 100%,
          rgb(255 255 255 / 0%) 100%);

      ion-label {
        overflow: unset;

        span.title {
          color: #2c2c2c;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .sub-title {
          display: block;
          font-size: 0.8rem;
          color: #959191;
          font-weight: 500;
          letter-spacing: 0.8px;
          margin-top: 5px;
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
    padding-top: 12px;

    .a-section {
      border-bottom: 1px solid #dbdbdb;
      margin-bottom: 12px;
      padding-bottom: 12px;
    }

    .a-section:last-child {
      border-bottom: 0px;
      padding-bottom: 0px;
    }

    ion-img {
      padding: 0px 8px 0px 0;
      margin-right: 8px;
      width: 100%;
      height: 60px;
      object-fit: cover;
    }

    ion-img::part(image) {
      border-radius: 4px;
    }

    ion-label {
      margin: 0 !important;

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
      width: 60%;
      border-top-right-radius: 4px !important;
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
      margin-right: 15px;
    }

    .count {
      display: contents;
      float: right;
      color: #2c2c2c;
      font-weight: 500;
      letter-spacing: 0.8px;
    }

    .a-status {
      color: #37ad4b;
      font-weight: 600;
      font-size: 0.8rem;
      letter-spacing: 0.8px;
    }

    ion-button[shape="round"] {
      --border-radius: 50%;
      width: 45px;
      height: 45px;

      &::part(native) {
        padding: 0px;
        background: var(--ion-color-contrast);
        color: var(--ion-color-base);
      }
    }
  }
}
</style>
