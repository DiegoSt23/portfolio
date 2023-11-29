import { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { FiCopy } from 'react-icons/fi';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { IoMdDownload } from 'react-icons/io';
import {
  Typography,
  Link,
  Input,
  Card,
  Button,
  TextArea,
  Toast,
  ToastRefProps,
  Tabs,
  useWindowDimensions,
  useTheme,
} from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import backgroundDark from '../../assets/images/black-sky.jpg';
import backgroundLight from '../../assets/images/white-marmol.jpg';
import cv from '../../assets/docs/CV_Diego.pdf';
import styles from './contact.module.scss';

export const Contact = () => {
  const { isDark } = useTheme();
  const { width } = useWindowDimensions();
  const ref = useRef<ToastRefProps>(null);
  const isMobile = width < 900;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Required'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Required'),
    message: yup
      .string()
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const {
    values,
    errors,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      handleDisplayToast();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const items = [
    {
      title: 'Links',
      children: (
        <div className={styles.subContainer1}>
          <br />
          <br />
          <Typography type='subtitle'>EMAIL</Typography>
          <br />
          <div className={styles.row}>
            <Typography>diego.stonerough@gmail.com</Typography>
            <button
              className={styles.iconContainer}
              onClick={() => handleCopy('diego.stonerough@gmail.com')}
            >
              <FiCopy size={20} color={isDark ? '#31dab5' : '#ff1d4a'} />
            </button>
          </div>
          <br />
          <Typography type='subtitle'>PHONE</Typography>
          <br />
          <div className={styles.row}>
            <Typography>+52 55 40 76 24 69</Typography>
            <button
              className={styles.iconContainer}
              onClick={() => handleCopy('525540762469')}
            >
              <FiCopy size={20} color={isDark ? '#31dab5' : '#ff1d4a'} />
            </button>
          </div>
          <br />
          <Typography type='subtitle'>DOWNLOAD</Typography>
          <br />
          <div className={styles.row}>
            <Typography>Download CV</Typography>
            <div className={styles.iconContainer}>
              <Link href={cv} download>
                <IoMdDownload
                  size={22}
                  color={isDark ? '#31dab5' : '#ff1d4a'}
                />
              </Link>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <Link
              href='https://github.com/DiegoSt23'
              target='_blank'
              className={isDark ? '' : styles.link}
            >
              <AiFillGithub size={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/'
              target='_blank'
              className={isDark ? '' : styles.link}
            >
              <AiFillLinkedin size={20} />
            </Link>
            <Link target='_blank' className={isDark ? '' : styles.link}>
              <AiOutlineInstagram size={20} />
            </Link>
            <Link target='_blank' className={isDark ? '' : styles.link}>
              <BsTwitterX size={16} />
            </Link>
          </div>
        </div>
      ),
      key: 'tab1',
    },
    {
      title: 'Form',
      children: (
        <form
          className={styles.subContainer2}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            name='name'
            label='Name'
            placeholder='Name'
            value={values.email}
            onChange={(val) => setFieldValue('name', val)}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <br />
          <Input
            name='email'
            label='Email'
            placeholder='Email'
            value={values.email}
            onChange={(val) => setFieldValue('email', val)}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <br />
          <TextArea
            name='message'
            label='Message'
            placeholder='Message'
            value={values.email}
            onChange={(val) => setFieldValue('message', val)}
            error={!!errors.message}
            helperText={errors.message}
            fullWidth
          />
          <br />
          <br />
          <Button small onClick={() => handleSubmit()} type='submit'>
            Submit
          </Button>
        </form>
      ),
      key: 'tab2',
    },
  ];

  return (
    <ViewLayout id='contact' title="Let's talk">
      <ParallaxBanner
        layers={[
          {
            image: isDark ? backgroundDark : backgroundLight,
            speed: -25,
          },
        ]}
        className={styles.contactMainContainer}
      >
        <Parallax speed={-10} style={{ width: '100%' }}>
          <Card
            headerTitle="Let's talk"
            fullWidth
            mainContainerClassName={styles.contactCard}
          >
            <Typography className={styles.contactMessage}>
              Have some big idea? Then please reach out, I would love to hear
              more from you, your project and how can I help.
            </Typography>
            <Tabs items={items} tabPosition='fixed' />
          </Card>
        </Parallax>
      </ParallaxBanner>
      <div
        className={styles.footer}
        style={{ backgroundColor: isDark ? '#31dab5' : '#ff1d4a' }}
      >
        <Typography type='paragraph2' className={styles.footerText}>
          {'Created with Delta UI'}
        </Typography>
        <Typography type='paragraph2' className={styles.triangle}>
          ▲
        </Typography>
      </div>
      <Toast
        ref={ref}
        variant='success'
        text='Copied!'
        position={isMobile ? 'topLeft' : 'topRight'}
      />
    </ViewLayout>
  );
};
  
