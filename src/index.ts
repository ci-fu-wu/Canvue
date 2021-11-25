import {App} from "vue";
import {CanvueOptions} from "./types";
import canvue from "./canvue";

export default {
    /**
     * install plugin
     *
     * @param {App} Vue
     * @param {CanvueOptions} options
     */
    install(Vue: App, options: CanvueOptions): void {

        Vue.config.globalProperties.$canvue = canvue
        // // 留着备用，为了兼容$Lazyload
        // // 选项api，可以通过this.$Lazyload获取到Lazy类的实例，组合api我还不知道怎么获取
        // // 所以通过 provide 来实现此需求
        // // 使用方式 const useLazylaod = inject('Lazyload')
        Vue.provide('canvue', canvue)
        // Vue.directive('lazy', {
        //     mounted: lazy.mount.bind(lazy),
        //     updated: lazy.update.bind(lazy),
        //     unmounted: lazy.unmount.bind(lazy)
        // })
    }
}
