import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 py-2">
      <div className="min-w-[150px] flex gap-4 bg-gray-700 text-white rounded items-center hover:scale-105 transition-transform duration-300">
        <Link href="/" className="text-xl p-2">
          Vice
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-gray-900">Каталог</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/">Смартфоны и Фототехника</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">Комплектующие для ПК</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">ТВ, Консоли, Аудио</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">ПК, Ноутбуки, Периферия</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-6 px-4 py-2">
        <Link
          href="favorite"
          className="flex flex-col items-center text-gray-700"
        >
          <Heart
            color="#374151"
            className="hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <p className="text-xs mt-1 leading-none">Избранное</p>
        </Link>
        <Link href="cart" className="flex flex-col items-center text-gray-700">
          <ShoppingCart
            color="#374151"
            className="hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <p className="text-xs mt-1 leading-none">Корзина</p>
        </Link>
        <Link href="users" className="flex flex-col items-center text-gray-700">
          <Avatar
            className="bg-gray-700 hover:scale-110 transition-transform duration-300"
            style={{ width: 24, height: 24 }}
          />
          <p className="text-xs mt-1 leading-none">Профиль</p>
        </Link>
      </div>
    </header>
  );
}
