export interface CanvueOptions {

}

export enum LifecycleEnum {
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error'
}

export type Lifecycle = {
    [x in LifecycleEnum]?: () => void;
};
