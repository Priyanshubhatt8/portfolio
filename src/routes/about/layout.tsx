import { component$,Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    
<Link href="/"><Slot/> </Link>
    </>
  );
});