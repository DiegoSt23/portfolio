import { ReactNode } from 'react';
import { Typography } from 'diego-react-delta-ui';
import styles from './view-layout.module.scss';

interface ViewLayoutProps {
  children: ReactNode;
  id: string;
  title?: string;
  headerElement?: ReactNode;
}

const defaultProps: Partial<ViewLayoutProps> = {
  title: '',
  headerElement: undefined,
};

export const ViewLayout = ({
  children,
  id,
  title,
  headerElement,
}: ViewLayoutProps) => (
  <div
    id={id}
    className={styles.mainContainerViewLayout}
  >
    <div className={styles.header}>
      {title && <Typography type='heading4'>{title}</Typography>}
      {headerElement || null}
    </div>
    {children}
  </div>
);

ViewLayout.defaultProps = defaultProps;