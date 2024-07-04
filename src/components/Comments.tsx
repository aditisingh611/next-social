import Image from "next/image"

const Comments = () => {
    return(
        <div className="">
            {/*Write*/}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={32} height={32}className="w-8 h-8 rounded-full"/>
            
            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <input type="text" placeholder="Comment here..." className="bg-transparent outline-none flex-1"/>
            <Image src="/emoji.png" alt="" width={22} height={22} className="cursor-pointer"/>
            </div>
            </div>
            {/*Comment*/}
            <div className="">
                {/** Comments */}
                <div className="flex gap-4 justify-between mt-6">
                    {/** AVATAR */}
                    <Image src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40}className="w-10 h-10 rounded-full"/>
                    {/** DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bernice Alan</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam officiis facere repudiandae minima at pariatur provident et labore mollitia blanditiis dolor earum.
                        </p>
                        <div className="flex items-center gap-8 text-xs">
                            <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4"></Image>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600">234 <span> Likes</span></span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/** ICON */}
                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"></Image>
                </div>
            </div>
        </div>
    )
}
export default Comments