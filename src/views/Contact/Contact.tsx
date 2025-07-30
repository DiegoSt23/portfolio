import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { BsCopy } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LiaHackerrank } from 'react-icons/lia';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import cv from '../../assets/docs/CV_Diego.pdf';

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('contact.tabs.two.form.name.error')),
    email: yup
      .string()
      .email(t('contact.tabs.two.form.email.error2'))
      .required(t('contact.tabs.two.form.email.error')),
    message: yup.string().required(t('contact.tabs.two.form.message.error')),
  });

  const handleCopy = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: (
          <div className='flex items-center gap-2'>
            <IoMdCheckmarkCircle size={20} />
            <p className='text-sm'>{message}</p>
          </div>
        ),
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownloadCv = () => {
    window.open(cv, '_blank', 'download');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    // validateOnBlur: true,
    // validateOnChange: false,
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
        toast({
          title: t('contact.messageSent.title'),
          description: t('contact.messageSent.description'),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const { values, errors, handleSubmit, handleChange } = formik;

  useEffect(() => emailjs.init(import.meta.env.VITE_MESSAGE_JS_KEY), []);

  return (
    <div className='mx-auto flex flex-col h-[50%] max-w-4xl items-center px-[1rem] pt-[5rem] pb-[3rem] p-2 gap-8'>
      <p className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
        {t('contact.title')}
      </p>
      <Tabs defaultValue='links' className='w-full'>
        <TabsList className='grid w-full grid-cols-2 mb-4'>
          <TabsTrigger value='links'>{t('contact.tabs.one.title')}</TabsTrigger>
          <TabsTrigger value='form'>{t('contact.tabs.two.title')}</TabsTrigger>
        </TabsList>
        <Card>
          <CardHeader>
            <CardTitle>{t('contact.letsTalk')}</CardTitle>
            <CardDescription>{t('contact.description')}</CardDescription>
          </CardHeader>
          <TabsContent value='links'>
            <CardContent className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                  <p className='text-sm text-muted-foreground'>
                    {t('contact.tabs.one.email')}
                  </p>
                  <p className='className="text-lg font-semibold"'>
                    diego.stonerough@gmail.com
                  </p>
                </div>
                <Button
                  variant='ghost'
                  onClick={() =>
                    handleCopy(
                      'diego.stonerough@gmail.com',
                      'Email copied to clipboard'
                    )
                  }
                >
                  <BsCopy size={20} />
                </Button>
              </div>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                  <p className='text-sm text-muted-foreground'>
                    {t('contact.tabs.one.phone')}
                  </p>
                  <p className='className="text-lg font-semibold"'>
                    +52 55 40 76 24 69
                  </p>
                </div>
                <Button
                  variant='ghost'
                  onClick={() =>
                    handleCopy('525540762469', 'Phone copied to clipboard')
                  }
                >
                  <BsCopy size={20} />
                </Button>
              </div>
              <Separator />
              <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                  <p className='text-sm text-muted-foreground'>
                    {t('contact.tabs.one.download')}
                  </p>
                  <p className='className="text-lg font-semibold"'>
                    {t('contact.tabs.one.downloadDescription')}
                  </p>
                </div>
                <Button variant='ghost' onClick={handleDownloadCv}>
                  <MdDownload size={25} />
                </Button>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value='form'>
            <form
              onClick={(e) => {
                e.preventDefault(), handleSubmit();
              }}
            >
              <CardContent className='flex flex-col gap-3'>
                <div className='space-y-1'>
                  <Label htmlFor='name'>
                    {t('contact.tabs.two.form.name.label')}
                  </Label>
                  <Input
                    id='name'
                    name='name'
                    type='string'
                    placeholder={t('contact.tabs.two.form.name.placeholder')}
                    value={values.name}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <small className='text-sm font-small text-red-500'>
                      {errors.name}
                    </small>
                  )}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='string'
                    placeholder={t('contact.tabs.two.form.email.placeholder')}
                    value={values.email}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <small className='text-sm font-small text-red-500'>
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder={t('contact.tabs.two.form.message.placeholder')}
                    value={values.message}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  {errors.message && (
                    <small className='text-sm font-small text-red-500'>
                      {errors.message}
                    </small>
                  )}
                </div>
              </CardContent>
              <CardFooter className='flex justify-center sm:justify-end'>
                <Button
                  className='w-full sm:w-auto'
                  disabled={isLoading}
                  onClick={() => handleSubmit()}
                >
                  {t('contact.tabs.two.form.button')}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Card>
      </Tabs>
      <div className='flex items-center justify-center gap-3 mt-2'>
        <a href='https://github.com/DiegoSt23' target='_blank'>
          <AiFillGithub size={20} />
        </a>
        <a
          href='https://www.linkedin.com/in/diego-alvarez-dev/'
          target='_blank'
        >
          <AiFillLinkedin size={20} />
        </a>
        <a href='https://github.com/DiegoSt23/delta-ui' target='_blank'>
          <LiaHackerrank size={22} />
        </a>
      </div>
    </div>
  );
};
