<script lang="ts">
  import type { LayoutData } from "./$types.js";
  import { Book, StoryList } from "bookemoji/components";
  export let data: LayoutData;
</script>

<Book base="/books" books={data.books}>
  <div class="book-layout">
    <div class="book-sidebar">
      <div class="brand-header">
        <h1 class="brand-title">Your Brand Here</h1>
      </div>

      <StoryList --border-color={"var(--surface-2)"} />
    </div>
    <div class="book-canvas">
      <slot />
    </div>
  </div>
</Book>

<style>
  .book-layout {
    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: 1rem;
    height: 100vh;
    overflow: hidden;
  }
  .book-sidebar {
    border-right: 1px solid var(--surface-2);
  }

  .brand-header {
    display: block;
    text-decoration: none;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid var(--surface-2);
  }

  .brand-header .brand-title {
    margin: 0;
  }

  .book-canvas {
    padding: 2rem;
  }
</style>
