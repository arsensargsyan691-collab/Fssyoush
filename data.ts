import { Product } from "./types";

const imgs = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
];
const names = [
 "Смарт-часы F-One Pro","Кроссовки Urban Motion","Футболка Basic Premium","Парфюм Aura Night",
 "Куртка City Light","Наушники SoundMax","Смартфон Nova X","Камера Pocket Shot",
 "Рюкзак Daily Pack","Худи Street Core","Кофемашина Home Bar","Лампа Smart Glow",
 "Пылесос Clean Pro","Клавиатура Mech 75","Мышь Swift X","Монитор Vision 27",
 "Кошелёк Urban","Солнцезащитные очки Ray","Кроссовки Runner","Платье Soft Line",
 "Спортивный костюм Flex","Детский конструктор","Набор посуды Home","Автоорганайзер",
 "Зарядка Fast 65W","Пауэрбанк 20000","Колонка Beat Mini","Умная лампа RGB",
 "Массажёр Relax","Термокружка Travel"
];
const cats = ["Электроника","Обувь","Одежда","Красота","Дом","Аксессуары","Телефоны","Фото","Спорт","Детские товары"];
export const categories = cats;
export const products: Product[] = names.map((name,i)=>({
 id:i+1,name,category:cats[i%cats.length],price:Math.round((19+i*7.35)*100)/100,
 oldPrice:i%3===0?Math.round((29+i*8.1)*100)/100:undefined,rating:4+(i%10)/10,reviews:18+i*7,
 stock:5+(i*11)%80,image:imgs[i%imgs.length],
 description:`Качественный товар Fssyoush ${name}. Современный дизайн, практичные материалы и удобное использование каждый день.`,
 keywords:[name.toLowerCase(),cats[i%cats.length].toLowerCase(),"fssyoush"],
 colors:["Чёрный","Белый","Жёлтый"].slice(0,(i%3)+1),sizes:i%2?["S","M","L","XL"]:["Один размер"]
}));