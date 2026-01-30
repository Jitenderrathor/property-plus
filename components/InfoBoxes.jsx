import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            pera="Find your dream rental property. Bookmark properties and contact owners."
            background="bg-gray-100"
            textColor="text-gray-800"
            buttonText="Browse Properties"
            buttonLink="/properties"
            buttonBgColor="bg-black"
          />
          <InfoBox
            heading="For Property Owners"
            pera="List your properties and reach potential tenants. Rent as an airbnb or long term."
            background="bg-blue-100"
            textColor="text-gray-800"
            buttonText="Add Property"
            buttonLink="/properties/add"
            buttonBgColor="bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
