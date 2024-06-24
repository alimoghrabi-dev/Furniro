"use client";

import * as React from "react";
import { Check, ChevronsUpDown, SlidersHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const filters = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "alphabetical_order",
    label: "Alphabetical order",
  },
  {
    value: "highest_price",
    label: "Highest Price",
  },
  {
    value: "lowest_price",
    label: "Lowest Price",
  },
];

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <section className="w-full flex items-center justify-start bg-[#F9F1E7] py-4 px-28">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-[220px] bg-[#F9F1E7] rounded-none text-lg font-semibold flex items-center justify-center gap-1.5 ${
              value ? "text-base" : "text-lg"
            } text-dark border-none ring-0 outline-none hover:bg-[#F9F1E7]`}>
            <SlidersHorizontal className="w-5 h-5 text-dark mr-2" />
            {value
              ? filters.find((framework) => framework.value === value)?.label
              : `Filter`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandGroup className="shadow border border-dark border-opacity-10 bg-gray-100 rounded-md">
              {filters.map((framework) => (
                <CommandItem
                  className="text-dark transition-all cursor-pointer text-sm py-2 font-medium"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </section>
  );
}
