import * as bindings from "./bindings.ts";
import type { ApplicationParams } from "./bindings.ts";

/**
 * Wrapper around Qt and Qml.
 */
export class Application {
    constructor(params?: ApplicationParams) {
        bindings.init(params);
    }

    /**
     * Load a QML string to use as a window.
     * @param data QML string.
     */
    loadData(data: string) {
        bindings.loadData(data);
    }

    /**
     * Begins the Qt event loop.
     * @returns Return code.
     */
    exec() {
        return bindings.exec();
    }
}
