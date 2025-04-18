import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LockIcon, AlertTriangle, Shield } from 'lucide-react';

interface SceObjectProps {
  id: string;
  name: string;
  objectClass: 'безопасный' | 'евклид' | 'кетер';
  description: string;
  containmentProcedures: string;
  imgSrc?: string;
}

const objectClassIcons = {
  'безопасный': <Shield className="text-green-600" size={20} />,
  'евклид': <AlertTriangle className="text-yellow-600" size={20} />,
  'кетер': <LockIcon className="text-sce-red" size={20} />
};

const objectClassColors = {
  'безопасный': 'bg-green-100 text-green-800',
  'евклид': 'bg-yellow-100 text-yellow-800',
  'кетер': 'bg-red-100 text-red-800'
};

const SceObject: FC<SceObjectProps> = ({ 
  id, 
  name, 
  objectClass, 
  description, 
  containmentProcedures,
  imgSrc
}) => {
  return (
    <article className="sce-article shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          <Link to={`/object/${id}`} className="text-sce-red hover:underline">
            SCE-{id}: {name}
          </Link>
        </h2>
        <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${objectClassColors[objectClass]}`}>
          {objectClassIcons[objectClass]}
          <span className="ml-1">Класс: {objectClass}</span>
        </div>
      </div>
      
      {imgSrc && (
        <div className="mb-4">
          <img 
            src={imgSrc} 
            alt={`SCE-${id}`} 
            className="w-full max-h-64 object-cover rounded border border-gray-200"
          />
          <p className="text-xs text-gray-500 mt-1 italic">
            Изображение SCE-{id}, утверждено для уровня допуска 2 и выше
          </p>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Процедуры содержания:</h3>
        <div className="bg-gray-100 p-3 rounded text-sm">
          {containmentProcedures}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-2">Описание:</h3>
        <p className="text-base">
          {description}
        </p>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between text-xs text-gray-500">
        <span>Последнее обновление: {new Date().toLocaleDateString()}</span>
        <span>Допуск: Уровень 2</span>
      </div>
    </article>
  );
};

export default SceObject;
