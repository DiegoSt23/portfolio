import TextReveal from '@/components/magicui/text-reveal';

type AboutProps = {
  text: string;
};

export const About = ({ text }: AboutProps) => (
  <div className='z-10 flex min-h-[16rem] items-center justify-center bg-white dark:bg-neutral-950'>
    <TextReveal text={text} />
  </div>
);
