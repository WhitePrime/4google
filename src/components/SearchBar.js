export default function SearchBar(prop) {
  return (
    <input
      autoFocus
      required
      name="search"
      type="text"
      placeholder="Поиск"
      onChange={(evt) => prop.handleQuery(evt.target.value)}
    />
  );
}
