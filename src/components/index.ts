import Stage from './stage'
import Layer from './layer'

// Components
const components = [
    {name: 'Stage', component: Stage},
    {name: 'Layer', component: Layer},
]
// 全局加载插件
export default function InstallComponents(app, prefix = 'V') {
    components.forEach((com) => {
        app.component(`${prefix}${com.name}`, com.component);
    });
}
