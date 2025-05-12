import Image from "next/image"
import {
  Plus,
  Tag,
  Package,
  ShoppingCart,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SignedCollectibles() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Signed Collectibles</h2>
          <p className="text-zinc-400">Manage your autographed merchandise and memorabilia</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Collectible
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Signed Vinyl Record",
            description: "Limited edition vinyl with hand-signed cover art",
            price: "₹4,999",
            stock: 25,
            sold: 15,
            status: "In Stock",
            image: "/images/collectible-1.jpg",
          },
          {
            title: "Autographed Tour Poster",
            description: "Official tour poster with signature and personalization",
            price: "₹2,499",
            stock: 50,
            sold: 32,
            status: "In Stock",
            image: "/images/collectible-2.jpg",
          },
          {
            title: "Signed Acoustic Guitar",
            description: "Acoustic guitar used during studio sessions with signature",
            price: "₹24,999",
            stock: 5,
            sold: 3,
            status: "In Stock",
            image: "/images/collectible-3.jpg",
          },
          {
            title: "Handwritten Lyrics",
            description: "Original handwritten lyrics for hit single",
            price: "₹7,999",
            stock: 10,
            sold: 10,
            status: "Sold Out",
            image: "/images/collectible-4.jpg",
          },
          {
            title: "Signed Merchandise Bundle",
            description: "T-shirt, cap, and wristband with signatures",
            price: "₹3,499",
            stock: 100,
            sold: 67,
            status: "In Stock",
            image: "/images/collectible-5.jpg",
          },
        ].map((item, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={item.image || "/placeholder.svg?height=400&width=400"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className={item.status === "In Stock" ? "bg-green-600" : "bg-zinc-600"}>{item.status}</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-2 text-zinc-400" />
                    <span>{item.price}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Authenticated</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Package className="h-4 w-4 mr-2 text-zinc-400" />
                  <span>
                    {item.status === "In Stock"
                      ? `${item.stock - item.sold} of ${item.stock} remaining`
                      : "Out of stock"}
                  </span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2 mt-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(item.sold / item.stock) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-zinc-400 text-right">{item.sold} sold</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <ShoppingCart className="mr-2 h-4 w-4" /> Manage
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center">
                    <Edit className="h-4 w-4 mr-2" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" /> View Listing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" /> Sales Analytics
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center text-red-500">
                    <Trash2 className="h-4 w-4 mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Authentication Process</h3>
        <p className="mb-4 text-zinc-300">
          All collectibles sold on the platform include a certificate of authenticity and are verified through our
          secure authentication process.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="rounded-full bg-primary/20 p-3 w-12 h-12 flex items-center justify-center mb-3">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h4 className="font-medium mb-2">Signature Verification</h4>
            <p className="text-sm text-zinc-400">
              Each item is signed in the presence of an OYR representative who verifies the authenticity of the
              signature.
            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="rounded-full bg-primary/20 p-3 w-12 h-12 flex items-center justify-center mb-3">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h4 className="font-medium mb-2">Digital Certificate</h4>
            <p className="text-sm text-zinc-400">
              A blockchain-based certificate of authenticity is created for each item, providing an immutable record of
              ownership.
            </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="rounded-full bg-primary/20 p-3 w-12 h-12 flex items-center justify-center mb-3">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h4 className="font-medium mb-2">Secure Shipping</h4>
            <p className="text-sm text-zinc-400">
              Items are carefully packaged and shipped with tracking and insurance to ensure safe delivery to fans.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
