import Container from '../layouts/Container';

const TopBanner = () => {
  return (
    <div className="w-full">
      <div className="w-full relative h-32 sm:h-48 md:h-56 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <img 
          src="/banner.gif" 
          alt="Profile Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TopBanner;
