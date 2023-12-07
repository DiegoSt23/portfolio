/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Modal, Typography, Link, Chip } from 'diego-react-delta-ui';
import { useTranslation } from 'react-i18next';
import { BsLink45Deg, BsGithub, BsInfoCircleFill } from 'react-icons/bs';
import spotify from '../../assets/images/spotify.png';
import delta from '../../assets/images/delta-ui.png';
import space from '../../assets/images/space.jpeg';
import metal from '../../assets/images/metal.jpeg';
import github from '../../assets/images/github.jpeg';
import todo from '../../assets/images/todo.jpeg';
import pokemon from '../../assets/images/pokemon.png';
import countdown from '../../assets/images/countdown.jpeg';
import { ViewLayout } from '../../components';
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
  const { t } = useTranslation();
  const [selectedData, setSelectedData] = useState<ProjectProps | null>(null);
  const [isModalOpenLocal, setIsModalOpenLocal] = useState<boolean>(false);
  const projectsData = [
    {
      imageUrl: spotify,
      projectUrl: '',
      repoUrl: '',
      name: 'Spotify',
      description: t('projects2.projects.spotify.description'),
      id: 1,
      status: 'In Progress',
      releaseDate: 'NA',
    },
    {
      imageUrl: delta,
      projectUrl:
        'https://diego-delta-ui.vercel.app/?path=/story/deltaui-accordion--default',
      repoUrl: 'https://github.com/DiegoSt23/delta-ui',
      name: 'Delta UI',
      description: t('projects2.projects.delta.description'),
      id: 1,
      status: 'New',
      releaseDate: 'Aug 2023',
    },
    {
      imageUrl: space,
      projectUrl: 'https://space-tourism-three.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/Space-Tourism',
      name: 'Space Tourism',
      description: t('projects2.projects.space.description'),
      id: 1,
      releaseDate: 'Dec 2021',
    },
    {
      imageUrl: metal,
      projectUrl: 'https://metal-records-store.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/metal-records-store',
      name: 'Metal Records Store',
      description: t('projects2.projects.metal.description'),
      id: 2,
      releaseDate: 'Oct 2021',
    },
    {
      imageUrl: github,
      projectUrl: 'https://git-hub-dev-searcher.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/GitHub-DevSearcher',
      name: 'GitHub Dev Searcher',
      description: t('projects2.projects.github.description'),
      id: 3,
      releaseDate: 'Nov 2021',
    },
    {
      imageUrl: todo,
      projectUrl: 'https://todo-frontend-mentor-wheat.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/Todo-Frontend-Mentor',
      name: 'Todo App',
      description: t('projects2.projects.todo.description'),
      id: 4,
      releaseDate: 'Dec 2021',
    },
    {
      imageUrl: pokemon,
      projectUrl: 'https://pokedex-app-diego.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/pokedex-diego',
      name: 'Pokedex',
      description: t('projects2.projects.pokemon.description'),
      id: 6,
      releaseDate: 'Sep 2021',
    },
    {
      imageUrl: countdown,
      projectUrl: 'https://new-year-countdown-gray.vercel.app/',
      repoUrl: 'https://github.com/DiegoSt23/New-Year-Countdown',
      name: 'New Year Coundown Timer',
      description: t('projects2.projects.countdown.description'),
      id: 7,
      releaseDate: 'Dec 2021',
    },
  ];

  const handleDisplayModal = () => setIsModalOpenLocal(!isModalOpenLocal);

  const handleSelectProject = (data: ProjectProps) => {
    setSelectedData(data);
    handleDisplayModal();
  };

  useEffect(() => {
    isModalOpen(isModalOpenLocal)
  }, [isModalOpenLocal]);

  return (
    <ViewLayout id='projects' title={t('projects2.title')}>
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
