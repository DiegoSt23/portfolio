import { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FiCopy } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTriangleFill } from 'react-icons/bs';
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
  Spinner,
} from 'diego-react-delta-ui';
import { ViewLayout } from '../../components';
import backgroundDark from '../../assets/images/black-sky.jpg';
import backgroundLight from '../../assets/images/white-background.jpg';
import cv from '../../assets/docs/CV_Diego.pdf';
import cvSpanish from '../../assets/docs/CV_Diego_spanish.pdf';
import styles from './contact.module.scss';

export const Contact = () => {
  const [isLoading, setIsLoading] =  useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const ref = useRef<ToastRefProps>(null);
  const isMobile = width < 900;

  const handleDisplaySuccess = () => {
    setToastMessage(t('contact.tabs.one.message'));
    ref?.current?.handleDisplayToast();
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('contact.tabs.two.form.name.error')),
    email: yup
      .string()
      .email(t('contact.tabs.two.form.email.error2'))
      .required(t('contact.tabs.two.form.email.error')),
    message: yup.string().required(t('contact.tabs.two.form.message.error')),
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
      const serviceId = import.meta.env.VITE_MESSAGE_JS_SERVICEID;
      const templateId = import.meta.env.VITE_MESSAGE_JS_TEMPLATEID;
      try {
        setIsLoading(true);
        await emailjs.send(serviceId, templateId, {
          from_name: values.name,
          message: values.message,
          email: values.email,
          name: 'Diego',
          recipient: 'diego.stonerough@gmail.com',
        });
        handleDisplaySuccess();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const {
    values,
    errors,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleDisplayToast = () => {
    setToastMessage(t('contact.tabs.one.copy'));
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
      title: t('contact.tabs.one.title'),
      children: (
        <div className={styles.subContainer1}>
          <br />
          <br />
          <Typography type='subtitle'>{t('contact.tabs.one.email')}</Typography>
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
          <Typography type='subtitle'>{t('contact.tabs.one.phone')}</Typography>
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
          <Typography type='subtitle'>
            {t('contact.tabs.one.download')}
          </Typography>
          <br />
          <div className={styles.row}>
            <Typography>{t('contact.tabs.one.downloadDescription')}</Typography>
            <div className={styles.iconContainer}>
              <Link href={i18n.language === 'en' ? cv : cvSpanish} download>
                <IoMdDownload
                  size={22}
                  color={isDark ? '#31dab5' : '#ff1d4a'}
                />
              </Link>
            </div>
          </div>
        </div>
      ),
      key: 'tab1',
    },
    {
      title: t('contact.tabs.two.title'),
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
            label={t('contact.tabs.two.form.name.label')}
            placeholder={t('contact.tabs.two.form.name.placeholder')}
            value={values.email}
            onChange={(val) => setFieldValue('name', val)}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
          />
          <br />
          <Input
            name='email'
            label={t('contact.tabs.two.form.email.label')}
            placeholder={t('contact.tabs.two.form.email.placeholder')}
            value={values.email}
            onChange={(val) => setFieldValue('email', val)}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <br />
          <TextArea
            name='message'
            label={t('contact.tabs.two.form.message.label')}
            placeholder={t('contact.tabs.two.form.message.placeholder')}
            value={values.email}
            onChange={(val) => setFieldValue('message', val)}
            error={!!errors.message}
            helperText={errors.message}
            fullWidth
          />
          <br />
          <br />
          <Button small onClick={() => handleSubmit()} type='submit' disabled={isLoading}>
            {isLoading ? <Spinner size="sm" /> : 'Submit'}
          </Button>
        </form>
      ),
      key: 'tab2',
    },
  ];

  useEffect(() => emailjs.init(import.meta.env.VITE_MESSAGE_JS_KEY), []);

  return (
    <ViewLayout id='contact'>
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
            headerTitle={t('contact.title')}
            fullWidth
            mainContainerClassName={styles.contactCard}
          >
            <Typography className={styles.contactMessage}>
              {t('contact.description')}
            </Typography>
            <Tabs items={items} tabPosition='fixed' />
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
              <Link
                href='https://github.com/DiegoSt23/delta-ui'
                target='_blank'
                className={isDark ? '' : styles.link}
              >
                <BsFillTriangleFill size={17} />
              </Link>
            </div>
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
        <BsFillTriangleFill size={12} />
      </div>
      <Toast
        ref={ref}
        variant='success'
        text={toastMessage}
        position={isMobile ? 'topLeft' : 'topRight'}
      />
    </ViewLayout>
  );
};
  
