import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Shield, Building, BookOpen, Users, History, Search, FileText, MapPin } from 'lucide-react';

const AboutFoundation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1 py-8 bg-sce-lightgray">
        <div className="sce-container">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            {/* Хлебные крошки */}
            <div className="mb-6 flex items-center text-sm">
              <Link to="/" className="text-gray-500 hover:text-sce-red">Главная</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">О Фонде</span>
            </div>
            
            {/* Заголовок */}
            <div className="flex items-center mb-6">
              <Shield className="text-sce-red h-10 w-10 mr-4" />
              <h1 className="text-3xl font-bold text-sce-red">О Фонде SCE</h1>
            </div>
            
            {/* Вводный текст */}
            <p className="text-lg mb-8">
              SCE Foundation (Фонд SCE) — международная организация, ответственная за сдерживание аномальных объектов, существ и явлений, 
              угрожающих нормальному существованию человечества. Наша миссия — обеспечить безопасность и сохранить нормальность мира.
            </p>
            
            <Separator className="my-6" />
            
            {/* Табы с информацией */}
            <Tabs defaultValue="mission" className="mb-8">
              <TabsList className="w-full flex justify-start overflow-x-auto mb-6">
                <TabsTrigger value="mission" className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Миссия
                </TabsTrigger>
                <TabsTrigger value="structure" className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Структура
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center">
                  <History className="h-4 w-4 mr-2" />
                  История
                </TabsTrigger>
                <TabsTrigger value="locations" className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Объекты
                </TabsTrigger>
                <TabsTrigger value="classification" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Классификация
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Миссия Фонда</h2>
                <p>Миссия Фонда SCE заключается в трех основных принципах:</p>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-gray-50 p-4 border-l-4 border-sce-red">
                    <h3 className="font-bold mb-2">Сдерживание</h3>
                    <p className="text-gray-700">Обнаружение и сдерживание аномалий для предотвращения их влияния на обычный мир и защиты населения.</p>
                  </div>
                  <div className="bg-gray-50 p-4 border-l-4 border-sce-red">
                    <h3 className="font-bold mb-2">Изучение</h3>
                    <p className="text-gray-700">Научное исследование аномальных явлений для понимания их природы, свойств и потенциального применения.</p>
                  </div>
                  <div className="bg-gray-50 p-4 border-l-4 border-sce-red">
                    <h3 className="font-bold mb-2">Защита</h3>
                    <p className="text-gray-700">Предотвращение массовой паники и сохранение нормальной жизни общества путем сокрытия существования аномалий.</p>
                  </div>
                </div>
                <p>Фонд SCE работает независимо от правительств и международных организаций, имея собственные ресурсы и инфраструктуру для выполнения своей миссии. Наши операции охватывают весь земной шар и выходят за его пределы, когда это необходимо.</p>
              </TabsContent>
              
              <TabsContent value="structure" className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Структура Фонда</h2>
                <p>Фонд SCE имеет иерархическую структуру управления:</p>
                
                <div className="space-y-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Совет O5</h3>
                    <p className="text-gray-700">Высший орган управления, состоящий из 13 человек с максимальным уровнем допуска. Совет принимает стратегические решения и отвечает за общее направление деятельности Фонда.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Административные департаменты</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Департамент логистики и снабжения</li>
                      <li>Департамент финансов и бюджетирования</li>
                      <li>Департамент кадров и управления персоналом</li>
                      <li>Департамент внешних операций и взаимодействия</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Научный отдел</h3>
                    <p className="text-gray-700">Отвечает за исследования аномальных объектов, разработку процедур содержания и анализ данных.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Служба безопасности</h3>
                    <p className="text-gray-700">Обеспечивает физическую охрану объектов, персонала и аномалий. Включает в себя мобильные группы реагирования (МГР) для полевых операций.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Этический комитет</h3>
                    <p className="text-gray-700">Независимый орган, контролирующий соблюдение этических норм при проведении исследований и процедур содержания.</p>
                  </div>
                </div>
                
                <p>Персонал Фонда имеет различные уровни допуска (от 0 до 5), определяющие доступ к информации и объектам. Уровень допуска присваивается в зависимости от должности, опыта и необходимости.</p>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">История Фонда</h2>
                <div className="space-y-6 my-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-sce-red text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">1882</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Первые шаги</h3>
                      <p className="text-gray-700">Группа ученых и исследователей из разных стран объединилась для изучения и сдерживания необъяснимых явлений. Это было началом организации, которая позже станет известна как Фонд SCE.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-sce-red text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">1904</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Формальное основание</h3>
                      <p className="text-gray-700">Официальное учреждение Фонда SCE как международной организации с собственным уставом и структурой управления. Первым объектом, официально классифицированным и содержащимся, стал SCE-001.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-sce-red text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">1939-45</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Период Второй мировой войны</h3>
                      <p className="text-gray-700">Фонд столкнулся с крупнейшим кризисом в своей истории, когда воюющие стороны пытались использовать аномальные объекты как оружие. Операция "Обелиск" предотвратила несколько потенциальных К-сценариев.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-sce-red text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">1976</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Реорганизация</h3>
                      <p className="text-gray-700">После серии инцидентов была проведена масштабная реорганизация структуры Фонда. Был создан Совет O5 в его современном виде, а также внедрена действующая система классификации аномалий.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-sce-red text-white font-bold rounded-full w-16 h-16 flex items-center justify-center">Наши дни</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Современная эпоха</h3>
                      <p className="text-gray-700">Сегодня Фонд SCE — это глобальная организация с тысячами сотрудников и сотнями объектов содержания. Мы продолжаем адаптироваться к новым вызовам и угрозам, сохраняя верность нашей миссии по защите человечества.</p>
                    </div>
                  </div>
                </div>
                <p>История Фонда полна как успехов, так и трагедий. Многие детали нашей истории остаются засекреченными даже для большинства сотрудников Фонда.</p>
              </TabsContent>
              
              <TabsContent value="locations" className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Объекты Фонда</h2>
                <p>Фонд SCE управляет многочисленными объектами по всему миру, включая:</p>
                
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Зоны содержания</h3>
                    <p className="text-gray-700">Основные комплексы для содержания аномалий. Наиболее известные: Зона 19 (Россия), Зона 22 (США), Зона 15 (Япония).</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Исследовательские центры</h3>
                    <p className="text-gray-700">Специализированные учреждения для изучения аномальных явлений, часто связанные с академическими институтами через программы прикрытия.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Логистические узлы</h3>
                    <p className="text-gray-700">Объекты, обеспечивающие транспортировку, хранение и распределение ресурсов Фонда.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-sm">
                    <h3 className="font-bold mb-2">Полевые офисы</h3>
                    <p className="text-gray-700">Небольшие представительства Фонда в различных городах мира, маскирующиеся под обычные офисы и предприятия.</p>
                  </div>
                </div>
                
                <p>Все объекты Фонда имеют несколько уровней безопасности и системы автономного обеспечения, позволяющие им функционировать даже в условиях полной изоляции.</p>
              </TabsContent>
              
              <TabsContent value="classification" className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Система классификации</h2>
                <p>Фонд SCE использует комплексную систему классификации аномалий для определения методов их содержания и уровня угрозы:</p>
                
                <div className="space-y-4 my-6">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500">
                    <h3 className="font-bold mb-2">Класс "Безопасный"</h3>
                    <p className="text-gray-700">Аномалии, которые могут быть надежно содержаны и не представляют серьезной угрозы даже при нарушении протоколов содержания.</p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                    <h3 className="font-bold mb-2">Класс "Евклид"</h3>
                    <p className="text-gray-700">Аномалии, требующие специальных условий содержания и представляющие умеренную угрозу. Часто непредсказуемы или слабо изучены.</p>
                  </div>
                  
                  <div className="p-4 bg-red-50 border-l-4 border-red-500">
                    <h3 className="font-bold mb-2">Класс "Кетер"</h3>
                    <p className="text-gray-700">Чрезвычайно опасные аномалии, которые трудно содержать и могут представлять экзистенциальную угрозу при утечке.</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border-l-4 border-gray-500">
                    <h3 className="font-bold mb-2">Класс "Нейтрализованный"</h3>
                    <p className="text-gray-700">Аномалии, которые были уничтожены или полностью лишены своих аномальных свойств.</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                    <h3 className="font-bold mb-2">Класс "Таумиэль"</h3>
                    <p className="text-gray-700">Особые аномалии, используемые Фондом для содержания других аномалий. Информация о них строго ограничена.</p>
                  </div>
                </div>
                
                <p>Кроме основных классов, Фонд использует дополнительные обозначения и протоколы для особых случаев, включая мемитические опасности, когнитивные угрозы и эсотерические явления.</p>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-6" />
            
            {/* Кнопки перехода в другие разделы */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button asChild variant="outline" className="h-auto py-4 px-6 border-sce-red text-sce-red hover:bg-sce-red/10">
                <Link to="/object/173" className="flex flex-col items-center">
                  <Search className="h-6 w-6 mb-2" />
                  <span className="font-bold">Изучить объекты</span>
                  <span className="text-sm text-gray-600">Каталог аномалий</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="h-auto py-4 px-6 border-sce-red text-sce-red hover:bg-sce-red/10">
                <Link to="/tales" className="flex flex-col items-center">
                  <BookOpen className="h-6 w-6 mb-2" />
                  <span className="font-bold">Читать рассказы</span>
                  <span className="text-sm text-gray-600">Архив историй Фонда</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="h-auto py-4 px-6 border-sce-red text-sce-red hover:bg-sce-red/10">
                <Link to="/" className="flex flex-col items-center">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="font-bold">Главная страница</span>
                  <span className="text-sm text-gray-600">Вернуться на главную</span>
                </Link>
              </Button>
            </div>
            
            {/* Подвал страницы */}
            <div className="bg-gray-50 p-4 rounded-sm text-center text-gray-600 text-sm">
              <p>Данная информация предоставлена согласно директиве O5-35 об общедоступных материалах Фонда.</p>
              <p>Последнее обновление: 15.06.2023</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutFoundation;
