import prismaclient from "../utils/prismaclient";
import { createJWT,hashPassword ,comparePasswords} from "../utils/auth"; 


export  async function createUser(username: string, password: string,email:string) {
    const hash = await hashPassword(password);
    try {
        const user = await prismaclient.user.create({
            data: {
                username,
                email,
                password: hash

            }
        });
        const token = createJWT(user);
       return { user, token }
    }
    catch (e:any) {
      if (e.code === 'P2002') {
        return { error: 'P2002',target:e.meta.target }
      }
    }
}

export async function signInUser(username: string, password: string) {

  const user = await prismaclient.user.findUnique({
    where:{
      username
    }
  });

  if (!user) {
    throw new Error('User does not exist'); 
  }

  const valid = await comparePasswords(password, user.password==null?'':user.password);

  if (!valid) {
    throw new Error('Password is not valid');  
  }

  const token = createJWT(user);
  return { user, token }

}
