const DoctorDesign = (props) => {
  return (
    <>
      <tr>
        <td>{props.nm}</td>
        <td>{props.hos}</td>
        <td>{props.spe}</td>
        <td>{props.con}</td>
      </tr>
    </>
  );
};

export default DoctorDesign;
