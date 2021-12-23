import { Emitter } from 'mitt';
declare type Events = {
    foo: string;
    bar?: number;
};
declare const emitter: Emitter<Events>;
export default emitter;
