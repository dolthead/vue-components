<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonItem, IonLabel, IonToggle, IonCardContent, IonBadge, IonButton, IonIcon } from '@ionic/vue';
import { duplicate } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
     <ion-row>
        <ion-col size="12">
           <ion-card class="card">
              <ion-card-header class="ion-no-padding">
                 <ion-item lines="none" class="">
                    <ion-label class="ion-margin-bottom ion-margin-top"><span class="user-name">Review Meeting</span><span class="sub-title">4:30 - 5:30 PM</span></ion-label>
                    <div class="ion-text-end">
                       <ion-toggle class="ion-text-end ion-justify-content-end" checked mode="md" color="dark" aria-label="rsvp"></ion-toggle>
                    </div>
                 </ion-item>
              </ion-card-header>
              <ion-card-content>
                 <ion-row class="ion-padding-bottom ion-margin-top">
                    <ion-col size="12">
                       <ion-badge class="warning">Team</ion-badge>
                       <ion-badge class="danger ion-margin-start">Meeting</ion-badge>
                    </ion-col>
                 </ion-row>
                 <ul class="avatars">
                    <li class="avatars__item">
                       <img src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <span class="avatars__others">+3</span>
                    </li>
                 </ul>
                 <ion-button class="ion-no-margin circle-button" fill="solid" color="dark">
                    <ion-icon slot="icon-only" :icon="duplicate"></ion-icon>
                 </ion-button>
              </ion-card-content>
           </ion-card>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.pexels.com/photos/7130554/pexels-photo-7130554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: center;
  background-size: auto;
  border-radius: 16px !important;
  height: 200px;
  width: 100%;
  min-width: 270px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0px !important;

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(
      rgb(0 0 0 / 0%) 100%,
      rgb(255 255 255 / 0%) 100%
    );
    ion-label {
      display: inline-table;
    }
    .user-name {
      color: #4c4c4c;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 1.2px;
    }
    span.sub-title {
      display: block;
      font-size: 0.8rem;
      color: #9d9d9d;
      font-weight: 500;
      letter-spacing: 0.8px;
      margin-top: 5px;
    }
  }
}

ion-card-content {

  ion-badge {
    --padding-end: 20px;
    --padding-start: 20px;
    padding: 6px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.8px;
  }

  ion-badge.warning {
    --background: #fff9e4 !important;
    --color: #ffbd00 !important;
  }
  ion-badge.danger {
    --background: #ffeee9 !important;
    --color: #ff977c !important;
  }

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
    float: right;
    margin-left: 8px;
    font-size: xx-small;
  }

  ul.avatars {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    float: left;
    padding-left: 10px;
    z-index: 1;
  }
  li.avatars__item {
    height: 45px;
    margin: 0px 0px 0px -12px;
    padding: 0px 0px 0px 0px;
    position: relative;
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
