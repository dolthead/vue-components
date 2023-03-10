<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonText, IonGrid, IonRow, IonCol, IonCardHeader, IonItem, IonLabel } from '@ionic/vue';
import { star } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                 <ion-item lines="none">
                    <ul class="avatars">
                       <li class="avatars__item">
                          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" class="avatars__img">
                       </li>
                       <li class="avatars__item">
                          <img src="https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=600" class="avatars__img">
                       </li>
                       <li class="avatars__item">
                          <span class="avatars__initials">RV</span>
                       </li>
                       <li class="avatars__item">
                          <span class="avatars__others">+16</span>
                       </li>
                    </ul>
                 </ion-item>
              </ion-card-header>
              <ion-card-content>
                 <ion-text>
                    <h1 class="location">Marina Bay Sands, <br/> Singapore</h1>
                 </ion-text>
                 <ion-item lines="none" class="ion-no-margin ion-no-padding">
                    <ion-label class="price">${{ new Intl.NumberFormat().format(2300) }}</ion-label>
                    <a class="custom-btn">
                       <ion-icon slot="start" :icon="star"></ion-icon>
                       4.9
                    </a>
                 </ion-item>
              </ion-card-content>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.pexels.com/photos/7419607/pexels-photo-7419607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 350px;
  width: 100%;
  min-width: 185px;
  margin: 0px !important;
  padding: 0px !important;

  ion-card-header {
    ion-item {
      padding: 0px 0;
      --background: linear-gradient(
        rgb(0 0 0 / 15%) 70%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    ul.avatars {
      display: flex;
      justify-content: start;
      list-style-type: none;
      margin: 0;
      padding: 0;
      float: left;
      z-index: 1;
      padding: 10px 13px 10px 26px;
      background: #ffffff30;
      margin: 16px 0;
      border-radius: 50px;
    }
    li.avatars__item {
      height: 40px;
      margin: 0px 0px 0px -12px;
      padding: 0px 0px 0px 0px;
      position: relative;
    }
    img.avatars__img,
    span.avatars__initials,
    span.avatars__others {
      background-color: #e1e1e1;
      border: 2px solid #ffffff;
      border-radius: 50%;
      color: #a1a1a1;
      font-size: 14px;
      letter-spacing: 1.2px;
      height: 40px;
      line-height: 35px;
      text-align: center;
      width: 40px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: cover;
      object-position: center;
    }
    span.avatars__others {
      background-color: #303030;
      color: #ebebeb;
    }
  }
  ion-card-content {
    padding: 32px 16px 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0) 5%,
      rgb(0 0 0 / 59%) 25%
    ) !important;

    ion-text {
      .location {
        color: #ededed !important;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 2px;
        line-height: 32px;
        margin-bottom: 8px;
      }
    }

    ion-item {
      --inner-padding-end: 0px;
      --background: transparent;
      .price {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
      }
    }
    a.custom-btn {
      background: rgba(255, 255, 255, 0.1882352941);
      color: #fff;
      border-radius: 50px;
      padding: 10px 16px 10px 10px;
      display: flex;
      justify-content: center;
      align-items: end;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 1px;
      font-size: 1rem;
      cursor: pointer;
      ion-icon {
        margin: 1.5px 8px;
      }
    }
  }
}
</style>
