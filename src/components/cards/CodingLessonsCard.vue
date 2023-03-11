<script lang="ts" setup>
import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItem, IonCardContent, IonButton, IonIcon, IonLabel } from '@ionic/vue';
import { play } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                 <ion-item lines="none" class="">
                    <ion-label class="ion-margin-bottom"><span class="user-name">Coding</span><span class="sub-title">12 Lessons</span></ion-label>
                    <ion-label class="ion-text-end"><span class="sub-title">60 Mins</span></ion-label>
                 </ion-item>
              </ion-card-header>
              <ion-card-content>
                 <ion-button class="ion-no-margin circle-button" fill="solid" color="dark">
                    <ion-icon size="large" :icon="play"></ion-icon>
                 </ion-button>
                 <ul class="avatars">
                    <li class="avatars__item">
                       <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <img src="https://images.pexels.com/photos/4921128/pexels-photo-4921128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <span class="avatars__initials">KD</span>
                    </li>
                    <li class="avatars__item">
                       <span class="avatars__others">+3</span>
                    </li>
                 </ul>
              </ion-card-content>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80");
  background-position: center;
  background-size: cover;
  border-radius: 16px !important;
  height: 300px;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(
      rgb(0 0 0 / 65%) 100%,
      rgb(255 255 255 / 0%) 100%
    );
    .user-name {
      color: #ededed;
      font-size: 1.02rem;
      font-weight: 500;
      letter-spacing: 1.2px;
    }
    span.sub-title {
      display: block;
      font-size: 0.8rem;
      color: #d3d3d3;
      font-weight: 500;
      letter-spacing: 0.8px;
      margin-top: 5px;
    }
  }
}

ion-card-content {
  padding: 32px 16px 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 5%,
    rgb(0 0 0 / 24%) 55%
  ) !important;

  ion-text {
    h1.desc {
      color: #ededed !important;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }

  ion-button.circle-button {
    --border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  ul.avatars {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    float: right;
    z-index: 1;
  }
  li.avatars__item {
    height: 45px;
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
    font-size: 16px;
    letter-spacing: 1.5px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    width: 45px;
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
