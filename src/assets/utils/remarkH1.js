// plugins/remark-remove-heading.js
export default function remarkRemoveHeading({ depth = 1 } = {}) {
  return function transformer(tree) {
    tree.children = tree.children.filter((node) => {
      return !(node.type === 'heading' && node.depth === depth);
    });
  };
}
