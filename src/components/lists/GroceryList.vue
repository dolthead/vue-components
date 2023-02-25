<script lang="ts" setup>
import { IonContent, IonPage, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid class="ion-no-padding">
        <ion-row>
          <ion-col size="12">
            <ion-card class="card">
              <ion-card-header>
                <ion-label><span class="title">Grocery <br /> Checklist</span></ion-label>
              </ion-card-header>
              <ion-card-content class="ion-no-padding">
                <ion-item lines="none" class="">
                  <ion-avatar slot="start">
                    <img src="https://cdn-icons-png.flaticon.com/512/3528/3528201.png" />
                  </ion-avatar>
                  <ion-label><span class="title">Milk</span></ion-label>
                </ion-item>
                <ion-item lines="none" class="">
                  <ion-avatar slot="start">
                    <img src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png" />
                  </ion-avatar>
                  <ion-label><span class="title">Vegetables</span><span class="sub-title">Cabbage, Spinach,
                      Broccoli</span></ion-label>
                </ion-item>
                <ion-item lines="none" class="">
                  <ion-avatar slot="start">
                    <img src="https://cdn-icons-png.flaticon.com/512/4065/4065171.png" />
                  </ion-avatar>
                  <ion-label><span class="title">Fruits</span><span class="sub-title">Apple, Orange,
                      Watermelon</span></ion-label>
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
  --background: #ffbf3d;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  .title {
    color: #2c2c2c;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 1.2px;
  }

  ion-card-content {
    ion-item {
      --background: transparent !important;
      padding-bottom: 16px;

      ion-avatar {
        padding: 8px;
        margin-right: 8px;
        background: #f5f5f5;
        width: 45px;
        height: 45px;
      }

      ion-label {
        margin: 0 !important;

        .title {
          font-size: 1.2rem;
          color: #2c2c2c;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .sub-title {
          font-size: 0.9rem;
          color: #2c2c2c;
          display: block;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}
</style>
