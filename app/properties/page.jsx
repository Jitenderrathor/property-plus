import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

export const metadata = {
  title: "Properties - Property Plus",
  keywords:
    "real estate, property listings, homes for sale, apartments for rent",
  description:
    "Explore the latest property listings on Property Plus. Find your perfect home or investment property today!",
};

function Properties() {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Properties;
