import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabins from "../features/cabins/AddCabin";
import CabinTableOperatins from "../features/cabins/CabinTableOperations";

function Cabins() {
  //------- DO THIS TO MAKE SURE DATA IS BEING FETCHED/////
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperatins />
      </Row>
      <Row>
        <CabinTable />

        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
