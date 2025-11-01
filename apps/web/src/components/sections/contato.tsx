import React from 'react';
import Window from '@components/ui/window';
import { Button } from '@components/ui/button';
import CustomInput from '@components/ui/input';

function ContactSection() {
  const aboutWrapperStyles = `
    flex flex-col gap-[120px] min-w-full min-h-[100vh] 
    items-center justify-center flex flex-row
     
    
  `;

  const bgStyle = {
    backgroundImage: `url('./src/assets/tile.png'), linear-gradient(to bottom, rgba(242, 242, 232, 1) 60%, rgba(242, 242, 232, 1) 85%`,
  };

  const nomeRef = React.useRef<HTMLInputElement>(null);
  const assuntoRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const textoRef = React.useRef<HTMLInputElement>(null);

  function sendEmail() {
    // console.log(nomeRef, assuntoRef, emailRef, textoRef);
  }

  return (
    <div style={bgStyle} className={aboutWrapperStyles}>
      <Window
        className="mt-[12px] w-[700px] h-[620px]"
        windowTitle="Contato "
        headerClasses="bg-[#82AADE]"
        variant="blue"
      >
        <div className="w-full  p-[25px] flex items-center justify-center">
          <form className="w-[650px] mx-auto flex flex-col gap-6">
            <CustomInput
              ref={nomeRef}
              label="Nome"
              name="nome"
              maxLength={80}
              placeholder="Insira seu nome aqui"
              required
            />
            <CustomInput
              ref={assuntoRef}
              label="Assunto"
              name="assunto"
              maxLength={80}
              placeholder="Insira seu assunto aqui"
              required
            />
            <CustomInput
              ref={emailRef}
              label="Email"
              name="email"
              type="email"
              maxLength={100}
              placeholder="Insira seu email aqui"
              required
            />
            <CustomInput
              isTextarea
              rows={4}
              ref={textoRef}
              className="resize-none max-h-full"
              label="Mensagem"
              name="mensagem"
              placeholder="Insira sua mensagem aqui"
              required
            />

            <div className="flex justify-center">
              <Button
                type="button"
                onClick={() => sendEmail}
                asChild={false}
                className="flex items-center justify-center w-[180px] h-[55px] bg-[#82AADE] text-[32px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </Window>
    </div>
  );
}

export default ContactSection;
