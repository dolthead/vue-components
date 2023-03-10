<script lang="ts" setup>
import { IonItem, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonIcon } from '@ionic/vue';
import { informationCircle, timeOutline } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header class="ion-no-padding">
            <ion-item lines="none" class="">
              <ion-label class="ion-no-margin"><span class="sub-title">Monday</span></ion-label>
              <ion-label class="ion-no-margin ion-text-end">
                <span class="sub-title">
                  <ion-icon :icon="informationCircle"></ion-icon>
                </span>
              </ion-label>
            </ion-item>
          </ion-card-header>
          <ion-card-content class="">
            <ion-row class="ion-align-items-center">
              <ion-col size="3">
                <ion-label class="ion-no-margin"><span class="title">21</span></ion-label>
              </ion-col>
              <ion-col size="9">
                <ion-label class="ion-no-margin"><span class="desc">Design approval from the team
                    members.</span></ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="card-footer">
              <ion-label class="time">
                <ion-icon :icon="timeOutline"></ion-icon>
                <span>&nbsp;8:00 AM - 9:00 AM</span>
              </ion-label>
              <ul class="avatars">
                <li class="avatars__item">
                  <img
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    class="avatars__img">
                </li>
                <li class="avatars__item">
                  <span class="avatars__others">+4</span>
                </li>
              </ul>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: url("https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=282&q=80");
  background-position: right;
  background-size: cover;
  border-radius: 16px !important;
  width: 100%;
  min-width: 285px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0px !important;

  ion-card-header {
    ion-item {
      padding: 0px 0;
      --background: linear-gradient(rgb(0 0 0 / 6%) 50%,
          rgb(255 255 255 / 0%) 100%);

      .user-name {
        color: #ededed;
        font-size: 1.02rem;
        font-weight: 500;
        letter-spacing: 1.2px;
      }

      span.sub-title {
        display: block;
        font-size: 1rem;
        color: #e3e3e3;
        font-weight: 500;
        letter-spacing: 0.8px;
        margin-top: 5px;
      }
    }
  }

  ion-card-content {
    .title {
      display: block;
      font-size: 3.5rem;
      color: #e5e5e5;
      font-weight: 500;
      letter-spacing: 0.8px;
    }

    .desc {
      font-size: 1rem;
      color: #e5e5e5;
      font-weight: 500;
      letter-spacing: 1.2px;
    }
  }
}

.card-footer {
  padding: 0 0 4px 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0) 5%,
      rgb(0 0 0 / 5%) 55%) !important;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .time {
    color: #ededed !important;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }

  ion-button[shape="circle"] {
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
  }

  img.avatars__img,
  span.avatars__initials,
  span.avatars__others {
    background-color: #e1e1e1;
    border: 3px solid #e5e5e5;
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
}</style>
