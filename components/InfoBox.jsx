import Link from "next/link";

const InfoBox = ({
  heading,
  pera,
  background,
  textColor,
  buttonText,
  buttonLink,
  buttonBgColor,
}) => {
  return (
    <div className={`${background} ${textColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{pera}</p>
      <Link
        href={buttonLink}
        className={`inline-block ${buttonBgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default InfoBox;
