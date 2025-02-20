import supabase from "../utils/supabase";

export async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  //   console.log(data);
  return data;
}
