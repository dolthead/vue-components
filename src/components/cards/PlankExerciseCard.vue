<script lang="ts" setup>
import { IonIcon, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonLabel } from '@ionic/vue';
import { play } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header>
            <ion-row class="ion-no-padding ion-align-items-center">
              <ion-col size="9">
                <ion-label><span class="sub-title">Plank Exercise</span><span class="title">1 x 5
                    minutes</span></ion-label>
              </ion-col>
              <ion-col size="3" class="ion-text-end">
                <ion-button fill="solid" class="circle-button" color="dark" size="small">
                  <ion-icon :icon="play"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 300px;
  width: 100%;
  min-width: 245px;
  max-width: 350px;
  margin: 0 auto;
  padding: 0px !important;

  .sub-title {
    color: #ededed;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    display: block;
    white-space: break-spaces;
  }

  span.title {
    display: block;
    font-size: 0.9rem;
    color: #d3d3d3;
    font-weight: 500;
    letter-spacing: 0.8px;
    margin-top: 5px;
  }

  ion-button.circle-button {
    --border-radius: 50%;
    width: 45px;
    height: 45px;
  }
}
</style>
