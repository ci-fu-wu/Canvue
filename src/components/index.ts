import Stage from './stage.vue'
import Layer from './layer.vue'
import {App} from "vue";

// Components
const components = [
    {name: 'Stage', component: Stage},
    {name: 'Layer', component: Layer},
]

function InstallComponents(app: App, prefix: string = 'V') {
    components.forEach((com) => {
        app.component(`${prefix}${com.name}`, com.component);
    });
}

export {
    Stage, Layer, InstallComponents
}
