import { sample_foods } from "../data";

export const getAll = async () => sample_foods

export const search = async (searchTerm) => {
  sample_foods.filter((item) => {
   return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}