import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
type RatingArrayType = {
    [key: string]: string;
};
export const RatingBackground: RatingArrayType = {
    '10':'bg-green-950',
    '9': 'bg-green-900',
    '8': 'bg-green-800',
    '7': 'bg-green-700',
    '6': 'bg-green-600',
    '5': 'bg-green-500',
    '4': 'bg-rose-400',
    '3': 'bg-rose-600',
    '2': 'bg-rose-700',
    '1': 'bg-rose-800',
    '0': 'bg-rose-900',
}

const RatingNames: RatingArrayType = {
  '10' : 'joy, love, freedom, gratitude, abundance, generosity',
  '9': 'empowerment, fun',
  '8': 'happiness, enthusiasm',
  '7': 'confidence',
  '6': 'optimistic, trust',
  '5': 'motivated, hope, strong',
  '4': 'neutral, relaxed, peace, calm',
  '3': 'overwhelmed, anxiety, frustrated, irritated',
  '2': 'worry, blame, boredom, doubt',
  '1': 'anger, revenge, greed, lack',
  '0': 'guilt, hate, fear, stuck, depressed, insecure'
}

const tags = Array.from({ length: 11 }, (v, i) => i);


export function RatingTags() {
  return (
    <ScrollArea className="h-[550px] w-screen mx-10 lg:mx-0 lg:w-96 rounded-3xl border pr-3">
      <div className="p-4">
        <h4 className="mb-4 text-base font-medium leading-none text-center ">Ratings</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className={`${RatingBackground[tag.toString()]} text-black pl-3 rounded-[7px] py-3`}>
              <span className="mr-4 font-extrabold text-base lg:text-lg">{tag}</span><span className="font-thin text-xs lg:text-lg">{RatingNames[tag.toString()]}</span>
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}