import { Suspense } from "react";
import { PrototypeSwitcher } from "./_components/PrototypeSwitcher";
import { projects } from "./_components/data";
import VariantA from "./_components/VariantA";
import VariantB from "./_components/VariantB";
import VariantC from "./_components/VariantC";

type Variant = "A" | "B" | "C";

interface PrototypePageProps {
  searchParams: Promise<{
    variant?: string;
    view?: string;
    project?: string;
  }>;
}

export default async function PrototypePage({ searchParams }: PrototypePageProps) {
  const params = await searchParams;
  const variant: Variant =
    params.variant === "B" || params.variant === "C" ? params.variant : "A";
  const view = params.view === "case" ? "case" : "home";
  const project = projects.find((item) => item.slug === params.project) ?? projects[0];

  return (
    <Suspense fallback={null}>
      {variant === "A" && <VariantA view={view} project={project} />}
      {variant === "B" && <VariantB view={view} project={project} />}
      {variant === "C" && <VariantC view={view} project={project} />}
      <PrototypeSwitcher variant={variant} view={view} project={project.slug} />
    </Suspense>
  );
}
