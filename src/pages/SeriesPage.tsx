import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import { Link } from 'react-router-dom';

interface SceObjectPreview {
  id: string;
  name: string;
  objectClass: string;
  brief: string;
}

const seriesData = {
  'i': {
    title: 'Серия I',
    description: 'Серия I включает первые 999 объектов SCE. Это фундаментальные объекты, с которых началась история документирования аномалий.',
    objects: [
      {
        id: '001',
        name: 'Искривляющее зеркало',
        objectClass: 'безопасный',
        brief: 'Зеркало, отражающее альтернативные реальности вместо обычного отражения.'
      },
      {
        id: '049',
        name: 'Чумной доктор',
        objectClass: 'евклид',
        brief: 'Гуманоидное существо в костюме средневекового чумного доктора с аномальными способностями.'
      },
      {
        id: '087',
        name: 'Пространственная аномалия',
        objectClass: 'евклид',
        brief: 'Замкнутое пространство, в котором законы физики работают иначе.'
      },
      {
        id: '106',
        name: 'Старик',
        objectClass: 'кетер',
        brief: 'Гуманоидная сущность, способная проходить сквозь твердые объекты и вызывать коррозию материалов.'
      },
      {
        id: '173',
        name: 'Статуя-наблюдатель',
        objectClass: 'кетер',
        brief: 'Объект, который перемещается только когда на него не смотрят.'
      },
      {
        id: '682',
        name: 'Хронологический изменитель',
        objectClass: 'евклид',
        brief: 'Часы, позволяющие локально манипулировать течением времени.'
      }
    ]
  },
  'ii': {
    title: 'Серия II',
    description: 'Серия II включает объекты SCE с номерами от 1000 до 1999. В этой серии содержатся более сложные и необычные аномалии.',
    objects: [
      {
        id: '1048',
        name: 'Разумный оригами',
        objectClass: 'евклид',
        brief: 'Бумажная фигурка, обладающая сознанием и способностью размножаться.'
      },
      {
        id: '1123',
        name: 'Временной маяк',
        objectClass: 'евклид',
        brief: 'Устройство, передающее сигналы из различных временных периодов.'
      },
      {
        id: '1471',
        name: 'Портал в иной мир',
        objectClass: 'кетер',
        brief: 'Зеркальная поверхность, открывающая доступ в параллельное измерение.'
      }
    ]
  },
  'iii': {
    title: 'Серия III',
    description: 'Серия III включает объекты SCE с номерами от 2000 до 2999. Здесь представлены самые новые и малоизученные аномалии.',
    objects: [
      {
        id: '2000',
        name: 'Реконструктор событий',
        objectClass: 'безопасный',
        brief: 'Устройство, воссоздающее визуальную проекцию прошлых событий.'
      },
      {
        id: '2317',
        name: 'Врата в бездну',
        objectClass: 'кетер',
        brief: 'Пространственный разлом, ведущий в неизвестное измерение.'
      },
      {
        id: '2521',
        name: 'Неописуемое',
        objectClass: 'кетер',
        brief: 'Сущность, реагирующая на письменное и устное упоминание о ней.'
      }
    ]
  }
};

// Определение цветов для классов объектов
const objectClassColors = {
  'безопасный': 'bg-green-100 text-green-800 border-green-200',
  'евклид': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'кетер': 'bg-red-100 text-red-800 border-red-200'
};

const SeriesPage = () => {
  const { seriesId = 'i' } = useParams<{ seriesId: 'i' | 'ii' | 'iii' }>();
  
  const series = seriesData[seriesId as keyof typeof seriesData];
  
  if (!series) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <SceBanner />
        <main className="flex-1 py-8 bg-sce-lightgray">
          <div className="sce-container">
            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <h1 className="text-2xl font-bold text-sce-red mb-4">Серия не найдена</h1>
              <p className="mb-4">Запрашиваемая серия объектов SCE не существует в базе данных.</p>
              <Link to="/" className="text-sce-red hover:underline">Вернуться на главную</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1 py-8 bg-sce-lightgray">
        <div className="sce-container">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            <h1 className="text-2xl font-bold text-sce-red mb-4 pb-4 border-b border-gray-200">
              SCE {series.title}
            </h1>
            
            <div className="mb-6 bg-gray-100 p-4 rounded-sm">
              <p>{series.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Навигация по сериям</h2>
              <div className="flex space-x-4">
                <Link 
                  to="/series/i" 
                  className={`px-4 py-2 border ${seriesId === 'i' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Серия I
                </Link>
                <Link 
                  to="/series/ii" 
                  className={`px-4 py-2 border ${seriesId === 'ii' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Серия II
                </Link>
                <Link 
                  to="/series/iii" 
                  className={`px-4 py-2 border ${seriesId === 'iii' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Серия III
                </Link>
              </div>
            </div>
            
            <h2 className="text-xl font-bold mb-4">Список объектов</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {series.objects.map((object) => (
                <Link
                  key={object.id}
                  to={`/object/${object.id}`}
                  className="border border-gray-200 rounded-sm p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sce-red">SCE-{object.id}</h3>
                    <span className={`text-xs px-2 py-1 rounded border ${objectClassColors[object.objectClass as keyof typeof objectClassColors]}`}>
                      {object.objectClass}
                    </span>
                  </div>
                  <h4 className="font-medium mb-2">{object.name}</h4>
                  <p className="text-sm text-gray-600">{object.brief}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
              <p>
                Отображено {series.objects.length} объектов из серии {series.title}.
                Для доступа к полному списку требуется повышение уровня допуска.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeriesPage;
