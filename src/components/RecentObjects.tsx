import { FC } from 'react';
import { Link } from 'react-router-dom';

interface SceObjectPreview {
  id: string;
  name: string;
  objectClass: string;
  brief: string;
}

interface RecentObjectsProps {
  objects: SceObjectPreview[];
}

const RecentObjects: FC<RecentObjectsProps> = ({ objects }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-sm">
      <h2 className="text-lg font-bold mb-4 text-sce-red border-b border-gray-200 pb-2">
        Недавно обнаруженные объекты
      </h2>
      
      <ul className="space-y-4">
        {objects.map((object) => (
          <li key={object.id} className="pb-3 border-b border-gray-100 last:border-0">
            <Link to={`/object/${object.id}`} className="block hover:bg-gray-50 transition duration-150 ease-in-out rounded p-2 -mx-2">
              <div className="flex justify-between">
                <h3 className="font-medium">SCE-{object.id}: {object.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800">
                  {object.objectClass}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{object.brief}</p>
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 text-center">
        <Link 
          to="/objects" 
          className="inline-block text-sm text-sce-red hover:underline"
        >
          Просмотреть все объекты SCE →
        </Link>
      </div>
    </div>
  );
};

export default RecentObjects;
