export function ButtonCorrousel({ prevSlide, nextSlide }) {
  return (
    <div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent px-2"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-2"
      >
        →
      </button>
    </div>
  );
}
