import Image from "next/image"

const ProfileCard = () =>{
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-gray-700 text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/15843088/pexels-photo-15843088/free-photo-of-dark-photo-of-magnolia-flowers-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"/>
                <Image src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={48} height={48} className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 "/>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Aditi Singh</span>
                <div className="flex items-center gap-4">
                    <div className="flex ">
                    <Image src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full w-3 h-3 object-cover "/>
                    <Image src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full w-3 h-3 object-cover "/>
                    <Image src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full w-3 h-3 object-cover "/>

                    </div>
                    <span className="text-xs text-gray-500">500 Followers</span>
                    
                </div>
                <button className="bg-blue-600 text-purple-50 p-2 rounded-md">My Profile</button>
            </div>

        </div>
    )
}
export default ProfileCard