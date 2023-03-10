<script lang="ts" setup>
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonCard, IonCardHeader, IonImg, IonCardContent, IonAvatar } from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';
</script>

<template>
  <ion-card class="blog">
    <ion-card-header class="ion-no-padding">
      <ion-img
        src="https://images.pexels.com/photos/3761267/pexels-photo-3761267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ion-img>
    </ion-card-header>
    <ion-card-content class="ion-no-padding">
      <ion-accordion-group class="">
        <ion-accordion value="first">
          <ion-item lines="none" slot="header" class="">
            <ion-avatar slot="start">
              <img
                src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </ion-avatar>
            <ion-label><span class="title">The Future of UI/UX</span><span class="sub-title">Ronnie - 2 min
                read</span></ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <p class="ion-padding-bottom">The future of UX lies in the ability of UX professionals to work at the
              intersection of technology while also mastering the craft of important human-centered design techniques.</p>
            <p>The UX field has changed as new and emerging technologies dominate product development. However, the true
              value a UX professional brings to the design process doesn’t come from tech knowledge, but from
              human-centered skills, and in order for UX to continue to evolve, development of these “soft” skills is
              crucial.</p>
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-card.blog {
  border-radius: 16px;
  background: #f4f5f8;
  letter-spacing: 0.8px;
  margin: 0;

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
  }

  ion-accordion {
    background: #f4f5f8 !important;
    --background: #f4f5f8 !important;

    ion-item {
      background: #f4f5f8 !important;
      --background: #f4f5f8 !important;
      padding: 8px 0;

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
        font-size: 1rem;
      }

      span.sub-title {
        display: block;
        font-size: 0.8rem;
        color: #9d9d9d;
        font-weight: 600;
      }
    }

    p {
      color: #2e2e2e;
      font-size: 1rem;
      letter-spacing: 1px;
    }
  }
}
</style>
