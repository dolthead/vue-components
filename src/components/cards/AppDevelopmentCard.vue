<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonButton, IonCardHeader, IonItem, IonLabel } from '@ionic/vue';
import { playCircle, time } from 'ionicons/icons';
</script>

<template>
  <ion-card class="blog">
    <ion-card-header class="ion-no-padding">
      <ion-item lines="none" class="">
        <img src="https://cdn-icons-png.flaticon.com/512/5993/5993284.png" />
        <ion-label><span class="user-name">App Development</span><span class="sub-title">Your 6 friends are
            exploring</span></ion-label>
      </ion-item>
    </ion-card-header>
    <ion-card-content class="ion-padding-horizontal ion-no-padding">
      <ion-button class="ion-no-margin ion-no-padding" fill="clear" color="primary" mode="ios">
        <ion-icon :icon="playCircle"></ion-icon>
        <small class="">Play</small>
      </ion-button>
      <ion-button class="ion-no-margin ion-no-padding" fill="clear" color="tertiary" mode="ios" :disabled="true">
        <ion-icon :icon="time"></ion-icon>
        <small class="">45 mins</small>
      </ion-button>
      <ul class="avatars ion-padding-top">
        <li class="avatars__item">
          <img
            src="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            class="avatars__img">
        </li>
        <li class="avatars__item">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            class="avatars__img">
        </li>
        <li class="avatars__item">
          <span class="avatars__initials">SJ</span>
        </li>
        <li class="avatars__item">
          <span class="avatars__others">+3</span>
        </li>
      </ul>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.blog {
  border-radius: 16px;
  background: #f7f7f7;
  letter-spacing: 0.8px;
  margin: 0;
  min-width: 285px;

  ion-card-header,
  ion-card-content {
    background-color: #f7f7f7 !important;
  }

  ion-card-header {
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      object-position: center;
      border-radius: 16px;
      margin-right: 12px;
    }

    ion-img::part(image) {
      border-radius: 8px;
    }
  }

  ion-item {
    background: #f7f7f7 !important;
    --background: #f7f7f7 !important;
    padding: 8px 0;

    :hover {
      background: transparent !important;
    }

    .user-name {
      color: #3e3e3e;
      font-size: 1rem;
      font-weight: 600;
    }

    span.sub-title {
      display: block;
      color: #9d9d9d;
      font-size: 0.8rem;
      font-weight: 600;
      margin: 8px 0 0px;
    }
  }

  ion-button[shape="circle"] {
    --border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  small {
    letter-spacing: 0.8px;
    color: #a1a1a1;
    font-weight: 600;
    margin: 2px 12px 0 2px;
  }

  ul.avatars {
    display: flex;
    list-style-type: none;
    margin: 5px 0 12px;
    padding: 0;
    float: right;
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
