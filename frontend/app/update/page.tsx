import DtcUpdate from "@/components/dtc-update";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DtcUpdatePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-2xl p-6">
      <DtcUpdate id={Number(id)} />
    </main>
  );
}
