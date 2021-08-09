export default function Info({ filtered, appointments }) {
  return (
    <div className="bg-gray-100 my-4 p-2">
      Showing {filtered} of ({appointments})
    </div>
  );
}
