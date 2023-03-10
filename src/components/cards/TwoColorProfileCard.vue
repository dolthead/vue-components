<script lang="ts" setup>
import { IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, IonCardHeader, IonItem, IonButton, IonText } from '@ionic/vue';
import { arrowBackOutline, ellipsisHorizontal, chatbubbleOutline } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-header class="ion-no-padding">
            <ion-item lines="none" class="">
              <ion-button fill="clear" color="dark" size="large" class="ion-no-padding" mode="ios">
                <ion-icon :icon="arrowBackOutline"></ion-icon>
              </ion-button>
              <ion-button slot="end" fill="clear" color="dark" size="large" class="ion-no-padding"
                mode="ios">
                <ion-icon :icon="ellipsisHorizontal"></ion-icon>
              </ion-button>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
            <ion-row>
              <ion-col size="12">
                <div class="profile ion-text-center">
                  <div class="img">
                    <ion-avatar size="large">
                      <img alt="person's pic"
                        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </ion-avatar>
                  </div>
                  <div class="name">
                    <ion-text class="ion-margin-top  ion-text-nowrap">
                      <span class="title">
                        Ivan, The Creator
                      </span>
                    </ion-text>
                    <ion-text class="ion-margin-bottom  ion-text-nowrap">
                      <span class="sub-title">
                        1M, followers
                      </span>
                    </ion-text>
                  </div>
                  <div class="action">
                    <ion-button fill="solid" color="primary" shape="round" mode="ios" size="small">
                      Follow
                    </ion-button>
                    <ion-button class="ion-no-padding" fill="outline" color="medium" shape="round"
                      mode="ios" size="small">
                      <ion-icon :icon="chatbubbleOutline"></ion-icon>
                    </ion-button>
                  </div>
                </div>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0px !important;

  ion-card-header {
    --background: linear-gradient(rgb(0 0 0 / 0%) 100%,
        rgb(255 255 255 / 0%) 100%),
      url(https://images.pexels.com/photos/2380451/pexels-photo-2380451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: top;
    background-size: cover;
    height: 130px;
  }

  ion-item {
    padding: 0px 0;
    --background: linear-gradient(rgb(0 0 0 / 0%) 82%,
        rgb(255 255 255 / 0%) 100%);
  }

  ion-card-content {
    padding: 16px 16px 16px;
    background: #fff;

    .profile {
      display: grid;
      justify-content: center;
      top: -60px;
      position: relative;
      margin: 0 50%;
      height: 160px;

      .img,
      .name {
        display: grid;
        justify-content: center;
      }

      .action {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      ion-avatar[size="large"] {
        height: 90px;
        width: 90px;
      }

      ion-avatar {
        box-shadow: rgb(50 69 76 / 52%) 0px 0px 50px 8px;
      }

      .sub-title {
        color: #b9b9b9;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.8px;
        display: block;
        white-space: break-spaces;
      }

      .title {
        display: block;
        font-size: 1.2rem;
        color: #262626;
        font-weight: 600;
        letter-spacing: 0.8px;
        margin-top: 8px;
      }

      ion-button {
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 0.8rem;

        ion-icon {
          margin: 0 14px;
        }
      }
    }
  }
}
</style>
