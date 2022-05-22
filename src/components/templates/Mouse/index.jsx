import React, { useEffect } from 'react'
import { Container } from './styles'

// import { mouse } from "@nut-tree/nut-js";

// import * as robot from "robotjs";


// const electron = require("electron");

// import electron from "electron";

// import robot from 'robotjs'

export const Mouse = () => {

    useEffect(() => {

        // const webContents = electron.remote.getCurrentWebContents();
        // webContents.sendInputEvent({ type: 'mouseMove', x, y });
        console.log('Mouse component mounted')
    }, [])

    const handleMouseMove = (e) => {
        console.log('p', e.pageX, e.clientY)
    }

    return (
        <Container onMouseMove={handleMouseMove}>
            <h1>Move your mouse around!</h1>
            <p>The current position is:</p>
        </Container>
    )
}

