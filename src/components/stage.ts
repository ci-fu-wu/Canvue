import {h} from 'vue'

export default {
    setup() {
        return () => {
            h(
                'div',
                this.$slots.default
            )
        }
    }
}
