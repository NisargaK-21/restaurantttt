export default function Button({ onClick, label, children, className, noBase = false }) {
  const base = "w-[150px] h-[50px] border-1 border-white rounded-2xl bg-[#282525] text-white font-semibold shadow-lg hover:bg-[#c2a676] hover:text-black transition duration-300 ease-in-out";
  const classes = noBase ? (className || "") : `${base} ${className ?? ""}`;
  return (
    <button onClick={onClick} className={classes}>
      {children ?? label}
    </button>
  );
}
