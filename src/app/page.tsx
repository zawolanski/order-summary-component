import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full max-w-md m-6 bg-[#fff] rounded-3xl overflow-hidden">
      <div className="w-full h-[160px] relative">
        <Image alt="" src="/illustration-hero.svg" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col p-3 gap-6 xs:p-6 md:p-12 md:pb-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-[#1F2E55] font-black text-xl">Order Summary</h2>
          <p className="text-center text-[#717FA6] font-medium text-base">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
        <div className="flex gap-5 p-2 bg-[#F7F9FF] rounded-lg items-center text-[14px] md:text-base md:p-6 xs:p-4">
          <Image alt="" width={48} height={48} src="/icon-music.svg" />
          <div className="flex flex-col grow">
            <span className="font-bold text-[#1F2E55]">Annual Plan</span>
            <span className="font-medium text-[#717FA6]">$59.99/year</span>
          </div>
          <a href="/" className="text-[13px] text-[#382AE1] font-bold underline cursor-pointer">Change</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a href="/" className="h-12 w-full bg-[#382AE1] text-[white] text-center leading-[48px] rounded-lg font-black">Proceed to Payment</a>
          <a href="/" className="h-12 w-full text-[#717FA6] text-center leading-[48px] rounded-lg font-black">Cancel Order</a>
        </div>
      </div>
    </main>
  )
}
