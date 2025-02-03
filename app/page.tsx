import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen" style={{background: "black"}}>
      <section className="remove-scrollbar container my-auto">
        <Image
          src="/assets/images/comming.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
          
        </section>
        {/* <Image
          src="/assets/images/hs2.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        /> */}
    </div>
  );
}
