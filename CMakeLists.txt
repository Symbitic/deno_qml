cmake_minimum_required(VERSION 3.14)

set(CMAKE_POSITION_INDEPENDENT_CODE OFF)

project(deno_qml)

set(CMAKE_INCLUDE_CURRENT_DIR ON)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt5 CONFIG REQUIRED COMPONENTS Core Gui Qml Quick)

if (WIN32)
    set(CMAKE_SHARED_LIBRARY_PREFIX "")
endif()

add_library(deno_qml SHARED
    lib/denoqt.h
    lib/denoqt.cpp
)

target_link_libraries(deno_qml PUBLIC
    Qt::Core
    Qt::Gui
    Qt::Qml
    Qt::Quick
)
