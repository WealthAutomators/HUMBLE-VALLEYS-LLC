"use client";

import { Navbar } from "@/components/navbar/navbar";
import { SearchBar } from "@/components/navbar/search-bar";
import { company } from "@/data/company";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-ivory/95 shadow-none backdrop-blur-sm">
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6 lg:px-8">
          <p className="truncate">Free shipping on orders over ${FREE_SHIPPING_THRESHOLD}</p>
          <p className="hidden truncate sm:block">
            {company.address.city}, {company.address.state}
          </p>
        </div>
      </div>
      <Navbar />
      <SearchBar />
    </div>
  );
}
