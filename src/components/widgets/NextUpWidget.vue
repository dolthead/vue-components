<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonLabel, IonButton } from '@ionic/vue';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row class="widget">
      <ion-col size="12" class="ion-padding-horizontal">
        <ion-label class=""><span class="sub-title">Next Up</span><span class="title">Design review, Chat with the
            team</span></ion-label>
        <ion-button fill="clear" shape="round" color="primary" size="small" mode="ios"
          class="ion-no-padding ion-no-margin ion-margin-bottom ion-text-lowercase">
          Let's call in 10 mins
        </ion-button>
      </ion-col>
      <ion-col size="12" class="ion-padding-start">
        <ul class="avatars ion-padding-top">
          <li class="avatars__item">
            <img src="https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="avatars__img">
          </li>
          <li class="avatars__item">
            <img src="https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="avatars__img">
          </li>
          <li class="avatars__item">
            <span class="avatars__initials">BL</span>
          </li>
          <li class="avatars__item">
            <span class="avatars__others">+7</span>
          </li>
        </ul>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: #fff;
  background-position: bottom;
  background-size: cover;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-label {
    margin: 0 !important;

    .title {
      font-size: 1rem;
      color: #424242;
      font-weight: 600;
      letter-spacing: 0.8px;
      display: block;
    }

    .sub-title {
      font-size: 0.8rem;
      color: #898989;
      display: block;
      font-weight: 600;
      letter-spacing: 0.8px;
      margin: 20px 0 10px;
      text-transform: uppercase;
    }
  }

  ion-button {
    font-weight: 600;
    letter-spacing: 0.8px;
  }

  ul.avatars {
    display: flex;
    list-style-type: none;
    margin: 5px 8px 16px;
    padding: 0;
    float: left;
    z-index: 1;
  }

  li.avatars__item {
    height: 35px;
    margin: 0px 0px 0px -12px;
    padding: 0px 0px 0px 0px;
    position: relative;
    // width: 42px;
  }

  img.avatars__img,
  span.avatars__initials,
  span.avatars__others {
    background-color: #e1e1e1;
    border: 3px solid #ffffff;
    border-radius: 50%;
    color: #a1a1a1;
    font-size: 12px;
    letter-spacing: 1.2px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    width: 35px;
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
</style>
