export default function FactoryTour({ videoId }) {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-black aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Factory Tour"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
