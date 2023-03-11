<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonImg, IonLabel } from '@ionic/vue';
</script>

<template>
  <ion-grid class="widget">
    <ion-row>
      <ion-col size="6">
        <div class="content">
          <ion-label>
            <span class="title ion-hide">Title</span>
            <span class="sub-title">Save part of your recent deposits</span>
            <ion-img src="https://cdn-icons-png.flaticon.com/512/4315/4315012.png"></ion-img>
          </ion-label>
        </div>
      </ion-col>
      <ion-col size="6">
        <div class="content">
          <ion-label>
            <span class="title ion-hide">Title</span>
            <span class="sub-title">Health Insurance</span>
            <ion-img src="https://cdn-icons-png.flaticon.com/128/5935/5935895.png"></ion-img>
          </ion-label>
        </div>
      </ion-col>
      <ion-col size="6">
        <div class="content">
          <ion-label>
            <span class="title ion-hide">Title</span>
            <span class="sub-title">Property Insurance</span>
            <ion-img src="https://cdn-icons-png.flaticon.com/512/4985/4985859.png"></ion-img>
          </ion-label>
        </div>
      </ion-col>
      <ion-col size="6">
        <div class="content">
          <ion-label>
            <span class="title ion-hide">Title</span>
            <span class="sub-title">Travel Insurance</span>
            <ion-img src="https://cdn-icons-png.flaticon.com/512/3169/3169063.png"></ion-img>
          </ion-label>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 8px !important;
  background: #141414;

  ion-col:nth-child(1) .content {
    background: linear-gradient(0deg, #033697, #518eff 80%) no-repeat;
  }

  ion-col:nth-child(2) .content {
    background: linear-gradient(0deg, #970303, #ff5151 80%) no-repeat;
  }

  ion-col:nth-child(3) .content {
    background: linear-gradient(0deg, #97033a, #ff5191 80%) no-repeat;
  }

  ion-col:nth-child(4) .content {
    background: linear-gradient(0deg, #650397, #ac51ff 80%) no-repeat;
  }

  .content {
    padding: 16px;
    border-radius: 16px !important;
    height: 170px;

    ion-label {
      margin: 0 !important;

      .sub-title {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 1px;
        display: block;
        line-height: 22px;
        height: 65px;
      }

      .title {
        font-size: 1.2rem;
        color: #f1f1f1;
        display: block;
        font-weight: 600;
        letter-spacing: 0.8px;
        margin: 0px 0 10px;
        text-transform: capitalize;
      }
    }

    ion-img {
      width: 55px;
      float: right;
      margin: 16px 0;
      position: relative;
      bottom: 0;
    }
  }
}
</style>
