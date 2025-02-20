import { useState } from "react";
// import { getCabins } from "../services/apiCabins";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
// function AddCabin() {
//   return;
//  (
// <Modal>
//   <Modal.Open opens="cabin-form">
//     <Button>Add new cabin</Button>
//     <Modal.Window name="cabin-form">
//       <CreateCabinForm />
//     </Modal.Window>
//   </Modal.Open>

//   {/* <Modal.Open opens="table">
//     <Button>Show Table</Button>
//     <Modal.Window name="table">
//       <CreateCabinForm />
//     </Modal.Window>
//   </Modal.Open> */}
// </Modal>
// );
// }

export default AddCabin;
