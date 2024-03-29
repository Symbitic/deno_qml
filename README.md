# Deno QML

Bindings to enable native Qt GUIs with Deno.

**CURRENTLY PRE-ALPHA! Expect things to change!**

## Example

**NOTE: FFI in Deno requires the `--unstable` flag as of version 1.15**

```typescript
import { Application } from "./mod.ts";

const app = new Application();

const qml = `
import QtQuick 2.15
import QtQuick.Controls 2.15

ApplicationWindow {
    title: "My Application"
    width: 640
    height: 480
    visible: true

    Timer {
        interval: 100
        running: true
        repeat: false
        onTriggered: {
            button.text = "Poke Me"
        }
    }

    Button {
        id: button
        text: "Push Me"
        anchors.centerIn: parent
    }
}
`;

app.loadData(qml);

const ret = app.exec();
console.log(`Finished: ${ret}`);
```

Run it with:

    deno run -A --unstable example.ts

## Getting Started

```
git clone https://github.com/Symbitic/deno_qml
cd deno_qml
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release .
cmake --build build -j4
```

After that, run the example with:

    deno run -A --unstable example.ts

## License

[MIT License](LICENSE.md)
