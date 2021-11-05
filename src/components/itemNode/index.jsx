import Checkbox from "../checkbox";

import './styles.css';

import arrowImg from '../../assets/images/chevron.png';

const ItemNode = ({ node, handleChecked, handleExpandCollapse }) => (
  <li>
    <Checkbox
      label={node.name}
      name="node"
      id={node.id}
      onChange={(event) => handleChecked(node, event.target)}
    /> 
    {Object.keys(node.children).length !== 0 && (
      <span onClick={() => handleExpandCollapse(node)} className="button-expand">
        <img src={arrowImg} alt="seta para baixo" />
      </span>
    )}
  </li>
);

export default ItemNode;
