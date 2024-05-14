import { Plus } from "@phosphor-icons/react";
import { Button } from "./button";
import { Logo } from "./logo";

export function Header () {
  return (
    <div className="mx-36 pt-8 grid grid-cols-3">
        <Logo />
        <Button className="col-start-3 place-self-end w-fit">
          Novo lead
          <Plus className="size-4" />
        </Button>
      </div>
  )
}