const PropertyHeaderImage = ({ image }) => {
  return (
    <>
      <section>
        <div class="container-xl m-auto">
          <div class="grid grid-cols-1">
            <img
              src={image}
              alt=""
              class="object-cover h-[400px] w-full"
              width="1800"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyHeaderImage;
