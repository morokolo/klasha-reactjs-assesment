const LinkItem = ({ items }) => {
  console.log("adasd", items);
  return (
    <div className="item">
      {items.map((a) => {
        return <p>aaa</p>;
      })}
    </div>
  );
};

export default LinkItem;
