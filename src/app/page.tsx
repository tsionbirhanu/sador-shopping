

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Star, Truck, Gift, Clock, MapPin, Phone, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function SadorFashionStore() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const featuredProducts = [
    {
      id: 1,
      name: "Libre Perfume",
      price: "5,500 ETB",
      category: "Gift Shop",
      description: "Signature scent, elegant and lasting.",
      image: "/images/libre.jpg?height=400&width=400",
      inStock: true,
    },
    {
      id: 2,
      name: "Classic Tote Bag",
      price: "3,200 ETB",
      category: "Gift Shop",
      description: "Everyday essential with timeless design.",
      image: "/images/totebag.jpg?height=400&width=400",
      inStock: true,
    },
    {
      id: 3,
      name: "Women's Jacket",
      price: "4,800 ETB",
      category: "Clothing",
      description: "Stylish outerwear for every season.",
      image: "/images/womenjacket.jpg?height=400&width=400",
      inStock: false,
      preOrder: "15-17 days",
    },
    {
      id: 4,
      name: "Heels Collection",
      price: "2,900 ETB",
      category: "Gift Shop",
      description: "Elegant, versatile, and comfortable.",
      image: "/images/heels.jpg?height=400&width=400",
      inStock: true,
    },
    {
      id: 5,
      name: "Women's Top",
      price: "1,900 ETB",
      category: "Clothing",
      description: "Minimalist design with a chic touch.",
      image: "/images/womentop.jpg?height=400&width=400",
      inStock: false,
      preOrder: "15-17 days",
    },
    {
      id: 6,
      name: "Men's Jacket",
      price: "5,200 ETB",
      category: "Clothing",
      description: "Old money essentials with premium finish.",
      image: "/images/jacket.jpg?height=400&width=400",
      inStock: false,
      preOrder: "15-17 days",
    },
    {
      id: 7,
      name: "Luxury Watch",
      price: "7,500 ETB",
      category: "Gift Shop",
      description: "Timeless accessory for every occasion.",
      image: "/images/watch.jpg?height=400&width=400",
      inStock: true,
    },
    {
      id: 8,
      name: "Cardigans",
      price: "3,600 ETB",
      category: "Clothing",
      description: "Classic cardigans with timeless elegance.",
      image: "/images/cardigans.jpg?height=400&width=400",
      inStock: false,
      preOrder: "15-17 days",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white py-2 sm:py-3 px-2 sm:px-4 text-center shadow-lg">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm font-bold tracking-wide">
             FREE DELIVERY 5,000+ ETB • SPECIAL DISCOUNTS 3+ ITEMS 
          </p>
        </div>
      </div>

      <header className="border-b border-pink-200/50 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Sador</h1>
                <p className="text-xs text-pink-600 font-bold tracking-widest">FASHION STORE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link
                href="#shop"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-sm tracking-widest hover:scale-105"
              >
                SHOP
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-sm tracking-widest hover:scale-105"
              >
                ABOUT
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-sm tracking-widest hover:scale-105"
              >
                CONTACT
              </Link>
              <Link
                href="#gift-shop"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-sm tracking-widest hover:scale-105"
              >
                GIFT SHOP
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-pink-200/50 shadow-xl">
              <nav className="px-4 py-6 space-y-4">
                <Link
                  href="#shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-lg tracking-widest py-2 border-b border-pink-100"
                >
                  SHOP
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-lg tracking-widest py-2 border-b border-pink-100"
                >
                  ABOUT
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-lg tracking-widest py-2 border-b border-pink-100"
                >
                  CONTACT
                </Link>
                <Link
                  href="#gift-shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-pink-500 transition-all duration-300 font-bold text-lg tracking-widest py-2"
                >
                  GIFT SHOP
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero1.png?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tighter text-white drop-shadow-2xl">
                SADOR
              </h1>
              <div className="w-20 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto shadow-lg rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.2em] opacity-95 drop-shadow-lg text-yellow-300">
                STYLE MEETS EXPECTATION
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-6 sm:pt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 font-black px-8 sm:px-16 py-4 sm:py-6 text-lg sm:text-xl tracking-wide shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 border-0 rounded-full"
              >
                SHOP NOW
              </Button>
              <Link href="https://t.me/sador_onlineshop">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 sm:border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-black px-8 sm:px-16 py-4 sm:py-6 text-lg sm:text-xl tracking-wide bg-transparent backdrop-blur-sm transition-all duration-300 shadow-2xl rounded-full"
                >
                  JOIN TELEGRAM
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

       <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
                About Sador
              </h2>
              <div className="w-16 sm:w-24 h-1 sm:h-2 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto shadow-lg rounded-full"></div>
            </div>
          </div>

          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Your Premier Fashion Destination
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Sador Shopping & Fashion is your go-to online store for trendy, high-quality clothing and unique gift
                items.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                From stylish outfits to elegant perfumes, bags, and accessories, we bring you products that match your
                style and personality.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-8 sm:p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto">
              <p className="text-white font-black text-xl sm:text-2xl leading-relaxed">
                Our goal is to make shopping easy, affordable, and exciting for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="shop" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
                Featured Collection
              </h2>
              <div className="w-16 sm:w-24 h-1 sm:h-2 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto shadow-lg rounded-full"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover our curated selection of premium fashion items and luxury accessories
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <Card className="border-0 bg-gradient-to-br from-pink-100 to-pink-50 shadow-2xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">Gift Shop Items</h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Products are available on hand for immediate delivery
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-orange-100 to-orange-50 shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">Clothing Store</h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Pre-order items with 15-17 days delivery time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white overflow-hidden hover:scale-105 hover:-translate-y-2 rounded-3xl"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={500} 
                    height={320} 
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={true} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-pink-500/40 transition-all duration-300"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    {product.inStock ? (
                      <Badge className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg rounded-full">
                        IN STOCK
                      </Badge>
                    ) : (
                      <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg rounded-full">
                        PRE-ORDER
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 border-2 border-pink-300 text-pink-600 rounded-full"
                    >
                      {product.category}
                    </Badge>
                  </div>
                  {!product.inStock && (
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Delivery: {product.preOrder}</p>
                  )}
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 font-black py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-pink-500/25 rounded-full">
                    {product.inStock ? "ADD TO CART" : "PRE-ORDER NOW"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
                Delivery & Offers
              </h2>
              <div className="w-16 sm:w-24 h-1 sm:h-2 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto shadow-lg rounded-full"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Convenient delivery options and exclusive deals for our valued customers
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 hover:scale-105 hover:-translate-y-2 rounded-3xl">
              <CardContent className="p-8 sm:p-10 lg:p-12 text-center space-y-6 sm:space-y-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Truck className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">Delivery Areas</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <span className="text-gray-700 font-bold text-base sm:text-lg">Megenagna</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <span className="text-gray-700 font-bold text-base sm:text-lg">CMC</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <span className="text-gray-700 font-bold text-base sm:text-lg">Ayat</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 hover:scale-105 hover:-translate-y-2 rounded-3xl">
              <CardContent className="p-8 sm:p-10 lg:p-12 text-center space-y-6 sm:space-y-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Gift className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">Free Delivery</h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Enjoy free delivery on all orders above 5,000 ETB
                  </p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg rounded-full">
                    No minimum for gift items
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 hover:scale-105 hover:-translate-y-2 rounded-3xl sm:col-span-2 lg:col-span-1">
              <CardContent className="p-8 sm:p-10 lg:p-12 text-center space-y-6 sm:space-y-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Star className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">Special Discounts</h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Get exclusive discounts when ordering 3 or more items
                  </p>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg rounded-full">
                    Up to 15% off
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
              Get in Touch
            </h2>
            <div className="w-16 sm:w-24 h-1 sm:h-2 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto shadow-lg rounded-full"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Connect with us through your preferred platform
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <Link href="https://t.me/sador_onlineshop" className="group">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:shadow-blue-500/50 transition-all duration-300 shadow-xl">
                    <span className="text-white font-black text-lg sm:text-2xl">T</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Telegram</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-semibold">@sador_onlineshop</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://instagram.com/sador_shopping" className="group">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl">
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:shadow-pink-500/50 transition-all duration-300 shadow-xl">
                    <span className="text-white font-black text-lg sm:text-2xl">IG</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Instagram</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-semibold">@sador_shopping</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://tiktok.com/@sador.onlineshop" className="group">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl">
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:shadow-purple-500/50 transition-all duration-300 shadow-xl">
                    <span className="text-white font-black text-lg sm:text-2xl">TT</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">TikTok</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-semibold">@sador.onlineshop</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="mailto:sadorshopping@gmail.com" className="group">
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl">
                <CardContent className="p-6 sm:p-7 lg:p-8 text-center space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:shadow-orange-500/50 transition-all duration-300 shadow-xl">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 sm:mb-2">Email</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold break-all leading-tight">
                      sadorshopping@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-gray-700 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 inline-flex shadow-xl border border-green-200">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            <span className="font-bold text-base sm:text-lg">Call us: 0922796624</span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black">Sador</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-semibold">Fashion Store</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Style Meets Expectation - Your destination for premium fashion and luxury accessories.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-black">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link
                  href="#shop"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Shop
                </Link>
                <Link
                  href="#about"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Contact
                </Link>
                <Link
                  href="#gift-shop"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Gift Shop
                </Link>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-black">Follow Us</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link
                  href="https://t.me/sador_onlineshop"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Telegram
                </Link>
                <Link
                  href="https://instagram.com/sador_shopping"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Instagram
                </Link>
                <Link
                  href="https://tiktok.com/@sador.onlineshop"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  TikTok
                </Link>
                <Link
                  href="mailto:sadorshopping@gmail.com"
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm sm:text-base font-semibold"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 Sador Fashion Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
