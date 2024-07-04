import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/**Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-700">User Media</span>
                <Link href="/" className="text-blue-600 text-xs">See All</Link>
            </div>
            {/**Button */}
            <div className="flex justify-between gap-4 flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/20479618/pexels-photo-20479618/free-photo-of-woman-in-a-white-dress-walking-barefoot-in-the-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/17513617/pexels-photo-17513617/free-photo-of-woman-standing-in-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/24461004/pexels-photo-24461004/free-photo-of-model-in-long-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26741272/pexels-photo-26741272/free-photo-of-studio-shot-of-a-young-woman-wearing-a-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26791969/pexels-photo-26791969/free-photo-of-a-woman-in-a-white-dress-sitting-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26741269/pexels-photo-26741269/free-photo-of-a-woman-in-leather-boots-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26646539/pexels-photo-26646539/free-photo-of-couple-in-love.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>







            </div>
            
        </div>
    )
}
export default UserMediaCard