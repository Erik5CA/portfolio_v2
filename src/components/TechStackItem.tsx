const TechStackItem = ({ item }: { item: { name: string; logo: string } }) => {
  return (
    <div className="flex gap-5 items-center rounded-md  p-4 shadow-md shadow-black-500 bg-black-200">
      <div className="w-fit rounded-lg">
        <img src={item.logo} alt="logo" className="size-8 shadow-sm" />
      </div>

      <div className="flex-col gap-5 text-white-600 hidden sm:flex">
        <p className="text-white text-xl font-semibold">{item.name}</p>
      </div>
    </div>
  );
};

export default TechStackItem;
