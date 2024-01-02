'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
            <Next13ProgressBar height="4px" color="#1ED760" options={{ showSpinner: true }} showOnShallow />
        </>
    );
};

export default Providers;