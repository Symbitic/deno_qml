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
     * Load QML from a string.
     * @param data QML string.
     */
    loadData(data: string) {
        bindings.loadData(data);
    }
    
    /**
     * Load QML from a file.
     * @param filename QML filename.
     */
    async load(filename: string) {
        const data = await Deno.readTextFile(filename);
        this.loadData(data);
    }

    /**
     * Begins the Qt event loop.
     * @returns Return code.
     */
    exec() {
        return bindings.exec();
    }
}
