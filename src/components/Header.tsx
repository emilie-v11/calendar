export default function Header({ title }: { title: string }) {
  return (
    <header className="text-3xl font-bold text-center py-4">
      <h1>{title}</h1>
    </header>
  );
}
