import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sce-gray text-sce-darkgray border-t border-gray-300">
      <div className="sce-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SCE Foundation</h3>
            <p className="text-sm">
              Secure. Control. Explore. Фонд SCE занимается поиском, 
              изучением и контролем необычных объектов и явлений в целях 
              безопасности человечества.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guide-for-newbies" className="hover:underline">Руководство для новичков</Link></li>
              <li><Link to="/join-the-team" className="hover:underline">Присоединиться к команде</Link></li>
              <li><Link to="/authors" className="hover:underline">Авторы</Link></li>
              <li><Link to="/licensing" className="hover:underline">Лицензирование</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-sm">
              Для связи с администрацией используйте защищенные каналы связи.
              <br />
              Код доступа: SCE-SECURE-CHANNEL
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-sce-darkgray hover:text-sce-red">
                <span className="sr-only">Twitter</span>
                🔒
              </a>
              <a href="#" className="text-sce-darkgray hover:text-sce-red">
                <span className="sr-only">Discord</span>
                📡
              </a>
              <a href="#" className="text-sce-darkgray hover:text-sce-red">
                <span className="sr-only">GitHub</span>
                🔍
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm">
          <p>© {new Date().getFullYear()} SCE Foundation. Все материалы защищены соответствующей лицензией.</p>
          <p className="mt-2">
            <span className="font-mono bg-gray-200 px-1 py-0.5 rounded text-xs">
              Версия сайта: SCE-SITE-V1.0.3-ALPHA
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
