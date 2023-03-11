<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonLabel } from '@ionic/vue';
import { arrowUp, arrowDown } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="widget">
    <ion-row>
      <ion-col size="6">
        <div class="card">
          <ion-grid class="ion-no-padding">
            <ion-row class="a-section ion-no-padding ion-text-center ion-justify-content-center">
              <ion-col size="12" class="ion-padding-vertical">
                <ion-label><span class="sub-title">Sem 1</span><span class="title">70%</span></ion-label>
                <ion-label>
                  <span class="count positive">
                    +15%
                    <ion-icon :icon="arrowUp"></ion-icon>
                  </span>
                </ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-col>
      <ion-col size="6">
        <div class="card">
          <ion-grid class="ion-no-padding">
            <ion-row class="a-section ion-no-padding ion-text-center ion-justify-content-center">
              <ion-col size="12" class="ion-padding-vertical">
                <ion-label><span class="sub-title">Sem 2</span><span class="title">65%</span></ion-label>
                <ion-label>
                  <span class="count negative">
                    -6%
                    <ion-icon :icon="arrowDown"></ion-icon>
                  </span>
                </ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-col>
      <ion-col size="12">
        <div class="card">
          <ion-grid class="ion-no-padding">
            <ion-row class="a-section ion-no-padding ion-text-center ion-justify-content-center">
              <ion-col size="12" class="ion-padding-vertical">
                <ion-label><span class="sub-title">Sem 3</span><span class="title">82%</span></ion-label>
                <ion-label>
                  <span class="count positive">
                    +25%
                    <ion-icon :icon="arrowUp"></ion-icon>
                  </span>
                </ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background: #000;
  border-radius: 16px;
  min-width: 260px;
  max-width: 400px;
  margin: 0 auto;

  .card {
    background: #212121;
    border-radius: 16px !important;
    height: auto;
    width: 100%;
    margin: 0px !important;
    padding: 0px !important;

    ion-label {
      margin: 0 !important;

      .title {
        font-size: 2.5rem;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 1.5px;
        display: block;
      }

      .sub-title {
        font-size: 1rem;
        color: hsl(0, 0%, 56%);
        display: block;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 5px 0 16px;
      }
    }

    .count {
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 1rem;

      &.positive {
        color: #50ff76;
      }

      &.negative {
        color: #ff526a;
      }
    }
  }
}
</style>
