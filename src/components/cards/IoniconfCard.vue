<script lang="ts" setup>
import { IonCard, IonCardContent, IonIcon, IonImg, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonCardHeader } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="card">
     <ion-card-header class="ion-no-padding">
        <ion-img src="https://ionic.io/blog/wp-content/uploads/2022/05/ioniconf-blog-hero.png"></ion-img>
     </ion-card-header>
     <ion-card-content class="ion-padding">
        <ion-grid class="ion-no-padding">
           <ion-row class="ion-align-items-center">
              <ion-col size="2" class="ion-text-start ion-padding-end">
                 <ion-label><span class="day">May</span><span class="date">25</span></ion-label>
              </ion-col>
              <ion-col size="10" class="ion-padding-start border-left">
                 <ion-label>
                    <span class="title">Ioniconf 2022 | SuperApps</span>
                    <span class="sub-title">virtual conference</span>
                    <span class="event-time">Wed 10:00PM GMT +02:00</span>
                 </ion-label>
              </ion-col>
           </ion-row>
           <ion-row class="ion-padding-top">
              <ion-col size="12" class="action-row">
                 <ul class="avatars">
                    <li class="avatars__item">
                       <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                    </li>
                    <li class="avatars__item">
                       <span class="avatars__others">+9k</span>
                    </li>
                 </ul>
                 <ion-button shape="round" mode="ios">
                    <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
                    Register
                 </ion-button>
                 <a class="action-btn ion-hide">
                    Register
                    <ion-icon :icon="arrowForwardOutline"></ion-icon>
                 </a>
              </ion-col>
           </ion-row>
        </ion-grid>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.card {
  border-radius: 16px;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0 auto;
  min-width: 315px;
  max-width: 350px;

  ion-card-header,
  ion-card-content {
    background-color: #f4f5f8 !important;
  }

  ion-img::part(image) {
    border-radius: 0px;
  }
  ion-img {
    width: 100% !important;
    max-width: 100% !important;
    height: 180px;
    max-height: 180px;
    object-fit: cover;
    padding-bottom: 16px;
  }
  ion-card-content {
    ion-label {
      .day {
        font-size: 0.9rem;
        font-weight: 600;
        color: #b7b7b7;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        white-space: nowrap;
      }
      .date {
        display: block;
        font-size: 1.5rem;
        font-weight: 500;
        color: #191919;
      }
      .title {
        font-size: 1.03rem;
        font-weight: 600;
        color: #191919;
        line-height: 0;
      }
      .sub-title {
        display: block;
        font-size: 0.8rem;
        font-weight: 500;
        color: #646464;
        text-transform: capitalize;
        letter-spacing: 0.8px;
      }
      .event-time {
        display: block;
        font-size: 0.8rem;
        font-weight: 500;
        color: #b7b7b7;
        text-transform: capitalize;
        letter-spacing: 0.8px;
        margin: 10px 0 0;
      }
    }
    .border-left {
      border-left: 1px solid lightgrey;
    }

    .action-row {
      display: flex;
      align-items: center;
      justify-content: space-between;

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
        border: 2px solid #ffffff;
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
      ion-button {
        font-weight: 500;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
