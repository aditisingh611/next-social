import Image from "next/image"

const Ad = ({size}:{size:"sm"| "md" | "lg"}) => {
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md text-sm">
            {/**TOP */}
            <div className="flex items-center justify-between text-gray-700 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16}/>
            </div>
            {/**Bottom */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24": size==="md"? "h-36": "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="rounded-lg object-cover"/>
                </div>
                <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover"/>
                <span className="text-blue-500 font-medium">BigChef Lounge</span>
                </div>
                <p className={size === "sm"? "text-xs": "text-sm"}>
                    {size === "sm"? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?":size==="md"? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?"}
                    
                </p>
                <button className="bg-gray-200 text-gray-600 p-2 text-xs rounded-lg">Learn More</button>
                
            </div>
            
        </div>
    )
}
export default Ad