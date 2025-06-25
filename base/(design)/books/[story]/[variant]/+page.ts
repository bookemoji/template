import type { EntryGenerator, PageLoad } from "./$types.js";
import { variantLayoutLoad, generateVariantEntries } from "bookemoji";

export const load: PageLoad = variantLayoutLoad;

export const entries: EntryGenerator = generateVariantEntries();
