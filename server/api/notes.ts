import { serverSupabaseUser } from "#supabase/server";

const data = [
  { id: 0, email: "miguel.cassimiro99@gmail.com", content: "My note 1" },
  { id: 1, email: "miguel.cassimiro99@gmail.com", content: "My note 2" },
  { id: 2, email: "miguel.cassimiro99@gmail.com", content: "My note 3" },
  { id: 3, email: "mikassy99@gmail.com", content: "New note for email 1" },
  { id: 4, email: "mikassy99@gmail.com", content: "New note for email 2" }
];

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)

  if(!user) createError({ statusCode: 401, message: 'Unauthorized'})

  return data.filter((note) => note.email === user.email);
})