import {LifecycleEnum} from './enum'

export declare class Canvue {

}

export interface CanvueOptions {
    prefix: string
}

export type Lifecycle = {
    [x in LifecycleEnum]?: () => void;
};
