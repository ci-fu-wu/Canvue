import {ref, h} from 'vue'

export default {
    setup(props, {attrs, slots, expose}) {
        const container = ref(null);
        return () => h('div', {ref: container}, slots.default?.());
    }
}
