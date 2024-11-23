import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Rabovel offers groundbreaking options and futures trading, 
              setting a new standard for Nigerian investors. Unlock new opportunities and diversify 
              your portfolio with our unique trading features"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
