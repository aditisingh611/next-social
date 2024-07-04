import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({userId}:{userId:string}) =>{
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/**Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-700">User Information</span>
                <Link href="/" className="text-blue-600 text-xs">See All</Link>
            </div>
            <div className="flex flex-col gap-4 text-gray-600">
                <div className="flex items-center gap-2 ">
                    <span className="text-xl text-black">Aditi Singh</span>
                    <span className="text-sm">@adi_x_x_zzzz</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas totam eveniet ipsum iure natus porro eaque dolorem explicabo eum expedita.</p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} className=""/>
                    <span>Living in <b>India</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} className=""/>
                    <span>Went to <b>Akgec</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} className=""/>
                    <span>Currently a Student.</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                    <Image src="/date.png" alt="" width={16} height={16} className=""/>
                    <span>Joined at 5th July</span>
                    </div>
                    
                </div>
                <button className="bg-blue-600 text-purple-100 text-sm rounded-md p-2">Follow</button>
                <span className="text-red-700 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    )
}
export default UserInfoCard