import { useState } from 'react';
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

export const Projects = () => {
  const [selectedData, setSelectedData] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDisplayModal = () => setIsModalOpen(!isModalOpen);

  const handleSelectProject = (data: ProjectProps) => {
    setSelectedData(data);
    handleDisplayModal();
  };

  return (
    <ViewLayout id='projects' title='Projects'>
      <div className={styles.projectsMainContainer}>
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleDisplayModal}
        mainContainerClassName={styles.modal}
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
            <div>
              <Typography type='heading3'>{selectedData?.name}</Typography>
              <br />
              <Typography>{selectedData?.description}</Typography>
            </div>
            <div className={styles.subContainer}>
              <Typography type='paragraph2'>
                {selectedData?.releaseDate}
              </Typography>
              <div className={styles.linksContainer}>
                {selectedData?.repoUrl && (
                  <Link href={selectedData?.repoUrl}>
                    <BsGithub size={20} />
                  </Link>
                )}
                {selectedData?.projectUrl && (
                  <Link href={selectedData?.projectUrl}>
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
