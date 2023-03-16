import { toastController } from "@ionic/vue";

async function copySource(componentPath: string) {
    const fullPath = `https://raw.githubusercontent.com/dolthead/vue-components/main/src/components/${componentPath}.vue`;
    let source = await getSourceCode(fullPath);
    source = `// ${componentPath}.vue\n// ${fullPath}\n// from https://ionic-vue-components.web.app/\n\n${source}`;
    navigator.clipboard.writeText(source)
        .then(() => showCopiedToast(), error => console.error(error));
}

async function getSourceCode(fullPath: string) {
    const response = await fetch(fullPath);
    const source = await response.text();
    return source;
}

async function showCopiedToast () {
    const toast = await toastController.create({
        message: 'Copied to the clipboard',
        duration: 2500,
        position: 'bottom'
    });
    await toast.present();
}

export default copySource;
