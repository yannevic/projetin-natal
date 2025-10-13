import Star from '@/components/ui/sparkle/index';
import Window from '@components/ui/window';
import useCurrentTime from '@utils/useCurrentTime';
import calendar from '@/assets/calendar.png';
import clock from '@/assets/clock.png';
import HeroSection from './components/sections/hero';
import AboutMeSection from './components/sections/sobre';

function App() {
  const stars = [
    { x: 6, y: 10, size: 60 },
    { x: 75, y: 3, size: 60 },
    { x: 51, y: 16, size: 60 },
    { x: 20, y: 82, size: 60 },
    { x: 55, y: 77, size: 60 },
    { x: 90, y: 66, size: 60 },
    { x: 29, y: 6, size: 40 },
    { x: 88, y: 22, size: 40 },
    { x: 8, y: 66, size: 40 },
  ];
  const { date, time } = useCurrentTime();

  return (
    <div className="relative">
      <HeroSection />
      <AboutMeSection />
      <Window
        className="fixed top-[20px] right-[20px]"
        headerClasses="bg-[#82AADE]"
        windowTitle="Data/Hora"
        windowTitleClasses="text-[18px]"
        showButtons
      >
        <div className="flex flex-col gap-[8px] w-full p-[10px] pl-[25px] text-[20px] ">
          <div className="items-center flex flex-row gap-[8px]">
            <img className="w-[40px]" src={calendar} alt="" />
            <p>{date}</p>
          </div>
          <div className="items-center flex flex-row gap-[8px]">
            <img className="w-[40px]" src={clock} alt="" />
            <p>{time}</p>
          </div>
        </div>
      </Window>
      <div className=" min-w-[100vw] min-h-[100vh] pointer-events-none relative ">
        {stars.map((star) => (
          <Star key={`${star.x}-${star.y}-${star.size}`} {...star} />
        ))}
      </div>
    </div>
  );
}

export default App;
