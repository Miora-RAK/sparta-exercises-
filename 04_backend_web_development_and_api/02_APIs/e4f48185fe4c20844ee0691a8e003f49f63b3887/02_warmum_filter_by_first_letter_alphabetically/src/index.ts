// code here
import { Customer } from "../data/customers";

export function filterByFirstLetter(customersList: Customer[], letter: string): Customer[] {
  return customersList.filter((customer) => customer.last_name.includes(letter));
}

export function filterByFirstLetterOrdered(customers: Customer[], letter: string): Customer[] {
  return filterByFirstLetter(customers, letter).sort(function (customerA, customerB) {
    if (customerA.last_name < customerB.last_name) {
      return -1;
    }
    if (customerA.last_name > customerB.last_name) {
      return 1;
    }
    return 0;
  });
}
