import Space from "@/components/Space";
import Image from "next/image";
import { calenderIC, folderIC } from "@/assets/icons";

export default function Home() {
  return (
    <div className="flex h-screen flex-col p-[50px]">
      <div className="text-[32px] font-semibold text-white">
        Reflection on the Month of June
      </div>
      <Space spaces={{ t: 30 }}>
        <div className="mt-4 flex gap-4 border-b border-gray-500 pb-4">
          <Image width={20} height={20} src={calenderIC} alt="icon" />
          <div className="font-semibold text-gray-400">Date</div>
          <div className="pl-4 font-semibold text-white">21/06/2022</div>
        </div>

        <div className="mt-4 flex gap-4 border-b border-gray-500 pb-4">
          <Image width={20} height={20} src={folderIC} alt="icon" />
          <div className="font-semibold text-gray-400">Folder</div>
          <div className="pl-4 font-semibold text-white">Personal</div>
        </div>
      </Space>
      <textarea
        rows={1}
        placeholder="Content"
        className="m-0 h-full w-full resize-none border-0 bg-transparent py-[10px] text-white placeholder:text-gray-400 focus:outline-none"
        defaultValue={`
        It's hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.

        One of the best things that happened was getting promoted at work. I've been working really hard and it's great to see that effort recognized. It's also exciting to have more responsibility and the opportunity to contribute to the company in a bigger way. I'm looking forward to taking on new challenges and learning as much as I can in my new role.
        
        I also had a great time on my vacation to Hawaii. The beaches were beautiful and I loved trying all of the different types of Hawaiian food. It was nice to relax and get away from the daily grind for a bit. I'm so grateful to have had the opportunity to take a trip like that.
        
        On the downside, I feel like I didn't make as much progress on my fitness goals as I would have liked. I was really busy with work and didn't make it to the gym as often as I planned. I'm going to try to be more consistent in July and make exercise a higher priority. I know it will be good for my physical and mental health.
        
        I also had a few rough patches in my relationships this month. I had a couple of misunderstandings with friends and it was hard to navigate those conflicts. But I'm glad we were able to talk things through and move past them. I value my relationships and I want to make sure I'm always working to be a good friend.
        
        Overall, it was a good month with a mix of ups and downs. I'm looking forward to what July has in store! I'm hoping to make some more progress on my goals and spend quality time with the people I care about.`}
      ></textarea>
    </div>
  );
}
