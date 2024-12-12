import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl tracking-tight">
          {title}
        </h3>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300 mx-auto text-left leading-relaxed sm:text-lg md:text-xl md:px-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
