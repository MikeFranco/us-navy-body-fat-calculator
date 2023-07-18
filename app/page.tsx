import { BodyFatIndexForm } from './components/Form';
import Range from './components/Range';

const HomePage = async () => {
  return (
    <div className='flex mt-16 h-full m-auto min-h-full w-10/12 justify-center'>
      <div className='flex-1'>
        <BodyFatIndexForm />
      </div>
      <div className='flex-1'>
        <Range percentage={6} />
      </div>
    </div>
  );
};

export default HomePage;
