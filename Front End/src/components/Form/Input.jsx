export const Input = (props) => {
  const { type, placeholder, name, variant } = props;
  return (
    <input
      className={`text-sm border-2 border-black rounded w-full  text-slate-700 hover:border-green-800 ${variant}`}
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
};

export const TextArea = (props) => {
  const { name } = props;
  return (
    <textarea
      className="text-sm border-2 border-black rounded w-full  text-slate-700 hover:border-green-800 h-[150px] p-2"
      placeholder="Masukkan Deskripsi Laporan"
      name={name}
    ></textarea>
  );
};
