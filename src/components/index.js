// Components
const components = [
    {name: 'Stage', component: import("./stage")},
    {name: 'Layer', component: import("./layer")},
]
// 全局加载插件
export default function InstallComponents(app, prefix = 'v') {
    components.forEach((com) => {
        app.component(`${prefix}${com.name}`, com.component);
    });
}
