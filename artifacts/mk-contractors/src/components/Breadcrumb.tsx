import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-accent transition-colors" data-testid="breadcrumb-home">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-accent" />
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors" data-testid={`breadcrumb-${item.label}`}>
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page" data-testid={`breadcrumb-current-${item.label}`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
