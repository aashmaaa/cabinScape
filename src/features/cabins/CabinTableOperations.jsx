import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperatins() {
  return (
    <TableOperations>
      <Filter filterField="discount" />
    </TableOperations>
  );
}
export default CabinTableOperatins;
