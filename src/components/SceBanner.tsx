import { AlertCircle } from 'lucide-react';

const SceBanner = () => {
  return (
    <div className="bg-sce-gray border-y border-gray-300 py-3">
      <div className="sce-container">
        <div className="flex items-center">
          <AlertCircle className="text-sce-red mr-2" size={20} />
          <span className="text-sm font-medium">ВНИМАНИЕ: Доступ к материалам SCE Foundation строго регламентирован. Несанкционированный доступ преследуется по закону.</span>
        </div>
      </div>
    </div>
  );
};

export default SceBanner;
