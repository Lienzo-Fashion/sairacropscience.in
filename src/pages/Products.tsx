import React from 'react';
import { Search } from 'lucide-react';


interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
}

const products: Product[] =  [
    {
      id: '1',
      name: 'Spinark',
      description: ' Organic Bio insecticide works on Thrips, Whitefly, Aphids, Jassids, Mites, and other sucking pests.',
      price: "1800 per Litre" ,
      image: '../Images/Spinark.jpg',
      category: 'Insecticide',
      inStock: true
    },
    {
      id: '2',
      name: 'Poras',
      description: 'Effective insect elimination formula  for Millibugs, Thrips, Whitefly, Aphids, Jassids, Mites, and other sucking pests.',
      price: "1200 per Litre",
      image: '../Images/poras.jpg',
      category: 'Insecticide',
      inStock: true
    },
    {
      id: '3',
      name: 'RDX',
      description: 'Controls the growth of harmful insects and pests like bolworm, caterpillar, and other insects.',
      price: "2200 per Litre",
      image: '../Images/rdx.jpg',
      category: 'Insecticide',
      inStock: true
    },
    {
      id: '4',
      name: 'D-CONTROLL 40',
      description: 'Advanced fungal infection protection. Effective against Downey Mildew, Powdery Mildew, and other fungal infections.',
      price: "550 per Litre",
      image: '../Images/D_control.jpg',
      category: 'Bio Fungicide',
      inStock: true
    },
    {
      id: '5',
      name: 'Blaster',
      description: 'Advanced fungal infection protection. Effective against Downey Mildew, Powdery Mildew, and other fungal infections.',
      price: "1300 per Litre",
      image: '../Images/blaster.jpg',
      category: 'Bio Fungicide',
      inStock: true
    },
    {
      id: '6',
      name: 'Kito-10',
      description: 'Advanced fungal infection protection. Effective against Downey Mildew, Powdery Mildew, and other fungal infections.',
      price: "1300 per Litre",
      image: '../Images/kito.jpg',
      category: 'Bio Fungicide',
      inStock: true
    },
    {
      id: '7',
      name: 'AgroScope',
      description: 'Ultimate plant Tonic.',
      price: "600 per 100ml",
      image: '../Images/agroScope.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '8',
      name: 'Kripton',
      description: 'Powerful BioStimulant.',
      price: "2600 per Litre",
      image: '../Images/kripton.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '9',
      name: 'BrassoKing 0.04%',
      description: 'Brassonilid 0.04%',
      price: "2400 per Litre",
      image: '../Images/brassoking.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '10',
      name: 'Triple Power',
      description: 'BioStimulant.',
      price: "1800 per Litre",
      image: '../Images/triple_power.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '11',
      name: 'Kelpek',
      description: 'Green SeaWeed Extract.',
      price: "750 per Litre",
      image: '../Images/kelpek.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '12',
      name: 'Elonger Master',
      description: 'Biostimulant for Elongation of Berries.',
      price: "2600 per Litre",
      image: '../Images/elonger_master.jpg',
      category: 'Plant Growth Regulator',
      inStock: true
    },
    {
      id: '13',
      name: 'Neemax 10000',
      description: 'Organic Bio Miticide controlling Thrips, Whitefly, Aphids, Jassids, Mites, and other sucking pests',
      price: "950 per Litre",
      image: '../Images/neemax.jpg',
      category: 'Bio Miticide',
      inStock: true
    },
    {
      id: '14',
      name: 'Sai Wet 303',
      description: 'Silicon Based Spreader.',
      price: "1200 per Litre",
      image: '../Images/sai_wet.jpg',
      category: 'Adjuvant Absorbent Penetrator Spreader',
      inStock: true
    },
    {
      id: '15',
      name: 'Active+',
      description: 'Technical Spreader.',
      price: "310 per Litre",
      image: '../Images/active+.jpg',
      category: 'Adjuvant Absorbent Penetrator Spreader',
      inStock: true
    },
    {
      id: '16',
      name: 'Super Stick',
      description: 'Silicon Based Spreader.',
      price: "1200 per Litre",
      image: '../Images/super_stick.jpg',
      category: 'Adjuvant Absorbent Penetrator Spreader',
      inStock: true
    },
    {
      id: '17',
      name: 'Suzooka',
      description: 'Humic Acid 98%',
      price: "750 per Kg",
      image: '../Images/suzooka.jpg',
      category: 'Plant Growth Booster',
      inStock: true
    },
    {
      id: '18',
      name: 'Soil Booster',
      description: 'Fulvic Acid 95%',
      price: "950 per Kg",
      image: '',
      category: 'Plant Growth Booster',
      inStock: true
    },
    {
      id: '18',
      name: 'Amisol',
      description: 'Amino Acid 85%',
      price: "1050 per Kg",
      image: '../Images/amisol.jpg',
      category: 'Plant Growth Booster',
      inStock: true
    },
    {
      id: '19',
      name: 'Amrut Bio N',
      description: 'Azobacter Bio Fertilizer',
      price: "350 per Litre",
      image: '../Images/amrut_n.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '20',
      name: 'Amrut Bio PSB',
      description: 'Phosphate Solubilizing Bacteria Bio Fertilizer',
      price: "350 per Litre",
      image: '../Images/amrut_psb.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '21',
      name: 'Amrut Bio KMB',
      description: 'Potassium Mobilizing Bacteria Bio Fertilizer',
      price: "350 per Litre",
      image: '../Images/amrut_kmb.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '22',
      name: 'Amrut Bio Zn',
      description: 'Zinc Mobilizing Bacteria Bio Fertilizer',
      price: "350 per Litre",
      image: '../Images/amrut_zn.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '23',
      name: 'Amrut RhizaKit',
      description: 'Rhizobium Bio Fertilizer',
      price: "450 per Litre",
      image: '../Images/rhiza.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '24',
      name: 'Micro-Rhiza',
      description: 'Mycorrhiza IP - 10000 - Bio Fertilizer',
      price: "450 per Litre",
      image: '../Images/micro_rhiza.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
    {
      id: '25',
      name: 'BaciGain',
      description: 'Bacillus Subtilis Bio Pesticide',
      price: "350 per Litre",
      image: '../Images/bassi_gain.jpg',
      category: 'Bio Pesticide',
      inStock: true
    },
    {
      id: '26',
      name: 'PseudoGain',
      description: 'Pseudomonas Fluorescens Bio Pesticide',
      price: "350 per Litre",
      image: '../Images/psudo_gain.jpg',
      category: 'Bio Pesticide',
      inStock: true
    },
    {
      id: '27',
      name: 'TricoGain',
      description: 'Trichoderma Viride Bio Pesticide',
      price: "350 per Litre",
      image: '../Images/trico.jpg',
      category: 'Bio Pesticide',
      inStock: true
    },
    {
      id: '28',
      name: 'VertiGain',
      description: 'Verticillium Lecanii Bio Pesticide',
      price: "350 per Litre",
      image: '../Images/verti.jpg',
      category: 'Bio Pesticide',
      inStock: true
    },
    {
      id: '29',
      name: 'Sil Green',
      description: 'Silicon Powder',
      price: "350 per Kg",
      image: '../Images/sil_green.jpg',
      category: 'Plant Growth Booster',
      inStock: true
    },
    {
      id: '30',
      name: 'Amphillo',
      description: 'Ampelomyces Quisqualis Bio Funigicide',
      price: "450 per Litre",
      image: '../Images/amphilo.jpg',
      category: 'Bio Fungicide',
      inStock: true
    },
    {
      id: '31',
      name: 'NPK Conso',
      description: 'NPK consortium Bio Fertilizer',
      price: "450 per Litre",
      image: '../Images/amrut_NPK.jpg',
      category: 'Bio Fertilizer',
      inStock: true
    },
  ];

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-3xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Insecticide">Insecticide</option>
          <option value="Bio Pesticide">Bio Pesticide</option>
          <option value="Bio Miticide">Bio Miticide</option>
          <option value="Bio Fertilizer">Bio Fertilizer</option>
          <option value="Bio Fungicide">Bio Fungicide</option>
          <option value="Adjuvant Absorbent Penetrator Spreader">Adjuvant Absorbent Penetrator Spreader</option>
          <option value="Plant Growth Regulator">Plant Growth Regulator</option>
          <option value="Plant Growth Booster">Plant Growth Booster</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            {/* Image Container with Aspect Ratio */}
            <div className="w-full bg-gray-50 p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto max-h-64 object-contain"
                loading="lazy"
                onError={(e) => {
          (e.target as HTMLImageElement).src = '/Images/fallback-product.jpg';
                }}
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{product.description}</p>
              
              <div className="mt-auto space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-xl font-bold text-indigo-600">{product.price}</span>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=919822583262&text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto text-center transition-colors whitespace-nowrap"
                  >
                    Enquire Now
                  </a>
                </div>
                
                <div className="flex items-center text-xs text-gray-500">
                  <span className="truncate">{product.category}</span>
                  <span className="mx-2">•</span>
                  <span className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;