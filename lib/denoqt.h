#ifndef DENOQT_H
#define DENOQT_H

#include <QQmlApplicationEngine>

class Application : public QObject {
    Q_OBJECT
    
public:
    Application();

    void init();
    void loadData(const QByteArray &data);
    int exec();

private:
    QQmlApplicationEngine* m_engine;
};

#endif
