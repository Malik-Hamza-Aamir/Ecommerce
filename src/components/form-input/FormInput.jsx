import "./form-input.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && ( //if label exists the label will be rendered otherwise no label to be rendered
        <label
          className={`${
            //if label has lengthy value then the label will have a shrink class added to it
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
