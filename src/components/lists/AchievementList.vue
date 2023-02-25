<script lang="ts" setup>
import { IonContent, IonPage, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonButton, IonProgressBar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid class="ion-no-padding">
        <ion-row>
          <ion-col size="12">
            <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                <ion-item lines="none">
                  <ion-label class=""><span class="title">Achievements</span></ion-label>
                  <ion-button class="ion-no-margin" slot="end" expand="block" fill="clear" shape="round">
                    View All
                  </ion-button>
                </ion-item>
              </ion-card-header>
              <ion-card-content>
                <ion-grid class="ion-no-padding">
                  <ion-row class="a-section ion-no-padding">
                    <ion-col size="3">
                      <ion-img src="https://cdn-icons-png.flaticon.com/512/744/744970.png"></ion-img>
                    </ion-col>
                    <ion-col size="9">
                      <ion-label><span class="title">Activities</span><span class="sub-title">Participated in all
                          activities</span></ion-label>
                      <ion-progress-bar :value="0.2"></ion-progress-bar>
                      <ion-label class="count">1/3</ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row class="a-section ion-no-padding">
                    <ion-col size="3">
                      <ion-img src="https://cdn-icons-png.flaticon.com/512/3884/3884732.png"></ion-img>
                    </ion-col>
                    <ion-col size="9">
                      <ion-label><span class="title">Champion</span><span class="sub-title">Completed all skilled
                          tasks</span></ion-label>
                      <ion-label class="a-status">DONE</ion-label>
                      <ion-label class="count">10/10</ion-label>
                    </ion-col>
                  </ion-row>
                  <ion-row class="a-section ion-no-padding">
                    <ion-col size="3">
                      <ion-img src="https://cdn-icons-png.flaticon.com/512/610/610333.png"></ion-img>
                    </ion-col>
                    <ion-col size="9">
                      <ion-label><span class="title">Overtime</span><span class="sub-title">Completed all lessons less
                          than 5hrs</span></ion-label>
                      <ion-label class="a-status">DONE</ion-label>
                      <ion-label class="count">5/5</ion-label>
                    </ion-col>
                  </ion-row>
                </ion-grid>
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
    padding-top: 16px;

    .a-section {
      border-bottom: 1px solid #dbdbdb;
      margin-bottom: 16px;
      padding-bottom: 16px;
    }

    .a-section:last-child {
      border-bottom: 0px;
      padding-bottom: 0px;
    }

    ion-img {
      padding: 0px 8px 0px 0;
      margin-right: 8px;
      // background: #f5f5f5;
      width: 100%;
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
      margin-top: 10px;
      display: inline-block;
      width: 80%;
      border-top-right-radius: 4px !important;
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }

    .count {
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
  }
}
</style>
