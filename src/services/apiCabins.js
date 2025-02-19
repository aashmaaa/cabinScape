import supabase from "../utils/supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

// export async function createCabin(newCabin) {
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([
//       newCabin,

//       // {
//       //   regularPrice: "regularPrice",
//       //   name: "name",
//       //   maxCapacity: "maxCapacity",
//       //   discount: "discount",
//       //   description: "description",
//       // },
//     ])
//     .select();

//   if (error) {
//     console.log(error);
//     throw new Error("Cabins could not be created");
//   }
//   return data;
// }

export async function createEditCabin(newCabin, id) {
  let query = supabase.from("cabins");

  if (!id)
    query = query.insert([
      { ...newCabin },

      // {
      //   regularPrice: "regularPrice",
      //   name: "name",
      //   maxCapacity: "maxCapacity",
      //   discount: "discount",
      //   description: "description",
      // },
    ]);

  if (id)
    query = query
      .update({ ...newCabin })
      .eq("id", id)
      .select();
  const { data, error } = await query.select();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }

  return data;
}
