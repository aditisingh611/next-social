import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/**Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-700">Birthdays</span>
                
            </div>
            {/**User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/2318543/pexels-photo-2318543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                    <span className="font-semibold">Ava Chen</span>
                </div>
                <div className="flex justify-end gap-3">
                    <button className="bg-blue-400 text-white-xs px-2 py-1 rounded-md">Celebrate</button>
                </div>
            </div>
            {/**UPCOMING */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <Image src="/gift.png" alt="" width={24} height={24} />
            <Link href="/" className="flex flex-col gap-1 text-xs">
            <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
            <span className="text-gray-500">See other 16 have upcoming Birthdays.</span>
            </Link>
            </div>

        </div>
    )
}
export default Birthdays