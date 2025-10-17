import Window from '@components/ui/window';
import useCurrentTime from '@utils/useCurrentTime';
import { useState } from 'react';
import calendar from '@/assets/calendar.png';
import clock from '@/assets/clock.png';
import baloon from '@/assets/baloon.png';
import { Button } from '@/components/ui/button';

export default function TimerWindow() {
  const { date, time } = useCurrentTime();

  const [timerWindow, setTimerWindow] = useState<boolean | null>(null);
  const handleTimerWindow = () => {
    setTimerWindow(!timerWindow);
  };

  return (
    <div>
      {timerWindow ? (
        <Window
          className="fixed top-[100px] right-[20px] "
          headerClasses="bg-[#82AADE]"
          windowTitle="Data/Hora"
          windowTitleClasses="text-[18px]"
          showButtons
          closeButton={handleTimerWindow}
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
      ) : (
        <div className="fixed top-[100px] right-[20px] hover:cursor-pointer hover:scale-[1.03]  transition duration-300 ease-in-out">
          <Button asChild={false} onClick={handleTimerWindow}>
            <img src={baloon} alt="" />
          </Button>
        </div>
      )}
    </div>
  );
}
