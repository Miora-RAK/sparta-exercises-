// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

function getEmails(customerList: CustomerType[]): string[] {
  return customerList.map((customer) => customer.email);
}
export { getEmails };
