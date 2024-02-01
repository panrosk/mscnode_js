import prismaclient from "../utils/prismaclient";

export async function createPlace(name:string,address:string) {
  try {
    const place = await prismaclient.place.create({
      data: {
        name: name,
        address: address
      }
    })
    return place;
  } catch (error) {
    throw error;
  }

}

export async function getPlaces(id:string) {
  try {
    const places = await prismaclient.place.findUnique({
      where: {
        id,
      }
    })
    return places;
  } catch (error) {
    throw error;
  }
}

export async function getAllPlaces() {
  try {
    const places = await prismaclient.place.findMany();
    return places;
  } catch (error) {
    throw error;
  }
}
