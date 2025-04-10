export default function SectionHeader({ title }: { title: string }) {
  return (
    <h4 className="text-4xl md:text-5xl dark:text-white font-bold mb-6 text-center">
      {title}
    </h4>
  );
}
