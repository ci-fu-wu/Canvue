import mitt from 'mitt'

export default class {
    event // 事件总线

    constructor(options) {
        this.event = mitt()
    }
}
