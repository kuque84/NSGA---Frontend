import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Características
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
                Ventajas
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                    {" "}del NSGA
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-lg">{feature.text}</h5>
                            <p className="text-md p-2 mb-20 text-neutral-500 dark:text-neutral-300">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
export default FeatureSection