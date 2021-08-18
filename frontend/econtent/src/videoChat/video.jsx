import React from 'react'
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { VideoPlayer } from './videoPlayer';
import { ContextProvider } from './SocketContext';

import Sidebar from './Sidebar';
import { Notifications } from './Noftication';

const UseStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));
export const video = () => {
    const classes = UseStyles();
    return (
        <ContextProvider>
            <div className={classes.wrapper}>
             
                <VideoPlayer />

                <Sidebar>
                    <Notifications />
                </Sidebar>

            </div>
        </ContextProvider>
    )

}
