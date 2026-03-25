"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.12, duration: 1.0, smoothWheel: true,}}>
            {children}
        </ReactLenis>
    );
}