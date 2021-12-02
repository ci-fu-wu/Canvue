// Components
const components = [
    {name: 'Stage', component: import("./stage")},
    {name: 'Layer', component: import("./layer")},
]
// 默认前缀
const defaultPrefix = 'v'
// 全局加载插件
export default function GlobalComponents(app, options) {
    let prefix = defaultPrefix;
    if (options && options.prefix) {
        prefix = options.prefix;
    }
    components.forEach((com) => {
        app.component(`${prefix}${com.name}`, com.component);
    });
}
