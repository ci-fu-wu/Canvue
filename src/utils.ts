import {ComponentInternalInstance, getCurrentInstance} from 'vue'

export default function useCurrentInstance() {
    console.log(getCurrentInstance())
    const {appContext} = getCurrentInstance() as ComponentInternalInstance
    const globalProperties = appContext.config.globalProperties
    const canvue = globalProperties.canvue
    return {
        appContext,
        globalProperties,
        canvue
    }
}
