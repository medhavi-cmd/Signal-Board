import ItemCard from "./ItemCard";

export default function ItemList({ items, onSelect }) {
  return (
    <div className="signal-grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onClick={onSelect} />
      ))}
    </div>
  );
}