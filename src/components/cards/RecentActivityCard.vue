<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonCardSubtitle } from '@ionic/vue';
import { ellipsisVertical, cubeSharp, personSharp, chatbubbleSharp } from 'ionicons/icons';
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle class="ion-hide">Subtitle</ion-card-subtitle>
      <ion-card-title>
        Recent Activity
        <ion-icon :icon="ellipsisVertical"></ion-icon>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="timeline">
        <div class="item">
          <div class="icon">
            <ion-icon :icon="cubeSharp"></ion-icon>
          </div>
          <div class="info">
            <a class="">You sold an item</a>
            <small>Paul Burgess purchased your "H15-0079" product.</small>
            <p><small>7 minutes ago</small></p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <div class="item">
          <div class="icon">
            <ion-icon :icon="personSharp"></ion-icon>
          </div>
          <div class="info">
            <a class="">New User Sign up</a>
            <small>Nicolas added in your list.</small>
            <p><small>19 minutes ago</small></p>
          </div>
        </div>
      </div>
      <div class="timeline">
        <div class="item">
          <div class="icon">
            <ion-icon :icon="chatbubbleSharp"></ion-icon>
          </div>
          <div class="info">
            <a class="">Matt R.</a>
            <small>Send you a message <span class="bold">"Are you there?"</span></small>
            <p><small>25 minutes ago</small></p>
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card {
  margin: 0;
  background-color: #fff;
  border-radius: 16px;

  ion-card-header {
    ion-card-title {
      letter-spacing: 1.3px;
      font-size: 1.3rem;
      font-weight: 600;
      color: #262626;
      display: flex;
      align-items: center;
      justify-content: space-between;

      ion-icon {
        color: var(--ion-color-medium);
      }
    }
  }

  ion-card-content {
    .timeline {
      position: relative;
    }

    .item {
      .icon {
        float: left;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border: 2px solid transparent;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        background-color: var(--ion-color-primary);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &::before {
        background-color: #f1f3fa;
        bottom: 0;
        content: "";
        left: 10px;
        position: absolute;
        top: 22px;
        width: 2px;
        z-index: 0;
      }

      .info {
        margin: 0px 16px 0 30px;

        a {
          display: block;
          font-size: 1rem;
          letter-spacing: 1px;
          font-weight: 500;
          outline: none !important;
          text-decoration: none;
          margin-bottom: 0.375rem !important;
        }

        small {
          font-size: 0.85rem;
          letter-spacing: 0.85px;
          color: #464646;

          .bold {
            font-weight: 600;
          }
        }

        p {
          margin-bottom: 0 !important;
          padding: 0.25rem 0 0.75rem;

          small {
            color: #98a6ad;
          }
        }
      }
    }
  }
}

.timeline:last-of-type {
  .info {
    p {
      padding: 0.25rem 0 0rem !important;
    }
  }
}

//Icon background CSS
.timeline:nth-child(1) {
  .icon {
    color: #fff !important;
    background-color: #0061c5 !important;
  }

  a {
    color: #0061c5 !important;
  }
}

.timeline:nth-child(2) {
  .icon {
    color: #fff !important;
    background-color: #00c5bc !important;
  }

  a {
    color: #00c5bc !important;
  }
}

.timeline:nth-child(3) {
  .icon {
    color: #fff !important;
    background-color: #c200c5 !important;
  }

  a {
    color: #c200c5 !important;
  }
}
</style>
