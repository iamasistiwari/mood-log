"use client";

import { Button } from '@/components/ui/button';
import React from 'react';
import { useToast } from '@/app/hooks/use-toast';

export default function Page() {
  const { toast } = useToast();

  return (
    <div className='bg-black'>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            className: 'custom-toast',
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}