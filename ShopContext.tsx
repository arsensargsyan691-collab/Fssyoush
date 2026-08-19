import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { CartItem, Product } from "../types";

type Ctx={cart:CartItem[]; favorites:number[]; addToCart:(p:Product)=>void; removeFromCart:(id:number)=>void; setQty:(id:number,q:number)=>void; toggleFavorite:(id:number)=>void; cartCount:number; cartTotal:number};
const ShopContext=createContext<Ctx|null>(null);
export function ShopProvider({children}:{children:ReactNode}){
 const [cart,setCart]=useState<CartItem[]>(()=>JSON.parse(localStorage.getItem("fssyoush-cart")||"[]"));
 const [favorites,setFavorites]=useState<number[]>(()=>JSON.parse(localStorage.getItem("fssyoush-fav")||"[]"));
 useEffect(()=>localStorage.setItem("fssyoush-cart",JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem("fssyoush-fav",JSON.stringify(favorites)),[favorites]);
 const addToCart=(p:Product)=>setCart(c=>{const x=c.find(i=>i.product.id===p.id);return x?c.map(i=>i.product.id===p.id?{...i,quantity:i.quantity+1}:i):[...c,{product:p,quantity:1}]});
 const removeFromCart=(id:number)=>setCart(c=>c.filter(i=>i.product.id!==id));
 const setQty=(id:number,q:number)=>setCart(c=>q<1?c.filter(i=>i.product.id!==id):c.map(i=>i.product.id===id?{...i,quantity:q}:i));
 const toggleFavorite=(id:number)=>setFavorites(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id]);
 const cartCount=cart.reduce((s,i)=>s+i.quantity,0),cartTotal=cart.reduce((s,i)=>s+i.product.price*i.quantity,0);
 return <ShopContext.Provider value={{cart,favorites,addToCart,removeFromCart,setQty,toggleFavorite,cartCount,cartTotal}}>{children}</ShopContext.Provider>
}
export const useShop=()=>{const c=useContext(ShopContext);if(!c)throw Error("ShopProvider missing");return c};