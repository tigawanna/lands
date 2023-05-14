import { pb } from "../config";


export interface LandListingProps {
  id: number;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  owner: string;
  phonw: string;
  email: string;
  extra_details: string;
  image: string;
}

type DistanceTofaclities =
  | "less than 20 minutes away"
  | "20 to 40 minutes away"
  | "more than 40 minutes away";

export interface ListingsOwner {
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  id: string;
  image: string;
  location: string;
  name: string;
  phone: string;
  updated: string;
  whatsapp: string;
}
export interface ListingAmenities {
  type?: "land" | "house" | "apartment";
  size?: string;

  // land psecific
  water_source?: "piped" | "borehole" | "other";
  elecricity_source?: "utility pole" | "generator" | "other";

  closest_school?: DistanceTofaclities;
  closest_hospital?: DistanceTofaclities;
  closest_police_station?: DistanceTofaclities;
  closest_town?: DistanceTofaclities;

  //  house or appartment specific
  gated_community?: boolean;
  pavements?: boolean;
  street_lights?: boolean;
  parking?: boolean;

  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  fireplace?: number;
  swimming_pool?: number;
}

export interface PBListings {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  location: string;
  longitude: number;
  latitude: number;
  description: string;
  price: number;
  status: "available" | "sold";
  images: (string | File | null)[];
  amenities: ListingAmenities | null;
  owner?: string;
  expand: { owner: ListingsOwner };
}

export interface RootPBListings {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: PBListings[];
}




export async function searchListing(keyword: string) {
  try {
    // you can also fetch all records at once via getFullList
    const records = await pb.collection("listings").getFullList<PBListings>(10 /* batch size */, {
        sort: "-created",
        filter: `location~"${keyword}"`,
      });

    return records.map((record: PBListings) => {
      // @ts-expect-error
      record["value"] = record.id;
      // @ts-expect-error
      record["label"] = record.location;
      return record;
    });
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error);
  }
}


export interface GetPbListingsParams{
    filter_id: string;
    perPage: number;
    page: number;
    sort: string;
    expand: string;

}

export const getPbListings = async (params:GetPbListingsParams) => {
 try {
    const resultList = await pb.collection('listings').getList<PBListings>(params.page, params.perPage, {
      // filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
      sort:'-created',
      expand:"owner"
    });
    return resultList
  } catch (err:any) {
    console.log("pb listing fetch error  ", err);
    return new Error(err);
  }
};




export type ListingFormInputs = Omit<PBListings, "id"|"created"|"updated"|"expand"|"collectionId"|"collectionName">
interface CreateListingProps {
  data: ListingFormInputs;
}
export async function createListing({data}:CreateListingProps) {
  try {
    const record = await pb.collection('listings').create(data);
    return record
  } catch (error:any) {
    return new Error(error);
  }
}


