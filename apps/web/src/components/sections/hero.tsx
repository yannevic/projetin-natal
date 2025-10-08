import { Button } from '../ui/button/button';

function HeroSection() {
  return (
    <div className="flex flex-col gap-4 min-w-full min-h-[100vh] items-center justify-center">
      <h1 className="text-[48px]">{`Hi, I'm Nana`}</h1>
      <p>Sonhando em trabalhar com desenv. web.</p>
      <Button asChild={false}>ME CONTRATA!!!</Button>
    </div>
  );
}

export default HeroSection;
