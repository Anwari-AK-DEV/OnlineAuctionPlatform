import "./PagePlaceholder.css";

function PagePlaceholder({ title, description }) {
  return (
    <main className="page-placeholder">
      <div className="page-placeholder__badge">Page under construction</div>
      <h1 className="page-placeholder__title">{title}</h1>
      <p className="page-placeholder__desc">{description}</p>
    </main>
  );
}

export default PagePlaceholder;
