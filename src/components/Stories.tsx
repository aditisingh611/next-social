import Image from "next/image";

const Stories = () => {
    return(
        <div className="p-4 bg-purple-300 rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
            <div className="flex gap-8 w-max">
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Alex</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Rhys</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Josh</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Christian</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Volkov</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Chen</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Harper</span>
                </div>
                <div className="flex flex-col items-center gap-2 currsor-pointer">
                    <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 "/> 
                    <span className="font-medium">Shivank</span>
                </div>

            </div>

        </div>
    );
};

export default Stories;