import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import SceObject from '@/components/SceObject';
import RecentObjects from '@/components/RecentObjects';
import { Shield, FileText, Search } from 'lucide-react';

const demoObjects = [
  {
    id: '001',
    name: 'Искривляющее зеркало',
    objectClass: 'безопасный',
    brief: 'Зеркало, отражающее альтернативные реальности вместо обычного отражения.'
  },
  {
    id: '087',
    name: 'Пространственная аномалия',
    objectClass: 'евклид',
    brief: 'Замкнутое пространство, в котором законы физики работают иначе.'
  },
  {
    id: '173',
    name: 'Статуя-наблюдатель',
    objectClass: 'кетер',
    brief: 'Объект, который перемещается только когда на него не смотрят.'
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1">
        <section className="bg-sce-red text-white py-16">
          <div className="sce-container text-center">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              SCE Foundation
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Secure. Control. Explore. Организация, призванная защищать человечество 
              от необъяснимых и паранормальных угроз через исследование и документирование.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link to="/about" className="bg-white text-sce-red px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Узнать больше
              </Link>
              <Link to="/objects" className="border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors">
                Архив объектов
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="sce-container">
            <h2 className="text-2xl font-bold mb-8 text-center text-sce-black">
              Миссия SCE Foundation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-sm text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="text-sce-red" size={36} />
                </div>
                <h3 className="text-lg font-bold mb-2">Secure</h3>
                <p className="text-gray-600">
                  Мы обеспечиваем безопасность человечества, изолируя аномальные объекты и сущности,
                  которые представляют угрозу для нормального течения жизни.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-sm text-center">
                <div className="flex justify-center mb-4">
                  <FileText className="text-sce-red" size={36} />
                </div>
                <h3 className="text-lg font-bold mb-2">Control</h3>
                <p className="text-gray-600">
                  Контроль над аномалиями и сбор информации позволяет нам разработать протоколы
                  для предотвращения их негативного влияния на общество.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-sm text-center">
                <div className="flex justify-center mb-4">
                  <Search className="text-sce-red" size={36} />
                </div>
                <h3 className="text-lg font-bold mb-2">Explore</h3>
                <p className="text-gray-600">
                  Изучение аномалий — ключ к пониманию нашего мира. Наши исследователи расширяют
                  границы познания во имя науки и прогресса.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-sce-lightgray">
          <div className="sce-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-sce-red">
                  Объект недели
                </h2>
                
                <SceObject 
                  id="682"
                  name="Хронологический изменитель"
                  objectClass="евклид"
                  containmentProcedures="SCE-682 должен храниться в герметичном контейнере из свинцового сплава размером 40×40×40 см с электромагнитной блокировкой. Доступ к объекту разрешен только персоналу с уровнем допуска 3 и выше. Ежедневно требуется проверка целостности контейнера."
                  description="SCE-682 представляет собой карманные часы, изготовленные предположительно в XVIII веке. При вращении стрелок часов в обратном направлении человеком, удерживающим объект, наблюдается локальный эффект обращения времени в радиусе до 5 метров. Продолжительность эффекта находится в прямой зависимости от угла поворота стрелок. Максимальный зарегистрированный откат времени — 37 минут."
                  imgSrc="/placeholder.svg"
                />
                
              </div>
              
              <div className="space-y-6">
                <RecentObjects objects={demoObjects} />
                
                <div className="bg-white border border-gray-200 p-4 rounded-sm">
                  <h2 className="text-lg font-bold mb-4 text-sce-red border-b border-gray-200 pb-2">
                    Важная информация
                  </h2>
                  <div className="prose prose-sm">
                    <p>
                      Все материалы на этом сайте являются вымышленными. SCE Foundation — 
                      это художественный проект в жанре научной фантастики и городской легенды.
                    </p>
                    <p>
                      Приглашаем творческих авторов присоединиться к развитию нашей вселенной.
                    </p>
                  </div>
                  <div className="mt-4 p-3 bg-sce-gray rounded-sm text-sm">
                    <p className="font-mono">УРОВЕНЬ ОПАСНОСТИ: СРЕДНИЙ</p>
                    <p className="font-mono mt-1">КОД ДОСТУПА: █████-██-███</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
