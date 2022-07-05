import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1 className="mb-3 text-2xl">Store</h1>
      <div className="flex gap-3 flex-wrap">
         {storeItems.map(item => (
             <StoreItem key={item.id} {...item}/>
         ))} 
      </div>
    </>
  );
}
