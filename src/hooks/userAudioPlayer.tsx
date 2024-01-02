'use client'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TrackData } from '@/types/track.types';
import { PlayerState, setPlayerState } from '@/redux/features/player/player.slice';

interface UseAudioPlayer {
    playerState: PlayerState;
    setPlayerState: (payload: Partial<PlayerState>) => void;
    addToQueue: (track: TrackData) => void;
    removeFromQueue: (trackId: number) => void;
    nextTrack: () => void;
    previousTrack: () => void;
}

const useAudioPlayer = (): UseAudioPlayer => {
    const dispatch = useDispatch();
    const playerState = useSelector((state: RootState) => state.player);

    const addToQueue = (track: TrackData): void => {
        const updatedQueue = [...playerState.queue, track];
        dispatch(setPlayerState({ queue: updatedQueue }));
    };

    const removeFromQueue = (trackId: number): void => {
        const updatedQueue = playerState.queue.filter((track:TrackData) => track.id !== trackId);
        dispatch(setPlayerState({ queue: updatedQueue }));
    };

    const nextTrack = (): void => {
        if (playerState.queueIndex < playerState.queue.length - 1) {
            dispatch(setPlayerState({ queueIndex: playerState.queueIndex + 1 }));
        }
    };

    const previousTrack = (): void => {
        if (playerState.queueIndex > 0) {
            dispatch(setPlayerState({ queueIndex: playerState.queueIndex - 1 }));
        }
    };

    return {
        playerState,
        setPlayerState: (payload: Partial<PlayerState>) => dispatch(setPlayerState(payload)),
        addToQueue,
        removeFromQueue,
        nextTrack,
        previousTrack,
    };
};

export default useAudioPlayer;
