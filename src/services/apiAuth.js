import supabase from "../utils/supabase";

export async function signup({ fullname, email, password }) {
  // try {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname: fullname,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error("Signup error details:", error);
    throw new Error(error.message);
  }

  console.log("Signup successful:", data);
  return data;
  // } catch (error) {
  //   console.error("Error during signup:", error.message);
  //   throw error;
  // }
}

export async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullname, avatar }) {
  //1.update password
  let updateData;
  if (password) updateData = { password };
  if (fullname) updateData = { data: { fullname } };
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;
}
