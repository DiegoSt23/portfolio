/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Modal, Typography, Link, Chip } from 'diego-react-delta-ui';
import { BsLink45Deg, BsGithub, BsInfoCircleFill } from 'react-icons/bs';
import { ViewLayout } from '../../components';
import { projectsData } from '../../data/data';
import styles from './projects.module.scss';

export type ProjectProps = {
  imageUrl: string;
  projectUrl: string;
  repoUrl: string;
  name: string;
  description: string;
  id: number;
  status?: string;
  releaseDate: string;
};

interface ProjectViewProps {
  isModalOpen: (val: boolean) => void;
}

export const Projects = ({ isModalOpen }: ProjectViewProps) => {
  const [selectedData, setSelectedData] = useState<ProjectProps | null>(null);
  const [isModalOpenLocal, setIsModalOpenLocal] = useState<boolean>(false);

  const handleDisplayModal = () => setIsModalOpenLocal(!isModalOpenLocal);

  const handleSelectProject = (data: ProjectProps) => {
    setSelectedData(data);
    handleDisplayModal();
  };

  useEffect(() => {
    isModalOpen(isModalOpenLocal)
  }, [isModalOpenLocal]);

  return (
    <ViewLayout id='projects' title='Personal projects'>
      <Parallax speed={20} className={styles.projectsMainContainer}>
        <div className={styles.projectsContainer}>
          {projectsData.map((item) => (
            <button
              key={item.name}
              className={styles.projectContainer}
              onClick={() => handleSelectProject(item)}
            >
              <img src={item.imageUrl} alt={item.name} className={styles.img} />
              <div className={styles.overlay}>
                {item?.status && (
                  <div className={styles.chip}>
                    <Chip>{item.status}</Chip>
                  </div>
                )}
                <BsInfoCircleFill size={20} />
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
      >
        <div className={styles.modalContentContainer}>
          <div className={styles.imgContainer}>
            <img
              src={selectedData?.imageUrl}
              alt={selectedData?.name}
              className={styles.img}
            />
            {selectedData?.status && (
              <div className={styles.chip}>
                <Chip color='purple'>{selectedData.status}</Chip>
              </div>
            )}
          </div>
          <div className={styles.infoContainer}>
            <Typography>{selectedData?.description}</Typography>
            <div className={styles.subContainer}>
              <Typography type='paragraph2'>
                {selectedData?.releaseDate}
              </Typography>
              <div className={styles.linksContainer}>
                {selectedData?.repoUrl && (
                  <Link href={selectedData?.repoUrl} target='_blank'>
                    <BsGithub size={20} />
                  </Link>
                )}
                {selectedData?.projectUrl && (
                  <Link href={selectedData?.projectUrl} target='_blank'>
                    <BsLink45Deg size={25} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </ViewLayout>
  );
};
