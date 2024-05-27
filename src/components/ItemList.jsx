/* eslint-disable react/prop-types */
// import React from 'react'

export default function ItemList({ items }) {
  console.log(items, "each section item");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items &&
        items.map((item) => {
          return (
            <div key={item.id} className="p-4">
              <h1 className="font-semibold text-md my-4">{item.displayName}</h1>
              {item.items.map((childItem) => {
                return (
                  <div key={childItem.id} className="flex justify-between">
                    <h1>{childItem.displayName}</h1>
                    <p>{childItem.qty}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
