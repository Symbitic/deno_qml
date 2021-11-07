// We don't need no stinking deno_bindgen.
import { Plug } from "../deps.ts";
import { VERSION } from "../version.ts";

const REMOTE_URL =
  `https://github.com/Symbitic/deno_qml/releases/download/v${VERSION}`;
const LOCAL_URL = "build";

const { protocol } = new URL(import.meta.url);

const opts = {
  name: "deno_qml",
  url: protocol === "file:" ? LOCAL_URL : REMOTE_URL,
  policy: protocol === "file:" ? Plug.CachePolicy.NONE : Plug.CachePolicy.STORE,
};

const dylib = await Plug.prepare(opts, {
  "init": {
    parameters: ["buffer", "usize"],
    result: "void",
    nonblocking: false,
  },
  "loadData": {
    parameters: ["buffer", "usize"],
    result: "void",
    nonblocking: false,
  },
  "exec": {
    parameters: [],
    result: "i32",
    nonblocking: false,
  },
});

function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v;
  return new TextEncoder().encode(v);
}

/**
 * Parameters for creating QApplication.
 */
export interface ApplicationParams {
  title: string;
}

/**
 * Initialize QApplication.
 */
export function init(params?: ApplicationParams) {
  const p1 = encode(JSON.stringify(params || {}));
  dylib.symbols.init(p1, p1.byteLength);
}

/**
 * Load QML from string data.
 * @param data A QML file string.
 */
export function loadData(data: string) {
  const p1 = encode(data);
  dylib.symbols.loadData(p1, p1.byteLength);
}

/**
 * Begins the Qt main event loop.
 *
 * @note This blocks the main thread.
 */
export function exec(): number {
  return dylib.symbols.exec() as number;
}
