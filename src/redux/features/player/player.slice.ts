import { TrackDataTable } from '@/components/TrackDataTable/TrackDataTable';
import { TrackData } from '@/types/track.types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
    queueIndex: number;
    queue: TrackDataTable[]
}

const initialState: PlayerState = {
    queueIndex: 0,
    queue: []
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerState: (state, action: PayloadAction<Partial<PlayerState>>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { setPlayerState } = playerSlice.actions

export default playerSlice.reducer