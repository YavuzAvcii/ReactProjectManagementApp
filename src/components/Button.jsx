export default function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-2 rounded-md bg-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-900 md:text-base"
      {...props}
    >
      {children}
    </button>
  );
}
