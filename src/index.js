import Canvue from "./canvue";
import GlobalComponents from './components'

export default {
    /**
     * Install
     * @param app Vue Instance
     * @param options CanvueOptions
     */
    install: (app, options) => {
        const canvue = new Canvue(options)
        GlobalComponents(app, options)

        if (app?.config?.globalProperties) {
            app.config.globalProperties.$canvue = canvue
        } else { // 兼容vue2
            app.prototype.$canvue = canvue
        }
    }
}
