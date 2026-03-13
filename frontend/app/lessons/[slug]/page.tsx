import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LessonSlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/logica-programacao-typescript/lessons/${slug}`);
}
