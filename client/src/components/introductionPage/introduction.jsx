import "./introduction.css";
function Introduction() {
  const description = `As well as investing in the latest dental equipment and restorative\n
  materials, our approach to dental care is based on three core\n
  pillars of dental attention: Health, Function and Aesthetics.\n
  These areas overlap and each one affects your physical,\n
  functional and emotional well-being.`;
  return (
   <div className="wholepage">
     <div className="page">
      <div className="title">
        <t className="page-title-head">Ensuring top dental health now</t>
      </div>
      <div className="title2">
        <t className="page-title-head">and into the future</t>
      </div>
      <div className="description">
        <string className="description-text">
          {description}
        </string>
      </div>
      <div className="login">
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
   </div>
  );
}
export default Introduction;
