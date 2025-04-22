"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useSelectedGenderStore } from "../../Hooks/useGendersStore";
import usePatientDataStore from "@/app/Hooks/usePatientDataStore";

// Giả lập dữ liệu gender
const genders = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export default function GenderDropDown() {
  const [open, setOpen] = React.useState(false);

  const { selectedGenders, setSelectedGenders } = useSelectedGenderStore();
  const { patients } = usePatientDataStore();

  const toggleGenders = (value: string) => {
    if (selectedGenders.includes(value)) {
      setSelectedGenders(selectedGenders.filter((v) => v !== value));
    } else {
      setSelectedGenders([...selectedGenders, value]);
    }
  };

  const renderGenderNumbers = (gender: string) => {
    if (!patients || patients.length === 0) return 0;
    return patients.filter((p) => p.gender === gender).length;
  };

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            <LuGitPullRequestDraft />
            Genders
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-44 poppins"
          side="bottom"
          align="end"
        >
          <Command className="p-1">
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No gender found.
              </CommandEmpty>
              <CommandGroup>
  {genders.map((gender) => (
    <CommandItem
      onSelect={() => toggleGenders(gender.value)}
      className="h-9"
      key={gender.value}
    >
      <Checkbox
        checked={selectedGenders.includes(gender.value)}
        className="size-4 rounded-[4px]"
      />
      <div className="flex items-center justify-between w-full gap-1 p-1 rounded-lg px-3 text-[14px]">
        <span>{gender.label}</span>
        <span className="font-bold text-primary">
          {renderGenderNumbers(gender.value)}
        </span>
      </div>
    </CommandItem>
  ))}
</CommandGroup>
              <Separator className="my-1" />
              <CommandGroup className="flex items-center justify-between px-3 py-2 text-sm text-slate-500">
                <span>Selected</span>
                <span className="font-bold text-primary">
                  {selectedGenders.length}
                </span>
              </CommandGroup>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5"></CommandEmpty>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
