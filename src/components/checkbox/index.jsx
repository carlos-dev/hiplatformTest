import './styles.css';

const Checkbox = props => {
  const { label, id, ...rest } = props;
  return (
    <>
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;
