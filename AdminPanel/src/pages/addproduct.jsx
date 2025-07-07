const AddProduct = () => {
  return (
    <div>
      <h2>Add New Product</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
