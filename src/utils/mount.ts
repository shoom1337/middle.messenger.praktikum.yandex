import Block from "../components/block";
function mount(query: string, block: Block): Element | null {
  const root = document.querySelector(query);
  root?.appendChild(block.getContent());
  return root;
}

export default mount;
