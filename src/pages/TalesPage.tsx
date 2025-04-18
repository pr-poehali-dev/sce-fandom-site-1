import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SceBanner from '@/components/SceBanner';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, Tag } from 'lucide-react';

interface Tale {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  summary: string;
  relatedObject?: string;
}

const talesData: Record<string, Tale[]> = {
  'all': [
    {
      id: 'tale-001',
      title: 'Последний день исследователя',
      author: 'Д-р Волков',
      date: '12.04.2022',
      tags: ['Драма', 'SCE-173'],
      summary: 'История о последнем дне исследователя Фонда, который был назначен на изучение объекта SCE-173.',
      relatedObject: '173'
    },
    {
      id: 'tale-002',
      title: 'Утро в Зоне 19',
      author: 'Агент Сорокин',
      date: '03.08.2022',
      tags: ['Повседневность', 'Зона 19'],
      summary: 'Описание обычного утра в Зоне 19, одном из основных комплексов содержания SCE.'
    },
    {
      id: 'tale-003',
      title: 'Хроники Хронологического изменителя',
      author: 'Исследователь Петрова',
      date: '27.12.2022',
      tags: ['Научная фантастика', 'SCE-682'],
      summary: 'Серия экспериментальных случаев использования SCE-682 и их неожиданные последствия.',
      relatedObject: '682'
    },
    {
      id: 'tale-004',
      title: 'Разговор с Зеркалом',
      author: 'Д-р Николаев',
      date: '15.02.2023',
      tags: ['Мистика', 'SCE-001'],
      summary: 'Запись разговора между исследователем и SCE-001 во время эксперимента.',
      relatedObject: '001'
    },
    {
      id: 'tale-005',
      title: 'Чаепитие с Чумным доктором',
      author: 'Лейтенант Морозов',
      date: '04.05.2023',
      tags: ['Юмор', 'SCE-049'],
      summary: 'Сатирический рассказ о воображаемой встрече сотрудника службы безопасности с SCE-049.',
      relatedObject: '049'
    },
    {
      id: 'tale-006',
      title: 'Теория заговора',
      author: 'Д-р Кузнецов',
      date: '19.07.2023',
      tags: ['Теория заговора', 'O5'],
      summary: 'Исследование популярных теорий заговора о SCE Foundation и их опровержение с научной точки зрения.'
    }
  ],
  'by-series': [
    {
      id: 'tale-001',
      title: 'Последний день исследователя',
      author: 'Д-р Волков',
      date: '12.04.2022',
      tags: ['Драма', 'SCE-173', 'Серия I'],
      summary: 'История о последнем дне исследователя Фонда, который был назначен на изучение объекта SCE-173.',
      relatedObject: '173'
    },
    {
      id: 'tale-003',
      title: 'Хроники Хронологического изменителя',
      author: 'Исследователь Петрова',
      date: '27.12.2022',
      tags: ['Научная фантастика', 'SCE-682', 'Серия I'],
      summary: 'Серия экспериментальных случаев использования SCE-682 и их неожиданные последствия.',
      relatedObject: '682'
    },
    {
      id: 'tale-007',
      title: 'Разумная оригами и ее бумажный мир',
      author: 'Д-р Смирнов',
      date: '08.09.2023',
      tags: ['Фэнтези', 'SCE-1048', 'Серия II'],
      summary: 'Рассказ о сложных отношениях между оригами-существами, созданными SCE-1048.',
      relatedObject: '1048'
    },
    {
      id: 'tale-008',
      title: 'Исследователи Бездны',
      author: 'Профессор Антонов',
      date: '22.11.2023',
      tags: ['Хоррор', 'SCE-2317', 'Серия III'],
      summary: 'Рассказ о группе исследователей, отправившихся в экспедицию через SCE-2317.',
      relatedObject: '2317'
    }
  ],
  'contest': [
    {
      id: 'contest-001',
      title: 'Победитель конкурса "Страх в Фонде", 2022',
      author: 'Анонимный автор',
      date: '31.10.2022',
      tags: ['Конкурс', 'Хоррор'],
      summary: 'Рассказ, победивший в ежегодном конкурсе хоррор-историй об объектах SCE.'
    },
    {
      id: 'contest-002',
      title: 'Лучший научный рассказ, 2023',
      author: 'Д-р Федоров',
      date: '15.03.2023',
      tags: ['Конкурс', 'Наука'],
      summary: 'Научно-фантастический рассказ о теоретическом использовании аномальных объектов для развития технологий.'
    },
    {
      id: 'contest-003',
      title: 'Конкурс новичков, 2023',
      author: 'Практикант Соколова',
      date: '01.06.2023',
      tags: ['Конкурс', 'Новички'],
      summary: 'Победитель конкурса рассказов среди новых сотрудников Фонда.'
    }
  ]
};

const TalesPage = () => {
  const { category = 'all' } = useParams<{ category?: 'all' | 'by-series' | 'contest' }>();
  
  // Проверяем существование категории, если нет - используем 'all'
  const currentCategory = talesData[category] ? category : 'all';
  const tales = talesData[currentCategory];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SceBanner />
      
      <main className="flex-1 py-8 bg-sce-lightgray">
        <div className="sce-container">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
            <h1 className="text-2xl font-bold text-sce-red mb-4 pb-4 border-b border-gray-200">
              Архив рассказов SCE Foundation
            </h1>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Категории рассказов</h2>
              <div className="flex flex-wrap space-x-2 space-y-2 sm:space-y-0">
                <Link 
                  to="/tales" 
                  className={`px-4 py-2 border rounded-sm ${currentCategory === 'all' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Все рассказы
                </Link>
                <Link 
                  to="/tales-by-series" 
                  className={`px-4 py-2 border rounded-sm ${currentCategory === 'by-series' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Рассказы по сериям
                </Link>
                <Link 
                  to="/contest-archive" 
                  className={`px-4 py-2 border rounded-sm ${currentCategory === 'contest' ? 'bg-sce-red text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Архив конкурсов
                </Link>
              </div>
            </div>
            
            <div className="mb-6 bg-gray-100 p-4 rounded-sm">
              <p className="text-sm">
                В нашем архиве собраны рассказы, написанные сотрудниками и авторами SCE Foundation.
                Эти истории дополняют официальную документацию и дают более глубокое понимание 
                мира аномальных объектов и людей, работающих с ними.
              </p>
            </div>
            
            <div className="space-y-6">
              {tales.map((tale) => (
                <article key={tale.id} className="border border-gray-200 rounded-sm p-4 hover:shadow-sm transition-shadow">
                  <h2 className="text-lg font-bold text-sce-red mb-2">
                    <Link to={`/tale/${tale.id}`} className="hover:underline">
                      {tale.title}
                    </Link>
                  </h2>
                  
                  <div className="flex flex-wrap gap-y-2 gap-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{tale.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{tale.date}</span>
                    </div>
                    {tale.relatedObject && (
                      <div className="flex items-center">
                        <BookOpen size={16} className="mr-1" />
                        <Link to={`/object/${tale.relatedObject}`} className="text-sce-red hover:underline">
                          SCE-{tale.relatedObject}
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4">{tale.summary}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tale.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="flex items-center text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
              <p>
                Показано {tales.length} рассказов. Для доступа к архивным материалам 
                требуется повышение уровня допуска.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TalesPage;
