<script lang="ts" setup>
import { IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonAvatar, IonIcon } from '@ionic/vue';
import { cafe, bagHandle, musicalNotes } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card class="card">
          <ion-card-content class="ion-padding-vertical ion-no-padding">
            <ion-label class="ion-padding-horizontal">
              <span class="title">Expenses</span>
            </ion-label>
            <ion-item class="" lines="none">
              <ion-avatar slot="start" size="large">
                <ion-icon :icon="cafe"></ion-icon>
              </ion-avatar>
              <ion-label><span class="user-name">Starbucks</span><span class="date-time">6:50 pm</span></ion-label>
              <div>
                <span class="price">$25</span>
              </div>
            </ion-item>
            <ion-item class="" lines="none">
              <ion-avatar slot="start" size="large">
                <ion-icon :icon="bagHandle"></ion-icon>
              </ion-avatar>
              <ion-label><span class="user-name">Shopping</span><span class="date-time">Jun 12, 11:45
                  am</span></ion-label>
              <div>
                <span class="price">$125.50</span>
              </div>
            </ion-item>
            <ion-item class="" lines="none">
              <ion-avatar slot="start" size="large">
                <ion-icon :icon="musicalNotes"></ion-icon>
              </ion-avatar>
              <ion-label><span class="user-name">Apple Music</span><span class="date-time">May 20, 1:07
                  pm</span></ion-label>
              <div>
                <span class="price">$99</span>
              </div>
            </ion-item>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.card {
  --background: #f9f9f9;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;

  ion-card-content {
    ion-label {
      overflow: unset;

      span.title {
        color: #8a91af;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }

    ion-item {
      padding: 0px 0;
      --background: linear-gradient(rgb(0 0 0 / 0%) 100%,
          rgb(255 255 255 / 0%) 100%);
      --border-color: #dbdbdb;

      &:last-child {
        --border-color: #ededed;
      }

      &:hover {
        background: #f0f4fd;
        cursor: pointer;

        ion-avatar {
          --border-radius: 8px;
          border: 2px solid #8a91af5c;
        }
      }

      ion-avatar[size="large"] {
        width: 50px;
        height: 50px;
        --border-radius: 8px;
        background: #f0f4fd;
        color: #8a91af;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
      }

      ion-label {
        display: grid;
      }

      .user-name {
        color: #2c2c2c;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      span.price {
        display: flex;
        justify-content: end;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: #2c2c2c;
      }

      .date-time {
        color: #a3a3a3;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 5px 0 0;
      }
    }
  }
}
</style>
