<script lang="ts" setup>
import { IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, IonLabel, IonProgressBar } from '@ionic/vue';
import { time } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-content>
            <ion-grid class="ion-no-padding">
              <ion-row class="a-section ion-no-padding ion-text-center ion-justify-content-center">
                <ion-col size="12" class="ion-align-self-center ion-padding-vertical">
                  <ion-avatar size="large" class="">
                    <img src="https://pbs.twimg.com/media/EG43iNBVUAYaC0s?format=png&name=small" />
                  </ion-avatar>
                </ion-col>
                <ion-col size="12">
                  <ion-label><span class="title">Julen Macedo</span><span class="sub-title ion-margin-bottom">Software
                      Architech</span></ion-label>
                  <ion-label class="">
                    <ion-icon class="icon" :icon="time"></ion-icon>
                  </ion-label>
                  <ion-progress-bar :value="0.7"></ion-progress-bar>
                  <ion-label><span class="count">70%</span></ion-label>
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
  --background: #212121;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  min-width: 173px;
  max-width: 300px;
  margin: 0 auto;
  padding: 0px !important;

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

    ion-avatar[size="large"] {
      width: 100px;
      height: 100px;
      display: inline-flex;
    }

    ion-avatar {
      display: inline-flex;
      background: #2e2e2e !important;

      img {
        padding: 5px;
      }
    }

    ion-label {
      margin: 0 !important;

      .title {
        font-size: 1.2rem;
        color: #cbcbcb;
        font-weight: 600;
        letter-spacing: 1.5px;
      }

      .sub-title {
        font-size: 1rem;
        color: #6e6e6e;
        display: block;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 5px 0 16px;
      }
    }

    ion-progress-bar {
      margin: 2px 0;
      display: inline-block;
      width: 50%;
      border-top-right-radius: 4px !important;
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
      --background: #26302c !important;
      --progress-background: #eabc8a !important;
    }

    .count {
      color: #6e6e6e;
      font-weight: 500;
      letter-spacing: 0.8px;
      padding: 0px 0px 0px 12px;
    }

    .icon {
      color: #6e6e6e;
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 1rem;
      margin: 0px 12px -4px 0;
    }
  }
}
</style>
