<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header class="ion-no-padding">
            <ion-item lines="none" class="">
              <ion-label><span class="title">Case Study</span><span class="sub-title">Find out if UX design is right for
                  you.</span></ion-label>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
            <ion-button fill="solid" shape="round" color="primary">
              Read More
            </ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1587612049655-c1030366a74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 300px;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(rgb(0 0 0 / 65%) 65%,
        rgb(255 255 255 / 0%) 100%);

    .sub-title {
      color: #ededed;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 1.2px;
      display: block;
      white-space: break-spaces;
      margin-top: 10px;
    }

    span.title {
      display: block;
      font-size: 0.8rem;
      color: #d3d3d3;
      font-weight: 500;
      letter-spacing: 0.8px;
      margin-top: 8px;
    }
  }

  ion-card-content {
    padding: 16px 16px 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0) 5%,
        rgb(0 0 0 / 9%) 25%) !important;
  }
}
</style>
