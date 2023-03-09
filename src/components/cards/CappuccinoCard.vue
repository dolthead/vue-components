<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonText, IonButton, IonButtons } from '@ionic/vue';
import { add, starSharp } from 'ionicons/icons';
</script>

<template>
  <div class="bg">
    <div class="card">
      <div class="display">
        <img src="https://i.ibb.co/MBvgMwX/Cappuccino.png" alt="Planet Image" />
      </div>
      <div class="desc">
        <ion-text class="coffee">
          Cappuccino
          <span class="rating">
            <ion-icon slot="start" :icon="starSharp"></ion-icon>
            4.9
          </span>
          <span>Volume<span class="qty">180 ml</span></span>
        </ion-text>
        <ion-grid class="ion-no-padding action-grid">
          <ion-row class="ion-align-items-center">
            <ion-col size="6" class="ion-text-start">
              <ion-text class="price">
                $29
              </ion-text>
            </ion-col>
            <ion-col size="6">
              <ion-buttons class="ion-float-right">
                <ion-button class="cart">
                  <ion-icon :icon="add"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #222;
  padding: 105px 0 10px 0;
  border-radius: 6px;
}
.card {
  border-radius: 16px;
  background-image: linear-gradient(320deg, #391d0f 0%, #653602 100%);
  letter-spacing: 0.8px;
  margin: 0 auto;
  height: 290px;
  width: 100%;
  max-width: 256px;
  position: relative;

  @media (max-width: 767px) {
    height: 300px;
  }

  .display {
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
      margin: 0;
      width: 75%;
      box-shadow: rgb(0 0 0 / 42%) 0px 20px 50px -16px;
      border-radius: 50%;
    }
  }

  .desc {
    position: absolute;
    bottom: 0px;
    padding: 0px 16px 5px;
    width: 100%;

    .coffee {
      font-size: 1.4rem;
      letter-spacing: 1.4px;
      font-weight: bolder;
      color: #fff;
      margin-bottom: 16px;

      span.rating {
        background: rgba(255, 255, 255, 0.1882352941);
        color: #fff;
        border-radius: 50px;
        padding: 6px 12px 6px 4px;
        display: flex;
        justify-content: center;
        align-items: end;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 1px;
        font-size: 0.9rem;
        cursor: pointer;
        width: min-content;
        margin: 10px 0 0;

        ion-icon {
          margin: 1.5px 8px;
        }
      }

      span {
        font-size: 0.75rem;
        letter-spacing: 0.75px;
        font-weight: 300;
        margin-bottom: 16px;

        .qty {
          font-weight: 500;
          margin-left: 6px;
        }
      }
    }

    .action-grid {
      margin: 16px 0;

      .price {
        font-weight: 600 !important;
        font-size: 1rem;
        color: #fff;
        text-align: start !important;
        display: block;
      }

      ion-buttons {
        ion-button {
          &.cart {
            --border-radius: 50% !important;
            --background: #fff !important;
            color: #222428;
            width: 50px !important;
            height: 50px !important;
            --padding-start: 0;
            --padding-end: 0;
            --padding-top: 0;
            --padding-bottom: 0;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
          }

          ion-icon {
            font-size: 30px !important;
            color: #603303;
          }
        }
      }
    }
  }
}
</style>
