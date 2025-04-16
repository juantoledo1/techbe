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
    name: 'Auriculares Pixelados',
    description: 'Sumérgete en un sonido de 8 bits.',
    imageUrl: 'https://picsum.photos/id/237/300/200',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Linterna LED Retro',
    description: 'Ilumina tu camino con estilo retro.',
    imageUrl: 'https://picsum.photos/id/42/300/200',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Bombillas Arcade',
    description: 'Ilumina tu habitación con colores arcade.',
    imageUrl: 'https://picsum.photos/id/43/300/200',
    price: 9.99,
  },
  {
    id: 4,
    name: 'Unidad Flash 8-Bit',
    description: 'Guarda tus datos a la moda retro.',
    imageUrl: 'https://picsum.photos/id/44/300/200',
    price: 14.99,
  },
  {
    id: 5,
    name: 'Altavoces Retro',
    description: 'Reproduce tus canciones favoritas con sonido vintage.',
    imageUrl: 'https://picsum.photos/id/45/300/200',
    price: 49.99,
  },
  {
    id: 6,
    name: 'Ratón Neón',
    description: 'Navega con estilo retro.',
    imageUrl: 'https://picsum.photos/id/46/300/200',
    price: 24.99,
  },
  {
    id: 7,
    name: 'Teclado Pixelado',
    description: 'Escribe con estilo con teclas de 8 bits.',
    imageUrl: 'https://picsum.photos/id/47/300/200',
    price: 59.99,
  },
  {
    id: 8,
    name: 'Monitor Retro',
    description: 'Experimenta visuales en resolución retro.',
    imageUrl: 'https://picsum.photos/id/48/300/200',
    price: 149.99,
  },
  {
    id: 9,
    name: 'Consola de Juegos Arcade',
    description: 'Juega tus juegos favoritos al estilo retro.',
    imageUrl: 'https://picsum.photos/id/49/300/200',
    price: 79.99,
  },
  {
    id: 10,
    name: 'Impresora de Arte Pixelado',
    description: 'Imprime tus creaciones de píxeles con precisión retro.',
    imageUrl: 'https://picsum.photos/id/50/300/200',
    price: 99.99,
  },
  {
    id: 11,
    name: 'Taza Vaporwave',
    description: 'Disfruta de tu café con estilo retrofuturista.',
    imageUrl: 'https://picsum.photos/id/51/300/200',
    price: 12.99,
  },
  {
    id: 12,
    name: 'Posavasos de Disquete',
    description: 'Protege tus muebles con estilo retro.',
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

    const whatsappMessage = `Quisiera ordenar ${quantity} de ${selectedProduct.name}. Mi número de contacto es ${contact}.`;
    const whatsappURL = `https://wa.me/3764674458?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
    closeModal();
  };

  return (
    <div>
      <nav className="bg-secondary p-4 text-foreground">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-accent">Sobre Nosotros</a></li>
          <li><a href="#products" className="hover:text-accent">Productos</a></li>
          <li><a href="#what-we-do" className="hover:text-accent">Qué Hacemos</a></li>
        </ul>
      </nav>

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Betelgeuse Arcade Emporium</h1>

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p>Betelgeuse Tech: Una Historia de Esfuerzo y Pasión Tecnológica</p>
          <p>Fundada en 2025 en el corazón de Posadas, Misiones, Argentina, Betelgeuse Tech nació de la visión de llevar tecnología accesible y de calidad a la vida cotidiana. Con una inversión inicial fruto de mucho esfuerzo y dedicación, esta pequeña empresa local se propuso abrirse camino en el competitivo mundo de la electrónica de consumo.</p>
          <p>Desde sus humildes comienzos, Betelgeuse Tech ha crecido con paso firme, impulsada por la pasión por la innovación y el compromiso con sus clientes. Si bien hoy en día la empresa es aún modesta en tamaño, su espíritu emprendedor y la mirada puesta en el futuro la impulsan a seguir expandiéndose y ofreciendo productos que faciliten y mejoren la vida de las personas.</p>
          <p>Con raíces bien plantadas en la vibrante tierra misionera, Betelgeuse Tech mira hacia adelante con la convicción de que, con trabajo arduo y una visión clara, el futuro depara grandes cosas.</p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Productos</h2>
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
                  <p className="text-lg font-semibold mt-2">Precio: ${product.price}</p>
                  <Button onClick={() => openModal(product)}>Ordenar Ahora</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="what-we-do" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Qué Hacemos</h2>
          <p>Lo Que Hacemos: Redescubriendo el Pasado con Calidad Presente</p>
          <p>En Betelgeuse Tech, nos apasiona rescatar la esencia de productos retro icónicos y ponerlos nuevamente al alcance de tus manos. Nos dedicamos a la búsqueda y selección minuciosa de artículos de alta calidad con un toque nostálgico, abarcando desde dispositivos electrónicos hasta accesorios que evocan épocas pasadas.</p>
          <p>Nuestro compromiso va más allá de la simple venta. Nuestro equipo especializado se encarga de inspeccionar y verificar cada producto para asegurar que cumpla con nuestros rigurosos estándares de calidad y funcionamiento. Queremos que cada artículo que llegue a tu hogar no solo te transporte a otra época, sino que también te ofrezca la confiabilidad y el rendimiento que esperas en la actualidad.</p>
          <p>En Betelgeuse Tech, nos esforzamos por ofrecerte una experiencia de compra cómoda y segura, entregando estos tesoros retro directamente en tu puerta. Creemos en el valor de la historia y en la belleza del diseño clásico, y trabajamos cada día para compartir esa pasión contigo.</p>
        </section>
      </div>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => {if (!open) closeModal()}}>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Detalles del Pedido</DialogTitle>
            <DialogDescription>
              Ingrese la cantidad y su información de contacto para realizar su pedido.
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="quantity" className="text-right">
                  Cantidad
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
                  Número de WhatsApp
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
            Realizar Pedido vía WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
