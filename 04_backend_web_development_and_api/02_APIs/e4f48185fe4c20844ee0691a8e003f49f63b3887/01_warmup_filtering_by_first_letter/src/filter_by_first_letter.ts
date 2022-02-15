import { Customer } from "../data/customers";

export function filterByFirstLetter(customersList: Customer[], letter: string) {
  // Code here
  return customersList.filter((customer) => customer.last_name.includes(letter));
}
