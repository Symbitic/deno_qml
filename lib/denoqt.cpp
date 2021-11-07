#include "denoqt.h"
#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <memory>

Application::Application() {}

void Application::init() {
    m_engine = new QQmlApplicationEngine();
}

void Application::loadData(const QByteArray &data) {
    m_engine->loadData(data);
}

int Application::exec() {
    return qApp->exec();
}

thread_local std::unique_ptr<Application> app(new Application());

extern "C" void init(const uint8_t* buffer, size_t len) {
    if (!QGuiApplication::instance()) {
        char *arg = (char *)malloc(13);
        strcpy(arg, "denoqt");
        char **argp = (char **)malloc(sizeof(char *));
        *argp = arg;

        int *argc = (int*)malloc(sizeof(int));
        *argc = 1;

        new QGuiApplication(*argc, argp);
    }
    app->init();
}

extern "C" void loadData(const uint8_t* buffer, size_t len) {
    app->loadData(QByteArray::fromRawData((const char*)buffer, len));
}

extern "C" int exec() {
    return app->exec();
}
