import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sce-red text-white">
      <div className="sce-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl tracking-tight mr-8">
              SCE Foundation
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <div className="relative group">
                <button className="flex items-center gap-1">
                  SCE Серии <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full z-20 bg-white text-sce-black shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/series-i" className="block px-4 py-2 hover:bg-sce-gray">Серия I</Link>
                  <Link to="/series-ii" className="block px-4 py-2 hover:bg-sce-gray">Серия II</Link>
                  <Link to="/series-iii" className="block px-4 py-2 hover:bg-sce-gray">Серия III</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center gap-1">
                  Рассказы <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full z-20 bg-white text-sce-black shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/tales" className="block px-4 py-2 hover:bg-sce-gray">Все рассказы</Link>
                  <Link to="/tales-by-series" className="block px-4 py-2 hover:bg-sce-gray">Рассказы по сериям</Link>
                  <Link to="/contest-archive" className="block px-4 py-2 hover:bg-sce-gray">Архив конкурсов</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center gap-1">
                  О Фонде <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full z-20 bg-white text-sce-black shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/about-the-foundation" className="block px-4 py-2 hover:bg-sce-gray">О Фонде SCE</Link>
                  <Link to="/secure" className="block px-4 py-2 hover:bg-sce-gray">Secure</Link>
                  <Link to="/control" className="block px-4 py-2 hover:bg-sce-gray">Control</Link>
                  <Link to="/explore" className="block px-4 py-2 hover:bg-sce-gray">Explore</Link>
                </div>
              </div>
            </nav>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-sce-red">
          <div className="sce-container py-4 space-y-4">
            <div>
              <div className="font-medium mb-2">SCE Серии</div>
              <div className="pl-4 space-y-2">
                <Link to="/series-i" className="block">Серия I</Link>
                <Link to="/series-ii" className="block">Серия II</Link>
                <Link to="/series-iii" className="block">Серия III</Link>
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-2">Рассказы</div>
              <div className="pl-4 space-y-2">
                <Link to="/tales" className="block">Все рассказы</Link>
                <Link to="/tales-by-series" className="block">Рассказы по сериям</Link>
                <Link to="/contest-archive" className="block">Архив конкурсов</Link>
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-2">О Фонде</div>
              <div className="pl-4 space-y-2">
                <Link to="/about-the-foundation" className="block">О Фонде SCE</Link>
                <Link to="/secure" className="block">Secure</Link>
                <Link to="/control" className="block">Control</Link>
                <Link to="/explore" className="block">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
