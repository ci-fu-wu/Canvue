import {LifecycleEnum} from './enum'

export interface CanvueOptions {
    prefix: string
}

export type Lifecycle = {
    [x in LifecycleEnum]?: () => void;
};
