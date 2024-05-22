import React from 'react'
import { cn } from '../lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const imageArray = [
  { id: 1, image: '/rahat-logo.png' },
  { id: 2, image: '/rahat-logo.png' },
  { id: 3, image: '/rahat-logo.png' },
  { id: 4, image: '/rahat-logo.png' },
  { id: 5, image: '/rahat-logo.png' },
];

type CardProps = {
  title: string;
  image?: string;
  className?: string;
};
function Dashboard({ title, image, className }: CardProps) {
  return (
    <>
      <div className="flex items-center justify-between my-4">
        <h1 className="text-white text-3xl font-semibold">Dashboard</h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input  disabled placeholder={new Date().toString()} />
          {/* <Button type="submit">Download</Button> */}
        </div>
      </div>
      <Card className={cn('border-none shadow-sm', className || '')}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0  bg-gray-200">
          <CardTitle className="text-md font-medium ">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 bg-gray-200">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage src="https://ui.shadcn.com/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://ui.shadcn.com/avatars/03.png" alt="Avatar" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
              <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://ui.shadcn.com/avatars/04.png" alt="Avatar" />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <p className="text-sm text-muted-foreground">will@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://ui.shadcn.com/avatars/05.png" alt="Avatar" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
        </CardContent>
      </Card>
      {/* <Carousel className="sm:ml-10 w-auto h-auto">
        <CarouselContent>
          {imageArray.map((img) => (
            <CarouselItem key={img.id}>
              <div>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <img src={img.image} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </>
  );
}

export default Dashboard
