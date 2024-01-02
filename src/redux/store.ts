import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './features/player/player.slice'

export const store = configureStore({
    reducer: {
        player: playerSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch