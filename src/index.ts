import {App} from "vue";
import {CanvueOptions} from "./types";
import InstallComponents from "./components";
import event from './event'

/**
 * Canvue
 */
class Canvue {
    event // 事件总线

    constructor(options) {
        this.event = event
    }
}

export default {
    /**
     * install plugin
     *
     * @param {App} Vue
     * @param {CanvueOptions} options
     */
    install(Vue: App, options: CanvueOptions): void {
        const canvue = new Canvue(options)
        InstallComponents(Vue, options?.prefix ?? 'V')
        // 全局注入
        // 可以通过this.$$canvue获取到canvue类的实例
        Vue.config.globalProperties.$canvue = canvue
        // 组件注入
        // 使用方式 const useCanvue = inject('canvue')
        Vue.provide('canvue', canvue)
    }
}
