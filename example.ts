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
