<script lang="ts" setup>
import { IonButton, IonIcon, toastController } from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';

const copySource = async (path: string) => {
    const fullPath = `https://raw.githubusercontent.com/dolthead/vue-components/main/src/components/${path}.vue`;
    navigator.clipboard
        .write([new ClipboardItem({
                "text/plain": new Promise(async (resolve, reject) => {
                    try {
                        const response = await fetch(fullPath);
                        const source: BlobPart = `// ${path}.vue\n// ${fullPath}\n// from https://ionic-vue-components.web.app/\n\n` 
                            + await response.text();
                        resolve(new Blob([source], { type: "text/plain" }));
                    } catch (err) {
                        reject(err);
                    }
                }),
            })
        ])
        .then(showCopiedToast, error => showErrorToast(error))
        .catch(error => showErrorToast(error));
}

async function showCopiedToast() {
    const toast = await toastController.create({
        message: `Copied component code to the clipboard`,
        duration: 2500,
        position: 'bottom'
    });
    toast.present();
}

async function showErrorToast(error: string) {
    const toast = await toastController.create({
        message: `Error: ${error}`,
        duration: 5000,
        position: 'bottom',
        color: 'danger'
    });
    toast.present();
}
</script>

<template>
    <ion-button fill="clear" size="small" class="ion-float-right" 
        @click.stop="copySource($attrs.path as string)"
        title="Copy the component's source to the clipboard" v-bind="$attrs">
        <ion-icon slot="icon-only" :icon="copyOutline"></ion-icon>
    </ion-button>
    <br clear="right">
</template>

<style lang="scss" scoped>
ion-button {
    margin-bottom: 8px;
}
</style>
