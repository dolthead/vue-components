<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonFabButton, IonIcon, IonTitle } from '@ionic/vue';
import { arrowForwardOutline, flashSharp } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-padding">
    <ion-row>
      <ion-col size="12">
        <ion-card mode="ios">
          <ion-card-header>
            <ion-card-title>Electric Car Model 4.7</ion-card-title>
          </ion-card-header>
          <ion-card-content class="bg-img">
            <img src="https://i.ibb.co/TwqbpxX/Car-Top-View.png" alt="Model 4.7">
            <ion-grid class="ion-no-padding ion-no-margin">
              <ion-row>
                <ion-col size="8">
                  <ion-card class="charger">
                    <ion-card-content>
                      <ion-title>ChargeEV
                        <span>$ 4.60/KWt</span>
                      </ion-title>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="8">
                  <ion-card class="station">
                    <ion-card-content>
                      <ion-title>
                        Station
                        <span>
                          See Locations
                          <ion-icon :icon="arrowForwardOutline"></ion-icon>
                        </span>
                      </ion-title>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="8">
                  <ion-card class="Status">
                    <ion-card-content>
                      <ion-title>Start
                        <span>Charging</span>
                      </ion-title>
                      <ion-fab-button color="warning" horizontal="end">
                        <ion-icon :icon="flashSharp"></ion-icon>
                      </ion-fab-button>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
ion-card {
  background: #fff;
  color: #2c2c2c;
  margin: 0;

  ion-card-header {
    padding: 24px 16px;

    ion-card-title {
      font-size: 1.2rem;
      letter-spacing: 1.2px;
      font-weight: 600;
      color: #2c2c2c;
    }
  }

  ion-card-content {
    &.bg-img {
      display: flex;
      align-items: flex-start;

      img {
        height: auto;
        right: -98px;
        width: 66%;
        position: absolute;
      }
    }

    ion-card {
      margin: 0 16px 16px 0 !important;
      padding: 12px 0px 32px;

      &.charger {
        background: #333333;
        height: 150px;
        background-image: url("https://i.ibb.co/JsgZjX8/51g-Me-E9u0f-L-AC-SX425-removebg-preview.png");
        background-position: right 90px;
        background-size: 45%;
        background-repeat: no-repeat;

        ion-title {
          color: #fff;
          padding: 16px;
          text-align: left;
          font-size: 1.2rem;
          letter-spacing: 1.2px;
          font-weight: 500;
          padding: 32px 16px;

          span {
            display: block;
            font-size: 0.9rem;
            letter-spacing: 0.9px;
            padding: 3px 0;
          }
        }
      }

      &.station {
        background: #8ed3f7;
        height: 230px;
        background-image: url("https://i.ibb.co/3Cg3j14/stations.png");
        background-position: 15px 69px;
        background-size: 120%;
        background-repeat: no-repeat;

        ion-title {
          color: #101010;
          padding: 16px;
          text-align: left;
          font-size: 1.2rem;
          letter-spacing: 1.2px;
          font-weight: 500;
          padding: 32px 16px;

          span {
            display: block;
            font-size: 0.9rem;
            letter-spacing: 0.9px;
            padding: 3px 0;
            color: rgb(16 16 16 / 55%) !important;
            display: flex;
            align-items: center;

            ion-icon {
              margin-left: 4px;
            }
          }
        }
      }

      &.Status {
        background-color: #333333;

        ion-title {
          color: #fff;
          padding: 16px;
          text-align: left;
          font-size: 1.2rem;
          letter-spacing: 1.2px;
          font-weight: 500;
          padding: 32px 16px;

          span {
            display: block;
            font-size: 0.9rem;
            letter-spacing: 0.9px;
            padding: 3px 0;
            color: #7a7a7a;
          }
        }

        ion-fab-button {
          margin: -12px 55%;
          height: 45px;
          width: 45px;
          position: absolute;
          border: 4px solid rgb(255 213 52 / 20%);
          border-radius: 50px !important;

          ion-img,
          ion-icon {
            width: 45%;
          }
        }
      }
    }
  }
}
</style>
