<script lang="ts" setup>
import { IonButton, IonIcon } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import copySource from '@/services/sourceCodeService';
</script>

<template>
    <ion-button fill="clear" size="small" class="ion-float-right" @click.stop="copySource($attrs.path as string)"
            title="Copy the component's source to the clipboard">
        <ion-icon slot="icon-only" :icon="copyOutline"></ion-icon>
    </ion-button>
</template>

<style lang="scss" scoped>
    ion-button {
        margin: auto auto;
    }
</style>
