import { formatCurrency } from "../utilities/formatCurrency";
import { useState } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const resetQuantity = () => {
    setQuantity(0);
  };
  return (
    <div className="flex flex-col h-64 w-full sm:w-90 lg:w-60 md:w-80 bg-white border border-gray-200 text-gray-900">
      <div className="w-full h-1/2 mb-2">
        <img className="w-full h-full object-cover" src={imgUrl} alt={imgUrl} />
      </div>
      <div className="flex-1 mb-4 px-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-lg font-bold ">{name}</p>
          <p className="text-gray-500 text-sm">{formatCurrency(price)}</p>
        </div>
        {quantity > 0 ? (
          <div>
            <div className="flex justify-center items-center space-x-2 mb-2">
              <button
                onClick={() => decrementQuantity()}
                className="bg-blue-500 py-1 px-2 rounded-md text-white"
              >
                -
              </button>
              <p className="text-gray-500 text-md">
                <span className="font-bold text-gray-900 text-lg">
                  {quantity}
                </span>{" "}
                in cart
              </p>
              <button
                onClick={() => incrementQuantity()}
                className="bg-blue-500 p-1 px-2 rounded-md text-white"
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => resetQuantity()}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              className="w-full bg-blue-500 py-2 text-white text-sm rounded-md"
              onClick={() => incrementQuantity()}
            >
              + Add To Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
