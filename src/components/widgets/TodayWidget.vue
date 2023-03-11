<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonItem, IonAvatar } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <div class="widget">
          <div class="ion-padding">
            <ion-item lines="none" class="ion-padding-vertical">
              <ion-avatar slot="start">
                <img src="https://cdn-icons-png.flaticon.com/512/3789/3789212.png" />
              </ion-avatar>
              <ion-label><span class="title">Take Medicine</span><span class="sub-title">In next 15
                  mins</span></ion-label>
            </ion-item>
            <ion-item lines="none" class="ion-padding-vertical">
              <ion-avatar slot="start">
                <img src="https://cdn-icons-png.flaticon.com/512/2698/2698213.png" />
              </ion-avatar>
              <ion-label><span class="title">18°c <br />Sunny</span><span class="sub-title"> California</span></ion-label>
            </ion-item>
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: #212121;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-item {
    --background: #2e2e2e !important;
    padding-bottom: 16px;
    --border-radius: 16px;

    &:last-child {
      padding-bottom: 16px;
    }

    ion-avatar {
      padding: 8px;
      margin-right: 8px;
      background: transparent;
      width: 50px;
      height: 50px;
      --border-radius: 0px !important
    }

    ion-label {
      margin: 0 !important;

      .title {
        font-size: 1rem;
        color: #d1d1d1;
        font-weight: 600;
        letter-spacing: 1px;
      }

      .sub-title {
        font-size: 0.9rem;
        color: #9d9d9d;
        display: block;
        font-weight: 500;
        letter-spacing: 0.9px;
        margin: 5px 0;
      }
    }
  }
}
</style>
