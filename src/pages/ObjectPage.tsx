import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import { LockIcon, AlertTriangle, Shield, FileWarning, Clock, UserCheck } from 'lucide-react';

const objectClasses = {
  'безопасный': {
    icon: <Shield className="text-green-600" size={24} />,
    color: 'text-green-600',
    description: 'Объекты класса «Безопасный» легко и надежно содержатся. Это не означает, что такие объекты не опасны в определенных обстоятельствах.'
  },
  'евклид': {
    icon: <AlertTriangle className="text-yellow-600" size={24} />,
    color: 'text-yellow-600',
    description: 'Объекты класса «Евклид» требуют специфических условий содержания или недостаточно изучены. Содержание таких объектов может представлять сложности.'
  },
  'кетер': {
    icon: <LockIcon className="text-sce-red" size={24} />,
    color: 'text-sce-red',
    description: 'Объекты класса «Кетер» чрезвычайно сложно содержать стабильно. Зачастую требуются специальные протоколы и значительные ресурсы.'
  }
};

const ObjectPage = () => {
  const { id = '682' } = useParams();
  
  // В реальном приложении здесь был бы API-запрос для получения данных об объекте по ID
  const object = {
    id: id,
    name: 'Хронологический изменитель',
    objectClass: 'евклид' as keyof typeof objectClasses,
    containmentProcedures: `SCE-${id} должен храниться в герметичном контейнере из свинцового сплава размером 40×40×40 см с электромагнитной блокировкой. Доступ к объекту разрешен только персоналу с уровнем допуска 3 и выше. Ежедневно требуется проверка целостности контейнера.

Во время тестирования обязательно присутствие не менее двух сотрудников службы безопасности и одного исследователя с уровнем допуска 4. Все тесты должны проводиться в специально оборудованном помещении с временной изоляцией.

В случае неконтролируемой активации необходимо немедленно изолировать объект и применить временной фиксатор типа "Янус-7".`,
    description: `SCE-${id} представляет собой карманные часы, изготовленные предположительно в XVIII веке. Корпус выполнен из серебра 925 пробы с гравировкой в виде символов неизвестного происхождения. Циферблат из слоновой кости с римскими цифрами. Механизм часов функционирует без необходимости завода.

При вращении стрелок часов в обратном направлении человеком, удерживающим объект, наблюдается локальный эффект обращения времени в радиусе до 5 метров. Продолжительность эффекта находится в прямой зависимости от угла поворота стрелок. Максимальный зарегистрированный откат времени — 37 минут.

Сотрудники, подвергшиеся воздействию SCE-${id}, сохраняют память о событиях "отмененной" временной линии. Наблюдаются случаи временного раздвоения сознания и дезориентации.`,
    discoveryDate: '15.06.2014',
    discoveryLocation: 'Антикварный магазин, Прага, Чехия',
    securityLevel: '3/682',
    additionalInfo: `Во время инцидента SCE-${id}-А (см. отчет 32-В) произошло временное наложение двух реальностей, что привело к значительным пространственно-временным искажениям. Требуется дополнительное исследование взаимодействия объекта с другими временными аномалиями.

Теория доктора ██████ о связи SCE-${id} с древним орденом "Хранителей Времени" находится на стадии проверки. Найденные символы на корпусе частично соответствуют артефактам, обнаруженным при раскопках в ██████, датируемым ≈1500 г. до н.э.`,
    imgSrc: "/placeholder.svg"
  };
  
  const classInfo = objectClasses[object.objectClass];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1 py-8 bg-sce-lightgray">
        <div className="sce-container">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-sce-red mb-2 sm:mb-0">
                SCE-{object.id}: {object.name}
              </h1>
              
              <div className="flex items-center gap-2">
                {classInfo.icon}
                <span className={`font-medium ${classInfo.color}`}>
                  Класс: {object.objectClass}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <section>
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileWarning size={20} />
                    Процедуры содержания
                  </h2>
                  <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-line">
                    {object.containmentProcedures}
                  </div>
                </section>
                
                <section>
                  <h2 className="text-xl font-bold mb-3">Описание</h2>
                  <div className="text-base whitespace-pre-line">
                    {object.description}
                  </div>
                </section>
                
                <section>
                  <h2 className="text-xl font-bold mb-3">Дополнительная информация</h2>
                  <div className="text-base whitespace-pre-line">
                    {object.additionalInfo}
                  </div>
                </section>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span>Обновлено: 26.09.2023</span>
                      <span>Документ SCE-{object.id}-D</span>
                    </div>
                    <div className="mt-2 p-2 bg-gray-100 rounded border border-gray-200 font-mono text-xs">
                      УРОВЕНЬ ДОПУСКА: {object.securityLevel} • ТОЛЬКО ДЛЯ СЛУЖЕБНОГО ПОЛЬЗОВАНИЯ
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <img
                    src={object.imgSrc}
                    alt={`SCE-${object.id}`}
                    className="w-full border border-gray-200 rounded-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1 italic">
                    Изображение SCE-{object.id}, утверждено для уровня допуска 3 и выше
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-sm border border-gray-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Clock size={16} />
                    Информация об обнаружении
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Дата:</strong> {object.discoveryDate}</li>
                    <li><strong>Место:</strong> {object.discoveryLocation}</li>
                    <li><strong>Уровень безопасности:</strong> {object.securityLevel}</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-sm border border-gray-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <UserCheck size={16} />
                    Классификация объекта
                  </h3>
                  <div className={`flex items-center gap-2 ${classInfo.color} mb-2`}>
                    {classInfo.icon}
                    <span className="font-medium">{object.objectClass}</span>
                  </div>
                  <p className="text-sm">{classInfo.description}</p>
                </div>
                
                <div className="bg-sce-red text-white p-4 rounded-sm">
                  <h3 className="font-bold mb-2">Предупреждение</h3>
                  <p className="text-sm">
                    Несанкционированное распространение информации о SCE объектах 
                    является нарушением протокола безопасности и преследуется 
                    по внутренним правилам Фонда.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ObjectPage;
