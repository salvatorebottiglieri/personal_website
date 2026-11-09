import { Suspense } from "react";
import { PrototypeSwitcher } from "./_components/PrototypeSwitcher";
import { projects } from "./_components/data";
import VariantA from "./_components/VariantA";
import VariantB from "./_components/VariantB";
import VariantC from "./_components/VariantC";
import VariantD from "./_components/VariantD";

type Variant = "A" | "B" | "C" | "D";

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
    params.variant === "A" || params.variant === "B" || params.variant === "C"
      ? params.variant
      : "D";
  const view = params.view === "case" ? "case" : "home";
  const project = projects.find((item) => item.slug === params.project) ?? projects[0];

  return (
    <Suspense fallback={null}>
      {variant === "A" && <VariantA view={view} project={project} />}
      {variant === "B" && <VariantB view={view} project={project} />}
      {variant === "C" && <VariantC view={view} project={project} />}
      {variant === "D" && <VariantD view={view} project={project} />}
      <PrototypeSwitcher variant={variant} view={view} project={project.slug} />
    </Suspense>
  );
}
