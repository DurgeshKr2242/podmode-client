import MainScreen from "/components/Landingpage/MainScreen";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full max-w-[1400px] flex items-center justify-between px-8">
        <div className="w-[700px] rounded-full absolute top-0 left-0 h-[700px] bg-white/5 blur-3xl "></div>
        <MainScreen />
      </div>
    </div>
  );
}
