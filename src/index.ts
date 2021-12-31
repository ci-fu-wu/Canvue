import {App} from "vue";
import {CanvueOptions} from "./types";
import {InstallComponents} from "./components";
import event from './event'
import {Stage} from "konva/lib/Stage";

/**
 * Canvue
 */
class Canvue {
    public index: number // stage 当前实例索引
    public event // 事件总线

    private _stages: Stage[] // 实例组

    stageNum(): number {
        return this._stages.length;
    }

    stageAdd(stage: Stage): number {
        this._stages.push(stage)
        return this._stages.length;
    }

    constructor(options: CanvueOptions) {
        this.event = event
        this.index = 0
        this._stages = []
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

export {Canvue}
