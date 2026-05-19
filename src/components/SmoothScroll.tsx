'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let scroll: InstanceType<typeof import('locomotive-scroll').default> | null = null;

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.075,
          duration: 1.4,
          smoothWheel: true,
          wheelMultiplier: 0.85,
          touchMultiplier: 1.2,
          infinite: false,
        },
      });
    });

    return () => {
      scroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
