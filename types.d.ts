export interface CanvueOptions {
}
export declare enum LifecycleEnum {
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error"
}
export declare type Lifecycle = {
    [x in LifecycleEnum]?: () => void;
};
