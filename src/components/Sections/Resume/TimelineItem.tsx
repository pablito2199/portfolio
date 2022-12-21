import {FC, memo} from 'react';
import Image from 'next/image';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, image} = item;
  return (
    <div className="flex flex-row pb-8 text-center last:pb-0 md:text-left md:ml-52">
      <div>
        {!!image && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32 border-2 border-green-500">
              <Image alt="location" layout="fill" objectFit="cover" src={image} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left ml-8">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
