
import Image from 'next/image';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Pixel Headphones',
    description: 'Immerse yourself in 8-bit sound.',
    imageUrl: 'https://picsum.photos/id/237/300/200',
    price: 29.99,
  },
  {
    id: 2,
    name: 'LED Torch',
    description: 'Brighten your path with retro style.',
    imageUrl: 'https://picsum.photos/id/42/300/200',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Arcade Bulbs',
    description: 'Light up your room with arcade colors.',
    imageUrl: 'https://picsum.photos/id/43/300/200',
    price: 9.99,
  },
  {
    id: 4,
    name: '8-Bit Flash Drive',
    description: 'Store your data in retro fashion.',
    imageUrl: 'https://picsum.photos/id/44/300/200',
    price: 14.99,
  },
  {
    id: 5,
    name: 'Retro Speakers',
    description: 'Blast your favorite tunes with vintage sound.',
    imageUrl: 'https://picsum.photos/id/45/300/200',
    price: 49.99,
  },
  {
    id: 6,
    name: 'Neon Mouse',
    description: 'Navigate with retro flair.',
    imageUrl: 'https://picsum.photos/id/46/300/200',
    price: 24.99,
  },
  {
    id: 7,
    name: 'Pixel Keyboard',
    description: 'Type in style with 8-bit keys.',
    imageUrl: 'https://picsum.photos/id/47/300/200',
    price: 59.99,
  },
  {
    id: 8,
    name: 'Retro Monitor',
    description: 'Experience visuals in retro resolution.',
    imageUrl: 'https://picsum.photos/id/48/300/200',
    price: 149.99,
  },
  {
    id: 9,
    name: 'Arcade Game Console',
    description: 'Play your favorite games in retro style.',
    imageUrl: 'https://picsum.photos/id/49/300/200',
    price: 79.99,
  },
  {
    id: 10,
    name: 'Pixel Art Printer',
    description: 'Print your pixel creations with retro precision.',
    imageUrl: 'https://picsum.photos/id/50/300/200',
    price: 99.99,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Betelgeuse Arcade Emporium</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-md mb-4"
              />
              <CardDescription className="text-center">{product.description}</CardDescription>
              <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
