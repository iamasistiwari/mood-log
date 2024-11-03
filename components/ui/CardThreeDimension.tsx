"use client";

import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useRouter } from 'next/navigation';

export function CardThreeDimension({title, des, imageUrl}: {title: string, des: string, imageUrl: string}) {
    const navigate = useRouter();
    return (
      <CardContainer className="inter-var">
        <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white"
          >
            <div>{title}</div>
            
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
          >
            {des}
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl border border-neutral-900"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20 hover:cursor-pointer" onClick={() => {
            navigate.push('/signup')
          }}>
            <div>
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem>
            </div>
  
            <div>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl  bg-white text-black text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    );
  }