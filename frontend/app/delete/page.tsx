import DtcDelete from "@/components/dtc-delete";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DtcDeletePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-2xl p-6">
      <DtcDelete id={Number(id)} />
    </main>
  );
}
