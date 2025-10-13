import Window from '@components/ui/window';
import { Button } from '@components/ui/button';
import heroNana from '@/assets/hero.png';
import linkedin from '@/assets/linkedin.png';
import github from '@/assets/github.png';
import whatsapp from '@/assets/whatsapp.png';
import curriculo from '@/assets/curriculo.png';

function HeroSection() {
  const heroWrapperStyles = `
    flex flex-col gap-[95px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
     
    
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(130, 170, 222, 1) 60%, rgba(157, 172, 215, 1) 80%)`,
  };

  const socialButtons = [
    { name: 'GitHub', img: github, link: 'https://github.com/yannevic' },
    { name: 'LinkedIn', img: linkedin, link: 'https://www.linkedin.com/in/devnana' },
    {
      name: 'WhatsApp',
      img: whatsapp,
      link: `https://wa.me/5568999303331?text=Ol%C3%A1!%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio,%20podemos%20conversar?`,
    },
    { name: 'Currículo', img: curriculo, link: '' },
  ];

  return (
    <div style={bgStyle} className={heroWrapperStyles}>
      <Window className="border-none -mt-[4px] " isBaloonChat>
        <div className="w-[664px] px-[50px] pt-[40px] pb-[60px] flex flex-col gap-[45px] ">
          <div className="  text-[#221208]">
            <h1 className="text-[56px]">Oii, eu sou a Nana..</h1>
            <p className="opacity-[65%] text-[24px]">
              Sonhando em trabalhar com Desenvolvimento Web.
            </p>
          </div>
          <div className="flex flex-row gap-[20px]">
            {socialButtons.map((button) => {
              return (
                <Button
                  key={button.name}
                  asChild
                  onClick={() => window.open(button.link, '_blank')}
                  className="hover:cursor-pointer hover:scale-[1.04] transition duration-300 ease-in-out"
                >
                  <div className="flex flex-col gap-[5px] items-center">
                    <img src={button.img} alt="" />
                    <p className="opacity-[65%]">{button.name}</p>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </Window>
      <Window className="mt-[12px]" windowTitle="Nana" showButtons>
        <div className="w-full h-full p-[25px] flex items-center justify-center ">
          <img src={heroNana} alt="" />
        </div>
      </Window>
    </div>
  );
}

export default HeroSection;
