import wppfooter from '@/assets/wppfooter.png';
import githubfooter from '@/assets/githubfooter.png';
import linkedinfooter from '@/assets/linkedinfooter.png';

function FooterSection() {
  return (
    <>
      <div className="w-full h-[1px] bg-black" />
      <footer className="w-full bg-[#82AADE9E] text-[#221208] py-6 px-4 text-lg">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-between items-center gap-1">
          <div className="flex gap-4">
            <a
              href="https://wa.me/5568999303331?text=Ol%C3%A1!%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio,%20podemos%20conversar?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={wppfooter}
                alt="WhatsApp"
                className="w-10 h-10 hover:scale-110 transition"
              />
            </a>
            <a href="https://github.com/yannevic" target="_blank" rel="noopener noreferrer">
              <img
                src={githubfooter}
                alt="GitHub"
                className="w-10 h-10 hover:scale-110 transition"
              />
            </a>
            <a href="https://www.linkedin.com/in/devnana" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinfooter}
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110 transition"
              />
            </a>
          </div>

          <p>© {new Date().getFullYear()} Nana.</p>
          <p>Todos os direitos reservados.</p>
          <p>Página desenvolvida com as stack React, tailwind, etc .</p>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
