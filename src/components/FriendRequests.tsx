import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/**Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-700">Friend Requests</span>
                <Link href="/" className="text-blue-600 text-xs">See All</Link>
            </div>
            {/**User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/2318543/pexels-photo-2318543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Ava Chen</span>
                </div>
                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Briget</span>
                </div>
                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/4668521/pexels-photo-4668521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Stella</span>
                </div>
                <div className="flex justify-end gap-3">
                    <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                    <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
                </div>
            </div>
                
                
            </div>
        
    )
}
export default FriendRequests