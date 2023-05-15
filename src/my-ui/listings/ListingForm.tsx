"use client"
import { CreateListingProps, ListingAmenities, ListingFormInputs, PBListings, createListing } from "@/state/pb/api/listings";
import { useFormHook } from "../shared/hooks/useFormHook";
import { FormInput } from "../shared/form/FormInput";
import Select from "react-select";
import { SearchSelect } from "../shared/form/SearchSelect";
import { getOwner } from "@/state/pb/api/owner";
import { FormTextArea } from "../shared/form/FormTextArea";
import { AmenitiesGroup } from "./AmenitiesGroup";
import ReactLeafletMapCard from "../location/ReactLeafletMapCard";
import { ImageInput } from "./ImageInput";
import { useMutation } from "@/state/utils/useMutation";
import { Button } from "../shared/form/Button";
import { ErrorOutput } from "../shared/wrappers/ErrorOutput";
import { checkIfEmpty } from "@/state/utils/checkIfObjectHasemptyField";
import { useToast } from "../../../components/ui/use-toast";





interface ListingFormProps {
    label:string
}
type FetcherReturn = Awaited<ReturnType<typeof createListing>>;
export function ListingForm({label}:ListingFormProps){

const { toast } = useToast()    
const{error,handleChange,input,setInput,setError} = useFormHook<ListingFormInputs>({
initialValues:{
    amenities:null,
    description:"land for sale ",
    price:20000,
    images:[],
    latitude: 51.505,
    longitude:-0.09,
    location:"kericho",
    status:"available",
    owner:"",
}
 }) 

    const StatusOptions = [
        { label: "Available", value: "available" },
        { label: "Sold", value: "sold" },
    ];
    const setOwner = (value: any) => {
        setInput((prev) => {
            return { ...prev, owner: value };
        });
    
    };

    const setAmmenity = (key: keyof ListingAmenities, value: any) => {
        // console.log("updationg k,v ",key,value)
        if (key !== undefined && key !== null) {
            setInput((prev) => {
                return { ...prev, amenities: { ...prev.amenities, [key]: value } };
            });
        }
    };

    const setMapLocation = (lat: number, lng: number) => {
        setInput((prev) => {
            return { ...prev, latitude: lat, longitude: lng };
        });
    };

    const mutation = useMutation<CreateListingProps,FetcherReturn>({
        fetcher:createListing,
        key:"listings"

    })

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("input before save", input)
        const formdata = new FormData(e.currentTarget);
        const excludeKeys = ["amenities", "images"];
        if (input.images) {
            input.images?.forEach((image) => {
                formdata.append("images", image as Blob);
            });
        }
        if (input.amenities) {
            formdata.append("amenities", JSON.stringify(input.amenities));
        }
        for (const key in input) {
            if (
                !excludeKeys.includes(key) &&
                input[key as keyof typeof input] !== ""
            ) {
                // @ts-expect-error
                formdata.append(key, input[key]);
            }
        }

        mutation.trigger({data:formdata})
        .then((res)=>{
            
            setError({name:"",message:""})
            toast({
                title: "listing added",
                description: `listing in ${res?.location } added successfully`,
            })

        })
        .catch((err)=>{
            console.log("error doing saving listing ===",err)
            setError(err)
        })
        // mutation.mutate(input);
    };


return (
 <div className='w-full h-full flex flex-col  items-center justify-center gap-4'>
        <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[60%] h-full border-2 shadow-xl rounded-xl p-3 gap-2 m-5
            flex flex-col items-center justify-center bg-white dark:bg-black dark:text-white">
            <div className="w-[95%]  text-xl font-bold text-center p-2">
                {label}
            </div>

            {/* location */}
            {/* property location */}
            <FormInput<ListingFormInputs>
                error={error}
                onChange={handleChange}
                input={input}
                prop="location"
                label="Property location"
            />
            {/*  property owner */}
            <div className="w-[90%] gap-1 py-2 flex flex-col  items-center justify-center">
                <Select
                    options={StatusOptions}
                    defaultValue={StatusOptions[0]}
                    className="w-full"
                    onChange={(value) => {
                        setInput((prev) => {
                            return {
                                ...prev,
                                status: value?.value === "sold" ? "sold" : "available",
                            };
                        });
                    }}
                />
            </div>
            {/*  property owner */}
            <div className="w-[90%] gap-1 py-2 flex flex-col  items-center justify-center">
                <label className="text-md capitalize  w-[100%] flex items-start">
                    Property Owner
                </label>
                <SearchSelect gettterFunction={getOwner} setValue={setOwner} />
            </div>

            {/*  property desciption input */}
            <FormTextArea<ListingFormInputs>
                error={error}
                onChange={handleChange}
                input={input}
                prop="description"
                label="Property Description"
            />
            <AmenitiesGroup amenities={input.amenities} setAmenity={setAmmenity} />

            {/*  coodinates map and inputs */}
            <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
                <FormInput<ListingFormInputs>
                    error={error}
                    onChange={handleChange}
                    input={input}
                    prop="longitude"
                    type={"number"}
                    label="Property Longitude"
                />
                <FormInput<ListingFormInputs>
                    error={error}
                    onChange={handleChange}
                    input={input}
                    prop="latitude"
                    type={"number"}
                    label="Property latitude"
                />
            </div>

            <div className="w-[90%] p-5 flex flex-row  items-center justify-center">
                <ReactLeafletMapCard
                    coords={{ lat: input.latitude, lng: input.longitude }}
                    setMapLocation={setMapLocation}
                    display_only={false}
                />
                {/* <NewReactLeafletMap center={{ lat: input.latitude, lng: input.longitude }}/> */}
                {/* <NewReactLocationMap/> */}
            </div>

            {/* image input section  */}
            <ImageInput
                error={error}
                setInput={setInput}
                input={input}
                prop={"images"}
                label="Property Images"
                max_images={5}
            />

            <div className="w-[90%] flex  flex-col items-center justify-center">
                {checkIfEmpty(input).empty ? (
                    <div
                        className="m-1 w-full text-center  line-clamp-4 p-2 bg-red-100 border-b-2 
                        border-red-800 text-red-900  rounded-xl">
                        {checkIfEmpty(input).value}
                    </div>
                ) : null}
            </div>

            <Button 
            isLoading={mutation.isMutating} 
            disabled={checkIfEmpty(input,["owner"]).empty || mutation.isMutating}
            label="save changes" type="submit"/>

            {error.message !== "" && <ErrorOutput error={error} />}
        </form>

 </div>
);
}
