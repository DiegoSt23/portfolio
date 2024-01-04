/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
  Modal,
  Typography,
  Link,
  Tooltip,
} from 'diego-react-delta-ui';
import { useTranslation } from 'react-i18next';
import { BsLink45Deg, BsInfoCircleFill } from 'react-icons/bs';
import { ViewLayout } from '../../components';
import { nonPersonalProjectsData } from '../../data/data';
import styles from './non-personal-projects.module.scss';

export type NonPersonalProjectProps = {
  imageUrl: string;
  projectUrl: string;
  name: string;
  id: number;
  releaseDate: string;
};

interface ProjectViewProps {
  isModalOpen: (val: boolean) => void;
}

export const NonPersonalProjects = ({ isModalOpen }: ProjectViewProps) => {
  const { t } = useTranslation();
  const [selectedData, setSelectedData] = useState<NonPersonalProjectProps | null>(null);
  const [isModalOpenLocal, setIsModalOpenLocal] = useState<boolean>(false);

  const handleDisplayModal = () => setIsModalOpenLocal(!isModalOpenLocal);

  const handleSelectProject = (data: NonPersonalProjectProps) => {
    setSelectedData(data);
    handleDisplayModal();
  };

  useEffect(() => {
    isModalOpen(isModalOpenLocal)
  }, [isModalOpenLocal]);

  return (
    <ViewLayout id='projects' title={t('projects1.title')}>
      <Parallax speed={20} className={styles.projectsMainContainer}>
        <div className={styles.projectsContainer}>
          {nonPersonalProjectsData.map((item) => (
            <button
              key={item.name}
              className={styles.projectContainer}
              onClick={() => handleSelectProject(item)}
            >
              <img src={item.imageUrl} alt={item.name} className={styles.img} />
              <div className={styles.overlay}>
                <Tooltip tooltipContent={t('projects1.info')} maxWidth={150}>
                  <BsInfoCircleFill size={20} />
                </Tooltip>
              </div>
            </button>
          ))}
        </div>
      </Parallax>
      <Modal
        isOpen={isModalOpenLocal}
        onClose={handleDisplayModal}
        mainContainerClassName={styles.modal}
        headerClassName={styles.header}
        headerTitle={selectedData?.name}
        size='sm'
      >
        <div className={styles.imgContainer}>
          <img
            src={selectedData?.imageUrl}
            alt={selectedData?.name}
            className={styles.img}
          />
        </div>
        <div className={styles.infoContainer}>
          <Typography type='paragraph2'>{selectedData?.releaseDate}</Typography>
          <Link href={selectedData?.projectUrl} target='_blank'>
            <BsLink45Deg size={25} />
          </Link>
        </div>
      </Modal>
    </ViewLayout>
  );
};
