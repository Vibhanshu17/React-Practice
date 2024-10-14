const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    return {
      ...tree,
      items: tree.items.map((ch) => insertNode(ch, folderId, item, isFolder)),
    };
  }
  // TODO : deleteNode & renameNode functionality
  return { insertNode };
};

export default useTraverseTree;
