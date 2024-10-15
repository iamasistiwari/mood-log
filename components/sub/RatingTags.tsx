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
    '4': 'bg-green-400',
    '3': 'bg-green-300',
    '2': 'bg-green-200',
    '1': 'bg-green-100',
    '0': 'bg-green-50',
    '-0': '',
    '-1': 'bg-rose-100',
    '-2': 'bg-rose-200',
    '-3': 'bg-rose-300',
    '-4': 'bg-rose-400',
    '-5': 'bg-rose-500',
    '-6': 'bg-rose-600',
    '-7': 'bg-rose-700',
    '-8': 'bg-rose-800',
    '-9': 'bg-rose-900',
    '-10': 'bg-rose-950',

}
// export const RatingBackground: RatingArrayType = {
//   '10' : 'bg-love',
//   '9': 'bg-fun',
//   '8': 'bg-happiness',
//   '7': 'bg-confidence',
//   '6': 'bg-optimistic',
//   '5': 'bg-strong',
//   '4': 'bg-hope',
//   '3': 'bg-motivated',
//   '2': 'bg-ok',
//   '1': 'bg-calm',
//   '0': 'bg-relaxed',
//   '-0': 'bg-black',
//   '-1': 'bg-relived',
//   '-2': 'bg-impatient',
//   '-3': 'bg-frustrated',
//   '-4': 'bg-overwhelmed',
//   '-5': 'bg-doubt border-black',
//   '-6': 'bg-worry',
//   '-7': 'bg-difficult',
//   '-8': 'bg-anger',
//   '-9': 'bg-hate',
//   '-10': 'bg-depressed',

// }
const RatingNames: RatingArrayType = {
    '10' : 'joy, love, freedom, gratitude, abundance, generosity',
    '9': 'empowerment, fun',
    '8': 'happiness, enthusiasm',
    '7': 'confidence',
    '6': 'optimistic, trust',
    '5': 'strong',
    '4': 'hope',
    '3': 'dedicated, motivated',
    '2': 'content, ok',
    '1': 'peace, calm',
    '0': 'neutral, relaxed',
    '-1': 'relived, apathy',
    '-2': 'pessimistic, impatient',
    '-3': 'frustrated, irritated',
    '-4': 'overwhelmed, anxiety',
    '-5': 'boredom, doubt',
    '-6': 'worry, blame',
    '-7': 'discouraged, difficult',
    '-8': 'anger, revenge, greed, lack',
    '-9': 'hate, rage, jealousy, resent',
    '-10': 'guilt, insecure, depressed, stuck, fear, grief, self-loathing, powerlessness, unworthiness, shame',
}

const tags = Array.from({ length: 21 }, (v, i) => 10 - i);


export function RatingTags() {
  console.log(RatingBackground['-0'])
  return (
    <ScrollArea className="h-[550px] w-96 rounded-3xl border pr-3">
      <div className="p-4">
        <h4 className="mb-4 text-base font-medium leading-none text-center ">Ratings</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className={`${RatingBackground[tag.toString()]} text-black pl-3 rounded-[7px] py-3`}>
              <span className="mr-4 font-extrabold text-lg">{tag}</span><span className="font-thin">{RatingNames[tag.toString()]}</span>
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}