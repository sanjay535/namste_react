export async function fetchUser2(){
     const user=await fetch('https://dummyjson.com/users/2');
     const jsonUser=await user.json();
     return jsonUser;
}