const TextTitle = ({ title, doc }: { title: string; doc?: string }) => {
  return (
    <div className="w-full text-center mt-10">
      <h3 className="text-4xl font-light py-20">{title}</h3>
      <p>{doc}</p>
    </div>
  );
};

export default TextTitle;
