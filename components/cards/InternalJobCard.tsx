import { JobPosting } from '@/utils/types/problem';

import Link from 'next/link';

type ClickableCardProps = {
  jobposting : JobPosting
}

const ClickableCard: React.FC<ClickableCardProps> = ({ jobposting }) => {
  return (
    <Link href={jobposting.linkTo}>
      
      
        <div className="max-w-screen-md mx-auto my-4 bg-gray-100 rounded-lg p-4 m-4 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer">
          <div className="flex flex-col sm:flex-row  items-center">
            <div className="sm:w-1/2 p-4 ml-4">
              <div className="text-xl font-bold">{jobposting.title}</div>
              <div className="text-gray-600">{jobposting.location}</div>
            </div>
            <div className="sm:w-1/2 mt-4 mr-4 flex justify-end">
              <div className="rightcontent">
                <div className="text-sm font-semibold">{jobposting.type}</div>
                <div className="text-sm">{jobposting.experience}</div>
              </div>
            </div>
          </div>
        </div>
      
      
    </Link>
  );
};

export default ClickableCard;
