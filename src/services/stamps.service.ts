import prismaclient from "../utils/prismaclient";

export const createStamp = async (userId: string, placeId:string) => {
  try {
    const stamp = prismaclient.stamp.create({
      data: {
        userId: userId,
        placeId: placeId,
      },
    }); 
    return stamp;
  } catch (error) {
    throw error;
  }
}

export const getUserStamps = async (userId:string) => {
  return await prismaclient.stamp.findMany({
    where: {
      userId: userId,
    },
  });
};

export const getPlaceStamps = async (placeId:string) => {
  return await prismaclient.stamp.findMany({
    where: {
      placeId: placeId,
    },
  });
}

export const deleteStamp = async (id:string) => {
  return await prismaclient.stamp.delete({
    where: {
      id: id,
    },
  });
}




