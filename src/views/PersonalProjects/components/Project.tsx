import { useState, type ReactNode } from 'react';
import {
  IoIosLink,
  IoLogoGithub,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { TechIcon } from './TechIcon';

type ProjectProps = {
  imageUrl: string;
  projectUrl: string;
  name: string;
  id: number;
  releaseDate: string;
  technologiesUsed: { name: string; icon: ReactNode }[];
  isMobile: boolean;
  description?: string;
  status?: string;
  repoUrl?: string;
};

export const Project = ({
  imageUrl,
  name,
  releaseDate,
  projectUrl,
  repoUrl,
  // description,
  technologiesUsed,
  isMobile,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <CarouselItem>
      <div className='p-1'>
        <Card>
          <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
            {isMobile ? (
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger className='relative rounded-lg'>
                  <img
                    src={imageUrl}
                    alt={name}
                    className='w-full h-auto rounded-lg border'
                  />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className='text-center'>{name}</DrawerTitle>
                    <div className='flex flex-col'>
                      {/* {description && (
                        <DrawerDescription className='text-left mt-4'>
                          {description}
                        </DrawerDescription>
                      )} */}
                      <img
                        src={imageUrl}
                        alt={name}
                        className='w-auto h-auto rounded-lg border mt-4'
                      />
                    </div>
                  </DrawerHeader>
                  <Card className='px-4 py-2 mx-4 mt-2'>
                    <div className='flex flex-wrap gap-6 justify-center my-4'>
                      {technologiesUsed.map((item) => (
                        <TechIcon key={item.name} {...item} />
                      ))}
                    </div>
                  </Card>
                  <DrawerFooter>
                    <div className='w-full flex justify-between items-end'>
                      <p className='text-sm text-muted-foreground'>
                        {releaseDate}
                      </p>
                      <div className='flex gap-4'>
                        {repoUrl && (
                          <a href={repoUrl} target='_blank'>
                            <IoLogoGithub size={20} />
                          </a>
                        )}
                        <a href={projectUrl} target='_blank'>
                          <IoIosLink size={20} />
                        </a>
                      </div>
                    </div>
                    <DrawerClose className='mt-4'>
                      <Button className='w-full'>Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ) : (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <div className='relative rounded-lg cursor-pointer'>
                    <img
                      src={imageUrl}
                      alt={name}
                      className='w-full h-auto rounded-lg border hover:opacity-30 transition-opacity'
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                    <IoMdInformationCircleOutline
                      size={25}
                      className={`absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] text-black dark:text-white pointer-events-none transition-opacity ${
                        isHovered ? 'opacity-1' : 'opacity-0'
                      }`}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle className='mb-4'>{name}</DialogTitle>
                    {/* {description && (
                      <DialogDescription className='text-left'>
                        {description}
                      </DialogDescription>
                    )} */}
                  </DialogHeader>
                  <img
                    src={imageUrl}
                    alt={name}
                    className='w-auto h-auto rounded-lg border'
                  />
                  <Card className='p-4'>
                    <div className='flex flex-wrap gap-6 justify-center'>
                      {technologiesUsed.map((item) => (
                        <TechIcon key={item.name} {...item} />
                      ))}
                    </div>
                  </Card>
                  <div className='w-full flex justify-between items-end mt-2'>
                    <p className='text-sm text-muted-foreground'>
                      {releaseDate}
                    </p>
                    <div className='flex gap-4'>
                      {repoUrl && (
                        <a href={repoUrl} target='_blank'>
                          <IoLogoGithub size={20} />
                        </a>
                      )}
                      <a href={projectUrl} target='_blank'>
                        <IoIosLink size={20} />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
            <h4 className='scroll-m-20 text-xl font-semibold tracking-tight text-center mt-6'>
              {name}
            </h4>
            <div className='w-full flex justify-between items-end'>
              <p className='text-sm text-muted-foreground mt-4'>
                {releaseDate}
              </p>
              <div className='flex gap-4'>
                {repoUrl && (
                  <a href={repoUrl} target='_blank'>
                    <IoLogoGithub size={20} />
                  </a>
                )}
                <a href={projectUrl} target='_blank'>
                  <IoIosLink size={20} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
