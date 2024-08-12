import { useTranslation } from 'react-i18next';
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

  return (
    <>
      <Hero />
      <About text={t('about.line1')} />
      <Separator className='mb-6' />
      <Technologies />
      <Separator className='mt-6' />
      <About text={t('about.line2')} />
      <HardSkills />
      <Separator className='mx-auto max-w-6xl' />
      <PersonalProjects />
      <Separator className='mx-auto max-w-6xl' />
      <GitHub />
      <Separator className='mx-auto max-w-6xl' />
      <Contact />
    </>
  );
};

export default App;
