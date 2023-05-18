

interface pageProps {

}

export default async function page({}:pageProps){



return (
 <div className='w-full min-h-screen h-full flex items-center justify-center'>

        <div className="bg-gray-100">
            <h1 className="text-4xl font-bold text-center py-8">Real Estates</h1>
            <p className="text-center py-4 px-8">
                We offer a wide range of properties that are perfect for building your dream home or starting your own business. Our properties are located in some of the most beautiful and scenic areas in the country, with breathtaking views and natural surroundings. Whether you're looking for a small lot or a large parcel of land, we have something to suit your needs.
            </p>
            {/* <div className="flex justify-center items-center py-8">
                <Image src="/land-big.webp" alt="Land" width={500} height={300} />
            </div> */}
            <p className=" text-center py-4 px-8">
                Our properties are competitively priced and come with all the necessary amenities to make your life comfortable and convenient. We offer flexible financing options to help you purchase the property of your dreams without breaking the bank. Our team of experts is always available to answer any questions you may have and guide you through the buying process.
            </p>
            <p className=" text-center py-4 px-8">
                So why wait? Browse our selection of properties today and find the perfect piece of land for your needs!
            </p>
        </div>
 </div>
);
}
