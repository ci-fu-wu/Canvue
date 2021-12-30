import {App} from "vue";
import {CanvueOptions} from "./types";
import {Stage, Layer} from "./components";
import event from './event'

/**
 * Canvue
 */
class Canvue {
    private _index // stage 实例索引
    event // 事件总线

    get stage(): number {
        return this._index;
    }

    newStage(): number {
        this._index++;
        return this._index;
    }

    constructor(options: CanvueOptions) {
        this.event = event
        this._index = 0
    }
}

export default {
    /**
     * install plugin
     *
     * @param {App} app
     * @param {CanvueOptions} options
     */
    install(app: App, options: CanvueOptions): void {
        const canvue = new Canvue(options)
        // 全局注入
        // 可以通过this.$canvue获取到canvue类的实例
        app.config.globalProperties.$canvue = canvue
        // 组件注入
        // 使用方式 const useCanvue = inject('canvue')
        app.provide('canvue', canvue)
        // 全局注册组件
        InstallComponents(app, options?.prefix ?? 'V')
    }
}

// export {Stage, Layer}

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
