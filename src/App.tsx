import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactLenis, LenisRef } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { cancelFrame, frame } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import {
  Hero,
  About,
  Technologies,
  HardSkills,
  PersonalProjects,
  GitHub,
  Contact,
} from './views';

const App = () => {
  const { t } = useTranslation();
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Hero />
      <About text={t('about.line1')} />
      <Separator className='mb-6' />
      <Technologies />
      <Separator className='mt-6' />
      <About text={t('about.line2')} />
      <HardSkills />
      <PersonalProjects />
      <Separator className='mx-auto max-w-6xl' />
      <GitHub />
      <Separator className='mx-auto max-w-6xl' />
      <Contact />
    </ReactLenis>
  );
};

export default App;
