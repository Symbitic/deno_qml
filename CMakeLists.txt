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

if (WIN32)
    message("IS_WINDOWS=1")
    message("CMAKE_BUILD_TYPE=${CMAKE_BUILD_TYPE}")
    message("CMAKE_DEFAULT_BUILD_TYPE=${CMAKE_DEFAULT_BUILD_TYPE}")
    message("CMAKE_SHARED_LIBRARY_PREFIX=${CMAKE_SHARED_LIBRARY_PREFIX}")
    message("CMAKE_SHARED_MODULE_PREFIX=${CMAKE_SHARED_MODULE_PREFIX}")
    message("CMAKE_STATIC_LIBRARY_PREFIX=${CMAKE_STATIC_LIBRARY_PREFIX}")
    #set_target_properties(deno_qml PROPERTIES OUTPUT_NAME deno_qml)
endif()
#/usr/share/cmake/Modules/Platform/Windows-GNU.cmake:set(CMAKE_SHARED_LIBRARY_PREFIX "lib")

target_link_libraries(deno_qml PUBLIC
    Qt::Core
    Qt::Gui
    Qt::Qml
    Qt::Quick
)
