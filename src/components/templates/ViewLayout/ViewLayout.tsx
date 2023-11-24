import { ReactNode } from 'react';
import { Typography } from 'diego-react-delta-ui';
import styles from './view-layout.module.scss';

interface ViewLayoutProps {
  children: ReactNode;
  id: string;
  title?: string;
  headerElement?: ReactNode;
  titleZindex?: number;
}

const defaultProps: Partial<ViewLayoutProps> = {
  title: '',
  headerElement: undefined,
  titleZindex: undefined,
};

export const ViewLayout = ({
  children,
  id,
  title,
  headerElement,
  titleZindex,
}: ViewLayoutProps) => (
  <section id={id} className={styles.mainContainerViewLayout}>
    {title && (
      <div className={styles.header} style={{ zIndex: titleZindex }}>
        {title && <Typography type='heading4'>{title}</Typography>}
        {headerElement || null}
      </div>
    )}
    {children}
  </section>
);

ViewLayout.defaultProps = defaultProps;
