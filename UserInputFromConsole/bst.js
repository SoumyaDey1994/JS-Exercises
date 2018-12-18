/* Class Node */
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/* Class BST */
class BinarySearchTree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data < this.data && this.left)
            this.left.insert(data);
        else if(data < this.data)
            this.left = new BinarySearchTree(data);
        else if(data > this.data && this.right)
            this.right.insert(data);
        else if(data > this.data)
            this.right = new BinarySearchTree(data);
    }

    remove(data){
        if(data < this.data && this.left){
            this.left.remove(data);
        }else if(data > this.data && this.right){
            this.right.remove(data);
        }else{
            //Case 1 : leaf node
            if(!this.left && !this.right){
                return null;
            }else if(!this.left){
                this.data = this.right.data;
                this.right = null;
                // return;
            }else if(!this.right){
                this.data = this.left.data;
                this.left = null;
                // return;
            }else{
                let aux = this.right.findMinNode();
                this.data = aux.data;
                this.right = this.remove(aux.data);
                return;
            }
        }
    }

    findMinNode(){
        if(!this)
            return null;
        if(!this.left)
            return this;
        else
            return this.left.findMinNode();
    }
    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder(node){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }
}

let BST = new BinarySearchTree(15);
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

// BST.inOrder(BST);
// BST.preOrder(BST);
BST.postOrder(BST);

console.log('Min Node: '+BST.findMinNode().data);

BST.remove(5);
BST.postOrder(BST);