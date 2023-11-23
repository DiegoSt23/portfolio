import { ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Typography } from 'diego-react-delta-ui';
import styles from './view-layout.module.scss';

interface ViewLayoutProps {
  children: ReactNode;
  id: string;
  title?: string;
  headerElement?: ReactNode;
  parallaxEffectTitle?: boolean;
}

const defaultProps: Partial<ViewLayoutProps> = {
  title: '',
  headerElement: undefined,
  parallaxEffectTitle: true,
};

export const ViewLayout = ({
  children,
  id,
  title,
  headerElement,
  parallaxEffectTitle,
}: ViewLayoutProps) => (
  <section id={id} className={styles.mainContainerViewLayout}>
    {title && (
      <Parallax speed={parallaxEffectTitle  ? -10 : 0} className={styles.header}>
        {title && <Typography type='heading4'>{title}</Typography>}
        {headerElement || null}
      </Parallax>
    )}
    {children}
  </section>
);

ViewLayout.defaultProps = defaultProps;
