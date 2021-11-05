import { useState } from "react";

import ItemNode from "../itemNode";

import './styles.css';

const ListNode = ({ data }) => {
  const [nodes, setNodes] = useState(data);

  const getNodeClassName = node => {
    if (node.visible || node.level === 0) return "visible";
    else return "closed";
  };

  const nodeArray = (selector, parent) => Array.from(parent.querySelectorAll(selector));

  const handleChecked = (node, element) => {
    const auxElement = element;
    const children = nodeArray('input', element.parentNode.parentNode);
    let count = 0;
    
    node.checked = !node.checked;

    children.forEach(child => child.checked = node.checked);

    Object.values(node.children).forEach(item => (item.checked = node.checked));
    
    while(element){
      const parent = (element.closest('ul').parentNode).querySelector('input');
      console.log(parent);
      
      count++;

      parent.indeterminate = node.checked;
      
      parent.checked = node.checked;		
      
      element = element !== parent ? parent : null;
    }
    
    if (count === 1) {
      auxElement.indeterminate =  false;
    }
  };

  const handleExpandCollapse = node => {
    const { children } = node;
    Object.values(children).forEach(item => (item.visible = !item.visible));
    node.expanded = !node.expanded;
    setNodes({ ...nodes });
  };

  const renderNodes = nodes => {
    return (
      Object.values(nodes).map(node => {
        if (Object.keys(node.children).length > 0) {
          return (
            <ul key={node.id} className={getNodeClassName(node)}>
              <ItemNode
                node={node}
                handleChecked={handleChecked}
                handleExpandCollapse={handleExpandCollapse}
              />
              {renderNodes(node.children)}
            </ul>
          );
        }
  
        return (
          <ul key={node.id} className={getNodeClassName(node)}>
            <ItemNode
              node={node}
              handleChecked={handleChecked}
              handleExpandCollapse={handleExpandCollapse}
            />
          </ul>
        );
      })
    )
  }

  return renderNodes(data);
};

export default ListNode;
