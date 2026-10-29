import React, { useId } from 'react';

export function FilmGrain({
  children,
  intensity = 0.25,
  coarseness = 0.65,
  blendMode = 'overlay',
  opacity = 0.85,
  className = '',
}) {
  const filterId = useId();

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className={className}>
      <svg
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={coarseness}
              numOctaves={3}
              stitchTiles="stitch"
              result="raw-noise"
            />
            <feColorMatrix
              type="matrix"
              values={`0 0 0 0 0
                       0 0 0 0 0
                       0 0 0 0 0
                       0 0 0 ${intensity} 0`}
              in="raw-noise"
              result="mono-grain"
            />
          </filter>
        </defs>
      </svg>

      {/* 2. The Noise Overlay Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: `url(#${filterId})`,
          mixBlendMode: blendMode,
          opacity: opacity,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* 3. The Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 20 }}>
        {children}
      </div>
    </div>
  );
};

