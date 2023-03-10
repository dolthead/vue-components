<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonLabel, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header class="">
            <ion-avatar>
              <img src="https://cdn-icons-png.flaticon.com/512/4899/4899142.png" />
            </ion-avatar>
            <ion-label>
              <span class="title">Is cabbage good for diabetes patients?</span>
            </ion-label>
          </ion-card-header>
          <ion-card-content>
            <p>
              Broccoli, spinach, and cabbage are three diabetes-friendly veggies because they are low in starch. Filling
              up with vegetables is a great way to keep your blood sugar levels in check.
            </p>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: #8eb931;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  .title {
    color: #ededed;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    display: block;
    white-space: break-spaces;
    margin-top: 10px;
  }

  span.sub-title {
    display: block;
    font-size: 0.8rem;
    color: #d3d3d3;
    font-weight: 500;
    letter-spacing: 0.8px;
    margin-top: 8px;
  }

  ion-card-content {
    p {
      color: #e5e5e5;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 1.2px;
    }
  }
}
</style>
