<script lang="ts">
  import { defineMeta } from "bookemoji";
  import { Story, Controls } from "bookemoji/components";
  import Button from "./Button.svelte";

  defineMeta<typeof Button>({
    component: Button,

    argTypes: {
      variant: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
      size: { type: "select", options: ["small", "medium", "large"] },
      disabled: { type: "boolean" },
      loading: { type: "boolean" },
      classes: { type: "text" },
      type: { type: "select", options: ["button", "submit", "reset"] },
      ariaLabel: { type: "text" },
      text: { type: "text" },
    },
  });
</script>

<Story
  of={Button}
  name="Basic"
  args={{ variant: "primary", size: "medium", text: "Primary Button" }}
/>

<Controls of={Button} story="Basic" />

<Story
  of={Button}
  name="Secondary"
  args={{ variant: "secondary", size: "medium", text: "Secondary Button" }}
/>
<Controls of={Button} story="Secondary" />

<Story
  of={Button}
  name="Tertiary"
  args={{ variant: "tertiary", size: "medium", text: "Tertiary Button" }}
/>

<Controls of={Button} story="Tertiary" />
