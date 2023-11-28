import AllProducts from "@/pages/components/AllProducts";
import { useSearch } from "@/context/SearchContext";

export default function Tables() {
  const { searchQuery } = useSearch();
  const tables = `/api/category?category=tables&search=${searchQuery}`;
  return (
    <>
      <AllProducts apiEndpoint={tables} />
    </>
  );
}
