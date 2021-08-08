import React, { useContext, createContext, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles';

import { Grid, Paper } from '@material-ui/core';
import { SocketContext } from './SocketContext';
const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',

    },
    gridContainer: {
        justifyContent: 'center',

    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));
export const VideoPlayer = () => {
    const { name,callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    const classess = useStyles();
    return (
        <Grid container className={classess.gridContainer}>
            {
                stream && (
                    <Paper className={classess.paper}>
                        <Grid item xs={12} md={6}>
                            <h3>{name||'Name'}</h3>
                            <video playsInline muted ref={myVideo} autoPlay className={classess.video} />
                        </Grid>
                    </Paper>
                )
            }
            {
                callAccepted && !callEnded && (
                    <Paper className={classess.paper}>
                        <Grid item xs={12} md={6}>
                            <h3>{call.name||'Name'}</h3>
                            <video playsInline ref={userVideo} autoPlay className={classess.video} />
                        </Grid>
                    </Paper>
                )
            }

        </Grid>


    )
}



