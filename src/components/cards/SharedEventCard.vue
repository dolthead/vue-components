<script lang="ts" setup>
import { IonCard, IonCardContent, IonAvatar, IonImg, IonRow, IonCol, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonButton, IonIcon } from '@ionic/vue';
import { heartOutline, shareOutline, chatbubbleOutline, thumbsUpOutline } from 'ionicons/icons';
import { ref } from 'vue';

const accord = ref('first');
</script>

<template>
  <ion-card class="blog">
     <ion-card-content class="ion-no-padding">
        <ion-accordion-group v-model="accord">
           <ion-accordion value="first">
              <ion-item lines="none" slot="header">
                 <ion-avatar slot="start">
                    <img src="https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbGUlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                 </ion-avatar>
                 <ion-label>
                    <span class="title">Nyoman</span>&nbsp;<span class="activity" color="medium">shared</span>&nbsp;<span class="title">event</span>
                    <span class="sub-title">25 May 2022 at 9:57 PM</span>
                 </ion-label>
              </ion-item>
              <div slot="content">
                 <div class="event-details">
                    <ion-img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"></ion-img>
                    <div class="calendar">
                       <div class="day">25</div>
                       <div class="month">May</div>
                    </div>
                 </div>
                 <div class="ion-padding">
                    <ion-row class="ion-align-items-center ion-padding-bottom">
                       <ion-col size="12">
                          <ion-label class="event-title">What is the need of open source system?</ion-label>
                       </ion-col>
                       <ion-col size="10">
                          <ul class="avatars">
                             <li class="avatars__item">
                                <img src="https://images.unsplash.com/photo-1630883665215-dc90914c334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                             </li>
                             <li class="avatars__item">
                                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                             </li>
                             <li class="avatars__item">
                                <img src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
                             </li>
                             <li class="avatars__item">
                                <span class="avatars__initials">DC</span>
                             </li>
                             <li class="avatars__item">
                                <span class="avatars__others">+9</span>
                             </li>
                          </ul>
                       </ion-col>
                       <ion-col size="2" class="ion-align-self-end ion-text-end">
                          <ion-button fill="clear" size="small" class="ion-no-padding">
                             <ion-icon slot="icon-only" :icon="heartOutline" color="danger"></ion-icon>
                          </ion-button>
                       </ion-col>
                    </ion-row>
                    <ion-row class="event-actions ion-align-items-center">
                       <ion-col size="4" class="ion-align-self-center">
                          <ion-button class="ion-no-margin circle-button" fill="clear" color="primary" size="small" mode="ios">
                             <ion-icon :icon="thumbsUpOutline" size="small"></ion-icon>
                          </ion-button>
                          <span class="ion-text-start count">177</span>
                       </ion-col>
                       <ion-col size="4" class="ion-align-self-center">
                          <ion-button class="ion-no-margin circle-button" fill="clear" color="primary" size="small" mode="ios">
                             <ion-icon :icon="chatbubbleOutline" size="small"></ion-icon>
                          </ion-button>
                          <span class="ion-text-start count">42</span>
                       </ion-col>
                       <ion-col size="4" class="ion-align-self-end ion-text-end">
                          <ion-button class="ion-no-margin ion-float-right circle-button" fill="solid" color="primary" size="small" mode="ios">
                             <ion-icon :icon="shareOutline" size="small"></ion-icon>
                          </ion-button>
                       </ion-col>
                    </ion-row>
                 </div>
              </div>
           </ion-accordion>
        </ion-accordion-group>
     </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-accordion-group {
    ion-accordion {
      .ion-accordion-toggle-icon {
        color: #bdbdbd !important;
        --color: #bdbdbd !important;
      }
    }
  }

ion-card.blog {
  border-radius: 16px;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0 auto;
  max-width: 300px;

  ion-card-header,
  ion-card-content {
    background-color: #f4f5f8 !important;
  }

  ion-accordion {
    background: #f4f5f8 !important;
    --background: #f4f5f8 !important;

    ion-item {
      background: #f4f5f8 !important;
      --background: #f4f5f8 !important;
      padding: 10px 0;
      :hover {
        background: transparent !important;
      }
      ion-avatar {
        height: 40px;
        width: 40px;
        max-width: 40px;
        max-height: 40px;
        object-fit: none !important;
        overflow: hidden !important;
      }
      .title {
        color: #3e3e3e;
        font-weight: 600;
        font-size: 0.9rem;
      }
      span.sub-title {
        display: block;
        font-size: 0.7rem;
        color: #9d9d9d;
        font-weight: 500;
      }
      .activity {
        color: #c9c9c9;
        font-weight: 600;
        font-size: 0.9rem;
      }
    }
    .event-details {
      position: relative;

      ion-img::part(image) {
        border-radius: 0px;
      }
      ion-img {
        width: 100% !important;
        max-width: 100% !important;
        height: 180px;
        max-height: 180px;
        object-fit: cover;
        margin-bottom: 30px;
      }
      .calendar {
        padding: 6px 12px;
        background: #fff !important;
        border-radius: 8px;
        width: auto;
        left: 16px;
        position: absolute;
        bottom: -30px;
        text-align: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        .day {
          font-weight: 600;
          color: #3e3e3e;
          font-size: 1.2rem;
        }
        .month {
          font-weight: 600;
          color: #df5151;
          font-size: 1rem;
        }
      }
    }
    .event-title {
      color: #3e3e3e;
      font-weight: 600;
      font-size: 1.2rem;
    }

    .event-actions {
      border-top: 1px solid #e1e1e1;

      ion-col {
        padding-top: 16px;
      }
      ion-button.circle-button {
        --border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-left: 0px;
        font-size: xx-small;
      }
      .count {
        padding: 8px 0 0 0px;
        position: absolute;
      }
    }

    p {
      color: #2e2e2e;
      font-size: 1rem;
      letter-spacing: 1px;
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
      height: 40px;
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
      font-size: 14px;
      letter-spacing: 1.2px;
      height: 40px;
      line-height: 35px;
      text-align: center;
      width: 40px;
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
}
</style>
