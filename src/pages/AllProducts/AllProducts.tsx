import {  useGetAllProductsQuery} from "../../redux/features/products/productApi";

const AllProducts = () => {
     // Fetch all products
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  console.log({products});
  console.log({error});
    return (
        <div>
            <h1>Here will be all products page</h1>
        </div>
    );
};

export default AllProducts;