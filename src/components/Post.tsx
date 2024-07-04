import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return(
        <div className="bg-purple-300 flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt=" " 
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"/>
                    <span className="font-medium">Ian Somerholder</span>
                
                </div>
                <Image src="/more.png" alt="" width={16} height={16} />
          
          
        
            </div>
            { /* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="" 
                fill 
                className="object-cover rounded-md" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dignissimos eligendi minima aliquam repudiandae
                    in voluptatum cupiditate aspernatur aut accusantium sed officia perspiciatis facilis expedita provident amet, a commodi nihil.
                </p>
            </div>
            {/*INTERACTIONS*/}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-purple-100 p-2 rounded-xl">
                    <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">234<span className="hidden md:inline"> Likes</span></span>
                    </div>
                </div>
                <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-purple-100 p-2 rounded-xl">
                    <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">234<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-purple-100 p-2 rounded-xl">
                    <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">234<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>

            </div>
            <Comments/>
        
        </div>
      
    )
}
export default Post;