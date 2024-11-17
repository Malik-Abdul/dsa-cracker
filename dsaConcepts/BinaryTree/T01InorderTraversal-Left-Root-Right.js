// Inorder traversal is a type of depth-first traversal for binary trees, where you visit the left subtree first, then the root node, and finally the right subtree. Here's an example implementation in JavaScript:

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // Example binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

function inorderTraversal(node) {
  if (node == null) {
    return;
  }
  inorderTraversal(node.left);
  console.log(node.value);
  inorderTraversal(node.right);
}

console.log("inorder Traversal");
inorderTraversal(root);

// // Example binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
//   / \
//  7   8

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.left.left = new TreeNode(7);
root1.left.left.right = new TreeNode(8);
root1.left.right = new TreeNode(5);
root1.right.right = new TreeNode(6);

console.log("inorder Traversal 7 8");
inorderTraversal(root1);

// // Example binary tree:
//          1
//         /   \
//        2      3
//       /  \      \
//     4      5     6
//   / \      / \
//  7   8     9   10

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.left.left = new TreeNode(7);
root2.left.left.right = new TreeNode(8);
root2.left.right = new TreeNode(5);
root2.left.right.left = new TreeNode(9);
root2.left.right.right = new TreeNode(10);
root2.right.right = new TreeNode(6);

console.log("inorder Traversal 7 8");
inorderTraversal(root2);
