'use client';

import Image from 'next/image';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

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
  {
    id: 11,
    name: 'Vaporwave Mug',
    description: 'Enjoy your coffee in retro-futuristic style.',
    imageUrl: 'https://picsum.photos/id/51/300/200',
    price: 12.99,
  },
  {
    id: 12,
    name: 'Floppy Disk Coasters',
    description: 'Protect your furniture with retro flair.',
    imageUrl: 'https://picsum.photos/id/52/300/200',
    price: 7.99,
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [contact, setContact] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
    setContact('');
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedProduct) return;

    const whatsappMessage = `I would like to order ${quantity} of ${selectedProduct.name}. My contact number is ${contact}.`;
    const whatsappURL = `https://wa.me/3764674458?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
    closeModal();
  };

  return (
    <div>
      <nav className="bg-secondary p-4 text-foreground">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-accent">About Us</a></li>
          <li><a href="#products" className="hover:text-accent">Products</a></li>
          <li><a href="#what-we-do" className="hover:text-accent">What We Do</a></li>
        </ul>
      </nav>

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Betelgeuse Arcade Emporium</h1>

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>We are dedicated to bringing you the best retro-themed products. Our goal is to provide a unique and nostalgic shopping experience.</p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
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
                  <Button onClick={() => openModal(product)}>Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="what-we-do" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p>We source high-quality retro products and deliver them to your doorstep. Our team ensures that every product meets our standards.</p>
        </section>
      </div>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => {if (!open) closeModal()}}>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              Enter the quantity and your contact information to place your order.
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="quantity" className="text-right">
                  Quantity
                </label>
                <Input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="contact" className="text-right">
                  WhatsApp Number
                </label>
                <Input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={handleContactChange}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <Button onClick={handleSubmit}>
            Place Order via WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
