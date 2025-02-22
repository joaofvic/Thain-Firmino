import { useState, useRef } from 'react';
import './index.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const services = [
    {
      image: "/images/clareamento.jpeg",
      title: "Clareamento Dental",
      description: "Sorria com segurança, o clareamento dental transforma o seu sorriso, deixando seus dentes mais brancos e radiantes."
    },
    {
      image: "/images/ortodontia.jpeg",
      title: "Ortodontia",
      description: "Transforme seu sorriso com o aparelho dental, melhoramos a estética e a sua saúde bucal de forma eficaz."
    },
    {
      image: "/images/gengivoplastia.jpeg",
      title: "Gengivoplastia",
      description: "Recupere a harmonia do seu sorriso, corrigimos o contorno da gengiva e realçamos a estética dental de forma rápida e eficaz."
    },
    {
      image: "/images/limpeza.jpeg",
      title: "Limpeza Dental",
      description: "Mantenha seu sorriso saudável e radiante, removemos a placa, tártaro de forma rápida e indolor e evite problemas bucais."
    },
    {
      image: "/images/restauração.jpeg",
      title: "Restaurações Dentais",
      description: "Recupere a funcionalidade e estética do seu sorriso, solução eficaz para dentes danificados, deixando seu sorriso bonito e saudável."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const playVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-4 border-b border-primary-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            {/* Menu Mobile Button - Left */}
            <button 
              className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-primary-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-5 h-5 text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo - Centered */}
            <div className="flex-shrink-0 mb-2 md:mb-0">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain max-w-none" 
              />
            </div>
            
            {/* Menu Desktop */}
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#inicio" className="nav-link font-medium">Início</a></li>
              <li><a href="#tratamentos" className="nav-link font-medium">Tratamentos</a></li>
              <li><a href="#servicos" className="nav-link font-medium">Serviços</a></li>
              <li><a href="#resultados" className="nav-link font-medium">Resultados</a></li>
              <li><a href="#historias" className="nav-link font-medium">Histórias</a></li>
              <li><a href="#contato" className="nav-link font-medium">Contato</a></li>
            </ul>
          </div>

          {/* Menu Mobile */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-2`}>
            <ul className="flex flex-col space-y-2">
              <li><a href="#inicio" className="nav-link block py-2 font-medium text-center">Início</a></li>
              <li><a href="#tratamentos" className="nav-link block py-2 font-medium text-center">Tratamentos</a></li>
              <li><a href="#servicos" className="nav-link block py-2 font-medium text-center">Serviços</a></li>
              <li><a href="#resultados" className="nav-link block py-2 font-medium text-center">Resultados</a></li>
              <li><a href="#historias" className="nav-link block py-2 font-medium text-center">Histórias</a></li>
              <li><a href="#contato" className="nav-link block py-2 font-medium text-center">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl font-display text-primary-400 mb-6">
                Excelência em<br />Odontologia Estética
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <img src="./public/images/header.jpeg" alt="Doutor" className="w-12 h-12 rounded-full object-cover border-2 border-primary-100" />
                <div className="text-left">
                  <p className="text-sm font-sans text-primary-300">Thainá Firmino, uma profissional destacada com formação em odontologia pela Unifametro.</p>
                </div>
              </div>
              <button className="button-primary">
                AGENDE SEU HORÁRIO
              </button>
              <div className="mt-8">
                <p className="text-sm font-sans text-primary-300 mb-2">Reconhecido por</p>
                <img src="/images/logo.jpg" alt="Forbes" className="h-8 opacity-70" />
              </div>
            </div>
            <div className="relative">
              <img src="./public/images/header.jpeg" alt="Doutor" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Sectionnn */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl text-primary-400 mb-6">
              Nosso espaço de atendimento
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg overflow-hidden">
              <video ref={videoRef} className="w-full h-full object-cover" controls onEnded={handleVideoEnd} onPause={handleVideoEnd}>
                <source src="/images/consultorio.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className={`w-full h-full flex items-center justify-center absolute inset-0 bg-primary-400 bg-opacity-30 ${isPlaying ? 'hidden' : 'block'}`} onClick={playVideo}>
                <div className="play-button">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Como podemos transformar<br />
              <span className="text-primary-400 bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">seu sorriso e sua vida?</span>
            </h2>
            <div className="relative max-w-5xl mx-auto overflow-hidden">
              <div className="relative px-4 md:px-12">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-all duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-3 md:px-4"
                      >
                        <div className={`transform transition-all duration-500 ${
                          currentSlide === index 
                            ? 'scale-100 opacity-100 translate-y-0' 
                            : 'scale-90 opacity-40 blur-sm translate-y-4'
                        }`}>
                          <div className="text-center p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.18)] transition-all duration-500">
                            <div className="relative pb-[85%] mb-6 rounded-[1.5rem] overflow-hidden group">
                              <img 
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-primary-400 mb-3">{service.title}</h3>
                            <p className="text-base leading-relaxed text-primary-300 max-w-md mx-auto">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de navegação */}
                <button 
                  onClick={prevSlide}
                  className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.18)] hover:bg-primary-50 transition-all duration-300 z-20 group"
                >
                  <svg className="w-8 h-8 text-primary-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.18)] hover:bg-primary-50 transition-all duration-300 z-20 group"
                >
                  <svg className="w-8 h-8 text-primary-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores de slide */}
                <div className="flex justify-center mt-12 space-x-3">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-500 rounded-full ${
                        currentSlide === index 
                          ? 'w-12 h-3 bg-primary-400' 
                          : 'w-3 h-3 bg-primary-200 hover:bg-primary-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-primary-400 mb-8">
              Quer ter um sorriso perfeito e uma<br />aparência harmoniosa?
            </h2>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <img src="/images/antes-1.jpg" alt="Antes" className="w-full h-80 rounded-lg object-cover shadow-lg" />
              <img src="/images/depois-1.jpg" alt="Depois" className="w-full h-80 rounded-lg object-cover shadow-lg" />
            </div>
            <button className="bg-primary-300 text-white px-8 py-3 rounded-lg hover:bg-primary-400 transition-all duration-300 transform hover:scale-105">
              Agende uma avaliação
            </button>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary-400 mb-12 text-center">
              Graduações e Especializações
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="text-center transition-transform transform hover:scale-105">
                <img src="/images/graduacao1.jpg" alt="Graduação 1" className="w-full h-40 rounded-lg object-cover" />
                <p className="text-sm text-primary-300 mt-2">Odontologia</p>
              </div>
              <div className="text-center transition-transform transform hover:scale-105">
                <img src="/images/graduacao2.jpg" alt="Graduação 2" className="w-full h-40 rounded-lg object-cover" />
                <p className="text-sm text-primary-300 mt-2">Ortodontia</p>
              </div>
              <div className="text-center transition-transform transform hover:scale-105">
                <img src="/images/graduacao3.jpg" alt="Graduação 3" className="w-full h-40 rounded-lg object-cover" />
                <p className="text-sm text-primary-300 mt-2">Implantes Dentários</p>
              </div>
              <div className="text-center transition-transform transform hover:scale-105">
                <img src="/images/graduacao4.jpg" alt="Graduação 4" className="w-full h-40 rounded-lg object-cover" />
                <p className="text-sm text-primary-300 mt-2">Estética Dental</p>
              </div>
              <div className="text-center transition-transform transform hover:scale-105">
                <img src="/images/graduacao5.jpg" alt="Graduação 5" className="w-full h-40 rounded-lg object-cover" />
                <p className="text-sm text-primary-300 mt-2">Gengivoplastia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultório Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary-400 mb-6">
              Nosso Consultório
            </h2>
            <p className="text-primary-300 mb-8 max-w-2xl">
            Nosso consultório oferece um atendimento odontológico humanizado, com profissionais altamente capacitados e sempre atualizados com as últimas inovações da área. Contamos com tecnologia de ponta para proporcionar o melhor cuidado para o seu sorriso, em um ambiente moderno e acolhedor. Venha nos visitar e experimente o cuidado diferenciado que você merece!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/consultorio-1.jpg" alt="Consultório" className="w-full h-80 rounded-lg object-cover shadow-lg" />
              <img src="/images/consultorio-2.jpg" alt="Equipamentos" className="w-full h-80 rounded-lg object-cover shadow-lg" />
            </div>
            <button className="mt-8 bg-primary-300 text-white px-8 py-3 rounded-lg hover:bg-primary-400 transition-all duration-300">
              Conheça nosso espaço
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary-400 mb-12 text-center">
              Depoimentos
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/paciente-1.jpg" alt="Paciente 1" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-100" />
                <p className="text-sm text-primary-300 mb-4">
                  "Excelente atendimento! Mudou completamente meu sorriso e minha autoestima."
                </p>
                <h4 className="text-sm font-medium text-primary-400">Maria Silva</h4>
              </div>
              <div className="text-center">
                <img src="/images/paciente-2.jpg" alt="Paciente 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-100" />
                <p className="text-sm text-primary-300 mb-4">
                  "Profissionais altamente qualificados e ambiente super acolhedor."
                </p>
                <h4 className="text-sm font-medium text-primary-400">João Santos</h4>
              </div>
              <div className="text-center">
                <img src="/images/paciente-3.jpg" alt="Paciente 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-100" />
                <p className="text-sm text-primary-300 mb-4">
                  "Resultado incrível com as lentes de contato dental. Super recomendo!"
                </p>
                <h4 className="text-sm font-medium text-primary-400">Ana Costa</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="h-[400px] bg-primary-50">
        {/* Mapa será integrado aqui */}
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-primary-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <img src="/images/logo.svg" alt="Logo" className="h-8" />
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-primary-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;