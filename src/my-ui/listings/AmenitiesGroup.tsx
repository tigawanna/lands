
import { ListingAmenities } from "@/state/pb/api/listings";
import Select from "react-select";
import Creatable from "react-select/creatable";

interface AmenitiesGrioupProps {
  amenities: ListingAmenities | null;
  setAmenity: (key: keyof ListingAmenities, value: any) => void;
}

export const AmenitiesGroup = ({
  amenities,
  setAmenity,
}: AmenitiesGrioupProps) => {
  if (!amenities) {
    return <></>;
  }

  const landTypeOptions = [
    { value: "land", label: "Land" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
  ];
  const sizeOptions = [
    { value: "50 x 100", label: "50 x 100" },
    { value: "100 x 200", label: "100 x 200" },
    { value: "200 x 300", label: "200 x 300" },
    { value: "300 * 400", label: "300 x 400" },
  ];
  const waterSourceoptions = [
    { value: "piped", label: "Piped" },
    { value: "borehole", label: "Borehole" },
    { value: "other", label: "Other" },
  ];

  const elecSourceoptions = [
    { value: "utility pole", label: "Utility Pole" },
    { value: "generator", label: "Generator" },
    { value: "other", label: "Other" },
  ];

  const facilityDisance = [
    { value: "less than 20 minutes away", label: "less than 20 minutes away" },
    { value: "20 to 40 minutes away", label: "20 to 40 minutes away" },
    { value: "more than 40 minutes away", label: "more than 40 minutes away" },
  ];

  const numberOfOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const facilities = [
    "closest_school",
    "closest_hospital",
    "closest_police_station",
    "closest_town",
  ] as const;
  const buildingOptions = [
    "gated_community",
    "pavements",
    "street_lights",
    "parking",
  ] as const;
  const countedFacilities = [
    "bedrooms",
    "bathrooms",
    "garages",
    "fireplace",
    "swimming_pool",
  ] as const;

  const getDefaultSelectValue = (
    key: keyof ListingAmenities,
    options: { value: string; label: string }[]
  ) => {
    if (amenities[key]) {
      return { value: amenities[key], label: amenities[key] };
    }
    return options[0];
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center ">
      {/* property type */}
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <div className="w-[84%]">Property Type</div>
        <Select
          options={landTypeOptions}
          onChange={(e) => setAmenity("type", e?.value)}
          defaultValue={getDefaultSelectValue("type", landTypeOptions)}
          className="w-[85%]"
        />
      </div>

      {/* land size */}
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <div className="w-[84%]">Size</div>
        <Creatable
          isClearable
          onChange={(e) => setAmenity("size", e?.value)}
          options={sizeOptions}
          className="w-[85%]"
          defaultValue={getDefaultSelectValue("size", sizeOptions)}
        />
      </div>

      {/* water source  */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[84%]">Water</div>
        <Creatable
          isMulti
          onChange={(e) =>
            setAmenity(
              "water_source",
              e?.reduce((acc, curr) => acc + " " + curr.value, "")
            )
          }
          options={waterSourceoptions}
          defaultValue={getDefaultSelectValue(
            "water_source",
            waterSourceoptions
          )}
          className="w-[85%]"
        />
      </div>

      {/* electrical source */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[84%]">Electricity</div>
        <Creatable
          isMulti
          options={elecSourceoptions}
          onChange={(e) =>
            setAmenity(
              "elecricity_source",
              e?.reduce((acc, curr) => acc + " " + curr.value, "")
            )
          }
          defaultValue={getDefaultSelectValue(
            "elecricity_source",
            elecSourceoptions
          )}
          className="w-[85%]"
        />
      </div>

      {/* grouping  distance related*/}
      {facilities.map((facility) => (
        <div
          key={facility}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <div className="w-[84%] capitalize">
            {facility.replace(/_/g, " ")}
          </div>

          <Select
            options={facilityDisance}
            onChange={(e) => setAmenity(facility, e?.value)}
            className="w-[85%]"
            defaultValue={getDefaultSelectValue(facility, facilityDisance)}
          />
        </div>
      ))}

      {amenities.type !== "land" ? (
        <>
          {/* grouoing the boolean options */}
          <div className="w-[85%] h-full flex flex-wrap items-center justify-center gap-2">
            {buildingOptions.map((opt) => (
              <div
                key={opt}
                className="w-fit p-2 gap-2 h-full flex items-center justify-center border rounded"
              >
                <div className="capitalize px-1">{opt.replace(/_/g, " ")}</div>
                <input
                  type="checkbox"
                  className="scale-125 "
                  checked={amenities[opt]}
                  onChange={(e) => {
                    setAmenity(opt, e.target.checked);
                  }}
                />
              </div>
            ))}
          </div>

          {/* grouping the counted fields */}
          <div className="w-[85%] h-full flex flex-wrap items-center justify-center gap-2">
            {countedFacilities.map((opt) => (
              <div
                key={opt}
                className="w-fit   h-full flex items-center justify-center border rounded"
              >
                <div className="capitalize min-w-fit px-1">
                  {opt.replace(/_/g, " ")} :
                </div>
                <Select
                  // className="scroll-bar h-fit"
                  options={numberOfOptions}
                  onChange={(e) => setAmenity(opt, e?.value)}
                  defaultValue={getDefaultSelectValue(opt, numberOfOptions)}
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};
