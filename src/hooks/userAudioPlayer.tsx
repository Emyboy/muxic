'use client'
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { TrackData } from '@/types/track.types';
import { PlayerState, setPlayerState } from '@/redux/features/player/player.slice';
import { TrackDataTable } from '@/components/TrackDataTable/TrackDataTable';

interface UseAudioPlayer {
    playerState: PlayerState;
    setPlayerState: (payload: Partial<PlayerState>) => void;
    addToQueue: (track: TrackData) => void;
    removeFromQueue: (trackId: number) => void;
    nextTrack: () => void;
    previousTrack: () => void;
    play: () => void;
}

const useAudioPlayer = (): UseAudioPlayer => {
    const dispatch = useDispatch();
    const playerState = useSelector((state: AppStore) => state.player);

    const addToQueue = (track: TrackData): void => {
        const isTrackInQueue = playerState.queue.some((queuedTrack: TrackDataTable) => queuedTrack.id === track.id);

        if (!isTrackInQueue) {
            const updatedQueue = [...playerState.queue, track];
            dispatch(setPlayerState({ queue: updatedQueue }));
        }
    };

    const removeFromQueue = (trackId: number): void => {
        const updatedQueue = playerState.queue.filter((track: TrackDataTable) => track.id !== trackId);
        dispatch(setPlayerState({ queue: updatedQueue }));
    };

    const nextTrack = (): void => {
        if (playerState.queueIndex < playerState.queue.length) {
            dispatch(setPlayerState({ queueIndex: playerState.queueIndex + 1 }));
        }
    };

    const previousTrack = (): void => {
        if (playerState.queueIndex > 0) {
            dispatch(setPlayerState({ queueIndex: playerState.queueIndex - 1 }));
        }
    };

    const play = () => {
        dispatch(setPlayerState({
            isPlaying: !playerState.isPlaying
        }))
    }

    return {
        playerState,
        setPlayerState: (payload: Partial<PlayerState>) => dispatch(setPlayerState(payload)),
        addToQueue,
        removeFromQueue,
        nextTrack,
        previousTrack,
        play
    };
};

export default useAudioPlayer;
