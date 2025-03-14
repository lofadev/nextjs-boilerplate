import { Button } from '@/components/ui/button';

import { Loader2 } from 'lucide-react';

const Page = () => {
  return (
    <div>
      <h1>NextJS 15 + Shadcn UI + TailwindCss 4 + Typescript</h1>
      <Button>
        <Loader2 className='animate-spin' /> Submit
      </Button>
    </div>
  );
};

export default Page;
