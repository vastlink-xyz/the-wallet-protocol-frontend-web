'use client'

import { Button } from "@/components/ui/button"

export function List() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>

      <div className="grid gap-6 " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Product Name</h2>
            <p className="text-gray-700 text-base mb-4">Short description of the product goes here.</p>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-full bg-warm-flame">Buy</Button>
              <Button
                variant={'outline'}
                className="w-full text-warm-foreground border-warm-foreground bg-white hover:bg-white hover:text-warm-foreground"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
