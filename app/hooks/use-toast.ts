// app/hooks/use-toast.ts
"use client";

import { toast } from 'sonner';

export function useToast() {
  return {
    toast: (options: {
      title?: string;
      description?: string;
      action?: { label: string; onClick: () => void };
      className?: string; // Allow custom class
    }) => {
      toast(options.title, {
        description: options.description,
        action: options.action,
        className: options.className, // Pass className to the toast
      });
    },
  };
}