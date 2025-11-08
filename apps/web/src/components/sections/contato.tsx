import React, { useState, useEffect } from 'react';
import Window from '@components/ui/window';
import { Button } from '@components/ui/button';
import CustomInput from '@components/ui/input';
import sound from '@/assets/sounds/send.mp3';
import atencao from '@/assets/sounds/atencao.mp3';

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

  const som = () => {
    const audio = new Audio(sound);
    audio.volume = 0.8;
    audio.play();
  };

  const som2 = () => {
    const audio2 = new Audio(atencao);
    audio2.volume = 0.2;
    audio2.play();
  };

  const [sendMessage, setSendMessage] = useState<boolean | null>(null);
  const [showError, setShowError] = useState(false);

  const handleOpenModal = () => {
    setSendMessage(true);
  };
  const handleCloseModal = () => {
    setSendMessage(false);
  };
  const backButton = () => {
    handleCloseModal();
  };

  useEffect(() => {
    if (sendMessage || showError) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [sendMessage, showError]);

  return (
    <div id="contato" style={bgStyle} className={aboutWrapperStyles}>
      <Window
        className="mt-[12px] w-[700px] h-[620px]"
        windowTitle="Contato "
        headerClasses="bg-[#82AADE]"
        variant="blue"
      >
        <div className="w-full  p-[25px] flex items-center justify-center">
          <form
            className="w-[650px] mx-auto flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();

              const nome = nomeRef.current?.value.trim();
              const assunto = assuntoRef.current?.value.trim();
              const email = emailRef.current?.value.trim();
              const texto = textoRef.current?.value.trim();

              if (nome && assunto && email && texto) {
                som();
                handleOpenModal();

                nomeRef.current!.value = '';
                assuntoRef.current!.value = '';
                emailRef.current!.value = '';
                textoRef.current!.value = '';
              } else {
                som2();
                setShowError(true);
              }
            }}
          >
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
                type="submit"
                asChild={false}
                className="flex items-center justify-center w-[180px] h-[55px] bg-[#82AADE] text-[32px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </Window>
      {sendMessage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') handleCloseModal();
          }}
          tabIndex={0}
          role="button"
        >
          <Window windowTitle="Atenção" showButtons closeButton={handleCloseModal}>
            <div className="flex flex-col items-center justify-center w-[320px] ">
              <div className="w-full py-[24px] text-[24px]">
                <p className="text-center text-wrap">Mensagem enviada com sucesso!</p>
              </div>
              <div className="flex flex-row gap-[20px] pb-[10px]">
                <Button
                  asChild={false}
                  onClick={backButton}
                  className="w-[140px] h-[45px] bg-[#82AADE] text-[28px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
                >
                  Voltar
                </Button>
              </div>
            </div>
          </Window>
        </div>
      )}
      {showError && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setShowError(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') setShowError(false);
          }}
          tabIndex={0}
          role="button"
        >
          <Window windowTitle="Atenção" showButtons closeButton={() => setShowError(false)}>
            <div className="flex flex-col items-center justify-center w-[320px] ">
              <div className="w-full py-[24px] text-[22px]">
                <p className="text-center text-wrap">Preencha todos os campos antes de enviar.</p>
              </div>
              <div className="flex flex-row gap-[20px] pb-[10px]">
                <Button
                  asChild={false}
                  onClick={backButton}
                  className="w-[140px] h-[45px] bg-[#82AADE] text-[28px] p-[5px] hover:cursor-pointer hover:scale-[1.03] border-[2px] transition duration-300 ease-in-out"
                >
                  Voltar
                </Button>
              </div>
            </div>
          </Window>
        </div>
      )}
    </div>
  );
}

export default ContactSection;
