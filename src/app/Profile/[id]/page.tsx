import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const ProfilePage = () => {
    return (
        <div className="flex gap-6 pt-4 ">
          <div className="hidden xl:block w-[20%] "> <LeftMenu type="Profile"/></div>
          <div className="w-full  lg:w-[70%]  xl:w-[50%]">
            <div className='flex flex-col gap-6 bg-purple-100'>
              <div className="flex flex-col items-center justify-center">
                <div className="w-full h-64 relative ">
                  <Image src="https://images.pexels.com/photos/15843088/pexels-photo-15843088/free-photo-of-dark-photo-of-magnolia-flowers-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"/>
                  <Image src="https://images.pexels.com/photos/25677305/pexels-photo-25677305/free-photo-of-back-of-a-female-model-wearing-a-red-dress-standing-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={128} height={128}  className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"/>

                </div>
                <h1 className="mt-20 mb-4 text-2xl font-medium">Aditi Singh</h1>
                <div className="flex items-center justify-center mb-4 gap-12">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">123</span>
                    <span className="text-sm">posts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">500</span>
                    <span className="text-sm">followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">423</span>
                    <span className="text-sm">following</span>
                  </div>
                </div>
              </div>
              <Feed/>
            </div>
          </div>
          <div className="hidden lg:block w-[30%]"> <RightMenu userId="test" /></div>
        </div>
    )
}
export default ProfilePage 